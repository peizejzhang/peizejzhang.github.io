---
permalink: /
title: "Hi, I am Peize Zhang."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I am a Master of Science in Applied Computing (MScAC) student at the University of Toronto. I also hold a bachelor's degree in Mathematics and Statistics from U of T.

I am interested in developing robust and efficient machine learning solutions with theoretical guarantees. My research interests include:

- Machine learning theory
- Optimization

I also have hands-on engineering experience in:

- Designing and building end-to-end machine learning systems for financial decision-making
- Large language model post-training and reinforcement learning from human feedback (RLHF)

Outside of work, I enjoy playing board games and badminton, as well as watching movies.

<section class="news-section" aria-labelledby="news-heading">
  <h2 id="news-heading">News</h2>
  <div class="news-list">
    {% for item in site.data.news %}
      <article class="news-item">
        <time class="news-item__date" datetime="{{ item.datetime }}">{{ item.date }}</time>
        <div class="news-item__content">{{ item.content | markdownify }}</div>
      </article>
    {% endfor %}
  </div>
</section>
