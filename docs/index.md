---
layout: hear2021
title: HEAR 2021 NeurIPS Challenge
subtitle: Holistic Evaluation of Audio Representations
author: Joseph Turian and Jordie Shier and Bhiksha Raj and Björn W. Schuller and Christian James Steinmetz and Colin Malloy and George Tzanetakis and Gissel Velarde and Kirk McNally and Max Henry and Nicolas Pinto and Yonatan Bisk and Gyanendra Das and Humair Raj Khan and Camille Noufi and Dorien Herremans and Eduardo Fonseca and Jesse Engel and Justin Salamon and Philippe Esling and Pranay Manocha and Shinji Watanabe and Zeyu Jin
#date: 2021-06-29
abstract: >
  The aim of this challenge is to develop a general-purpose audio
  representation that provides a strong basis for learning in a
  wide variety of tasks and scenarios. The HEAR 2021 challenge
  invites you to create an audio embedding that is as holistic as
  the human ear, i.e., one that performs well across a variety of
  everyday domains:
  What approach best generalizes to a
  wide range of downstream audio tasks without fine-tuning?
  <br><br>
  HEAR 2021 evaluates audio representations using a benchmark suite
  across a variety of domains, including speech, environmental
  sound, and music. In the spirit of shared exchange, all 
  participants must submit an audio embedding model following
  a <a href="hear2021-rules.html">common API</a> that is general-purpose, open-source, and freely
  available to use.
  <br><br>
  <a href="hear2021-pmlr.html">PMLR</a> will publish a HEAR special issue. Submissions to the HEAR PMLR special issue are currently open.
---

## Introduction

The HEAR 2021 challenge invites you to create an audio embedding
that is as holistic as the human ear, i.e., one that performs well
across a variety of everyday domains.  The challenge starts with
three diverse and approachable open tasks, but also includes a
variety of held-out secret tasks. The three open tasks are: **word
classification**, **pitch detection**, and **sound event detection**.
Each is relatively simple on its own.  Our twist is asking you to
solve them all at once.

Teams develop an embedding of arbitrary size to be fed into a
generic predictor by our evaluation algorithm. This predictor is
shallowly trained for each team and each task.

The HEAR 2021 NeurIPS Challenge saw 28 models from 14 different
teams attack 3 open tasks and 13 secret tasks.
Here are the [results](hear2021-results.md).
Recordings of team presentations at NeurIPS 2021 are available [for
viewing](https://youtube.com/playlist?list=PLZuJ3mj5mFsjB67esCQjWoCXKweyn2KVH).

Please submit to the upcoming [PMLR](hear2021-pmlr) special issue,
even if you did not participate in NeurIPS 2021.

<p></p>
## Evaluation

We adopt the principles proposed by [Groyal *et. al*
(2019)](https://arxiv.org/abs/1905.01235) for evaluating the
quality of a learned representation: a good representation should
(1) transfer to a wide range of different tasks, and, (2) transfer
with limited supervision.

<p></p>
### Wide Range of Tasks
HEAR 2021 benchmarks span multiple audio domains: speech,
environmental sound, and music, with tasks that involve short and
long time spans. In addition to well-known baselines, we have
endeavored to find low-resource evaluation tasks that particularly benefit
humanity.

Evaluation tasks with downstream learning:
* Scene-based: Classification/multi-classification/tagging of an
entire audio clip.
* Timestamp-based: Sound event detection/transcription.

A shallow downstream
model is learned with no fine-tuning of participant models.

<p></p>

<p></p>
## News and Announcements
  * **2022-01-21** -
    * Details about [PMLR](hear2021-pmlr.html) special issue submissions are now available. Submission deadline is February 28th, 2022.
    * All HEAR 2021 [datasets](hear2021-datasets.html) are now available.
    * All HEAR pypi packages have been updated. Please run `pip3 install --upgrade heareval hearbaseline hearpreprocess`.
    * [Recordings](https://youtube.com/playlist?list=PLZuJ3mj5mFsjB67esCQjWoCXKweyn2KVH) of NeurIPS team presentations are now available.
    * Due to a preprocessing bug, NeurIPS 2021 results for the crema-d, gztan genre, and gztan music/speech tasks are retracted. Corrected results are forthcoming.
  * **2021-11-29** -
    * We will be presenting live at the NeurIPS conference. See 
    [HEAR @ NeurIPS 2021](/hear2021-neurips-conference) for more information.
    * Eduardo Fonseca has been added to the steering committee.
  * **2021-09-13** -
    * Our [leaderboard](https://neuralaudio.ai/hear2021-leaderboard.html)
    is live, and will be updated with secret tasks and early
    submissions.
    * Open tasks and downstream evaluation code have been
    [released](https://github.com/neuralaudio/hear-eval-kit/).
  * **2021-08-24** -
    * The final submission deadline is **October 31st 2021**.
    * Leaderboard will now be a rolling update and you can [submit
    multiple versions](https://forms.gle/Bz9n7e3LNSK6X4mt7).
    * Release of the [HEAR Baseline model](https://github.com/neuralaudio/hear-baseline)
    * Release a validator tool for participants to check their submissions follow the
    [common API](#common-api): [HEAR Validator](https://github.com/neuralaudio/hear-validator)
    * `Tensor` return types of `get_timestamp_embeddings` are clarified.
  * **2021-07-16** -
    * PMLR will host a HEAR special issue.
    * Some clarifications to the NSynth task are added. See the specific
      [changelog](https://github.com/neuralaudio/neuralaudio.github.io/pull/15)
      for a detailed list of updates.
  * **2021-06-29** -
    * All three [open tasks](#open-tasks) have been announced.
    * The API has been simplified and clarified. For a detailed set
    of updates, please see find the specific
    [changelog](https://github.com/neuralaudio/neuralaudio.github.io/pull/10/).
    * Google Cloud Platform has generously donated compute resources
    for our leaderboard. Low resource participants, please reach
    out for GPU sponsorship!
    * The first leaderbord is *ready for submission*. Please submit
    [here](https://docs.google.com/forms/d/e/1FAIpQLSfSz7l4Aohg4JD_TTqKcIOkejM_ws0ho4kfD2nDeKQ4YWz5RA/viewform?usp=send_form).

<p></p>

To stay up-to-date, we will be making announcements in several places:
* Our low-volume announcement [mailing list](http://eepurl.com/hwrhrz).
* Our [twitter](https://twitter.com/neuralaudio) account.

## Sponsors
We are proud to announce that HEAR 2021 was sponsored by Google and
that all competition evaluations were performed on Google Cloud
Platform.

<p></p>
## NeurIPS Challenge Organizing Team
Joseph Turian and Jordie Shier and Bhiksha Raj and Björn W. Schuller
and Christian James Steinmetz and Colin Malloy and George Tzanetakis
and Gissel Velarde and Kirk McNally and Max Henry and Nicolas Pinto
and Yonatan Bisk and Gyanendra Das and Humair Raj Khan and Camille
Noufi and Dorien Herremans and Eduardo Fonseca and Jesse Engel and
Justin Salamon and Philippe Esling and Pranay Manocha and
Shinji Watanabe and Zeyu Jin

You can learn more about the committee [here](hear2021-committee-members).

## PMLR Journal Editors
Joseph Turian and Björn W. Schuller and Dorien Herremans and Katrin
Kirchhoff and Paola Garcia Perera and Philippe Esling.

You can learn more about the journal editors [here](pmlr-hear-journal-editors).
