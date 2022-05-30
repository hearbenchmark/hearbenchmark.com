---
layout: hear-layout-wide
title: HEAR Tasks
---

Summary the 19 evaluation tasks in the HEAR Benchmark.

{% include tasks-table.html %}

**Table Info**:
- embedding type: timestamp (T) or scene (S)
- predictor type: multiclass (C) or multilabel (L)
- split method used during downstream evaluation: train/validation/test (TVT) or K-fold
- duration of clips in seconds
- total number of audio clips in a task
- primary evaluation metric
- whether or not the task is novel. Novel tasks are not comparable to the literature. 

**Note on clip duration**: 

For all tasks except FSD50k, clips were standardized to one duration using padding or trimming, typically the 95th percentile length in the original corpus.

## Downloading

Datasets were all preprocessed and normalized to a common human-readable format using 
<a href="https://github.com/neuralaudio/hear-preprocess">hearpreprocess</a>. They
are available for download from our <a href="https://zenodo.org/record/5887964">Zenodo mirror</a>. 
This has all audio tasks, but only at 48000Hz sampling rate. 

For other sampling rates 
(16000, 22050, 32000, 44100), please download files (requester pays) from:
- **Google Storage**: `gs://hear2021-archive/tasks/`
- **AWS**: `s3://hear2021-archive/tasks/`

(with CLI flag `--requester-payer requester`).

## License
The datasets have different open licenses. 
Please see [LICENSE.txt](https://zenodo.org/record/5887964/files/LICENSE.txt)
for each individual dataset's license.
