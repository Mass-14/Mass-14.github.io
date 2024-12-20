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

The Cold War (~1947–1991) was a period of intense geopolitical tension between the United States (and its allies, representing capitalist democracies) and the Soviet Union (and its allies, representing communist states). Despite the absence of direct military conflict between the two superpowers, this rivalry shaped global politics, economics, and military strategies for decades.

### Temporality Analysis of Movies with News

<iframe src="/assets/plots/cold_war/cold_war_movies_and_news_frequency_year.html" width="100%" height="600" frameborder="0"></iframe>

Surprising findings here, look! There is a lag of 16 years between the movies and news related to cold war. It means that there are 16 years difference for both of them to align thematically. Let me get my Gadget List and see the possible reasons:

- Movies often serve as a medium for processing historical and geopolitical events years after the events have passed.
- Historical distance: A lag allows for new perspectives to emerge, moving beyond immediate reactions to provide deeper or more nuanced storytelling.
- The patterns confirm that significant geopolitical events inspire filmmakers, creating a relationship where news inform art.

Click now on the news legend to see only the evolution of the movies frequency, and let us dive together into more detail.

**1943**: During this year, the themes are Anti-Nazi and positive towards the USSR.

**1960s and 1970s**: <br>
The main themes are:
- Nuclear anxiety: Themes often include accidental nuclear strikes, space races, and clashes between democracy and communism.
- War and Resistance: Stories about World War II and other conflicts dominate, showing the  resistance movements, espionage, and personal sacrifices during wartime.
- Political satire: Some movies use humor and satire to critique political ideologies, societal norms, which reflects Cold War propaganda or domestic issues.
- Technology: Themes around technological advancements, particularly in space exploration and military innovation, shows the fascination and fear associated with rapid scientific progress during the Cold War.
- Human relationships: a recurring theme highlights the strength of family, friendship, and love as a way to cope with the bigger conflicts.

### Geographical Analysis of Movies

<iframe src="/assets/plots/cold_war/cold_war_movie_countries_world_map.html" width="100%" height="600" frameborder="0"></iframe>

With no surprise, the main countries talking about Cold War are the US and USSR.

### Genres Analysis

<iframe src="/assets/plots/cold_war/cold_war_overall_top_genres.html" width="100%" height="600" frameborder="0"></iframe>

Let's write down together the top 5 movies genres:
- Drama: shows messy conflicts and personal struggles of that time.
- Action Adventure: action, conflicts and tensions of that time.
- War
- Thriller: espionage, intrigue.
- Comedy: satire, dark-humor.

<iframe src="/assets/plots/cold_war/cold_war_top_genres_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

**1940s**: Interesting genres: War, Spy, Propaganda Film.

These reflected the global conflict of World War II, with War films capturing battles and heroism, Spy films diving into espionage and secret missions, and Propaganda films promoting national unity and ideological messages. These genres mirrored the intense political and social atmosphere of the decade.

**1950s**: Interesting genres: Science-Fiction, Action-Adventure. 

Science Fiction explored fears of nuclear technology and the unknown, reflecting Cold War anxieties about the future and space exploration. Action/Adventure brought excitement with  heroes and quests to symbolise thhe ideoological battles of the era.
In the NYT dataset, we have 4466 news having the word "nuclear" during this period.

**1960s**: Interesting genres: Comedy, World. 

The World genre include a wide range of stories exploring global conflicts, historical events, and societal changes with main themes war and revolution, cold war and espionage and global perspectives. Comedy is used in a satire way to critique the societal norms It provides a lighter yet thought-provoking lens on pressing issues of the time.

**1970s**: Interesting genres: War, Spy. These are the main years of the cold war. 

The War genre here explores those main themes: resistance, cultural identity, psychological cost of war and oppression, espionage... The Spy genre has themes such as paranoia, espionage and the high-stakes of world secrets and technological competition that defined East-West tensions. There are 2432 news related to the word "espionage" or "spy".

**1980s**: Interesting genres: Thriller, Political.

For the political genres, we can see American movies criticisng the Soviet through societal and political structures through allegory and personal stories. Also, we can find explorations of ideological conflicts, cultural divides, and individual struggles under oppressive system. For the thriller genres, we also see the paranoia through movies that have assassination attempts and shows the anxiety all oover the world.

**1990s**: Interesting genres: World. 

The world genre was dominated by narratives reflecting the geopolitical shifts following the Cold War, such as the dissolution of the Soviet Union, the Balkan wars, and post-communist transitions. We can also see the critiique of remaining ccommunist cvoruntries from the capitalists ones.

