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
    <a href="{{ site.baseurl }}/code.html" role="button" class="btn btn-primary">Code</a>
    <a href="{{ site.baseurl }}/api.html" role="button" class="btn btn-primary">API</a>
    <a href="{{ site.baseurl }}/leaderboard.html" role="button" class="btn btn-primary">Leaderboard</a>
    <a href="https://arxiv.org/abs/2203.03022" role="button" class="btn btn-primary">Paper</a>
</div>


<hr />
## News

To stay up-to-date with HEAR, please consider following:
* Our [twitter](https://twitter.com/neuralaudio) account.
* Our low-volume announcement [mailing list](http://eepurl.com/hwrhrz).
