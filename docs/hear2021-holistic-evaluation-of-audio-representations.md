---
layout: page
title: HEAR 2021
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
  The aim of this competition is to develop a general-purpose audio
  representation that provides a strong basis for learning in a
  wide variety of tasks and scenarios. We challenge participants
  with the following questions: Is it possible to develop a single
  representation that models all psychoacoustic phenomena? What
  approach best generalizes to a wide range of downstream audio
  tasks without fine-tuning? What audio representation allows
  researchers to formulate and solve novel and societally-valuable
  problems in simple, repeatable ways?
  <br><br>
  We will evaluate audio representations using a benchmark suite
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

## Announcements

Look forward to the following announcements: starter-kit, sandbox,
leaderboard, etc. We will be making announcements in several places:
* Our [HEAR
2021](https://discuss.neuralaudio.ai/c/hear-2021-neurorips-challenge/) in
the Neural Audio AI [forum](https://discuss.neuralaudio.ai/). The
forum also provides a place to discuss audio ML research beyond
this competition.
* Our low-volume announcement [mailing list](http://eepurl.com/hwrhrz).
* Our [twitter](https://twitter.com/neuralaudio) account.

## Timeline

* May 10, 2021 - Competition begins.
* October 15, 2021 - Deadline for final submissions of models.
* October 16, 2021 - Secret evaluation datasets and code are released.
* November 15, 2021 - Announce results.
* November 31, 2021 - Deadline for final submission of brief (4 page) paper describing the submission.  Participants are free to additionally include fine-tuning the pretrained weights from their own compute resources.
* December 13-14, 2021 - Presentation of the challenge results at NeurIPS.

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
of benchmarks will have little fine-tuning data, to understand how
well models generalize to resource-poor tasks.
* Classification/multi-classification of the entire sound.
* Tagging (multilabel sound event classification) of the entire sound.
* Temporal multilabel (e.g. transcription and sound event detection):
  * We will assume a fixed hop-size, for simplicity, and evaluate
  on a frame-based level. We will not apply any seq2seq model.

For the following kinds of tasks, we will use embedding distance and no learning:
* Ranking tasks, e.g. rank this sound that was ogg-encoded with quality 1 thru 9.
* Just-noticeable-difference (JND) tasks.

## Rules

A primary goal of this competition is to encourage the development
of easy-to-use, freely-available general-purpose audio representation
models. If you have any questions about the rules, please post on
the forum or email us privately.

**Freely-available:**
* You must release your code as a pip3-installable package under an Apache-2.0  or compatible (BSD, MIT, etc) license.
* Your model weights must be released under a Creative Commons Attribution 4.0 International License, or compatible license.
  * Motivation: Non-commercial and non-derivative restrictions disproportionately hurt low-resource entities building audio applications for the common good. Larger companies are relatively unaffected by these restrictions, given their enormous internal resources.
* You are welcome to use whatever training data like, provided you adhere to all other competition rules, and:
  * It is documented in your final written submission.
  * Any existing data marked as test may not be used for training.

**Easy-to-use:**
* Your code must use PyTorch >= 1.7 or Tensorflow >= 2.0. Notable marks will be given to models that work nearly identically for both libraries.
* Speed:
  * There will be two competition tracks: 10x and 100x realtime.
  * Your model must be fast enough to be able to process audio, which has already been loaded onto the GPU, at least 10x or 100x faster than realtime on a V100 GPU.
  * If your model has more than one possible embedding size (see below for more information on embedding sizes), it must still output all embeddings together at the target speed.
* Your model must be able to work on an 8GB GPU machine.

**Common format:**
* Your code must follow a common API, described in the section below.
* Your model must accept audio time series data of arbitrary length, as both a native tensor (perhaps already on CUDA) in the library of your choice, as well as numpy.ndarrays.
* Your model must work with audio at a specific sample rate. You may select from one of the four following sample rates: [16000Hz, 22050Hz, 44100Hz, 48000Hz]. Your model must expose which sample rate it expects as input. We will resample audio to that sample rate prior to input to your model. (We will use ffmpeg---robust, cross platform, good format support, etc.---as the main command line tool for resampling, but with high quality [resampling from sox](https://trac.ffmpeg.org/wiki/FFmpeg%20and%20the%20SoX%20Resampler)).
* Your model is expected to process audio frame-by-frame and produce an embedding / embeddings for each frame. Different hop-sizes must be supported, to enable evaluation on short time scale and long time scale tasks.
* Your model must output at least one, but preferably all of the following embedding sizes: [4096, 2048, 512, 128, 20] for each frame. Each embedding is expected to be a float32 tensor for all embedding sizes except 20, which must be a signed int tensor. Submission results will be presented separately for each embedding size.
  * The development of strong yet compact audio representations could democratize access to hard-to-obtain large scale audio corpora. Also, high-quality low-bitrate audio embeddings enable faster research iteration, with the expectation that they can later be fine-tuned on larger embeddings that have greater capacity.
* A separate evaluation will be performed for different sized representations.
* The choice of analysis window length (receptive field) is at the discretion of the participants.
* Padding might be necessary, which will also be included in the dev-kit. All frames are expected to be time-centered.

**Sharing:**
* You will be provided with a dev-kit with several datasets, multi-modal training, baseline, and evaluation.
* This dev-kit will include a standardized API, including performing resampling.
* You are encouraged to submit new evaluation tasks to the dev kit github, particularly those that are of high-societal impact.
* Participants that submit new evaluation tasks to the dev-kit during the development period, to aid other teams, will be highlighted in the summary paper.

For low-resource participants, *please reach out!* We are seeking GPU sponsors.

## Common API

Entries can use whatever receptive field length (window size) they
desire. However, you are responsible for padding as necessary. We
will provide code for this in the upcoming starter-kit.

Some tasks by definition need very different input lengths (e.g.
some bioacoustics tasks are on the order of milliseconds whereas
SED is typically on the order of seconds). If you want to use a
different receptive field length depending upon the hop-size, that
is your choice.

The primary functions of the common API are:
* input_sample_rate() -> Int:
  * **Returns:** One of the following values: [16000, 22050, 44100, 48000]. To avoid resampling on-the-fly, we will query your model to find out what sample rate audio to provide it.
* load_model(model_file_path: Str, device: str = “cpu”) -> Any
  * model_file_path: Load model checkpoint from this file path.
  * device: For inference on machines with multiple GPUs, this instructs the participant which device to use. If “cpu”, the CPU should be used. (Multi-GPU support is not required.)
  * **Returns:** Model
* get_audio_embedding(audio: tensor, model: Any, hop_size: Int, batch_size: Optional[Int], device: Optional[str], center: Bool =True) -> Tuple[Dict(int, Tensor), List(float)]
  * audio: n_sounds x n_samples of mono audio in the range [-1, 1]. This should be moved to the same device as the model. We are making the simplifying assumption that for every task, all sounds will be padded/trimmed to the same length. This doesn’t preclude people from using the API for corpora of variable-length sounds; merely we don’t implement that as a core feature. It could be a wrapper function added later.
  * model: Loaded model, in PyTorch or Tensorflow 2.x.
  * hop_size: Number of audio samples between adjacent frames
  * batch_size: The participants are responsible for estimating the batch_size that will achieve high-throughput while maintaining appropriate memory constraints. However, batch_size is a useful feature for end-users to be able to toggle.
  * center: If True, the timestamps correspond to the center of each analysis window. Center=True will be used for all evaluation tasks.
  * **Returns:** ({embedding_size: Tensor}, list(frame timestamps)) where embedding_size can be any of [4096, 2048, 512, 128, 20]. Tensor is float32 (or signed int for 20-dim), n_sounds x n_frames x dim
* pairwise_distance(emb1: Tensor, emb2: Tensor) -> Tensor
  * emb1: Tensor of shape (n_samples1, n_frames, emb_dimension)
  * emb2: Tensor of shape (n_samples2, n_frames, emb_dimension)
  * **Returns:** Pairwise distance tensor (n_samples1, n_samples2)
    * If this method is not defined, we will use unnormalized l1.
    But you are welcome to override this method if you wish.
    * If you really want to use a divergence and not a distance, and have a
    compelling argument for why, please contact us.

## Organizing Team

You can learn more about the committee [here](hear2021-committee-members).

## Questions?

We encourage you to post on the
[forum](https://discuss.neuralaudio.ai/c/hear-2021-neurorips-challenge/).
However, if your question is private, please [email
us](mailto:deep-at-neuralaudio.ai) directly.
