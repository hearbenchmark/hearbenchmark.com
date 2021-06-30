---
layout: hear2021
title: HEAR 2021 NeurIPS Challenge
subtitle: Holistic Evaluation of Audio Representations
author: Joseph Turian and Jordie Shier and Bhiksha Raj and Björn W. Schuller and Christian James Steinmetz and Colin Malloy and George Tzanetakis and Gissel Velarde and Kirk McNally and Max Henry and Nicolas Pinto and Yonatan Bisk and Gyanendra Das and Humair Raj Khan and Camille Noufi and Dorien Herremans and Jesse Engel and Justin Salamon and Philippe Esling and Pranay Manocha and Shinji Watanabe and Zeyu Jin
#date: 2021-06-29
abstract: >
  Humans can infer a wide range of properties from a perceived
  sound, such as information about the source (e.g. what generated
  the sound? where is it coming from?), the information the sound
  conveys (this is a word that means X, this is a musical note in
  scale Y), and how it compares to other sounds (these two sounds
  come/don't come from the same source and are/aren't identical).
  Can any one learned representation do the same?
  <br><br>
  The aim of this challenge is to develop a general-purpose audio
  representation that provides a strong basis for learning in a
  wide variety of tasks and scenarios. HEAR 2021 challenges participants
  with the following questions: Is it possible to develop a single
  representation that models all psychoacoustic phenomena? What
  approach best generalizes to a wide range of downstream audio
  tasks without fine-tuning? What audio representation allows
  researchers to formulate and solve novel and societally-valuable
  problems in simple, repeatable ways?
  <br><br>
  HEAR 2021 will evaluate audio representations using a benchmark suite
  across a variety of domains, including speech, environmental
  sound, medical audio, and music. In the spirit of shared exchange,
  all participants must submit an audio embedding model following
  a common API that is general-purpose, open-source, and freely
  available to use.
---

## Introduction

The HEAR 2021 challenge invites you to create an audio embedding that is as holistic
as the human ear, i.e., one that performs well across a variety of everyday domains.
The challenge starts with three diverse and approachable open tasks, but also includes
a variety of held-out secret tasks. The three open tasks are: **word classification**,
**pitch detection**, and **sound event detection**. Each is relatively simple on its own.
Our twist is asking you to solve them all at once.

Teams will develop an embedding of arbitrary size to be fed into a generic predictor
by our evaluation algorithm. This predictor will be shallowly trained for each team
and each task.

