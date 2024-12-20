---
layout: default
title: inspector gADAget
subtitle: There's lots to learn!
gh-repo: daattali/beautiful-jekyll
gh-badge: [star, fork, follow]
tags: [test]
comments: true
mathjax: true
author: Bill Smith
---



# Introduction

{: .box-mission}
**TOP SECRET MISSION**
<br>
*To: Inspectors gADAget*
<br>
<br>
Inspectors gADAget,
<br>
The world is counting on you again! This time, your mission is to investigate how movies reflect culture and society across time. Movies often reflect the culture and society of a certain time and represent topics people are interested in. Your task is to uncover how themes and topics in movies have evolved over time and compare these trends to those observed in newspapers. 
<br>
To help you, we have provided access to the CMU Movie Summary Corpus, a data containing information on over 42,000 movies. With this dataset, you’ll analyze how societal topics are represented in movies and how these themes change with time.
<br>
But that’s not all! Your challenge doesn’t end with movies: you also have to examine newspaper data to identify if the same topics are reflected in the news, and how. Look for correlations and time shifts between movies and the articles.
<br> 
This mission is crucial, Gadget, and only you can complete it. Analyze the data, connect the dots, and uncover the story that links our society, our movies, and our headlines.
<br>
<br>
This message will self-destruct.

Right, Chief! You can count on us!
<br>
We’ll uncover the most important topics using Go-Go-Gadget Topic Modeling on both the CMU Movie Summary Corpus and the New York Times news article dataset. With this, we will compare how these themes are represented over time across these two different ways.

As a dedicated team of inspectors, we gladly accept this challenge! Let’s get to work!

<br>

## The inspectors

<div style="display: flex; justify-content: space-around; align-items: center; flex-wrap: wrap; gap: 20px;">
    
  <div style="text-align: center;">
    <img src="/assets/img/IG_perso_loupe.png" alt="Member 1" style="width: 180px; height: 180px; border-radius: 10px; margin-top: 20px;">
    <p>Sarah Badr</p>
  </div>
  
  <div style="text-align: center;">
    <img src="/assets/img/IG_perso_veste.png" alt="Member 2" style="width: 180px; height: 180px; border-radius: 10px; margin-top: 20px;">
    <p>Massimo Berardi</p>
  </div>
  
  <div style="text-align: center;">
    <img src="/assets/img/IG_perso_cou.png" alt="Member 3" style="width: 180px; height: 180px; border-radius: 10px; margin-top: 20px;">
    <p>Antoine Buttier</p>
  </div>
  
  <div style="text-align: center;">
    <img src="/assets/img/IG_perso_jumelle-dezoom.png" alt="Member 4" style="width: 180px; height: 180px; border-radius: 10px; margin-top: 20px;">
    <p>Shuli Jia</p>
  </div>
  
  <div style="text-align: center;">
    <img src="/assets/img/IG_perso_patins-giro.png" alt="Member 5" style="width: 180px; height: 180px; border-radius: 10px; margin-top: 20px;">
    <p>Clémentine Jordan</p>
  </div>
</div>



<br>

## Datasets

Team, listen closely! This is a top priority mission, and we have two powerful datasets in our Gadget Mallet to accomplish our task. Pay attention because these resources are our lifeline!

#### First Dataset: The CMU Movies Summary Corpus

From Carnegie Mellon University, we got our hands on the Movies Summary Corpus. This dataset contains 81'741 movies documented up until the year 2012. It’s a really rich source of information, folks! The movies metadata seems to be of great interest for your mission. Here is what you can find in this toolkit: movie titles, release dates, countries of production, genres and plot summaries. You have access to the plot summaries of a total of 42’306 movies, which is perfect to detect relevant topics!
Use them all wisely!

#### Second Dataset: The New York Times Articles

