---
layout: page
permalink: /research/
title: Research
nav: true
nav_order: 1
---

My research interests lie at the intersection of generative modeling, graph machine learning, signal processing, and optimization, with applications in complex industrial systems. The overarching objective of my research is to build theoretically grounded and computationally efficient methods for complex systems.

**Generative Modeling for Structured and Dynamical Data**

Structured and dynamical data exhibit dependencies across variables and time that provide valuable information for generative modeling. My research asks how these dependencies can inform the generative process itself. I develop flow matching methods that incorporate graph structure into source distributions and probability paths, connecting generative learning with graph signal processing. These works were developed in collaboration with [Jhony H. Giraldo](https://jhonygiraldo.github.io/), [Aref Einizade](https://arefeinizade.github.io/), [Wenbin Wang](https://wenbinwang12.github.io/), and [Olga Fink](https://people.epfl.ch/olga.fink?lang=en).

<img src="{{ "/assets/img/research/graph-spectral-flow-matching.png" | relative_url }}" alt="Overview of GRASP: graph-spectral flow matching and velocity-based anomaly scoring, compared with a linear probability path." class="img-fluid rounded" width="2000" height="788" loading="lazy">

Main publications:

- [Spatiotemporal Imputation with Graph-Informed Flow Matching](https://arxiv.org/pdf/2606.06682) (ICML 2026)
- [Graph-Spectral Flow Matching for Multivariate Time Series Anomaly Detection](https://arxiv.org/pdf/2609.36765) (Preprint)

<br>

**Robust and Generalizable Graph Neural Networks**

Graph neural networks often operate on noisy or perturbed graphs and encounter distribution shifts across domains. These challenges motivate the design of architectures that can adapt to changes in graph structure and data distributions. My research investigates how optimization-based formulations can guide the design and analysis of such architectures. I develop message passing methods that jointly update node representations and graph structures, and study how the underlying optimization objectives inform adaptation across domains. The goal is to improve robustness and knowledge transfer through interpretable architectural designs supported by theoretical analysis. These works were developed in collaboration with [Ziping Zhao](https://faculty.sist.shanghaitech.edu.cn/zhao/), [Zengfeng Huang](https://zengfenghuang.github.io/), [Songtao Lu](https://songtaogithub.github.io/), and [Olga Fink](https://people.epfl.ch/olga.fink?lang=en).

<img src="{{ "/assets/img/research/adaptive-structure-message-passing.png" | relative_url }}" alt="Adaptive-structure message passing jointly updates graph signals and graph structure to produce denoised outputs." class="img-fluid rounded" width="2000" height="471" loading="lazy">

Main publications:

- [Graph Neural Networks With Adaptive Structures](https://doi.org/10.1109/JSTSP.2024.3485892) (IEEE JSTSP 2024)
- [Domain Adaptive Unfolded Graph Neural Networks](https://ojs.aaai.org/index.php/AAAI/article/view/34431) (AAAI 2025)

<br>

**Optimization and Algorithm Unrolling**

Optimization problems in communication systems often involve coupled variables, nonconvex objectives, and computationally expensive updates. My research focuses on understanding the connections among optimization frameworks and exploiting problem structure to develop efficient algorithms. By connecting minorization-maximization, fractional programming, and gradient-based methods, I investigate how surrogate design and acceleration strategies affect computational complexity and convergence behavior. I also develop algorithm unrolling methods that learn adaptive update rules while preserving the structure and convergence properties of the underlying optimization algorithms. These directions connect mathematical analysis with data-driven algorithm design for beamforming and resource allocation. These works were developed in collaboration with [ZheXian Yang](https://openreview.net/profile?id=%7EZhexian_Yang1), [Ziping Zhao](https://faculty.sist.shanghaitech.edu.cn/zhao/), [Kaiming Shen](https://kaimingshen.github.io/), [Daniel P. Palomar](https://www.danielppalomar.com/), and [Wei Yu](https://www.comm.utoronto.ca/~weiyu/).

<img src="{{ "/assets/img/research/mm-net-recurrent-unfolding.png" | relative_url }}" alt="MM-Net recurrent unfolding architecture with learned adaptive majorization parameters and projected beamforming updates." class="img-fluid rounded" width="2000" height="538" loading="lazy">

Main publications:

- [MM-Net: Recurrent Unfolding With Adaptive Majorization for Weighted Sum-Rate Beamforming](https://doi.org/10.1109/LSP.2026.3710384) (IEEE SPL 2026)
- [Discerning and Enhancing the Weighted Sum-Rate Maximization Algorithms in Communications](https://arxiv.org/abs/2311.04546) (Preprint, 2023)
- [Accelerating Quadratic Transform and WMMSE](https://doi.org/10.1109/JSAC.2024.3431523) (IEEE JSAC 2024)
- [Weighted Sum-Rate Maximization for Multi-Hop RIS-Aided Multi-User Communications: A Minorization-Maximization Approach](https://faculty.sist.shanghaitech.edu.cn/zhao/pubs/ZhangZhao-SPAWC21-MM_multi_hop_RIS.pdf) (IEEE SPAWC 2021)