<p></p>
## News + Announcements

  * **2021-06-29** -
    * There will be a journal special issue for strong HEAR 2021
    participants.
    * The API has been simplified and clarified. For a detailed set of updates, please see this [link](https://github.com/neuralaudio/neuralaudio.github.io/pull/10/).
    * Three open tasks have been announced.
    * The first leaderbord is *ready for submission*. Please submit
    [here](https://docs.google.com/forms/d/e/1FAIpQLSfSz7l4Aohg4JD_TTqKcIOkejM_ws0ho4kfD2nDeKQ4YWz5RA/viewform?usp=send_form).

<p></p>

To stay up-to-date, we will be making announcements in several places:
* Our [HEAR
2021](https://discuss.neuralaudio.ai/c/hear-2021-neurips-challenge/)
category in the Neural Audio AI [forum](https://discuss.neuralaudio.ai/).
The forum also provides a place to discuss audio ML research beyond
this challenge.
* Our low-volume announcement [mailing list](http://eepurl.com/hwrhrz).
* Our [twitter](https://twitter.com/neuralaudio) account.

<p></p>
## Timeline

| Date            |                                                             |
|-----------------|-------------------------------------------------------------|
| 2021-05-10      | Competition begins.                                         |
| 2021-07-15 AoE  | Submissions deadline for inclusion in July leaderboard.     |
| 2021-07-30      | Leaderboard updated.                                        |
| 2021-08-15 AoE  | Submission deadline for inclusion in August leaderboard.    |
| 2021-08-30      | Leaderboard updated.                                        |
| 2021-09-15 AoE  | Submission deadline for inclusion in September leaderboard. |
| 2021-09-30      | Leaderboard updated.                                        |
| 2021-10-15 AoE  | Deadline for final submissions.                             |
| 2021-10-16      | Secret evaluation datasets and code are released.           |
| 2021-11-15      | Final results announced.                                    |
| 2021-12-06      | NeurIPS Conference begins.                                  |

<p></p>
## Evaluation

We adopt the principles proposed by [Groyal *et. al*
(2019)](https://arxiv.org/pdf/1905.01235.pdf) for evaluating the
quality of a learned representation: a good representation should
(1) transfer to a wide range of different tasks, and, (2) transfer
with limited supervision and fine-tuning.

<p></p>
### 1) Wide Range of Tasks
HEAR 2021 benchmarks span multiple audio domains: speech,
environmental sound, and music, with tasks that involve short and
long time spans. In addition to well-known baselines, we have
endeavoured to find evaluation tasks that particularly benefit
humanity, such as low-resource speech, environmental safety, clinical
speech, and ethnomusicology.

Evaluation tasks with downstream learning:
* Scene-based: Classification/multi-classification/tagging of an
entire audio clip.
* Timestamp-based: Temporal classification / tagging (e.g. transcription
and sound event detection).

For the following kinds of tasks, we will use only embedding distance (no learning):
* Ranking tasks.
* Just-noticeable-difference (JND) tasks.

<p></p>
### 2) Limited Downstream Training
For evaluation tasks that require training, a shallow downstream
model will be learned with no fine-tuning of participant models.

<p></p>
## Open Tasks

All embeddings will be tested on the following three tasks, in addition to
held-out secret tasks.

* **[Google Speech
Commands](https://www.tensorflow.org/datasets/catalog/speech_commands)**<br
/> Classification of ten known spoken commands, with additional
categories for silence and unknown commands. Evaluation is top-one
error as per [Warden (2018)](https://arxiv.org/abs/1804.03209).

* **[DCASE
2016](http://dcase.community/challenge2016/task-sound-event-detection-in-synthetic-audio):
Sound event detection in synthetic audio**<br /> Time-based event
detection of possibly overlapping office sounds.  Evaluation will
be performed using onset F-measure, as per the original DCASE
evaluation.

* **[NSynth](https://magenta.tensorflow.org/datasets/nsynth) Pitch Detection**<br />
Multiclass categorization of a single note into one of 88 pitch
classes, and 12 chromas. Evaluated using pitch accuracy and chroma
accuracy, as per [CREPE](https://arxiv.org/abs/1802.06182).

Evaluation code, including the evaluation predictor models and training scripts, will
be released in the coming weeks for each of these open tasks.

<p></p>
## Secret Tasks
Our interest in developing a generic embedding is their use on tasks
where few data are available. As such, secret tasks will have a
special emphasis on low-resource and/or underrepresented domains.

<p></p>
## Rules

A primary goal of this challenge is to encourage the development
of easy-to-use, freely-available general-purpose audio representation
models. If you have any questions about the rules, please post on
the
[forum](https://discuss.neuralaudio.ai/c/hear-2021-neurips-challenge/) or
[email us](mailto:deep-at-neuralaudio.ai) privately.

<p></p>
**Freely-available:**
* You must release your code as a pip3-installable package under an Apache-2.0  or
    compatible (BSD, MIT, etc) license.
* Your model weights must be released under a Creative Commons Attribution 4.0
    International License, or compatible license.
  * Motivation: Non-commercial and non-derivative restrictions disproportionately hurt
    low-resource entities building audio applications for the common good. Larger
    companies are relatively unaffected by these restrictions, given their enormous
    internal resources.
* You are welcome to use whatever training data like, provided you adhere to all other
    competition rules, and:
  * It is documented in your final written submission.
  * Any existing data marked as test may not be used for training.

<p></p>
**Easy-to-use:**
* Your code must be written in `Python >= 3.6` and use `PyTorch >= 1.7` or
    `Tensorflow >= 2.0`. Notable marks will be given to models that work
    nearly identically for both libraries.
* Your model must be able to return a tensor (either in GPU or CPU
    memory) for 20sec of audio, not excedding 16GB of GPU memory.
    This includes both model weights and embedding size. This rule
    applies both to timestamp embeddings and scene embeddings (see
    below). This may place constraints on the size of the embedding
    output.

<p></p>
**Common format:**
* Your code must follow a [common API](#common-api), described in
detail in the section below.
* Your model must accept audio time series data of arbitrary length,
    as both a native tensor (perhaps already on CUDA) in either
    PyTorch or TensorFlow.
* Your model must work with audio at a specific sample rate. You
    may select from one of the four following sample rates: `[16000Hz,
    22050Hz, 44100Hz, 48000Hz]`.  Your model must expose which
    sample rate it expects as input. We will resample audio to that
    sample rate prior to input to your model. (We will use
    ffmpeg---robust, cross platform, good format support, etc.---as
    the main command line tool for resampling, but with high quality
    [resampling from
    sox](https://trac.ffmpeg.org/wiki/FFmpeg%20and%20the%20SoX%20Resampler)).

* Your API must expose two different functions for producing embeddings:
    * **Timestamp-based embeddings**: return embeddings at regular intervals
        centered at timestamps.
        You may select the time interval (hop-size) between adjacent
    	embeddings, but we suggest one that is `<= 50ms` to handle
    	an onset tolerance of `50ms` for music transcription
    	tasks.
    * **Scene embeddings**: return a single embedding for a given audio clip.

<p></p>
**Sharing:**
* You will be provided with a dev-kit with several datasets, multi-modal training,
    baseline, and evaluation.
* This dev-kit will include a standardized API, including performing resampling.
* You are encouraged to submit new evaluation tasks to the dev kit github, particularly
    those that are of high-societal impact.
* Participants that submit new evaluation tasks to the dev-kit
    during the development period, to aid other teams, will be
    highlighted in the summary paper.

<p></p>
## Common API
Your submission must implement the following functions required for
evaluation:

<hr />
```python
load_model(model_file_path: Str, device: str=“cpu”) -> Model
```
  * `model_file_path`: Load model checkpoint from this file path.
  * `device`: For inference on machines with multiple GPUs, this instructs the
    participant which device to use. If `“cpu”`, the CPU should be used
    (Multi-GPU support is not required).
  * **Returns:**
    * `Model` - TensorFlow or PyTorch Module object already loaded
    on the correct device

The returned `Model` must have the following attributes:
  * `sample_rate`: Audio sample rate that your model expects. Must be one of
        `[16000, 22050, 44100, 48000]`.
  * `embedding_size`: The dimensionality of the embedding returned
      by your model. If your model returns different embedding sizes
      for timestamp vs. scene embeddings this should be a dictionary
      with the follow keys: `timestamp`, `scene`. You are free to select
      any `embedding_size` that you like, but please consider the memory
      required to run your model.
<hr />

```python
get_timestamp_embeddings(
    audio: Tensor,
    model: Any,
    tolerance: Optional[Int],
) -> Tuple[Tensor, Tensor]
```
This function must return embeddings at regular intervals centered
at timestamps. The corresponding timestamps in seconds must also
be returned. You are free to select the time interval (hop-size)
between adjacent embeddings. We suggest one that is `<= 50ms` to
handle a temporal tolerance of `+/- 50ms` for music transcription
tasks. `hop_size` may be added as an optional argument, but a default
must be provided and will be used for all evaluation tasks.

  * `audio`: `n_sounds x n_samples` of mono audio in the range `[-1,
    1]`. This should be moved to the same device as the model. We
    are making the simplifying assumption that for every task, all
    sounds will be padded/trimmed to the same length.  This doesn’t
    preclude people from using the API for corpora of variable-length
    sounds; merely we don’t implement that as a core feature. It
    could be a wrapper function added later.
  * `model`: Loaded model, in PyTorch or Tensorflow 2.x. This
     should be moved to the device the audio tensor is on.
  * `tolerance`: (Optional) Tolerance of the event detection, in
    milliseconds. For sound event detection, this is typically
    200ms. For music transcription, this is typically 50ms.
    Participants can disregard this optional parameter and use a
    contact hop size (< 50 ms suggested) for all timestamp-based
    predictions.
  * **Returns:**
    * embedding: A `float32` `Tensor` with shape (`n_sounds, n_timestamp, embedding_size)`.
    * timestamps: `Tensor`. Centered timestamps in seconds corresponding
        to each embedding in the output.

<hr />

```python
get_scene_embeddings(
    audio: Tensor,
    model: Any,
) -> Tensor
```
This function must return a single embedding for each audio clip.
This function will be called to produce embeddings used for evaluation
tasks such as classification that look at an entire audio clip.
Participants are free to implement summarization of the temporal
aspects of audio into a single embedding in whatever way they wish.
A simple approach would be to take the average of all timestamp
embeddings returned from `get_timestamp_embeddings`

  * `audio`: `n_sounds x n_samples` of mono audio in the range `[-1, 1]`. This should be
    moved to the same device as the model. We are making the simplifying assumption
    that for every task, all sounds will be padded/trimmed to the same length.
    This doesn’t preclude people from using the API for corpora of variable-length
    sounds; merely we don’t implement that as a core feature. It could be a wrapper
    function added later.
  * `model`: Loaded model, in PyTorch or Tensorflow 2.x. This
     should be moved to the device the audio tensor is on.
  * **Returns:**
    * embedding: A `float32` `Tensor` with shape (`n_sounds, embedding_size)`.

<hr />

```python
pairwise_distance(emb1: Tensor, emb2: Tensor) -> Tensor
```
  * `emb1`: `Tensor` of shape `(n_samples1, emb_dimension)`
  * `emb2`: `Tensor` of shape `(n_samples2, emb_dimension)`
  * **Returns:** Pairwise distance tensor `(n_samples1, n_samples2)`
  * *Note*:
    * This method is optional. If this method is not defined, we will use unnormalized
    l1. But you are welcome to override this implement it if you would like to define a
    different distance metric for your embeddings.
    * If you really want to use a divergence and not a distance, and have a
    compelling argument for why, please contact us.
    * You can assume that all input embeddings will have been converted to floats
    already.
<hr />

<p></p>
## Submissions
**Submissions are now open!** Submit your entry prior to July 15th
2021 AoE to be included in the first leaderboard update. We will be
holding monthly leaderboard updates up until the final submission
deadline of October 15th 2021.

Code must hosted in a publicly facing GitHub repository. We will
clone your repository and install it using a 
[local source tree pip install](https://packaging.python.org/tutorials/installing-packages/#installing-from-a-local-src-tree)
i.e., `python3 - m pip install <repo-path>`. Your
package does not need to be uploaded to PyPI. Your model weights
must also be available to download at a publicly accessible URL.
Please include a README on your GitHub repository that contains
additional important information for running your submission including
the CUDA and cuDNN versions.

Make sure that your submission follows the [common API](#common-api)
specified above.

If you have any questions or are concerned about hosting your
submission publicly, please do not hesitate to contact competition
organizers at deep-at-neuralaudio.ai

[**Submission Form**](https://docs.google.com/forms/d/e/1FAIpQLSfSz7l4Aohg4JD_TTqKcIOkejM_ws0ho4kfD2nDeKQ4YWz5RA/viewform?usp=sf_link)

<p></p>
## Sponsors
We are proud to announce that HEAR 2021 is sponsored by Google and
that all competition evaluations will be performed on Google Cloud
Platform.

<p></p>
## Low Resource Participants
For low-resource participants, *please reach out!* We are pleased
to announce that we are accepting applications for Google Cloud
Platform credit awards.

<p></p>
## Organizing Team
Joseph Turian and Jordie Shier and Bhiksha Raj and Björn W. Schuller
and Christian James Steinmetz and Colin Malloy and George Tzanetakis
and Gissel Velarde and Kirk McNally and Max Henry and Nicolas Pinto
and Yonatan Bisk and Gyanendra Das and Humair Raj Khan and Camille
Noufi and Dorien Herremans and Jesse Engel and Justin Salamon and
Philippe Esling and Pranay Manocha and Shinji Watanabe and Zeyu Jin

You can learn more about the committee [here](hear2021-committee-members).

<p></p>
## Questions?

We encourage you to post on the
[forum](https://discuss.neuralaudio.ai/c/hear-2021-neurips-challenge/).
However, if your question is private, please [email
us](mailto:deep-at-neuralaudio.ai) directly.