Straight from Kaggle, we found an impressive [New York Times dataset](https://www.kaggle.com/datasets/tumanovalexander/nyt-articles-data). This dataset covers news from 1920 to 2020, which represent an entire century of newsworthy moments. Here is what it gives us:

- Publication year of each article.
- Article titles: a clear overview on subjects making headlines.
- Excerpts: little snippets of the articles.

This is a massive resource full of insights. 
Together, these datasets are a dynamic duo, ready to help us achieve our mission!

So, team, let’s stay sharp and stay focused! I am counting on you to deliver good results. Dismissed!

<br>

# Themes extraction 


### What is in our GADAget Mallet?

Our GADAget Mallet is getting heavy now that the Boss gave us the datasets. Let's see what tools we have to accomplish this mission! 

- Preprocessing gADAget: this is perfect to clean our datasets, as it preprocesses text by lowercasing all characters, removing stop words and punctuation. Now, we will have a clean text to be able to analyze it correctly!
- Topic modeling gADAget: LDA and LSI to find inspiration in the news. This will allow us to get a glimpse on very frequent topics in the news.
- Semantic search gADAget: Model all-MiniLM-L6-v2 on Hugging Face, (don't be jealous, if you want to have it in your mallet as well, you can find it here [Hugging Face](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2). It will be of great help to find our topics of interest in both the news and movies datasets. We just have to encode the movies’ plot summaries or news titles and excerpts and a query corresponding to our topic of interest, compute the cosine similarity between the two, take all the movies and news up to a certain similarity threshold and tada ! We have relevant news and movies. Magic no? 
- Plotting gADAget: a very useful and amazing tool called Plotly to generate plots, and visualize the data we process.


### Theme extraction

Using our  gADAgets on the news datasets, and obtain a few themes that have a strong presence in the dataset, such as migration, health, economy, war, technology. Hmm, the war theme seems to be too broad, let's use the gADAgets again to refine the themes: Cold War, World War II, Vietnam War seem to be interesting, right? Inspectors gADAgets, choose one theme each and Go-Go-Gadget Data Analysis!

Wait, there seems to be some issues with some themes. Economy and migration topics have too few data to analyze, we would not be able to do a great job with these ones. Let's focus on the following themes: Health, Gender Equality, Technology, Vietnam War, World War II and Cold War. Yes, there are themes that we chose ourselves out of interest.

Let's be strategic and proceed in the following way: <br>
1. Compare the evolution of frequencies between the theme in movies and news. <br>
2. Analyze the evolution of genres in time of the movies with that particular theme. Find, if possible, a link with the news datasets that can explain the presence of certain rather than others. Are the articles in news reflected in the movies? Do we see any correlation? <br>
3. Emotion analysis in the movies: which emotions dominate in the movie dataset about a certain theme? How does it evolve through time? <br>
4. Sentiment analysis in the movies: what overall sentiment do we find in these movies?

Now we are ready to investigate for our mission through data analysis!

## Themes frequency in movies and news


<br>

















## Health theme


### Temporality Analysis of Movies with News

<iframe src="/assets/plots/health/health_movies_and_news_frequency_year.html" width="100%" height="600" frameborder="0"></iframe>

Wow, what a complex graph we have here! Go-Go-Gadget Analysis Mode! Over the years, we see that the behavior of movie and news frequencies are fluctuating much from year to year. However, when looking at the scale, it seems to be rather consistent, isn't it? Both movies and news show a similar percentage of representation in their respective datasets, with their frequencies intertwining from time to time. Using the Gadget Binoculars, we see that health in the news is less popular in between around 1960 and 1980. That's an interesting first observation, let's go now to the genres analysis!
<br>

### Genres Analysis

<iframe src="/assets/plots/health/health_overall_top_genres.html" width="100%" height="600" frameborder="0"></iframe>

Analyzing movies about the health theme is getting more interesting that I expected... Oh, this plot has colors! Looking at the top 10 genres of movies talking about the health theme, we see that almost a quarter of them are of drama genre. Penny is telling me again that it is because most movies are categorized into the genre drama, so it is not surprising. Also, health is a serious topic, and drama is a genre that conveys strong emotions and meaningful stories. 

What do we have next? Comedy! It can be used as a way to satirize and criticize aspects of healthcare systems for example, or give hope to the audience. Documentary seems to make sense, because they have an educational intention. Wait, I see that the horror genre is right after the documentary! They are maybe about experiments gone wrong or pandemics... Spooky! 

Romance is the next top genre! What a diverse set of top genres in the health-themed. Tragic love stories, love between doctors, they could explain the romance presence in the top 5 genres. Spicy!

To summarize, drama dominates here but health touches a diverse set of genres, from educational documentaries to love stories. Go-Go-Gadget Genres Analysis!

<iframe src="/assets/plots/health/health_top_genres_by_decade.html" width="100%" height="800" frameborder="0"></iframe>

Oh, what’s this? A stacked bar chart showing the top 5 movie genres by decade for health themes! Penny, come take a look at this – it’s colorful and full of mystery! Let's take out my Gadget Magnifying Glass to get a closer look at this.

Drama seems to be dominant in every decade. That explains the observation we made using the previous graph! Documentaries are relevant starting from the 2000s. While comedies have quite a strong presence over multiple decades, we see that the horror genre starts to make its appearance from the 1970s. Fascinating... The world cinema takes a big place in the top genres in the 2000s. From Penny's point of view, it reflects the emergence of the movie industry outside of America in these years. Wait a minute, I see that 1960s is quite an interesting decade! We have around 17% of Bollywood movies and musical, as well as satire. The thriller makes an appearance in the 1990s but never comes back as a top genre in the following decade, just like the science fiction genre in the 1970s. If we observe the news dataset talking about health in the 1970s, we can see some articles about research or important medical advancements. However, it does not seem to be significant enough for it to be in a top genre for health movies. Intriguing...

### Emotions Analysis 

<iframe src="/assets/plots/health/health_emotion_counts.html" width="100%" height="600" frameborder="0"></iframe>

Aha! This graph tells us that movies in the dataset are expressed in a more positive sentiment. Could it be a reflection of hope in movies about health? It seems likely, especially since words associated to anticipation and trust are some of the most frequent emotions expressed. Maybe these movies often aim to show the brighter side such that recovery or overcoming challenges. Inspiring!

Now that we are looking with more attention, negative sentiment is not that far behind! The first negative emotion linked with it is fear, which can be reflected in movies talking about pandemics or life-threatening illnesses that bring a sense of danger, loss or uncertainty.

Penny thinks that there is more positive sentiment in movies about health because even in stories with fear or struggle, there is often a glimmer of hope, with the appearance of a cure or a recovery. It is the classic triumph trope! Go-Go-Gadget Emotion Decoder!

<iframe src="/assets/plots/health/health_emotion_counts_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

Hmmm, this plot is interesting in the way that we see that the positive emotion in health movies is overall dominant, through all decades. But did you see that just like me? A big peak in negative emotion is happening in the 1950s. Using our Gadget Binoculars, wee see that the disgust emotion is in its highest in this decade, and so is anger. Are these fluctuations correlated? Probably!

Looking into the news, we see that most articles talking about health are rather pessimistic from the 1940s. Indeed, a lot of them talk about death of war veterans or mental diseases caused by the trauma of the past years. Furthermore, with the beginning of the Cold War, there were the threats of the nuclear arms, which were frightening. 

<iframe src="/assets/plots/health/health_emotion_sentiment_counts.html" width="100%" height="600" frameborder="0"></iframe>

### Sentiment Analysis

<iframe src="/assets/plots/health/health_all_sentiments.html" width="100%" height="800" frameborder="0"></iframe>

<iframe src="/assets/plots/health/health_combined_sentiment_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

Ah! In this plot, we see that in the 1970s and 1980s, and also in the 2010s, more movies about health have a negative emotion and less with positive.

<div style="display: flex; gap: 10px;">
  <iframe src="/assets/plots/health/health_top_movie_genres_by_negative_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
  <iframe src="/assets/plots/health/health_top_movie_genres_by_positive_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
</div>

We are curious to know what these pie charts are going to tell us! One is about the top genres of movies that are categorized as having positive sentiment, and the other about negative sentiment.

First thing we notice through the Gadget Binoculars, is that drama is still the top genre for both sentiments. But, surprise! So is comedy for both of them, you see? It is the second most popular genre for both sentiments. Penny was maybe right about her theory that even in movies featuring fear, there still is a positive side to it, just like a light at the end of a tunnel.

<iframe src="/assets/plots/health/health_sunburst_genres_sentiment_emotions.html" width="100%" height="600" frameborder="0"></iframe>

### Conclusion

About health, what is interesting to see is that we expected the topics to be more about disease, illness. However, it involved a lot of themes about health in general, for example lifestyle, or healthcare, which can explain the dominance of positive emotions in the portrayal of movies through the decades. But remember, we still observed a peak in the 1950s of negative emotions in movies talking about health, and that was, as we guessed, because of the societal environment and historical context. What we may deduce from this is that, regarding health, movies tend to represent the people's feelings, in other words, project their fears into the movie plots, rather than try to divert the attention. However, that was dominant only in the cold war and post-war years, else the overall sentiment is more positive! That reflects hope that humans have concerning their health, maybe through different progress in medecine, or just the will to live a better lifestyle, doing more sport, eating more healthy.


## WWII


### Temporality Analysis of Movies with News

<iframe src="/assets/plots/ww2/ww2_movies_and_news_frequency_year.html" width="100%" height="600" frameborder="0"></iframe>

WWII movies reached their zenith during the 1940s, with nearly 1 in 5 movies tackling the theme. This peak was followed by a steady decline in the 1950s and 1960s, as society gradually moved on. However, the war’s shadow persisted, influencing narratives for decades. Aha! The long tail of history’s impact is clear.

News articles on WWII surged alongside real-time events, capturing the immediacy of the conflict. In contrast, movies—due to their longer production cycles—often lagged behind or even predicted trends. Aha! Between 1937 and 1941, movies seemed to anticipate real-world developments. Could it be geopolitical tensions influencing creative minds? Fascinating!

<br>

<iframe src="/assets/plots/ww2/ww2_movies_and_news_frequency_decade.html" width="100%" height="600" frameborder="0"></iframe>

Movies produced before 1940 often blurred the lines between WWI and WWII themes, influenced by rising tensions and the looming threat of another global conflict. This adds a nuanced historical dimension to the dataset.

Over decades, movies maintained a greater focus on WWII than news, solidifying cinema’s role as a medium for preserving and interpreting historical narratives. This enduring focus underscores cinema’s unique ability to memorialize and reframe history for new generations. The correlation between the decreasing WWII presence in both media relates a more general disinterest.

<br>

<!-- ### Temporality Analysis of Movies -->

### Genres Analysis

<!-- <iframe src="/assets/plots/ww2/ww2_overall_top_genres.html" width="100%" height="600" frameborder="0"></iframe> -->

<iframe src="/assets/plots/ww2/ww2_top_genres_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

Beyond the obvious dominance of drama and war, early wartime propaganda flourished in the 1930s and 1940s, rallying public morale. By the 2000s, historical and documentary films gained prominence, reflecting a shift toward reflective storytelling and educational narratives. Go-Go-Gadget Genre Tracker!
Comedies offered lighter narratives even during wartime, showcasing resilience and the human spirit’s capacity for humor amid hardship. This juxtaposition of gravity and levity adds depth to the cinematic portrayal of WWII.

<br>

### Emotions Analysis 

<iframe src="/assets/plots/ww2/ww2_emotion_counts.html" width="100%" height="600" frameborder="0"></iframe>

Fear, trust, and anger dominate the emotional spectrum, vividly portraying the war's tension and the psychological impact it had on audiences and creators alike. Joy, while present, is overshadowed by the heavier emotions, reflecting the gravity of the times. Aha! The emotional tides tell a tale of their own.

<br>

<iframe src="/assets/plots/ww2/ww2_emotion_counts_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

Ah, fascinating! We observe an intriguing trend, folks: up until the 1940s, positive emotions dominate over negative ones. But after that, negative emotions take the lead—always! A common tactic during wartime, you say? Why, of course, positive movies are often used to keep the population motivated! Think propaganda or romance films, for example.
Now, zooming into the 1960s, we notice a drastic decline in positive and trust-based emotions, while negative emotions like fear and anger rise. What’s going on here? Let’s dig deeper! We can link this shift to two major post-WWII events: the construction of the Berlin Wall and the Cuban Missile Crisis. These Cold War flashpoints, stemming from the long-term consequences of WWII, help explain the emotional landscape we see in this analysis. Mystery solved!

<br>

<iframe src="/assets/plots/ww2/ww2_emotion_sentiment_counts.html" width="100%" height="600" frameborder="0"></iframe>

<br>

### Sentiment Analysis

<!-- <iframe src="/assets/plots/ww2/ww2_all_sentiments.html" width="100%" height="800" frameborder="0"></iframe> -->

<iframe src="/assets/plots/ww2/ww2_combined_sentiment_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

Ah-ha! What do we have here? A clear pattern: negative sentiments leading the charge over positive ones! But wait—there are two distinct peaks, one in 1960 and the other in 2000. What could this mean? Well, it seems these spikes correspond to times when the fear of a new global conflict was at its highest. Tension mounting, people anxious, and the emotional landscape shifting. Case closed!

<br>

<!-- <div style="display: flex; gap: 10px;">
  <iframe src="/assets/plots/ww2/ww2_top_movie_genres_by_negative_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
  <iframe src="/assets/plots/ww2/ww2_top_movie_genres_by_positive_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
</div> -->

<!-- <iframe src="/assets/plots/ww2/ww2_sunburst_genres_sentiment_emotions.html" width="100%" height="600" frameborder="0"></iframe> -->


### Conclusion
WWII-themed movies not only documented historical realities but also mirrored and influenced public sentiment. This story reveals how cinema became a vessel for collective memory and emotion, offering a timeless exploration of humanity’s resilience and vulnerabilities.



# Conclusion


<br>



