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
        <li><a href="#id56-ssl">ID56-SSL</a></li>
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

## ID56-SSL
<div class="team-members">
    <p>
        Mashrur Mahmud Morshed<sup>1,2</sup>, Ahmad Omar Ahsan<sup>1</sup>
    </p>
    <div class="team-affiliation">
        <p><sup>1</sup>AI Engineer, Intelligent Machines Ltd.</p>
        <p><sup>2</sup>Systems & Software Lab, IUT</p>
    </div>
</div>

#### Abstract
Our submission involves using lightweight all-MLP architectures on spectrogram inputs, 
and generating scene embeddings by concatenation followed by temporal interpolation. 
We have two submission variants: kwmlp (Keyword-MLP) and audiomlp.

Keyword-MLP[1]† is a model for keyword spotting on Google Speech Commands V2-35. 
It consists of identical, sequentially stacked gated MLP (gMLP[2]‡) blocks and accepts 
MFCCs as inputs. The model has an isotropic architecture: all blocks are identical and 
have the same input and output size of (T, 64). The timestamp embeddings of size 64 
are obtained by simply removing the classification head at the end.

The audiomlp submission consists of the Audio-MLP-Autoencoder, a denoising autoencoder 
where the encoder and decoder both are similar sequentially stacked gMLP blocks. The 
‘noise’ for the autoencoder is Spectral Augmentation, i.e. zeroed out time and 
frequency bands. There is a narrow bottleneck between the encoder and the decoder, 
which outputs the timestamp embeddings of size 8.

Both approaches use the same scene embedding algorithm. The raw audios of arbitrary
duration are split into 1s chunks and then converted to spectrograms (with a 10ms hop
length) and passed to the models. The output timestamp embeddings for each 1s chunk are
first concatenated across the time axis. We then reduce the time dimension with linear
interpolation and finally flatten to obtain the scene embedding vector. As opposed to
the naive averaging approach, we tried interpolation with the aim of conserving temporal
information in the scene embeddings.

<div class="bibliography">
<p>
    [1] Morshed, Mashrur M., and Ahmad Omar Ahsan. "Attention-Free Keyword Spotting." 
    arXiv preprint arXiv:2110.07749 (2021). †Under review at ICASSP-2022.
</p>
<p>
    [2] Liu, Hanxiao, Zihang Dai, David R. So, and Quoc V. Le. "Pay Attention to MLPs."
    arXiv preprint arXiv:2105.08050 (2021). ‡Accepted to NeurIPS-2021.
</p>
</div>

[[paper](https://arxiv.org/abs/2110.07749), [code](https://github.com/ID56/HEAR-2021-Audio-MLP)]

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