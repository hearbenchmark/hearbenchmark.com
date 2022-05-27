---
layout: hear-layout
title: HEAR Code
---

## Evaluation Code
The `hear-eval-kit` is used to evaluate audio
embedding models on the HEAR datasets. It consists of the following functionality: 1) 
compute audio embeddings and 2) evaluate audio embeddings using a shallow downstream
MLP classifier.

For more information on the downstream training regime used for evaluation, please see 
Appendix B of our [paper](https://arxiv.org/abs/2203.03022). Information to help you
get started using the `hear-eval-kit` is available on our github page.

[[GitHub](https://github.com/neuralaudio/hear-eval-kit), [PyPI](https://pypi.org/project/heareval/)]

## Data Pre-processing Code
Individuals who would like to regenerate the HEAR benchmark tasks themselves can use `hear-preprocess`.
However, all the HEAR benchmark tasks are [available to download]({{ site.baseurl }}/hear-tasks.html#downloading) 
in a common pre-preprocessed format with human-readable metadata.
The `hear-preprocess` package was used to process HEAR datasets into 
this format. It can also easily be extended to process new datasets beyond those included
in the HEAR benchmark. 

[[GitHub](https://github.com/neuralaudio/hear-preprocess), [PyPI](https://pypi.org/project/hearpreprocess/)]

## Baseline Models
Several baseline models that implement the [common API]({{ site.baseurl }}/hear-api.html) are
in included the `hearbaseline` Python package. Two baseline models on the leaderboard
are included in this repository: `wav2vec2` and `CREPE`.

[[GitHub](https://github.com/neuralaudio/hear-baseline), [PyPI](https://pypi.org/project/hearbaseline/)]

## Model Validator

`hear-validator` provides a command-line tool to verify that an audio embedding model 
conforms to the [common API]({{ site.baseurl }}/hear-api.html)
required by `hear-eval-kit`.

[[GitHub](https://github.com/neuralaudio/hear-validator), [PyPI](https://pypi.org/project/hearvalidator/)]
