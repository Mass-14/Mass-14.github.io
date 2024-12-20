---
layout: default
title: sample 
subtitle: There's lots to learn!
gh-repo: daattali/beautiful-jekyll
gh-badge: [star, fork, follow]
tags: [test]
comments: true
mathjax: true
author: Bill Smith

---



<div class="tab-container">
  <ul class="tabs">
    <li class="tab active" onclick="openTab(event, 'tab1')">Health</li>
    <li class="tab" onclick="openTab(event, 'tab2')">Gender Equality</li>
    <li class="tab" onclick="openTab(event, 'tab3')">Technology</li>
    <li class="tab" onclick="openTab(event, 'tab4')">WWII</li>
    <li class="tab" onclick="openTab(event, 'tab5')">Cold War</li>
    <li class="tab" onclick="openTab(event, 'tab6')">Vietnam War</li>
  </ul>

  <div id="tab1" class="tab-content active">

    <h2 id="health-theme">Health theme</h2>
<h3 id="temporality-analysis-of-movies-with-news">Temporality Analysis of Movies with News</h3>
<iframe src="/assets/plots/health/health_movies_and_news_frequency_year.html" width="100%" height="600" frameborder="0"></iframe>

<p>Wow, what a complex graph we have here! Go-Go-Gadget Analysis Mode! Over the years, we see that the behavior of movie and news frequencies are fluctuating much from year to year. However, when looking at the scale, it seems to be rather consistent, isn&#39;t it? Both movies and news show a similar percentage of representation in their respective datasets, with their frequencies intertwining from time to time. Using the Gadget Binoculars, we see that health in the news is less popular in between around 1960 and 1980. That&#39;s an interesting first observation, let&#39;s go now to the genres analysis!</p>
<h3 id="genres-analysis">Genres Analysis</h3>
<iframe src="/assets/plots/health/health_overall_top_genres.html" width="100%" height="600" frameborder="0"></iframe>

<p>Analyzing movies about the health theme is getting more interesting that I expected... Oh, this plot has colors! Looking at the top 10 genres of movies talking about the health theme, we see that almost a quarter of them are of drama genre. Penny is telling me again that it is because most movies are categorized into the genre drama, so it is not surprising. Also, health is a serious topic, and drama is a genre that conveys strong emotions and meaningful stories. </p>
<p>What do we have next? Comedy! It can be used as a way to satirize and criticize aspects of healthcare systems for example, or give hope to the audience. Documentary seems to make sense, because they have an educational intention. Wait, I see that the horror genre is right after the documentary! They are maybe about experiments gone wrong or pandemics... Spooky! </p>
<p>Romance is the next top genre! What a diverse set of top genres in the health-themed. Tragic love stories, love between doctors, they could explain the romance presence in the top 5 genres. Spicy!</p>
<p>To summarize, drama dominates here but health touches a diverse set of genres, from educational documentaries to love stories. Go-Go-Gadget Genres Analysis!</p>
<iframe src="/assets/plots/health/health_top_genres_by_decade.html" width="100%" height="800" frameborder="0"></iframe>

<p>Oh, what’s this? A stacked bar chart showing the top 5 movie genres by decade for health themes! Penny, come take a look at this – it’s colorful and full of mystery! Let&#39;s take out my Gadget Magnifying Glass to get a closer look at this.</p>
<p>Drama seems to be dominant in every decade. That explains the observation we made using the previous graph! Documentaries are relevant starting from the 2000s. While comedies have quite a strong presence over multiple decades, we see that the horror genre starts to make its appearance from the 1970s. Fascinating... The world cinema takes a big place in the top genres in the 2000s. From Penny&#39;s point of view, it reflects the emergence of the movie industry outside of America in these years. Wait a minute, I see that 1960s is quite an interesting decade! We have around 17% of Bollywood movies and musical, as well as satire. The thriller makes an appearance in the 1990s but never comes back as a top genre in the following decade, just like the science fiction genre in the 1970s. If we observe the news dataset talking about health in the 1970s, we can see some articles about research or important medical advancements. However, it does not seem to be significant enough for it to be in a top genre for health movies. Intriguing...</p>
<h3 id="emotions-analysis">Emotions Analysis</h3>
<iframe src="/assets/plots/health/health_emotion_counts.html" width="100%" height="600" frameborder="0"></iframe>

<p>Aha! This graph tells us that movies in the dataset are expressed in a more positive sentiment. Could it be a reflection of hope in movies about health? It seems likely, especially since words associated to anticipation and trust are some of the most frequent emotions expressed. Maybe these movies often aim to show the brighter side such that recovery or overcoming challenges. Inspiring!</p>
<p>Now that we are looking with more attention, negative sentiment is not that far behind! The first negative emotion linked with it is fear, which can be reflected in movies talking about pandemics or life-threatening illnesses that bring a sense of danger, loss or uncertainty.</p>
<p>Penny thinks that there is more positive sentiment in movies about health because even in stories with fear or struggle, there is often a glimmer of hope, with the appearance of a cure or a recovery. It is the classic triumph trope! Go-Go-Gadget Emotion Decoder!</p>
<iframe src="/assets/plots/health/health_emotion_counts_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

<p>Hmmm, this plot is interesting in the way that we see that the positive emotion in health movies is overall dominant, through all decades. But did you see that just like me? A big peak in negative emotion is happening in the 1950s. Using our Gadget Binoculars, wee see that the disgust emotion is in its highest in this decade, and so is anger. Are these fluctuations correlated? Probably!</p>
<p>Looking into the news, we see that most articles talking about health are rather pessimistic from the 1940s. Indeed, a lot of them talk about death of war veterans or mental diseases caused by the trauma of the past years. Furthermore, with the beginning of the Cold War, there were the threats of the nuclear arms, which were frightening. </p>
<iframe src="/assets/plots/health/health_emotion_sentiment_counts.html" width="100%" height="600" frameborder="0"></iframe>

