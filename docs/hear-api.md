---
layout: hear-layout
title: HEAR API
---

Leaderboard results are computed using [heareval](https://github.com/neuralaudio/hear-eval-kit/), 
which requires that models follow a common API.

* Your model must be able to produce two kinds of embeddings:
    * **Timestamp-based embeddings**: return time-centered embeddings
        at regular intervals. You may select the time interval (hop-size) between adjacent embeddings, but we suggest that it is `<= 50ms` to handle an onset tolerance of `50ms` for music transcription evaluation.
    * **Scene embeddings**: return a single embedding for a entire audio clip.

To help you develop a model that follows the  common API, see the 
[HEAR validator](https://github.com/neuralaudio/hear-validator). 
We also provide a [baseline](https://github.com/neuralaudio/hear-baseline) using 
the HEAR API, for example purposes.

<hr />
```python
load_model(model_file_path: Str) -> Model
```
  * `model_file_path`: Load model checkpoint from this file path.
  * **Returns:**
    * `Model` - TensorFlow or PyTorch Module object

<hr />
```python
Model
```
A `Model` (pytorch or tensorflow 2.x) class instance must have the
following attributes:
  * `sample_rate`: Audio sample rate that your model expects. HEAR benchmark datasets are available at the following sample rates: `[16000, 22050, 32000, 44100, 48000]`.
  * `scene_embedding_size: int`: The dimensionality of the
      embedding returned from `get_scene_embeddings`.
  * `timestamp_embedding_size: int`: The dimensionality of the
      embedding returned from `get_timestamp_embeddings`.
      If you wish, this can be identical to `scene_embedding_size`.
<hr />

```python
get_timestamp_embeddings(
    audio: Tensor,
    model: Model,
) -> Tuple[Tensor, Tensor]
```
This function must return embeddings at regular intervals centered
at timestamps. The model must also return the corresponding timestamps,
in milliseconds. You are free to select the time interval between
adjacent embeddings (hop-size).  We suggest that it is `<= 50ms`
to handle a temporal tolerance of `50ms` for music transcription
tasks. You are welcome to extend the API with an optional hop-size,
however please note that `heareval` will use your default value

  * `audio`: `n_sounds x n_samples` of mono audio in the range `[-1,
    1]`.  All sounds in a batch will be padded/trimmed to the same length. 
  * `model`: Loaded `Model`.
  * **Returns:**
    * embedding: A `float32` `Tensor` with shape (`n_sounds,
        n_timestamps, model.timestamp_embedding_size`).
    * timestamps: A `float32` `Tensor` with shape (`n_sounds,
        n_timestamps). Centered timestamps in milliseconds corresponding
        to each embedding in the output.

<hr />

```python
get_scene_embeddings(
    audio: Tensor,
    model: Model,
) -> Tensor
```
This function returns a single embedding for each audio clip.
It will be called to produce embeddings used for evaluation
tasks such as classification that look at an entire audio clip. There 
are no restrictions on the method for summarization of the temporal
aspects of audio into a single embedding.
A baseline approach would be to take the mean of all timestamp
embeddings returned from `get_timestamp_embeddings`.

  * `audio`: `n_sounds x n_samples` of mono audio in the range `[-1, 1]`.
    All sounds in a batch will be padded/trimmed to the same length.
  * `model`: Loaded `Model`.
  * **Returns:**
    * embedding: A `float32` `Tensor` with shape (`n_sounds, model.scene_embedding_size`).


---
## Suggestions for Model Development
A primary goal of the HEAR benchmark is to promote the development of freely-available 
genera-purpose audio representation models. As such, we encourage models submitted 
to the benchmark leaderboard to be open-source, freely available, and easy-to-use. 
We have a list of suggestions for developing an audio embedding model that supports 
these aims, which are based on the [HEAR 2021 challenge rules](https://neuralaudio.ai/hear2021-rules.html).
<p></p>
**Freely-available:**
* Release your code as a pip3-installable package under an Apache-2.0  or
    compatible (BSD, MIT, etc) license.
* Release model weights under a [Creative Commons Attribution 4.0
    International
    License](https://creativecommons.org/licenses/by/4.0/legalcode), or
    compatible license.
<p></p>
**Easy-to-use:**
* Write your code in `Python >= 3.6` and use `PyTorch >= 1.7` or
    `Tensorflow >= 2.0`.
* Your model shuld be able to return embeddings (either in GPU or
    CPU memory) for up to 20 minutes of audio without excedding
    16GB of GPU memory. This memory constraint includes both model
    weights and embedding size.
<p></p>
**Common format:**
* Follow the common API, described in detail above.
* Your model should accept audio of arbitrary length under 20 minutes, as a tensor.
* Your model should work with audio at one of the following four common samples rates: 
    `[16000Hz, 22050Hz, 32000Hz, 44100Hz, 48000Hz]`.
    * Following the API, your model must expose which sample rate it expects as input as a class attribute.
    * Avoid in-model resampling of audio, which is computationally costly 
    however it is not expected to resample audio internally. 