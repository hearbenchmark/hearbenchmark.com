---
layout: page
title: HEAR 2021 NeurIPS Challenge
subtitle: Holistic Evaluation of Audio Representations
author: Joseph Turian and Jordie Shier and Bhiksha Raj and Björn W. Schuller and Christian James Steinmetz and Colin Malloy and George Tzanetakis and Gissel Velarde and Kirk McNally and Max Henry and Nicolas Pinto and Yonatan Bisk and Gyanendra Das and Humair Raj Khan and Camille Noufi and Dorien Herremans and Jesse Engel and Justin Salamon and Philippe Esling and Pranay Manocha and Shinji Watanabe and Zeyu Jin
date: 2021-05-09
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

Participants must submit an audio representation model that is
general-purpose, open-source, and freely available to use.  All
submissions must follow a common API. Benchmarks span multiple audio
domains: speech, environmental sound, clinical audio, and music,
with tasks that involve short and long time spans. Evaluation will
be on classification, tagging, temporal tagging, and distance tasks.

<p></p>
## Announcements

Look forward to the following announcements: starter-kit, sandbox,
leaderboard, etc. We will be making announcements in several places:
* Our [HEAR
2021](https://discuss.neuralaudio.ai/c/hear-2021-neurips-challenge/)
category in the Neural Audio AI [forum](https://discuss.neuralaudio.ai/).
The forum also provides a place to discuss audio ML research beyond
this challenge.
* Our low-volume announcement [mailing list](http://eepurl.com/hwrhrz).
* Our [twitter](https://twitter.com/neuralaudio) account.

<p></p>
## Timeline

* May 10, 2021 - Competition begins.
* October 15, 2021 - Deadline for final submissions of models.
* October 16, 2021 - Secret evaluation datasets and code are released.
* November 15, 2021 - Announce results.
* November 30, 2021 - Deadline for final submission of brief (4 page) paper describing the submission.  Participants are free to additionally include fine-tuning the pretrained weights from their own compute resources.
* December 13-14, 2021 - Presentation of the challenge results at NeurIPS.

<p></p>
## Evaluation

Benchmarks span multiple audio domains:  speech, environmental
sound, clinical audio, and music, with tasks that involve short and
long time spans. In addition to well-known baselines, we have
endeavoured to find evaluation tasks that particularly benefit
humanity, such as low-resource speech, environmental safety, clinical
speech, and ethnomusicology.

Evaluation will be on classification, tagging, and distance tasks.
Because some tasks involve frame-by-frame comparisons, we will
specify a hop-size for each evaluation task—though the size of the
analysis window is a design choice left to the participants. The
hop size can range from milliseconds to seconds depending upon the
task.

Embeddings will be evaluated either as the input to a shallow model,
or using distances over the representation space.

For the following, we will take the participant embeddings, and
learn a simple model over their output with no-finetuning. A handful
of benchmarks will have little training data, to understand how
well models generalize to resource-poor tasks.
* Classification/multi-classification of the entire sound.
* Tagging (multilabel sound event classification) of the entire sound.
* Temporal multilabel (e.g. transcription and sound event detection):
  * We will assume a fixed hop-size, for simplicity, and evaluate
  on a frame-based level. We will not apply any seq2seq model.

For the following kinds of tasks, we will use only embedding distance (no learning):
* Ranking tasks, e.g. rank this sound that was ogg-encoded with quality 1 thru 9.
* Just-noticeable-difference (JND) tasks.

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
* You must release your code as a pip3-installable package under an Apache-2.0  or compatible (BSD, MIT, etc) license.
* Your model weights must be released under a Creative Commons Attribution 4.0 International License, or compatible license.
  * Motivation: Non-commercial and non-derivative restrictions disproportionately hurt low-resource entities building audio applications for the common good. Larger companies are relatively unaffected by these restrictions, given their enormous internal resources.
* You are welcome to use whatever training data like, provided you adhere to all other competition rules, and:
  * It is documented in your final written submission.
  * Any existing data marked as test may not be used for training.

<p></p>
**Easy-to-use:**
* Your code must use PyTorch >= 1.7 or Tensorflow >= 2.0. Notable marks will be given to models that work nearly identically for both libraries.
* Speed:
  * Your model must be fast enough to be able to process audio, which has already been loaded onto the GPU, and return at least X embeddings per second.
  * Your model must be able to run at this speed using the following hardware architecture: X
    * This is *not* the architecture that we will be running evaluations on.
* Your model must be able to work on an 8GB GPU machine.

<p></p>
**Common format:**
* Your code must follow a common API, described in the section below.
* Your model must accept audio time series data of arbitrary length, as both a native tensor (perhaps already on CUDA) in the library of your choice, as well as *numpy.ndarrays*.
* Your model must work with audio at a specific sample rate. You may select from one of the four following sample rates: [16000Hz, 22050Hz, 44100Hz, 48000Hz]. Your model must expose which sample rate it expects as input. We will resample audio to that sample rate prior to input to your model. (We will use ffmpeg---robust, cross platform, good format support, etc.---as the main command line tool for resampling, but with high quality [resampling from sox](https://trac.ffmpeg.org/wiki/FFmpeg%20and%20the%20SoX%20Resampler)).
* Your model is expected to process audio and produce a specific number of embeddings per second corresponding to a frame rate argument. Your model must also return
    timestamps in seconds that correspond to each embedding returned. For example, if we specified a frame rate of 4Hz we would expect you model to return
    four embeddings per second corresponding to the timestamps: 0.0s, 0.25s, 0.5s, ..., etc.
* There will be two competition tracks based on embedding dimensionality:
    * The main track will be for embeddings that have 6144 or less dimensions (this is based on the largest embedding size available in [openl3](https://openl3.readthedocs.io/en/latest/)).
    * A compact audio representation track will be held for embeddings that have 64 of less dimensions.
    * The development of strong yet compact audio representations could democratize access to hard-to-obtain large scale audio corpora. Also, high-quality low-bitrate audio embeddings enable faster research iteration, with the expectation that they can later be fine-tuned on larger embeddings that have greater capacity.
    * Each team may submit one model for each track.
* The choice of analysis window length (receptive field) is at the discretion of the participants.

<p></p>
**Sharing:**
* You will be provided with a dev-kit with several datasets, multi-modal training,
    baseline, and evaluation.
* This dev-kit will include a standardized API, including performing resampling.
* You are encouraged to submit new evaluation tasks to the dev kit github, particularly
    those that are of high-societal impact.
* Participants that submit new evaluation tasks to the dev-kit during the development
    period, to aid other teams, will be highlighted in the summary paper.

For low-resource participants, *please reach out!* We are pleased to announce that
Google is sponsoring HEAR 2021 and that we are accepting applications for
Google Cloud Platform credit awards for low-resource teams.

<p></p>
## Common API

Entries can use whatever receptive field length (window size) they
desire. However, you are responsible for padding as necessary. We
will provide code for this in the upcoming starter-kit.

Some tasks by definition need very different input lengths (e.g.
some bioacoustics tasks are on the order of milliseconds whereas
SED is typically on the order of seconds). If you want to use a
different receptive field length depending upon the frame-rate, that
is your choice.

The primary functions of the common API are:

<hr />
```python
load_model(model_file_path: Str, device: str=“cpu”) -> Tuple[Model, Dict[str, Any]]
```
  * `model_file_path`: Load model checkpoint from this file path.
  * `device`: For inference on machines with multiple GPUs, this instructs the
    participant which device to use. If `“cpu”`, the CPU should be used
    (Multi-GPU support is not required).
  * **Returns:**
    * `Model` - TensorFlow or PyTorch Model object already loaded on the correct device
    * `Dict` - A dictionary of metadata specific to your model. This *must* include
        the following entries:
        * `sample_rate` the sampling rate that your model accepts
            audio at. One of `[16000, 22050, 44100, 48000]`.
        * `embedding_size` the dimensionality of the embeddings that are
            produced by your model. Must be `<= 6144` for the main competition track or
            `<= 64` for the compact audio representation track.
        * `version` a string indicating the version of your model that has been loaded.

<hr />

```python
get_audio_embedding(
    audio: Tensor,
    model: Any,
    frame_rate: float,
    batch_size: Optional[int]=None,
) -> Tuple[Tensor, Tensor]
```

  * `audio`: `n_sounds x n_samples` of mono audio in the range `[-1, 1]`. This should be
    moved to the same device as the model. We are making the simplifying assumption
    that for every task, all sounds will be padded/trimmed to the same length.
    This doesn’t preclude people from using the API for corpora of variable-length
    sounds; merely we don’t implement that as a core feature. It could be a wrapper
    function added later.
  * `model`: Loaded model, in PyTorch or Tensorflow 2.x. This
     should be moved to the device the audio tensor is on.
  * `frame_rate`: Number of embeddings that the model should return per second.
    Embeddings and the corresponding timestamps should start at 0s and increment by
    1/frame_rate seconds. For example, if the audio is 1.1s and the frame_rate is 4.0,
    then we should return embeddings centered at 0.0s, 0.25s, 0.5s, 0.75s and 1.0s.
  * `batch_size`: The participants are responsible for estimating the `batch_size` that
    will achieve high-throughput while maintaining appropriate memory constraints.
    However, `batch_size` is a useful feature for end-users to be able to toggle.
  * **Returns:**
    * embedding: A `float32` `Tensor` with shape (`n_sounds, n_frames, embedding_size)`.
    * timestamps: `Tensor`. Timestamps in seconds corresponding to each embedding
        in the output.

<hr />

```python
pairwise_distance(emb1: Tensor, emb2: Tensor) -> Tensor
```
  * `emb1`: `Tensor` of shape `(n_samples1, n_frames, emb_dimension)`
  * `emb2`: `Tensor` of shape `(n_samples2, n_frames, emb_dimension)`
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
## Sponsors

We are proud to announce that HEAR 2021 is sponsored by Google and that all competition
evaluations will be performed on Google Cloud Platform.

<p></p>
## Organizing Team

You can learn more about the committee [here](hear2021-committee-members).

<p></p>
## Questions?

We encourage you to post on the
[forum](https://discuss.neuralaudio.ai/c/hear-2021-neurips-challenge/).
However, if your question is private, please [email
us](mailto:deep-at-neuralaudio.ai) directly.
