---
permalink: /
title: "Hi, I am Peize Zhang."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I am a [Master of Science in Applied Computing (MScAC)](https://mscac.utoronto.ca/) student at the University of Toronto. Previously, I graduated with a BSc (Honours) in Mathematics and Statistics also at U of T.

My research lies at the intersection of machine learning and optimization. I am interested in developing robust and efficient machine learning solutions with theoretical guarantees. I also like using statistical theory to address practical engineering problems in LLM post-training and recommender systems. I currently work on nonparametric methods for mixture models.

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