**2010s**: Interesting genres: Historical. 

As the world moved further from the Cold War and the collapse of communism, filmmakers in post-Soviet and post-communist states revisited their histories with a new lens, often exploring themes of identity, transformation, and reconciliation. We see thus a lot of movies related to cold war, even if it's done.


### Emotions Analysis 

<iframe src="/assets/plots/cold_war/cold_war_emotion_counts_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

We see that there is less positive emotions during the Cold War. And there's a decrease of positive emotion from 1940s to 1960s. The American and Soviet Union were allies during WW2 showcasing the positive emootions during this period. But, then we see a decrease of positive emotions in the period of the Cold War.

Negative emotions like fear, sadness, and disgust are consistently prevalent, reflecting the Cold War's tension, uncertainty, and threats (e.g., nuclear warfare, espionage).
Fear shows a peak during the Cold War decades, particularly in the 1950s-1980s, corresponding to  tensions during events like the Cuban Missile Crisis. It declines in the 1990s and 2000s, aligning with the Cold War's end.
Trust is relatively low but stable, perhaps reflecting the theme of distrust intrinsic to espionage and ideological rivalry and increases towards th 1990s.

<iframe src="/assets/plots/cold_war/cold_war_emotion_sentiment_counts.html" width="100%" height="600" frameborder="0"></iframe>

The counts for negative (4902) and positive (4760) sentiments are relatively close, indicating that Cold War narratives balance darker and more hopeful tones.
This balance reflects the duality of Cold War that shows fear, mistrust, and conflict alongside resilience, innovation, and eventual resolution.
The near-equal distribution suggests that Cold War narratives don't focus only on despair or triumph but instead explore the nuanced emotions of the era.


### Sentiment Analysis

<iframe src="/assets/plots/cold_war/cold_war_all_sentiments.html" width="100%" height="600" frameborder="0"></iframe>

As expected, negative sentiment prevails.

<div style="display: flex; gap: 10px;">
  <iframe src="/assets/plots/cold_war/cold_war_top_movie_genres_by_negative_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
  <iframe src="/assets/plots/cold_war/cold_war_top_movie_genres_by_positive_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
</div>

Interesting: <br>
- Negative sentiment: Comedy is prevalent because Cold War comedies often used satire to critique political ideologies, societal paranoia, and absurdities of the era. Used humour to show the darker truth of the era. 
- Positive sentiment: World. Many Cold War-themed world cinema narratives from the post-Cold War period focus on reconciliation.

<iframe src="/assets/plots/cold_war/cold_war_sunburst_genres_sentiment_emotions.html" width="100%" height="600" frameborder="0"></iframe>


### Conclusion

The analysis shows how movies connect with their time, often reflecting key events and emotions from history. Films about war, espionage, and politics mirror the worries and struggles of their era, but there's an interesting 16-year lag which corresponds to the time it takes for real-life events to show up on screen. 
The emotions and sentiments in Cold War-themed movies, while varied, often highlight the tension and anxiety of the period. This makes sense—it was a stressful time. In the end, movies don’t just tell stories; they capture the feelings and challenges of the people who lived through those moments, helping us understand the past on a deeper level.


## Gender Equality


### Temporality Analysis of Movies with News

<iframe src="/assets/plots/gender_equality/gender_equality_movies_and_news_frequency_year.html" width="100%" height="600" frameborder="0"></iframe>

The first graph shows that movies and news events discussing gender equality themes are connected, but with a time delay. Specifically, there’s a lag of 26 years, meaning societal discussions in the news influence movies after about two decades. This suggests that filmmakers take time to process societal shifts and incorporate them into storytelling.

<iframe src="/assets/plots/gender_equality/gender_equality_movie_frequency_decade.html" width="100%" height="600" frameborder="0"></iframe>

The frequency of gender equality-themed movies has been inconsistent, with noticeable spikes in certain decades, such as the 1940s, 1970s, 1980s, and 2010s.

The 1970s and 1980s could be due to the second feminism wave: began in the early 1960s and lasted roughly two decades.

<iframe src="/assets/plots/gender_equality/gender_equality_movie_countries_world_map.html" width="100%" height="600" frameborder="0"></iframe>

This map shows how movies addressing gender equality in the 1970s and 1980s were distributed globally. Countries like the United States and India were particularly active in exploring these themes through cinema, possibly reflecting their societal conversations around gender at the time. We can see how diverse the representation is, with contributions from regions like Europe, South America, and Asia, showing that gender equality was a shared concern across cultures.

