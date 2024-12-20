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


## What is in our GADAget Mallet?

Our GADAget Mallet is getting heavy now that the Boss gave us the datasets. Let's see what tools we have to accomplish this mission! 

- Preprocessing gADAget: this is perfect to clean our datasets, as it preprocesses text by lowercasing all characters, removing stop words and punctuation. Now, we will have a clean text to be able to analyze it correctly!
- Topic modeling gADAget: LDA and LSI to find inspiration in the news. This will allow us to get a glimpse on very frequent topics in the news.
- Semantic search gADAget: Model all-MiniLM-L6-v2 on Hugging Face, (don't be jealous, if you want to have it in your mallet as well, you can find it here [Hugging Face](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2). It will be of great help to find our topics of interest in both the news and movies datasets. We just have to encode the movies’ plot summaries or news titles and excerpts and a query corresponding to our topic of interest, compute the cosine similarity between the two, take all the movies and news up to a certain similarity threshold and tada ! We have relevant news and movies. Magic no? 
- Plotting gADAget: a very useful and amazing tool called Plotly to generate plots, and visualize the data we process.


## Theme extraction

Using our  gADAgets on the news datasets, and obtain a few themes that have a strong presence in the dataset, such as migration, health, economy, war, technology. Hmm, the war theme seems to be too broad, let's use the gADAgets again to refine the themes: Cold War, World War II, Vietnam War seem to be interesting, right? Inspectors gADAgets, choose one theme each and Go-Go-Gadget Data Analysis!

Wait, there seems to be some issues with some themes. Economy and migration topics have too few data to analyze, we would not be able to do a great job with these ones. Let's focus on the following themes: Health, Gender Equality, Technology, Vietnam War, World War II and Cold War. Yes, there are themes that we chose ourselves out of interest.

Let's be strategic and proceed in the following way: <br>
1. Compare the evolution of frequencies between the theme in movies and news. <br>
2. Analyze the evolution of genres in time of the movies with that particular theme. Find, if possible, a link with the news datasets that can explain the presence of certain rather than others. Are the articles in news reflected in the movies? Do we see any correlation? <br>
3. Emotion analysis in the movies: which emotions dominate in the movie dataset about a certain theme? How does it evolve through time? <br>
4. Sentiment analysis in the movies: what overall sentiment do we find in these movies?

Now we are ready to investigate for our mission through data analysis!


<div class="tab-container">
  <ul class="tabs">
    <li class="tab active" onclick="openTab(event, 'tab1')">Tab 1</li>
    <li class="tab" onclick="openTab(event, 'tab2')">Tab 2</li>
    <li class="tab" onclick="openTab(event, 'tab3')">Tab 3</li>
  </ul>

  <div id="tab1" class="tab-content active">
    <h2>Content for Tab 1</h2>
    <p>This is the content for the first tab.</p>
  </div>

  <div id="tab2" class="tab-content">
    <h2>Content for Tab 2</h2>
    <p>This is the content for the second tab.</p>
  </div>

  <div id="tab3" class="tab-content">
    <h2>Content for Tab 3</h2>
    <p>This is the content for the third tab.</p>
  </div>
</div>

<script src="{{ 'assets/js/scripts.js' | relative_url }}"></script>


## Health theme


### Temporality Analysis of Movies with News

<iframe src="/assets/plots/health/health_movies_and_news_frequency_year.html" width="100%" height="600" frameborder="0"></iframe>

Wow, what a complex graph we have here! Go-Go-Gadget Analysis Mode! Over the years, we see that the behavior of movie and news frequencies are fluctuating much from year to year. However, when looking at the scale, it seems to be rather consistent, isn't it? Both movies and news show a similar percentage of representation in their respective datasets, with their frequencies intertwining from time to time. Using the Gadget Binoculars, we see that health in the news is less popular in between around 1960 and 1980. That's an interesting first observation, let's go now to the genres analysis!


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


## World War II


### Temporality Analysis of Movies with News

<iframe src="/assets/plots/ww2/ww2_movies_and_news_frequency_year.html" width="100%" height="600" frameborder="0"></iframe>

It's time to investigate the case of World War II movies and news. WWII movies reached their zenith during the 1940s, with nearly 1 out of 5 movies tackling the theme. This peak was followed by a steady decline in the 1950s and 1960s, as society gradually moved on. However, the war’s shadow persisted, influencing narratives for decades. Aha! The long tail of history’s impact is clear. Fascinating!

Now, onto news articles on WWII! They surged alongside real-time events, capturing the immediacy of the conflict. But here's the twist, movies—due to their longer production cycles—often lagged behind. Or did they really? Between 1937 and 1941, movies seemed to anticipate real-world developments, and thus predicted trends. Could it be geopolitical tensions influencing creative minds? This is getting good!

<iframe src="/assets/plots/ww2/ww2_movies_and_news_frequency_decade.html" width="100%" height="600" frameborder="0"></iframe>

Movies produced before 1940 often blurred the lines between WWI and WWII themes. Why, you ask? That might be influenced by rising tensions and the looming threat of another global conflict. Aha! This adds a nuanced historical dimension to the dataset. Go-Go-Gadget Historical Insight!

Over decades, movies maintained a greater focus on WWII than news, solidifying cinema’s role as a medium for preserving and interpreting historical narratives. This enduring focus underscores cinema’s unique ability to memorialize and reframe history for new generations. Does the correlation between the decreasing WWII presence in both media relate a more general disinterest?

<iframe src="/assets/plots/ww2/ww2_movies_news_interactive_lag.html" width="100%" height="600" frameborder="0"></iframe>
<iframe src="/assets/plots/ww2/ww2_movies_news_cross_correlation.html" width="100%" height="600" frameborder="0"></iframe>


### Genres Analysis

<iframe src="/assets/plots/ww2/ww2_top_genres_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

Go-Go-Gadget Genre Tracker! Beyond the obvious dominance of drama and war, early wartime propaganda flourished in the 1930s and 1940s, rallying public morale. By the 2000s, historical and documentary films gained prominence, reflecting a shift toward reflective storytelling and educational narratives. Interesting!

But wait! Comedies also played their part, by offering lighter narratives even during wartime, showcasing resilience and the human spirit’s capacity for humor amid hardship. This juxtaposition of gravity and levity adds depth to the cinematic portrayal of WWII. What a dynamic evolution of genres!


### Emotions Analysis 

<iframe src="/assets/plots/ww2/ww2_emotion_counts.html" width="100%" height="600" frameborder="0"></iframe>

Whoa, do you see that? Fear, trust, and anger dominate the emotional spectrum, vividly portraying the war's tension and the psychological impact it had on audiences and creators alike. But still! Joy is present, even though it is overshadowed by the heavier emotions, reflecting the gravity of the times. Aha! The emotional tides tell a tale of their own.


<iframe src="/assets/plots/ww2/ww2_emotion_counts_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

Ah, fascinating! We observe an intriguing trend, folks: up until the 1940s, positive emotions dominate over negative ones. But after that, negative emotions take the lead—always! A common tactic during wartime, you say? Why, of course, positive movies are often used to keep the population motivated! Think propaganda or romance films, for example.

Now, let us use the Gadget Magnifying Glass to zoom into the 1960s. We notice a drastic decline in positive and trust-based emotions, while negative emotions like fear and anger rise. What’s going on here? Let’s dig deeper! We can link this shift to two major post-WWII events: the construction of the Berlin Wall and the Cuban Missile Crisis. These Cold War flashpoints, stemming from the long-term consequences of WWII, help explain the emotional landscape we see in this analysis. Mystery solved!


### Sentiment Analysis

<iframe src="/assets/plots/ww2/ww2_combined_sentiment_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

Ah-ha! What do we have here? A clear pattern: negative sentiments leading the charge over positive ones! But wait—there are two distinct peaks, one in 1960 and the other in 2000. What could this mean? Well, it seems that these spikes correspond to times when the fear of a new global conflict was at its highest. Tension mounting, people anxious, and the emotional landscape shifting. Case closed!

<iframe src="/assets/plots/ww2/ww2_sunburst_genres_sentiment_emotions.html" width="100%" height="600" frameborder="0"></iframe>

### Conclusion

WWII-themed movies not only documented historical realities but also mirrored and influenced public sentiment. This story reveals how cinema became a vessel for collective memory and emotion, offering a timeless exploration of humanity’s resilience and vulnerabilities. Go-Go-Gadget Cinema Time Machine!

## Cold War

Let me first give you some context about this theme. The Cold War (~1947–1991) was a period of intense geopolitical tension between the United States (and its allies, representing capitalist democracies) and the Soviet Union (and its allies, representing communist states). Despite the absence of direct military conflict between the two superpowers, this rivalry shaped global politics, economics, and military strategies for decades. Now let's dive into the analysis of this topic's presence in both movies and news datasets!

### Temporality Analysis of Movies with News

<iframe src="/assets/plots/cold_war/cold_war_movies_and_news_frequency_year.html" width="100%" height="600" frameborder="0"></iframe>

<iframe src="/assets/plots/cold_war/cold_war_movies_news_interactive_lag.html" width="100%" height="600" frameborder="0"></iframe>

Surprising findings here, look! There is a lag of 16 years between the movies and news related to cold war. It means that there are 16 years difference for both of them to align thematically. Let me get my Gadget List and see the possible reasons:

- Movies often serve as a medium for processing historical and geopolitical events years after the events have passed.
- Historical distance: a lag allows new perspectives to emerge, moving beyond immediate reactions to provide deeper or more nuanced storytelling.
- The patterns confirm that significant geopolitical events inspire filmmakers, creating a relationship where news inform art.

Look, the plot is clickable. Let's click now on the news legend to see only the evolution of the movies frequency, and let us dive together into more detail.

**1943**: During this year, the themes are Anti-Nazi and positive towards the USSR.

**1960s and 1970s**: <br>
The main themes are:
- Nuclear anxiety: themes often include accidental nuclear strikes, space races, and clashes between democracy and communism.
- War and resistance: stories about World War II and other conflicts dominate, showing resistance movements, espionage, and personal sacrifices during wartime.
- Political satire: some movies use humor and satire to critique political ideologies, societal norms, which reflects Cold War propaganda or domestic issues.
- Technology: themes around technological advancements, particularly in space exploration and military innovation, show the fascination and fear associated with rapid scientific progress during the Cold War.
- Human relationships: a recurring theme highlights the strength of family, friendship, and love as a way to cope with the bigger conflicts.

Don't you find these really interesting?

### Geographical Analysis of Movies

<iframe src="/assets/plots/cold_war/cold_war_movie_countries_world_map.html" width="100%" height="600" frameborder="0"></iframe>

No surprise there! The main countries talking about Cold War are the US and USSR.

### Genres Analysis

<iframe src="/assets/plots/cold_war/cold_war_overall_top_genres.html" width="100%" height="600" frameborder="0"></iframe>

Let's write down together the top 5 movies genres:
- Drama: shows messy conflicts and personal struggles of that time.
- Action/Adventure: action, conflicts and tensions of that time.
- War: well... It seems quite self-explanatory.
- Thriller: espionage, intrigue.
- Comedy: satire, dark-humor.

<iframe src="/assets/plots/cold_war/cold_war_top_genres_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

Are you ready for the following analysis? We had a good use of the Gadget Magnifying Glass to not skip a single detail. Let's look at some relevant decades with each, their interesting genres to analyze.

**1940s**: War, Spy, Propaganda Film.

These reflected the global conflict of World War II, with War films capturing battles and heroism, Spy films diving into espionage and secret missions (just like ours, but shhh), and Propaganda films promoting national unity and ideological messages. These genres mirrored the intense political and social atmosphere of the decade.

**1950s**: Science-Fiction, Action-Adventure. 

Science Fiction explored fears of nuclear technology and the unknown, reflecting Cold War anxieties about the future and space exploration. Action/Adventure brought excitement with the presence of heroes and quests to symbolise the ideological battles of the era. Interesting note: looking into the NYT dataset, we have 4466 news containing the word *nuclear* during this period.

**1960s**: Comedy, World. 

The World genre includes a wide range of stories exploring global conflicts, historical events, and societal changes with war and revolution, cold war and espionage and global perspectives as main themes. Comedy is used in a satire way to criticize the societal norms. That provides a lighter, yet thought-provoking lens on pressing issues of the time.

**1970s** (These are the main years of the cold war): War, Spy.  

The War genre here explores those main themes: resistance, cultural identity, psychological cost of war and oppression, espionage... The Spy genre has themes such as paranoia, espionage and the high-stakes of world secrets and technological competition that defined East-West tensions. Again, looking in the news, 2432 of them are related to the word "espionage" or "spy".

**1980s**: Thriller, Political.

For the political genres, we can see American movies criticizing the Soviets through societal and political structures through allegory and personal stories. Also, we can find explorations of ideological conflicts, cultural divides, and individual struggles under oppressive system. For thriller genres, we also notice paranoia through movies that have assassination attempts and show anxiety all over the world.

**1990s**: World. 

The world genre was dominated by narratives reflecting the geopolitical shifts following the Cold War, such as the dissolution of the Soviet Union, the Balkan wars, and post-communist transitions. We can also see the critique of remaining communist countries from the capitalist ones.

**2010s**: Historical. 

As the world moved further from the Cold War and the collapse of communism, filmmakers in post-Soviet and post-communist states revised history through a new lens, often exploring themes of identity, transformation, and reconciliation. Thus, we see a lot of movies related to cold war, even if it's done.

Aha! How did you find our insights? Interesting, right? We hope you are still with us to keep on analyzing more thrilling data about the Cold War!


### Emotions Analysis 

<iframe src="/assets/plots/cold_war/cold_war_emotion_counts_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

Now is the time to analyze the emotions seen in movies talking about Cold War. Are you ready? First, we notice that there is less positive emotions during the Cold War. To be honest, that is understandable. What next? Oh, there is a decrease of positive emotions from 1940s to 1960s. The American and Soviet Union were allies during WWII, which is showcased here by the positive emotions during this period. But right then, we see a decrease of positive emotions in the period of the Cold War.

Negative emotions like fear, sadness, and disgust are consistently prevalent, reflecting the Cold War's tension, uncertainty, and threats (e.g., nuclear warfare, espionage). Fear shows a peak during the Cold War decades, particularly in the 1950s-1980s, corresponding to tensions during events like the Cuban Missile Crisis. It declines in the 1990s and 2000s, aligning with the Cold War's end.

In the more positive side, trust is relatively low but stable, perhaps reflecting the theme of distrust intrinsic to espionage and ideological rivalry. This emotion increases towards the 1990s. Fascinating!

<iframe src="/assets/plots/cold_war/cold_war_emotion_sentiment_counts.html" width="100%" height="600" frameborder="0"></iframe>

The counts for negative (4902) and positive (4760) sentiments are relatively close, indicating that Cold War narratives balance darker and more hopeful tones. This balance reflects the duality of Cold War that shows fear, mistrust, and conflict alongside resilience, innovation, and eventual resolution. Interesting! The near-equal distribution suggests that Cold War narratives do not focus only on despair or triumph but instead explore the nuanced emotions of the era.


### Sentiment Analysis

<iframe src="/assets/plots/cold_war/cold_war_all_sentiments.html" width="100%" height="600" frameborder="0"></iframe>

Aha! As we would expect, negative sentiment prevails.

<div style="display: flex; gap: 10px;">
  <iframe src="/assets/plots/cold_war/cold_war_top_movie_genres_by_negative_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
  <iframe src="/assets/plots/cold_war/cold_war_top_movie_genres_by_positive_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
</div>

Let us take the Gadget List back!

- Negative sentiment: comedy is prevalent because Cold War comedies often used satire to criticize political ideologies, societal paranoia, and absurdities of the era. They also used humour to show the darker truth of the era. 
- Positive sentiment: world. Many Cold War-themed world cinema narratives from the post-Cold War period focus on reconciliation.

<iframe src="/assets/plots/cold_war/cold_war_sunburst_genres_sentiment_emotions.html" width="100%" height="600" frameborder="0"></iframe>


### Conclusion

What are the main takeoffs of these fascinating analyses? They show how movies connect with their time, often reflecting key events and emotions from history. Films about war, espionage, and politics mirror the worries and struggles of their era, but there is an interesting 16-year lag which corresponds to the time it takes for real-life events to show up on screen. 
The emotions and sentiments in Cold War-themed movies, while varied, often highlight the tension and anxiety of the period. This makes sense—it was a stressful time. In the end, movies do not just tell stories; they capture the feelings and challenges of the people who lived through those moments, helping us understand the past on a deeper level.


## Gender Equality


### Temporality Analysis of Movies with News

<iframe src="/assets/plots/gender_equality/gender_equality_movies_and_news_frequency_year.html" width="100%" height="600" frameborder="0"></iframe>

Folks, now it's time to analyze the topic of gender equality. This first graph shows that movies and news events discussing gender equality themes are connected, but with a time delay. Specifically, there’s a lag of 26 years, meaning societal discussions in the news have influenced movies after about two decades. What could be the reason? Filmmakers may take time to process societal shifts and incorporate them into storytelling.

<iframe src="/assets/plots/gender_equality/gender_equality_movies_news_interactive_lag.html" width="100%" height="600" frameborder="0"></iframe>

<iframe src="/assets/plots/gender_equality/gender_equality_movies_news_cross_correlation.html" width="100%" height="600" frameborder="0"></iframe>

These surprising results show that the frequency at which the theme 'Gender Equality' appears in news and movies with a similar evolution pattern, but with a 26 years time difference. Interesting! This number could indicate that news and movies conform to different generations. This comes as a surprise for us, as we expected the film industry to react more slowly than the news to evolution of our societies. Did you too?

However, a lot of movies from the dataset are small independently produced movies. This could explain why, on the contrary, movie themes are greatly in advance compared to their news counterparts: small independent artists could tend to be visionary, whereas the mainstream news and media talk more about mainstream topics, reducing the relative frequency of niche topics. Isn't is fascinating?

<iframe src="/assets/plots/gender_equality/gender_equality_movie_frequency_decade.html" width="100%" height="600" frameborder="0"></iframe>

The frequency of gender equality-themed movies has been inconsistent, with noticeable spikes in certain decades, such as in the 1940s, 1970s, 1980s, or 2010s.

The 1970s and 1980s peaks could be due to the second feminism wave: it began in the early 1960s and lasted roughly two decades.

<iframe src="/assets/plots/gender_equality/gender_equality_movie_countries_world_map.html" width="100%" height="600" frameborder="0"></iframe>

Look at this map! It shows how movies addressing gender equality in the 1970s and 1980s were distributed globally. That is amazing! Countries like the United States and India were particularly active in exploring these themes through cinema, possibly reflecting their societal conversations around gender at the time. We can see how diverse the representation is, with contributions from regions like Europe, South America, and Asia, showing that gender equality was a shared concern across cultures. 

Let's get the Gadget List ready, here come some fun analyses!

By analyzing the movies during these decades, we can extract four main themes: 
1. Patriarchy and resistance: showcases women's resistance against societal norms, often through acts of defiance or rebellion.
2. Intersection of gender and labor: focuses on women's economic struggles and their fight for labor rights.
3. Sexual liberation and autonomy: portraying women navigating personal freedoms in restrictive environments.
4. Feminist activism.

**1940s**: The 1940s could reflect early explorations of gender roles during or post-World War II, where women entered the workforce and societal norms began to shift.

The themes in 1940s gender equality movies show how society was changing during and after World War II. Widow Remarriage challenges traditional norms, showing women gaining independence and reshaping family life. Education and Women's Rights focus on breaking barriers and pushing for justice and equality in male-dominated spaces.

Patriotism and War Effort highlights women stepping into jobs and roles men left behind during the war, like working in factories, helping with the military, and volunteering. These stories show their strength and how they helped keep society stable while proving their abilities. This theme celebrates their patriotism and determination, paving the way for future gender equality movements. Overall, 1940s films captured a key moment in how women’s roles in society were evolving.

By analyzing this, we extracted 5 main themes: 
1. Gender identity and LGBTQ+ representation
2. Feminism and women's empowerment
3. Body autonomy and sexuality
4. Human trafficking and exploitation
5. Cultural and social intersectionality

This can be explained by several key points:
- In this period, there was more acceptance and support for LGBTQ+ rights, with films exploring personal stories and struggles, influenced by the legalization of same-sex marriage and greater awareness.
- Movements like #MeToo and body positivity brought attention to themes of consent, sexual freedom, and taking control of personal stories.
- There was growing awareness of global human rights issues, which led to films addressing topics like trafficking and exploitation.
- There was a bigger push for diversity and representation in media, with films focusing on the intersection of race, gender, and culture.

<iframe src="/assets/plots/gender_equality/gender_equality_movie_countries_world_map_2010.html" width="100%" height="600" frameborder="0"></iframe>

Look at this plot! It shows that it affects the whole world!!

### Genres Analysis

<iframe src="/assets/plots/gender_equality/gender_equality_overall_top_genres.html" width="100%" height="600" frameborder="0"></iframe>

Now, about genres, what will we observe? Drama takes the lead, likely because it dives into deep societal issues. Comedy approaches gender topics in a lighter, more accessible way. World cinema adds diverse cultural perspectives, while Romance highlights equality in love and relationships. And LGBT-focused films show growing representation and support for inclusivity.

<iframe src="/assets/plots/gender_equality/gender_equality_top_genres_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

Let's dive now into the most interesting and surprising movies genres! Here is a Gadget List we constructed using the genres that caught our eye.

#### LGBT

The LGBT genre appears from the beginning of the 1970s. The 1970s marked significant progress in LGBT rights and visibility, especially after the Stonewall Riots of 1969 in the U.S., which acted as a catalyst for the gay rights movement worldwide.
Media, including movies, began addressing LGBT themes more openly, reflecting the growing activism and demand for representation.

These movies explore various themes: 
1. Exploring LGBTQ+ Lives
These films dive into LGBTQ+ experiences, showing characters' journeys of self-discovery, struggles, and relationships. Examples include movies about gender fluidity, transgender experiences, and same-sex love.

2. Feminism and LGBTQ+ Unity
Some movies highlight how feminism and LGBTQ+ rights come together. They show people working as a team to fight against unfair systems and demand change.

3. Breaking Social Rules
Many films focus on characters who don't fit traditional roles or expectations, showing how they find their own identity and path in life.

4. Fighting for Justice
Activism plays a big part in these stories, with individuals or groups standing up to demand fairness and equal treatment, both personally and in society.

5. Diverse Perspectives
These movies include cultural and social aspects, showing how LGBTQ+ experiences differ around the world. They bring in ideas like religion, race, and local traditions to enrich the stories.

In the news dataset, we can find 1517 news related to the word "gay" and "lgbt" during the 70s.

#### Japanese movies in 1970s

In the 1970s, Japanese cinema explored themes of gender equality through bold narratives that highlighted societal issues and the struggles of women in patriarchal structures:

1. Resistance against oppression: 
The films often portrayed women resisting systemic discrimination and patriarchal structures. This mirrors the rise of feminist movements in Japan during the 1970s, which pushed for workplace equality, reproductive rights, and greater representation in a traditionally male-dominated society.

2. Sexual freedom and choice: 
Themes of women asserting control over their sexuality and decisions reflect societal shifts in Japan post-World War II. The country's rapid modernization and exposure to global ideas of individual freedom created a backdrop where traditional gender roles were increasingly questioned.

3. Marginalization in a patriarchal society:
Stories depicting women feeling trapped or marginalized in societal roles highlight the struggles of modernization. As Japan's economy boomed, women often faced a conflict between traditional expectations and new opportunities, leading to feelings of isolation and a re-evaluation of their societal roles.

#### Predominence of Adult movies

Pornography and sexual freedom is omnipresent in the reduced dataset. As we can see, the Adult genres is part of the top 5 movie genres in the 1960s.
Sexual freedom emphasizes the right of individuals, especially women, to have autonomy over their bodies and sexuality without societal judgment or constraints. This aligns with gender equality by rejecting patriarchal systems that historically restricted women's choices and independence.
This can be related to the introduction of the birth control pill in the 1960s gave women greater control over their reproductive choices. In the 1960s, there's also the Sexual Revolution that challenged traditional norms around sexuality, promoting sexual freedom, bodily autonomy, and gender equality.

In the NYT dataset, there are 1061 news containing the word "birth control" and 14 containing the word "sexual revolution", which might indicate a correlation in the sentiment during the 1960s.

#### World

<iframe src="/assets/plots/gender_equality/gender_equality_movie_countries_world_map_world.html" width="100%" height="600" frameborder="0"></iframe>

The main themes are women’s economic independence, opression resisting, sexual freedom, as explained before.
However, we can see that France and India are the prominent countries.

#### Romance

Romantic movies show key aspects of gender equality within relationships. These romance movies show how love and gender equality can go hand in hand. Women stand up for themselves, break away from traditional roles, and men learn to respect and adapt. They highlight how relationships can be about fairness and mutual support, not control. The stories also touch on family and cultural pressures, showing the importance of making your own choices. At the core, they’re about love built on respect, balance, and equality.

### Emotions Analysis 

<iframe src="/assets/plots/gender_equality/gender_equality_emotion_counts.html" width="100%" height="600" frameborder="0"></iframe>

What an interesting plot here! We see a mix of emotions here. Trust and optimism shine through, showing progress and hope for gender equality. But there's also negativity, highlighting the struggles and oppression faced by gender minorities. Over the decades, feminism's growth is clear, with positive vibes leading the way. Still, anger and anticipation pick up in later years, reflecting the frustration and urgency for real change. It’s a balance of hope and fight, pushing toward a fairer world.

### Sentiment Analysis

<iframe src="/assets/plots/gender_equality/gender_equality_combined_sentiment_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

This plot shows the evolution of sentiment in gender equality movies by decade. Positive sentiment consistently dominates across all decades, indicating that these movies often focus on hopeful and empowering narratives. Incredible! However, negative sentiment remains significant, reflecting the continuous struggles and challenges related to gender equality.

Over time, there does not appear to be a dramatic shift in the ratio between positive and negative sentiments: thus, we can say that movies continuously address the systemic and societal issues tied to gender equality.

<div style="display: flex; gap: 10px;">
  <iframe src="/assets/plots/gender_equality/gender_equality_top_movie_genres_by_negative_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
  <iframe src="/assets/plots/gender_equality/gender_equality_top_movie_genres_by_positive_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
</div>

Drama takes the lead when it comes to showing the struggles and conflicts tied to gender equality. World and Comedy are also present, often using cultural or humorous angles to highlight challenges in a lighter way. Quite fascinating!

Drama also stands out for positive vibes, focusing on showing stories of progress and achievements. Comedy keeps it fun and approachable, addressing gender issues with humor, while Romance shows personal growth with love and equality. World cinema brings diverse cultural stories that inspire change. These are such interesting points of view to present the topic, aren't they?

<iframe src="/assets/plots/gender_equality/gender_equality_sunburst_genres_sentiment_emotions.html" width="100%" height="600" frameborder="0"></iframe>


### Conclusion

This was such a nice ride full of analyses, wasn't it? Gender equality in movies has grown and changed over time, reflecting what’s happening in society and history. Movies tend to follow news by about 26 years, showing that it takes time for big ideas to make it into storytelling. While news reacts quickly, movies dig deeper and tell the stories in a way that lasts.

The themes we see—like LGBTQ+ rights, feminism, and sexual freedom—show up a lot, with drama being the main genre. Drama deals with heavy subjects, comedy keeps it light and engaging, and world cinema brings different cultural views to the table. Romance shows love built on equality, breaking old-school gender roles.

In the 1940s, movies explored women stepping into new roles during the war. By the 1970s and 1980s, feminist movements and LGBTQ+ stories took the spotlight. The 1960s brought themes of sexual freedom, inspired by things like the birth control pill and the sexual revolution.

When it comes to emotions, there’s a mix. Positivity and hope stand out, but there’s also anger and frustration, especially as the fight for equality keeps going. 

In the end, these movies are all about progress, resilience, and pushing for a fairer world, one story at a time. 



## Vietnam War


### Temporality Analysis of Movies with News

<iframe src="/assets/plots/vietnam/vietnam_movies_and_news_frequency_year.html" width="100%" height="600" frameborder="0"></iframe>

<iframe src="/assets/plots/vietnam/vietnam_movies_and_news_frequency_decade.html" width="100%" height="600" frameborder="0"></iframe>

For this topic about the Vietnam was, let's first talk about movies only. From both plots, we see a clear important presence of movies related to Vietnam war between 1960 and 1980, which corresponds well to the period of this war (1955 to 1975). Penny is here saying that there is a bit of noise, since our model has detected movies similar to Vietnam war before it actually started. However, the strong presence of movies related to the Vietnam war at the exact period of the war, indicates the it appeared significantly in movies-or at least that there was a very strong increase in war movies in this period. This suggests that many filmmakers and people wanted to present the conflict represented on screen and talk about this war in general.

<iframe src="/assets/plots/vietnam/vietnam_movies_news_cross_correlation.html" width="100%" height="600" frameborder="0"></iframe>

<iframe src="/assets/plots/vietnam/vietnam_movies_news_interactive_lag.html" width="100%" height="600" frameborder="0"></iframe>

Now let's take a look togetger at the cross-correlation plot! It is clear that the evolution of the Vietnam War theme is similar between news and movies. There is some strong noise data before 1950, when the war has not actually started. However, if we exclude that, both show a strong presence of the topic in the 1960s, with its prominence gradually decreasing over time. Interesting, right? This reflects that the war is a current crisis, before rapidly decreasing and following the same trend as movies as the war becomes a past event. Overall, the plot suggests that the topic was widely discussed in both news articles and cultural production (in our case movies), while the events were currently happening. The cross-correlation has an optimal shift of 0 year, which supports the hypothesis that wars are more represented in movies while they remain hot topics, but are addressed less frequently as time fades and they become more distant in public memory. In this case, news and movies address the issue at the same time. That is fascinating!


### Genres Analysis

<iframe src="/assets/plots/vietnam/vietnam_overall_top_genres.html" width="100%" height="600" frameborder="0"></iframe>

About the genres, the most important ones about Vietnam war are Drama, Action/Aventure and War. Not really surprising considering the context right? Comedy comes 4th, which can mean that there still is a relative strong need to dedramatize it, even though it remains treated more as a serious topic as suggested by the three first genres. Here! Another interesting point to note is the presence of Chinese movies, which is linked to China’s involvement in the Vietnam War and thus the country also had stories to tell from their side. Overall, we have a pretty good representation of how a war can be treated in movies. Don't you agree?

<iframe src="/assets/plots/vietnam/vietnam_top_genres_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

Here, it's worth observing that war is present in all periods that concern directly the Vietnam war as well as Drama and Action/Adventure. These are constant for a Vietnam war film. Another important thing to notice is the place reserved for comedies and other fun genres such as parody. Intriguing... These are not very present during the actual years of the war (1950s, 1960s and 1970s) but they become more frequent in the decades that follow, which could indicate that it is difficult to laugh of a tragic event while it is happening, but it becomes more and more possible as the event is further in the past. Fascinating!



### Emotions Analysis 

<iframe src="/assets/plots/vietnam/vietnam_emotion_counts.html" width="100%" height="600" frameborder="0"></iframe>

Not suprisingly, negative emotions dominate positive ones for Vietnam war films with fear being very high. It is expected for movies talking about war and crude realities of death, violence or trauma. Positive emotions are also well present. This could be because war movies also tend to represent a bit of positivity inside the atrocities of war such as friendship and camaraderie between soldiers. Can this be a reason why trust is relatively high? It's highly possible.

<iframe src="/assets/plots/vietnam/vietnam_emotion_counts_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

We note that positive emotions tend to increase over time, while negative emotions decrease. This could suggest that as tragic events such as the Vietnam War, become more distant in the past, their portrayal shifts, focusing less on its horrors and dedramatizing it. Similarly, trust shows an upward trend over time, while anger diminishes. The representation of the war appears to become less raw over time and less focused on negative aspects. Why? Possibly because the emotional impact of the war is less important for an audience who feels less related to it.

### Sentiment Analysis

<iframe src="/assets/plots/vietnam/vietnam_combined_sentiment_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

Negative and positive emotions remain relatively constant over time, which suggests that, regardless of the period, war will always be portrayed as something deeply negative. That makes sense!

<div style="display: flex; gap: 10px;">
  <iframe src="/assets/plots/gender_equality/gender_equality_top_movie_genres_by_negative_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
  <iframe src="/assets/plots/gender_equality/gender_equality_top_movie_genres_by_positive_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
</div>

The most noticeable changes between these graphs are the swaped positions between Comedy, Action/Adventure and War. In negative sentiments, Comedy plays a much smaller role, while War and Action/Adventure genres are predominant. So, obviously movies that focus on depicting war itself in its tough realities are far more negative than those that turn it into comedies, where the action/war side is less important. Again, that seems to make sense!


<iframe src="/assets/plots/vietnam/vietnam_sunburst_genres_sentiment_emotions.html" width="100%" height="600" frameborder="0"></iframe>

All genres are associated with more negative than positive sentiments. The most negative one is War while other genres, such as Drama or Action are less associated with negativity, maybe focusing more on positive sides like brotherhood, courage or hope. Comedy is the only one that has more positive than negative but not by a significant amount, which suggests that event in comedies, Vietnam War is treated as something very serious and dark.



## Technology


### Temporality Analysis of Movies with News

<iframe src="/assets/plots/technology/technology_movies_and_news_frequency_year.html" width="100%" height="600" frameborder="0"></iframe>

<iframe src="/assets/plots/technology/technology_movies_and_news_frequency_decade.html" width="100%" height="600" frameborder="0"></iframe>

Hmm, fascinating! There is no clear tendency for the presence of technology over time in movies only... No particular event seems to have triggered a movement of more movies about this theme. Curious, isn’t it? Wait, Penny is telling me something! The dataset is a bit small, so those peaks might just be tricky little outliers, sensitive to small variations. Nothing conclusive yet, team!

But fear not! Let’s dig deeper and uncover how this theme has been treated over the years. Gadget team, prepare to dive into the details!

When analyzing the correlation between news and movies, no significant correlation can be observed. We find that the optimal lag is 35 years. However, we cannot make a reasonable hypothesis about the cause of this lag, but let's try to come with some. The first hypothesis is that it is pure randomness, which is highly likely. The second hypothesis is that technology seems to be discussed approximately 30 years before similar trends appear in movies. This does not seem to make sense, as movies sometimes anticipate what could happen, depict scientific discoveries years after they occur, or reflect current worries about technological development. Therefore, movies could either be ahead of the news, approximately aligned with it or shifter with a few years, or talking about the topic many years after it appeared in the news. Thus, we can reasonably conclude that there is no clear link between the presence of the technology topic in news and movies.


### Genres Analysis

<iframe src="/assets/plots/technology/technology_overall_top_genres.html" width="100%" height="600" frameborder="0"></iframe>

Science-fiction as the first genre for technology, how surprising ! More than half of the themes are either Drama, Action/Adventure, Science fiction, thriller, documentary or horror. which might indicate that technology is addressed through a more serious angle. Comedy is 4th place at 10.9% is however taking a pretty big part of the cake. Technology can also lend itself to fun and a lighter tone. The presence of horror movies is also interesting, it might indicate that technology can be perceived as scary or part of a scary plot.

Ah, science fiction taking the top spot for technology, how unsurprising! More than half of the themes fall into genres like drama, action/adventure, science fiction, thriller, documentary, or horror, suggesting technology is often addressed from a serious angle. But wait, look at comedy in fourth place with 10.9%! That’s a pretty big slice of the pie, showing that technology can also lend itself to fun and a lighter tone.

And then there’s horror, its presence is intriguing, isn’t it? This might indicate that technology isn’t always seen as helpful or inspiring. Sometimes, it’s the stuff of nightmares or a chilling plot twist! Go Go Gadget Genre Investigation!

<iframe src="/assets/plots/technology/technology_top_genres_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

Just as expected, science fiction dominates most decades! But hold on, the 1960s tell a different story! This decade shows a much bigger presence of funnier genres like comedy, parody, and satire, with science fiction completely absent from the top 5, how curious!

And look at this, war paired with technology only appears during the 1940s, which makes perfect sense given the World War II context. A fascinating detail, wouldn’t you say? Of course I know Penny, the dataset is a bit small, so we have to tread carefully when interpreting genre evolution over time.


### Emotions Analysis 

<iframe src="/assets/plots/technology/technology_emotion_counts.html" width="100%" height="600" frameborder="0"></iframe>

Aha! The dominant emotions here are positive and negative, along with anticipation, fear, and trust. But look at this! The positive side is larger than the negative one when it comes to technology! Surprising, isn’t it? It seems movies aren’t as pessimistic about technology as one might think.

And take a look at trust and anticipation, both rank higher than fear. This suggests that in movies, technology is often addressed more as hope for the future rather than something completely scary. Fascinating stuff! Go Go Gadget Emotional Analysis!

<iframe src="/assets/plots/technology/technology_emotion_counts_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

Interesting discovery, team! The order of emotions in movies doesn’t change significantly over time, suggesting that technology tends to be addressed in a relatively consistent way. But wait, there’s more!

Negative emotions seem to gain importance as time goes on. Look closely, and you’ll see an increase in fear and a slight decrease in trust. This could indicate a shifting perspective, perhaps a more recent approach to technology is showing a less optimistic vision of its role and impact.

<iframe src="/assets/plots/technology/technology_emotion_sentiment_counts.html" width="100%" height="600" frameborder="0"></iframe>

Ah, as expected, positive sentiment dominates the technology theme overall! This is in accordance with what we have said earlier: technological progress is generally seen as a positive change rather than a scary evolution.

It seems movies prefer to focus on the hope and possibilities that technology brings, rather than diving into the fear factor. Go Go Gadget Optimism Detector!


### Sentiment Analysis

<iframe src="/assets/plots/technology/technology_combined_sentiment_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

Hmm, no clear trend stands out from this plot, team! Positive sentiment in movies is not simply increasing or decreasing over time, it’s a bit of a mixed bag.

However, the 1940s and 1950s tell a different story. During these decades, technology seemed to be associated to much larger positive emotions, reflecting more trust and hope than in the years that followed. Could it be that the optimism of these post-war years showed technology in a brighter light?

<div style="display: flex; gap: 10px;">
  <iframe src="/assets/plots/technology/technology_top_movie_genres_by_negative_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
  <iframe src="/assets/plots/technology/technology_top_movie_genres_by_positive_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
</div>

Well, well, well, it turns out that the genres for positive and negative sentiments are not all that different after all! The comedy genre shows up more in positive sentiment, which is just as we would expect. Meanwhile, thrillers make a big apparition in the negative sentiment zone, still no surprise there! Now, here’s the interesting part: documentaries are more often tied to positive vibes. It seems like the evolution of technology is depicted as a positive change, with these documentary movies not trying to alert on its potential dangers.

<iframe src="/assets/plots/technology/technology_sunburst_genres_sentiment_emotions.html" width="100%" height="600" frameborder="0"></iframe>

Here’s something truly fascinating: in science fiction, the positive side dominates by a lot! Could it be that writing about the future makes us more optimistic? It seems so! We might think that dystopian stories, which anticipate what could go wrong with technological evolution, would have a bigger impact, but that is not the case. Drama, too, is much more associated with positive emotions than negative ones. Why? Well, dramas often focus around human stories that convey hope and progress, with less frightening developments. On the other hand, thrillers are a play a big role in negative emotions, where fear is particularly significant—and that makes sense! Technology often has a bad reputation in these films, seen as something to fear. But wait, it is also possible that the plot could be sad or scary for reasons unrelated to technology. In fact, technology might even serve as a tool to overcome challenges rather than being inherently associated with a negative perception.



# Conclusion


<br>



