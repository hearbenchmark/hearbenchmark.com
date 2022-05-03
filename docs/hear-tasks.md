---
layout: hear-layout-wide
title: HEAR Tasks
---

Summary the 19 evaluation tasks in the HEAR Benchmark. 

The table includes the embedding type
(timestamp (T) or scene (S)), the predictor type (multiclass (C) or multilabel
(L)), the split method used during downstream evaluation (train/validation/test
(TVT) or K-fold), the duration of clips in seconds, the total number of clips for
each task, the primary evaluation metric, and whether or not the task is novel.
Novel tasks are not comparable to the literature. For all tasks except FSD50k,
clips were standardized to one length using padding or trimming, typically the
95th percentile length in the original corpus.

{% include tasks-table.html %}

## Downloading

Datasets were all preprocessed and normalized to a common human-readable format using 
<a href="https://github.com/neuralaudio/hear-preprocess">hearpreprocess</a>. They
are available for download fomr our <a href="https://zenodo.org/record/5887964">Zenodo mirror</a>. 
This has all audio tasks, but only at 48000Hz sampling rate. 

For other sampling rates 
(16000, 22050, 32000, 44100), please download files (requester pays) from:

### Google Storage:
```python
gs://hear2021-archive/tasks/
```

### AWS:
```python
s3://hear2021-archive/tasks/
```
(with CLI flag `--requester-payer requester`).

## License
The datasets have different open licenses. 
Please see [LICENSE.txt](https://zenodo.org/record/5887964/files/LICENSE.txt)
for each individual dataset's license.

