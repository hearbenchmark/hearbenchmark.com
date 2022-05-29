# HEAR Benchmark

This is the static site for the [HEAR Benchmark](https://neuralaudio.ai/)
website and submission repository for new entries to the HEAR leaderboard. To find out
more about HEAR, please visit the [website](https://neuralaudio.ai/)
or read the [paper](https://arxiv.org/abs/2203.03022).

If you have any questions about submitting to the HEAR benchmark please open a new [issue
in this repository](https://github.com/neuralaudio/neuralaudio.github.io/issues). If you
have questions that are specific to using the [hear-eval-kit](https://github.com/neuralaudio/hear-eval-kit),
please open a new [issue in that repository](https://github.com/neuralaudio/hear-eval-kit/issues).

## How to submit your results to the leaderboard

Once you have developed an audio embedding model and evaluated it using the benchmark
suite of tasks with the [hear-eval-kit](https://github.com/neuralaudio/hear-eval-kit),
submit the results here.

1. Create a [github](https://github.com) account

2. [Fork](https://help.github.com/articles/fork-a-repo/) the [HEAR Benchmark Site](https://github.com/neuralaudio/neuralaudio.github.io) repository

3. Clone this new repository into your desktop environment

   ```
   git clone https://github.com/YOUR-USERNAME/neuralaudio.github.io
   ```

4. Create a branch using your team name

   ```
   git checkout -b TEAM-NAME
   ```

5. Append your test score results to the file `docs/leaderboard.csv`. The test scores are
   output by `hear-eval-kit` in a separate json file for
   each task. This [example google colab](https://colab.research.google.com/github/neuralaudio/hear-eval-kit/blob/main/heareval_evaluation_example.ipynb)
   demonstrates how to run evaluation and find the final test scores. You will also need
   to include a model name and URL for your work in the CSV file. Your model name should
   be your team/institution name and short name describing your model, for example: HEAR Baseline.
   The included URL can be a link to a GitHub repo or paper for your work.

6. Commit updated leaderboard.csv file

   ```
   git commit -a -m "Some comment"
   ```

7. [Push](https://help.github.com/articles/pushing-to-a-remote/) to github

   ```
   git push origin TEAM-NAME
   ```

8. Issue a [pull request](https://help.github.com/articles/using-pull-requests/) (PR) 
   with title the containing your team name and follow the template that will appear 
   once you open the pull request. Within the template you will be required
   to fill out details related to your submission including a brief description of your
   model and type of training data used (speech/broad/music).

9. Once the pull request is accepted and merged your results will appear on the leaderboard
    on the website.

## Development

See [Jekyll Docs](https://jekyllrb.com/docs/) for instructions on
building on your local machine for development.

```
cd docs/
bundle exec jekyll serve
```
