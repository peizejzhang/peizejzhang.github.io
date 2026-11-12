---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

<style>
  .archive > .page__title {
    display: none;
  }
</style>

## Papers

### [Nonparametric Maximum Likelihood Estimation for Mixtures of Logistic Regressions](https://arxiv.org/abs/2611.14445)

Muheng Li, **Peize Zhang**, and Xin Bing  
*Preprint, 2026*

**Abstract**: We study mixtures of logistic regressions with an unspecified mixing distribution to model binary responses in heterogeneous populations. We establish finite-sample error bounds for a sieve nonparametric maximum likelihood estimator under fixed and random designs. For computation, we develop a finite-particle algorithm with global convergence guarantees for any fixed dataset. When the true mixing distribution is finitely supported, we further establish uniform global convergence guarantees and derive error bounds that separate algorithmic and statistical errors. Our analysis also yields a denoising bound for the mixing distribution and an identifiability result that complements existing results in the literature.

[arXiv](https://arxiv.org/abs/2611.14445)

---

## Projects

### [HotSeat: An AI Panel Interview Practice System](https://github.com/zyf265600/boson-ai-hackathon-hotseat-submission)

**Abstract**： A voice-based system for practising project interviews with a three-person AI panel. A real-time moderator leads the session, while two interviewers use language models to generate follow-up questions from the candidate’s answers. The system uses speech recognition and synthesized voices for conversational turn-taking, allowing candidates to interrupt or ask for clarification. Users can choose from 100 interviewer avatars that can be animated during the conversation. After each interview, a structured report evaluates the candidate’s performance and provides suggestions for improvement.

[View repository](https://github.com/zyf265600/boson-ai-hackathon-hotseat-submission) · <a href="{{ '/assets/hotseat-slides.pdf' | relative_url }}" data-hotseat-slides>View slides</a>

---

### [Cocoa Price Forecasting with SARIMA and GAM](https://github.com/peizejzhang/Time-Series-Forecasting)

**Abstract**： A time series forecasting project for modeling cocoa prices with SARIMA and generalized additive models (GAMs). Using historical prices alongside exchange-rate and climate data, the project compares SARIMA’s ability to capture temporal dependence and seasonality with GAM’s ability to model nonlinear effects from external variables. Performance is evaluated on held-out data using RMSE.

[View repository](https://github.com/peizejzhang/Time-Series-Forecasting) · [Read report](https://github.com/peizejzhang/Time-Series-Forecasting/blob/main/STA457_Final_Project.pdf)

---

### [A Fast and Accurate Classifier for YouTube Spam Detection](https://github.com/peizejzhang/youtube-spam-classification)

**Abstract**： A machine learning project for detecting spam comments on YouTube. It systematically evaluates combinations of tokenization techniques, text representations, and classification models using stratified cross-validation. Each configuration is assessed jointly based on its F1 score and inference latency, enabling the selection of an appropriate tokenization–representation–classifier pipeline under different deployment constraints. A standardized two-dimensional evaluation framework is used to identify Pareto-efficient configurations that achieve favorable trade-offs between predictive performance and computational efficiency.

[View repository](https://github.com/peizejzhang/youtube-spam-classification) · [Read report](https://github.com/peizejzhang/youtube-spam-classification/blob/main/Final_Paper.pdf)

<script src="{{ '/assets/hotseat-slides.js' | relative_url }}" defer></script>