<h3 id="sentiment-analysis">Sentiment Analysis</h3>
<iframe src="/assets/plots/health/health_all_sentiments.html" width="100%" height="800" frameborder="0"></iframe>

<iframe src="/assets/plots/health/health_combined_sentiment_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

<p>Ah! In this plot, we see that in the 1970s and 1980s, and also in the 2010s, more movies about health have a negative emotion and less with positive.</p>
<div style="display: flex; gap: 10px;">
  <iframe src="/assets/plots/health/health_top_movie_genres_by_negative_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
  <iframe src="/assets/plots/health/health_top_movie_genres_by_positive_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
</div>

<p>We are curious to know what these pie charts are going to tell us! One is about the top genres of movies that are categorized as having positive sentiment, and the other about negative sentiment.</p>
<p>First thing we notice through the Gadget Binoculars, is that drama is still the top genre for both sentiments. But, surprise! So is comedy for both of them, you see? It is the second most popular genre for both sentiments. Penny was maybe right about her theory that even in movies featuring fear, there still is a positive side to it, just like a light at the end of a tunnel.</p>
<iframe src="/assets/plots/health/health_sunburst_genres_sentiment_emotions.html" width="100%" height="600" frameborder="0"></iframe>

<h3 id="conclusion">Conclusion</h3>
<p>About health, what is interesting to see is that we expected the topics to be more about disease, illness. However, it involved a lot of themes about health in general, for example lifestyle, or healthcare, which can explain the dominance of positive emotions in the portrayal of movies through the decades. But remember, we still observed a peak in the 1950s of negative emotions in movies talking about health, and that was, as we guessed, because of the societal environment and historical context. What we may deduce from this is that, regarding health, movies tend to represent the people&#39;s feelings, in other words, project their fears into the movie plots, rather than try to divert the attention. However, that was dominant only in the cold war and post-war years, else the overall sentiment is more positive! That reflects hope that humans have concerning their health, maybe through different progress in medecine, or just the will to live a better lifestyle, doing more sport, eating more healthy.</p>




  </div>

  <div id="tab2" class="tab-content">
    <h2>Content for Tab 2</h2>
    <p>This is the content for the second tab.</p>
  </div>

  <div id="tab3" class="tab-content">
    <h2>Content for Tab 3</h2>
    <p>This is the content for the third tab.</p>
  </div>
  
  <div id="tab4" class="tab-content">
    <h2>Content for Tab 3</h2>
    <p>This is the content for the third tab.</p>
  </div>  
  
  <div id="tab5" class="tab-content">
    <h2>Content for Tab 3</h2>
    <p>This is the content for the third tab.</p>
  </div>  
  
  <div id="tab6" class="tab-content">
    <h2>Content for Tab 3</h2>
    <p>This is the content for the third tab.</p>
  </div>
</div>

<script src="{{ 'assets/js/scripts.js' | relative_url }}"></script>


<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

# TODO delete below  
{: .box-success}
This is a demo post to show you how to write blog posts with markdown.  I strongly encourage you to [take 5 minutes to learn how to write in markdown](https://markdowntutorial.com/) - it'll teach you how to transform regular text into bold/italics/tables/etc.<br/>I also encourage you to look at the [code that created this post](https://raw.githubusercontent.com/daattali/beautiful-jekyll/master/_posts/2020-02-28-sample-markdown.md) to learn some more advanced tips about using markdown in Beautiful Jekyll.

**Here is some bold text**

## Here is a secondary heading

[This is a link to a different site](https://deanattali.com/) and [this is a link to a section inside this page](#local-urls).

Here's a table:

| Number | Next number | Previous number |
| :------ |:--- | :--- |
| Five | Six | Four |
| Ten | Eleven | Nine |
| Seven | Eight | Six |
| Two | Three | One |

You can use [MathJax](https://www.mathjax.org/) to write LaTeX expressions. For example:
When \\(a \ne 0\\), there are two solutions to \\(ax^2 + bx + c = 0\\) and they are $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

How about a yummy crepe?

![Crepe](https://beautifuljekyll.com/assets/img/crepe.jpg)

It can also be centered!

![Crepe](https://beautifuljekyll.com/assets/img/crepe.jpg){: .mx-auto.d-block :}

Here's a code chunk:

~~~
var foo = function(x) {
  return(x + 5);
}
foo(3)
~~~

And here is the same code with syntax highlighting:

```javascript
var foo = function(x) {
  return(x + 5);
}
foo(3)
```

And here is the same code yet again but with line numbers:

{% highlight javascript linenos %}
var foo = function(x) {
  return(x + 5);
}
foo(3)
{% endhighlight %}

## Boxes
You can add notification, warning and error boxes like this:

### Notification

{: .box-note}
**Note:** This is a notification box.

### Warning

{: .box-warning}
**Warning:** This is a warning box.

### Error

{: .box-error}
**Error:** This is an error box.

## Local URLs in project sites {#local-urls}

When hosting a *project site* on GitHub Pages (for example, `https://USERNAME.github.io/MyProject`), URLs that begin with `/` and refer to local files may not work correctly due to how the root URL (`/`) is interpreted by GitHub Pages. You can read more about it [in the FAQ](https://beautifuljekyll.com/faq/#links-in-project-page). To demonstrate the issue, the following local image will be broken **if your site is a project site:**

![Crepe](/assets/img/crepe.jpg)

If the above image is broken, then you'll need to follow the instructions [in the FAQ](https://beautifuljekyll.com/faq/#links-in-project-page). Here is proof that it can be fixed:

![Crepe]({{ '/assets/img/crepe.jpg' | relative_url }})