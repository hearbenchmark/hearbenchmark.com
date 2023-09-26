---
layout: hear-layout-wide
title: HEAR Leaderboard
---

{% include leaderboard-table.html %}

<br />

# Leaderboard Heatmap
Primary score of leaderboard models on each HEAR task. Normalized scores are
used to show the heat-value of each cell.

\[[EPS](https://raw.githubusercontent.com/hearbenchmark/hear-leaderboard/main/results/leaderboard.eps)\]

![Leaderboard Heatmap](https://raw.githubusercontent.com/hearbenchmark/hear-leaderboard/main/results/leaderboard.png)

# Task Correlations
Task versus task correlation scores, based upon normalized scores. Only the
highest and lowest correlations are displayed. Cells are sorted to minimize the
traveling salesperson distance, mapping correlations [-1, +1] to distances [+2, 0].

\[[EPS](https://raw.githubusercontent.com/hearbenchmark/hear-leaderboard/main/results/task_correlation.eps)\]

![Task Correlations](https://raw.githubusercontent.com/hearbenchmark/hear-leaderboard/main/results/task_correlation.png)

# Model Correlations
Model versus model correlation scores, based upon normalized scores. Only the
highest and lowest correlations are displayed. Cells are sorted to minimize the
traveling salesperson distance, mapping correlations [-1, +1] to distances [+2, 0].

\[[EPS](https://raw.githubusercontent.com/hearbenchmark/hear-leaderboard/main/results/model_correlation.eps)\]

![Model Correlations](https://raw.githubusercontent.com/hearbenchmark/hear-leaderboard/main/results/model_correlation.png)
