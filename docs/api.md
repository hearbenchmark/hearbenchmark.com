---
layout: hear-layout
title: HEAR API
#date: 2021-05-09
---

## Summary

In the spirit of shared exchange, all participants must submit an
audio embedding model following a common API that is general-purpose,
open-source, and freely available to use.
A primary goal of this challenge is to encourage the development
of freely-available general-purpose audio representation models.
If you have any questions or concerns about the rules, we are happy
to help you. Please [email us](mailto:deep-at-neuralaudio.ai) if you
have any questions.

However, if you use HEAR 2021 datasets and do not follow the rules,
please [cite us](hear2021-pmlr.html) and indicate that work is not
compliant with HEAR 2021 rules.

To validate your entry follows the [common API](#common-api) prior
to submission, please run your entry with the [HEAR
Validator](https://github.com/neuralaudio/hear-validator).

We also provide a [baseline](https://github.com/neuralaudio/hear-baseline)
using the HEAR API, for example purposes.

<p></p>
**Freely-available:**
* You must release your code as a pip3-installable package under an Apache-2.0  or
    compatible (BSD, MIT, etc) license.
* Your model weights must be released under a [Creative Commons Attribution 4.0
    International
    License](https://creativecommons.org/licenses/by/4.0/legalcode), or
    compatible license.
* You are welcome to use whatever training data you like, provided you adhere to all other
    competition rules, and:
  * Any existing data marked as test may not be used for training.

<p></p>
**Easy-to-use:**
* Your code must be written in `Python >= 3.6` and use `PyTorch >= 1.7` or
    `Tensorflow >= 2.0`.
* Your model must be able to return embeddings (either in GPU or
    CPU memory) for up to 20 minutes of audio without excedding
    16GB of GPU memory. This memory constraint includes both model
    weights and embedding size.

<p></p>
**Common format:**
* Your code must follow a [common API](#common-api), described in
detail in the section below.
* Your model must accept audio of arbitrary length under 20 minutes,
    as a tensor.
* Your model must work with audio at one of the following four samples rates: 
    `[16000Hz, 22050Hz, 44100Hz, 48000Hz]`.
    * Your model must expose which
    sample rate it expects as input as a class attribute (see API details below), 
    however it is not expected to resample audio internally. 
    * To avoid costly in-model resampling, we will *a priori* resample
    audio to all four sample rates for all tasks. (We will use
    ffmpeg---robust, cross platform, good format support, etc.---as
    the main command line tool for resampling, but with high quality
    [resampling from
    sox](https://trac.ffmpeg.org/wiki/FFmpeg%20and%20the%20SoX%20Resampler)).

* Your API must be able to produce two kinds of embeddings (described [below](#common-api)):
    * **Timestamp-based embeddings**: return time-centered embeddings
        at regular intervals.
        You may select the time interval (hop-size) between adjacent
        embeddings, but we suggest that it is `<= 50ms` to handle
        an onset tolerance of `50ms` for music transcription evaluation.
    * **Scene embeddings**: return a single embedding for a entire audio clip.

<p></p>
**Sharing:**
* We will provide you with a dev-kit including the data for the
open tasks, and a script for performing evaluation.
* This dev-kit will also include a baseline embedding model in a
standardized API (see below).

<p></p>
## Common API
Your submission must implement the following API:

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
  * `sample_rate`: Audio sample rate that your model expects. Must be one of
        `[16000, 22050, 44100, 48000]`.
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
however please note that in HEAR 2021 we will use your default value
for all evaluation tasks.

  * `audio`: `n_sounds x n_samples` of mono audio in the range `[-1,
    1]`.  All sounds in a batch will be padded/trimmed to the same length. 
    <!-- This doesn’t
    preclude people from using the API for corpora of variable-length
    sounds; merely we don’t implement that as a core feature. It
    could be a wrapper function added later. -->
  * `model`: Loaded `Model`.
<!--   * `tolerance`: (Optional) Tolerance of the event detection, in
    milliseconds. Teams may choose to vary their internal hop-size 
    as a function of evaluation timing tolerance. For sound event detection, 
    this is typically 200ms (i.e., onsets that are identified within 
    200ms are considered to be hits). For music transcription, this is typically 50ms.
    Participants can disregard this optional parameter and use a
    constant hop size (< 50 ms suggested) for all timestamp-based
    predictions. -->
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
tasks such as classification that look at an entire audio clip.
Participants are free to implement summarization of the temporal
aspects of audio into a single embedding in whatever way they wish.
A baseline approach would be to take the mean of all timestamp
embeddings returned from `get_timestamp_embeddings`.

  * `audio`: `n_sounds x n_samples` of mono audio in the range `[-1, 1]`.
    All sounds in a batch will be padded/trimmed to the same length.
  * `model`: Loaded `Model`.
  * **Returns:**
    * embedding: A `float32` `Tensor` with shape (`n_sounds, model.scene_embedding_size`).

<!-- <hr />

```python
pairwise_distance(emb1: Tensor, emb2: Tensor) -> Tensor
```
  * `emb1`: `Tensor` of shape `(n_samples1, emb_dimension)`
  * `emb2`: `Tensor` of shape `(n_samples2, emb_dimension)`
  * **Returns:** Pairwise distance tensor `(n_samples1, n_samples2)`
  * *Note*:
    * If this method is not defined, we will use unnormalized
    l1. But you are welcome to override this implement it if you would like to define a
    different distance metric for your embeddings.
    * If you really want to use a divergence and not a distance, and have a
    compelling argument for why, please contact us.
    * You can assume that all input embeddings will have been converted to floats
    already.
<hr /> -->

<hr>

***A note about pip installable packages.*** The organizers of the
HEAR 2021 challenge feel strongly about general purpose models that
are easy to access and easy to use. As such, we have fairly strict
requirements for a pip installable package. We realize that this
may pose a challenge to some entrants.  If this criterion poses an
issue for you, the HEAR team would be glad to help. Please reach
out to us by [e-mail](mailto:deep-at-neuralaudio.ai).

Code must hosted in a publicly facing GitHub repository. We will
clone your repository and install it using a 
[local source tree pip install](https://packaging.python.org/tutorials/installing-packages/#installing-from-a-local-src-tree)
i.e., `python3 -m pip install <repo-path>`. Your
package does not need to be uploaded to PyPI. Your model weights
must also be available to download at a publicly accessible URL.
Please include a README on your GitHub repository that contains
additional important information for running your submission including
the CUDA and cuDNN versions.

Make sure that your submission follows the [common API](#common-api)
specified above. To help with this, we have developed a tool for participants that
validates a submission against the API:
[hear-validator](https://github.com/neuralaudio/hear-validator).

If you have any questions or are concerned about hosting your
submission publicly, please do not hesitate to [contact competition
organizers](mailto:deep-at-neuralaudio.ai).
