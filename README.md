# HEAR Benchmark

This is the static site for the [HEAR Benchmark](https://jorshi.github.io/hearbenchmark.github.io/)
website and submission repository for new entries to the HEAR leaderboard. To find out
more about HEAR, please visit the [website](https://jorshi.github.io/hearbenchmark.github.io/)
or read the [paper](https://arxiv.org/abs/2203.03022).

If you have any questions about submitting to the HEAR benchmark please open a new [issue
in this repository](https://github.com/jorshi/hearbenchmark.github.io/issues). If you
have questions that are specific to using the [hear-eval-kit](https://github.com/neuralaudio/hear-eval-kit),
please open a new [issue in that repository](https://github.com/neuralaudio/hear-eval-kit/issues).

## How to submit your results to the leaderboard

Once you have developed an audio embedding model and evaluated it using the benchmark
suite of tasks with the [hear-eval-kit](https://github.com/neuralaudio/hear-eval-kit),
submit the results here.

1. Create a [github](https://github.com) account

2. [Fork](https://help.github.com/articles/fork-a-repo/) the [HEAR Benchmark Site](https://github.com/jorshi/hearbenchmark.github.io) repository

3. Clone this new repository into your desktop environment

   ```
   git clone https://github.com/YOUR-USERNAME/hearbenchmark.github.io
   ```

4. Create a branch using your team name

   ```
   git checkout -b TEAM-NAME
   ```

5. Append your test score results to the file `docs/leaderboard.csv`

6. Commit updated leaderboard.csv file

   ```
   git commit -a -m "Some comment"
   ```

7. [Push](https://help.github.com/articles/pushing-to-a-remote/) to github

   ```
   git push origin TEAM-NAME
   ```

8. Issue a [pull request](https://help.github.com/articles/using-pull-requests/) (PR) 
   with title containing team name and follow the template that will appear 
   once you opened the pull request.

9. Once the pull request is accepted and merged your results will appear on the leaderboard
    on the website.

## Development

See [Jekyll Docs](https://jekyllrb.com/docs/) for instructions on
building on your local machine for development.

```
cd docs/
bundle exec jekyll serve
```
