---
layout: hear-layout
title: HEAR Tasks
---

The datasets have different open licenses. 
Please see [LICENSE.txt](https://zenodo.org/record/5887964/files/LICENSE.txt)
for each individual dataset's license.


Datasets were all normalized to a common human-readable format using hearpreprocess. 
Until 2022-04-01, datasets will be mirrored at 
<a href="https://data.neuralaudio.ai/">data.neuralaudio.ai</a>. 

Longer term, our <a href="https://zenodo.org/record/5887964">Zenodo mirror</a> has 
all audio task but only at 48000Hz sampling rate. For other sampling rates 
(16000, 22050, 32000, 44100), please download files (requester pays) from Google 
Storage gs://hear2021-archive/tasks/ or AWS s3://hear2021-archive/tasks/ 
(with CLI flag <tt>--requester-payer requester</tt>).

{% include tasks-table.html %}