By analyzing the movies during these decades, we can extract four main themes: 
1. Patriarchy and Resistance: showcasing women's resistance against societal norms, often through acts of defiance or rebellion.
2. Intersection of Gender and Labor:  focus on women's economic struggles and their fight for labor rights
3. Sexual Liberation and Autonomy: portraying women navigating personal freedoms in restrictive environments
4. Feminist Activism

**1940s**: The 1940s could reflect early explorations of gender roles during or post-World War II, where women entered the workforce and societal norms began to shift.

The themes in 1940s gender equality movies show how society was changing during and after World War II. Widow Remarriage challenges traditional norms, showing women gaining independence and reshaping family life. Education and Women's Rights focus on breaking barriers and pushing for justice and equality in male-dominated spaces.

Patriotism and War Effort highlights women stepping into jobs and roles men left behind during the war, like working in factories, helping with the military, and volunteering. These stories show their strength and how they helped keep society stable while proving their abilities. This theme celebrates their patriotism and determination, paving the way for future gender equality movements. Overall, 1940s films captured a key moment in how women’s roles in society were evolving.

By analyzing I extracted 5 main themes: 
1. Gender Identity and LGBTQ+ Representation
2. Feminism and Women's Empowerment
3. Body Autonomy and Sexuality
4. Human Trafficking and Exploitation
5. Cultural and Social Intersectionality

This can be explained by several key points:

- In this period, there was more acceptance and support for LGBTQ+ rights, with films exploring personal stories and struggles, influenced by the legalization of same-sex marriage and greater awareness.
- Movements like #MeToo and body positivity brought attention to themes of consent, sexual freedom, and taking control of personal stories.
- There was growing awareness of global human rights issues, which led to films addressing topics like trafficking and exploitation.
- There was a bigger push for diversity and representation in media, with films focusing on the intersection of race, gender, and culture.

<iframe src="/assets/plots/gender_equality/gender_equality_movie_countries_world_map_2010.html" width="100%" height="600" frameborder="0"></iframe>

We also see that it affects the whole world!!

### Genres Analysis

<iframe src="/assets/plots/gender_equality/gender_equality_overall_top_genres.html" width="100%" height="600" frameborder="0"></iframe>

Drama takes the lead, likely because it dives into deep societal issues. Comedy approaches gender topics in a lighter, more accessible way. World cinema adds diverse cultural perspectives, while Romance highlights equality in love and relationships. LGBT-focused films show growing representation and support for inclusivity.

<iframe src="/assets/plots/gender_equality/gender_equality_top_genres_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

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

1. Resistance Against Oppression: 
The films often portrayed women resisting systemic discrimination and patriarchal structures. This mirrors the rise of feminist movements in Japan during the 1970s, which pushed for workplace equality, reproductive rights, and greater representation in a traditionally male-dominated society.

2. Sexual Freedom and Choice: 
Themes of women asserting control over their sexuality and decisions reflect societal shifts in Japan post-World War II. The country's rapid modernization and exposure to global ideas of individual freedom created a backdrop where traditional gender roles were increasingly questioned.

3. Marginalization in a Patriarchal Society:
Stories depicting women feeling trapped or marginalized in societal roles highlight the struggles of modernization. As Japan's economy boomed, women often faced a conflict between traditional expectations and new opportunities, leading to feelings of isolation and a re-evaluation of their societal roles.

#### Predominence of Adult movies

Pornography and sexual freedom is omnipresent in the reduced dataset. As we can see, the Adult genres is part of the top 5 movie genres in the 1960s.
Sexual freedom emphasizes the right of individuals, especially women, to have autonomy over their bodies and sexuality without societal judgment or constraints. This aligns with gender equality by rejecting patriarchal systems that historically restricted women's choices and independence.
This can be related to the introduction of the birth control pill in the 1960s gave women greater control over their reproductive choices. In the 1960s, there's also the Sexual Revolution that challenged traditional norms around sexuality, promoting sexual freedom, bodily autonomy, and gender equality.

In the NYT dataset, there are 1061 news containing the word "birth control" and 14 containing the word "sexual revolution", which might indicate a correlation in the sentiment during the 1960s.

#### World

<iframe src="/assets/plots/gender_equality/gender_equality_movie_countries_world_map_world.html" width="100%" height="600" frameborder="0"></iframe>

