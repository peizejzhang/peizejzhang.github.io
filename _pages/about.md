---
permalink: /
title: "Hi, I am Peize Zhang."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I am a [Master of Science in Applied Computing (MScAC)](https://mscac.utoronto.ca/) student at the University of Toronto. Previously, I graduated with a BSc (Honours) in Mathematics and Statistics also at U of T.

My research focuses on developing robust and efficient machine learning solutions with theoretical guarantees. I am particularly interested in preference learning and decision making under heterogeneous or limited feedback. I currently work on LLM post-training and multi-agent forecasting.

Email: peize [dot] zhang [at] mail [dot] utoronto [dot] ca

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
