---
layout: hear2021-team-info
title: HEAR 2021
subtitle: Team Information
toc_title: Teams
#date: 2021-05-09
---
<div>
    <p>Teams</p>
    <ul>
        <li>AMAAI</li>
        <li>AMAAI Lab</li>
        <li><a href="#cp-jku">CP-JKU</a></li>
        <li>CVSSP</li>
        <li><a href="#descriptmarl">Descript/MARL</a></li>
        <li>ibkuroyagi</li>
        <li>ID56-SSL</li>
        <li>Logitech AI</li>
        <li>MARL + Soundsensing</li>
        <li><a href="#ntu-gura">NTU-GURA</a></li>
        <li><a href="#redrice">RedRice</a></li>
        <li>Soundsensing</li>
        <li>Stellenbosch LSL</li>
        <li>UDONS</li>
    </ul>
    <p>Team information will be updated as it becomes available.</p>
</div>

<hr class="divider-line"/>

## CP-JKU
<div class="team-members">
    <p>
        Khaled Koutini<sup>1</sup>, Jan Schlüter<sup>1</sup>,
        Hamid Eghbal-zadeh<sup>1,2</sup>, Gerhard Widmer<sup>1,2</sup>
    </p>
    <div class="team-affiliation">
        <p><sup>1</sup>Institute of Computational Perception, Johannes Kepler University Linz, Austria</p>
        <p><sup>2</sup>LIT AI Lab, Johannes Kepler University Linz, Austria</p>
    </div>
</div>

#### Abstract
The great success of transformer-based models in natural language processing (NLP) has
led to various attempts at adapting these architectures to other domains such as vision
and audio. Recent work has shown that transformers can outperform Convolutional Neural
Networks (CNNs) on vision and audio tasks. However, one of the main shortcomings of
transformer models, compared to the well-established CNNs, is the computational
complexity. Compute and memory complexity grow quadratically with the input length.
Therefore, there has been extensive work on optimizing transformers, but often at the
cost of lower predictive performance. In this work, we propose a novel method to optimize
and regularize transformers on audio spectrograms. The proposed models achieve a new
state-of-the-art performance on Audioset and can be trained on a single consumer-grade
GPU. Furthermore, we propose a transformer model that outperforms CNNs in terms of both
performance and training speed.

[[paper](hhttps://arxiv.org/abs/2110.05069), [train code](https://github.com/kkoutini/PaSST),
[inference code](https://github.com/kkoutini/passt_hear21)]

<hr class="divider-line"/>

## Descript/MARL
<div class="team-members">
    <p>
        Ho-Hsiang Wu<sup>1</sup>, Prem Seetharaman<sup>2</sup>
    </p>
    <div class="team-affiliation">
        <p><sup>1</sup>Music and Audio Research Laboratory (MARL) New York University</p>
        <p><sup>2</sup>Descript</p>
    </div>
</div>

#### Abstract
We propose Wav2CLIP, a robust audio representation learning method by distilling from
Contrastive Language-Image Pre-training (CLIP). Wav2CLIP projects audio into a shared
embedding space with images and text, which enables multimodal applications such as
zero-shot classification, and cross-modal retrieval. Furthermore, Wav2CLIP needs just
~10% of the data to achieve competitive performance on downstream tasks compared with
fully supervised models, and is more efficient to pre-train than competing methods as
it does not require learning a visual model in concert with an auditory model.

[[paper](https://arxiv.org/abs/2110.11499), [code](https://github.com/descriptinc/lyrebird-wav2clip)]

<hr class="divider-line"/>

## NTU-GURA
<div class="team-members">
    <p>
        Tung-Yu Wu (EE)<sup>1</sup>, Chen-An Li (CSIE)<sup>1</sup>, Tzu-Han Lin (CSIE)<sup>1</sup>, Tsu-Yuan Hsu (CSIE)<sup>1</sup>, advised by Hung-Yi Lee<sup>1</sup>
    </p>
    <div class="team-affiliation">
        <p><sup>1</sup>National Taiwan University</p>
    </div>
</div>

#### Abstract
Rather than focusing on the development of one single huge SSL models, we investigate
the collaboration of multiple models for feature representation. Experiments are
conducted to examine the effects of intra- and inter-model feature operations such as
early fusion and concatenation.

[[code](https://github.com/tony10101105/HEAR-2021-NeurIPS-Challenge---NTU)]

<hr class="divider-line"/>

## RedRice
<div class="team-members">
    <p>
        Heinrich Dinkel<sup>1</sup>
    </p>
    <div class="team-affiliation">
        <p><sup>1</sup>Xiaomi AI Lab.</p>
    </div>
</div>

#### Abstract
Our system consists of an EfficientNet trained on the publicly available Audioset
dataset using weak supervision. Our approach focuses on using an EfficientNet-B2 with
decision-level aggregation to embed an input audio sequence into a fixed sized 320ms
long embedding. Different from other contestants on which trained their models on
Audioset, our proposed approach is lightweight in nature (8 Million parameters),
while achieving a similar or better performance in most sound-based
evaluation tasks (i.e., ESC-50, FSDk50, CREMA-D).

[[code](https://github.com/RicherMans/HEAR2021_EfficientLatent)]