---
layout: hear-layout
title: Holistic Evaluation of Audio Representations
banner: true
---

What audio embedding approach generalizes best to a wide range of downstream tasks 
across a variety of everyday domains without fine-tuning? 

The aim of the HEAR benchmark is to develop a general-purpose audio representation 
that provides a strong basis for learning in a wide variety of tasks and scenarios. HEAR evaluates audio representations using a benchmark suite across a variety of 
domains, including speech, environmental sound, and music.

HEAR consists of:
* A benchmark of nineteen diverse tasks. These tasks encompass multiple audio domains: 
  speech, environmental sound, and music, with tasks that involve short and long time spans;
* Open-source evaluation code. Evaluation consists of classification tasks, both 
  multiclass and multilabel, requiring either prediction over the entire audio 
  scene (clip), or temporal-based onset detection of sound event;
* An API for developing HEAR-compatible models, making it easy for researchers to
  develop new models and perform evaluation using HEAR evaluation code;
* A leaderboard to keep track of performance on the HEAR benchmark.

<div id="button-group" style="margin-top: 30px; margin-bottom: 30px; display: flex; justify-content: center; align-items: left; gap: 12px;">
    <a href="{{ site.baseurl }}/hear-tasks.html" role="button" class="btn btn-primary">Tasks</a>
    <a href="{{ site.baseurl }}/hear-code.html" role="button" class="btn btn-primary">Code</a>
    <a href="{{ site.baseurl }}/hear-api.html" role="button" class="btn btn-primary">API</a>
    <a href="{{ site.baseurl }}/hear-leaderboard.html" role="button" class="btn btn-primary">Leaderboard</a>
    <a href="https://arxiv.org/abs/2203.03022" role="button" class="btn btn-primary">Paper</a>
</div>

The HEAR benchmark was launched as a NeurIPS competition in 2021. 
Please see our upcoming [journal article](https://arxiv.org/abs/2203.03022), 
to appear in the PMLR issue on NeurIPS 2021 Competitions, for more information on HEAR.

## News
To stay up-to-date with HEAR, please consider following:
* Our [twitter](https://twitter.com/hearbenchmark) account.
* Our low-volume announcement [mailing list](http://eepurl.com/hwrhrz).

## Organizing Team
Joseph Turian and Jordie Shier and Bhiksha Raj and Björn W. Schuller
and Christian James Steinmetz and Colin Malloy and George Tzanetakis
and Gissel Velarde and Kirk McNally and Max Henry and Nicolas Pinto
and Yonatan Bisk and Gyanendra Das and Humair Raj Khan and Camille
Noufi and Dorien Herremans and Eduardo Fonseca and Jesse Engel and
Justin Salamon and Philippe Esling and Pranay Manocha and
Shinji Watanabe and Zeyu Jin

You can learn more about the committee [here](hear-committee-members).

## Sponsors
HEAR was sponsored by Google and all evaluations conducted
as a part of the 2021 NeurIPS challenge were performed on 
Google Cloud Platform. 