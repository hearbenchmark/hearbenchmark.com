---
layout: hear-layout
title: Submit to HEAR
---

Submissions to the HEAR benchmark leaderboard are welcome at any time. To evaluate on 
the HEAR benchmark you will need to:

1. Develop an audio embedding model that follows the [HEAR API]({{ site.baseurl }}/api.html).
      * You may train your embedding model on any data that you want, **except** for data from 
        splits in HEAR tasks that are explicitly denoted as test splits in train/validation/test 
        dataset split setups. 
      * See [`hear-baseline`](https://github.com/neuralaudio/hear-baseline) 
        for examples of how to wrap an existing embedding model in the HEAR API.
2. Download the [HEAR benchmark tasks]({{ site.baseurl }}/hear-tasks.html#downloading) 
   at the correct sample rate for your model.
    * All tasks are available for download at the following sample rates: 16000, 22050, 32000, 44100, and 48000. 
    * If your model uses a sample rate that is not listed you will need to either resample the datasets or use
      [`hear-preprocess`](https://github.com/neuralaudio/hear-preprocess) to recreate the 
      datasets at the desired sample rate.
3. Use [`hear-eval-kit`](https://github.com/neuralaudio/hear-eval-kit/) to:
      * a) Compute embeddings for all HEAR tasks using your model
      * b) Evaluate embeddings by training a shallow downstream classifier
4. Submit your results to the leaderboard by appending them to the 
   [CSV file](https://github.com/jorshi/hearbenchmark.github.io/blob/main/docs/leaderboard.csv)
   located in the [GitHub repository](https://github.com/jorshi/hearbenchmark.github.io)
   for this website and then creat a pull request with the updated CSV file. Detailed 
   submission instructions are provided in the README for the GitHub repository.

<div id="button-group" style="margin-top: 30px; margin-bottom: 30px; display: flex; justify-content: center; align-items: left; gap: 12px;">
    <a href="https://github.com/jorshi/hearbenchmark.github.io" role="button" class="btn btn-primary">Submit</a>
</div>