The main themes are Women’s Economic Independence, Opression resisting, sexual freedom, as explained before. \
However, we can see that France and India are the prominent countries.

#### Romance

Romantic movies show key aspects of gender equality within relationships. These romance movies show how love and gender equality can go hand in hand. Women stand up for themselves, break away from traditional roles, and men learn to respect and adapt. They highlight how relationships can be about fairness and mutual support, not control. The stories also touch on family and cultural pressures, showing the importance of making your own choices. At the core, they’re about love built on respect, balance, and equality.

### Emotions Analysis 

<iframe src="/assets/plots/gender_equality/gender_equality_emotion_counts.html" width="100%" height="600" frameborder="0"></iframe>

We see a mix of emotions here. Trust and optimism shine through, showing progress and hope for gender equality. But there's also negativity, highlighting the struggles and oppression faced by gender minorities. Over the decades, feminism's growth is clear, with positive vibes leading the way. Still, anger and anticipation pick up in later years, reflecting the frustration and urgency for real change. It’s a balance of hope and fight, pushing toward a fairer world.

### Sentiment Analysis

<iframe src="/assets/plots/gender_equality/gender_equality_combined_sentiment_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

We can see the evolution of sentiment in gender equality movies by decade. Positive sentiment consistently dominates across all decades, indicating that these movies often focus on hopeful and empowering narratives. However, negative sentiment remains significant, reflecting the continuing struggles and challenges related to gender equality.

Over time, there does not appear to be a dramatic shift in the ratio between positive and negative sentiments: thus, we can say that movies continuously address the systemic and societal issues tied to gender equality.

<div style="display: flex; gap: 10px;">
  <iframe src="/assets/plots/gender_equality/gender_equality_top_movie_genres_by_negative_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
  <iframe src="/assets/plots/gender_equality/gender_equality_top_movie_genres_by_positive_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
</div>

Drama takes the lead when it comes to showing the struggles and conflicts tied to gender equality. World and Comedy are also present, often using cultural or humorous angles to highlight challenges in a lighter way.

Drama also stands out for positive vibes, focusing on showing stories of progress and achievements. Comedy keeps it fun and approachable, addressing gender issues with humor, while Romance shows personal growth with love and equality. World cinema brings diverse cultural stories that inspire change.

<iframe src="/assets/plots/gender_equality/gender_equality_sunburst_genres_sentiment_emotions.html" width="100%" height="600" frameborder="0"></iframe>


### Conclusion



## Vietnam War


### Temporality Analysis of Movies with News

<iframe src="/assets/plots/vietnam/vietnam_movies_and_news_frequency_year.html" width="100%" height="600" frameborder="0"></iframe>

<iframe src="/assets/plots/vietnam/vietnam_movies_and_news_frequency_decade.html" width="100%" height="600" frameborder="0"></iframe>


### Genres Analysis

<iframe src="/assets/plots/vietnam/vietnam_overall_top_genres.html" width="100%" height="600" frameborder="0"></iframe>


### Emotions Analysis 

<iframe src="/assets/plots/vietnam/vietnam_emotion_counts.html" width="100%" height="600" frameborder="0"></iframe>

<iframe src="/assets/plots/vietnam/vietnam_emotion_counts_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

### Sentiment Analysis

<iframe src="/assets/plots/vietnam/vietnam_combined_sentiment_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

<iframe src="/assets/plots/vietnam/vietnam_sunburst_genres_sentiment_emotions.html" width="100%" height="600" frameborder="0"></iframe>


### Conclusion



## Technology


### Temporality Analysis of Movies with News

<iframe src="/assets/plots/technology/technology_movies_and_news_frequency_year.html" width="100%" height="600" frameborder="0"></iframe>

<iframe src="/assets/plots/technology/technology_movies_and_news_frequency_decade.html" width="100%" height="600" frameborder="0"></iframe>


### Genres Analysis

<iframe src="/assets/plots/technology/technology_overall_top_genres.html" width="100%" height="600" frameborder="0"></iframe>


### Emotions Analysis 

<iframe src="/assets/plots/technology/technology_emotion_counts.html" width="100%" height="600" frameborder="0"></iframe>

<iframe src="/assets/plots/technology/technology_emotion_counts_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

### Sentiment Analysis

<iframe src="/assets/plots/technology/technology_combined_sentiment_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

<iframe src="/assets/plots/technology/technology_sunburst_genres_sentiment_emotions.html" width="100%" height="600" frameborder="0"></iframe>


### Conclusion


# Conclusion


<br>



