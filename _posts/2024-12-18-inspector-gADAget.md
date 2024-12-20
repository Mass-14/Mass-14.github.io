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
    <li class="tab active" onclick="openTab(event, 'tab1')">Health</li>
    <li class="tab" onclick="openTab(event, 'tab2')">Gender Equality</li>
    <li class="tab" onclick="openTab(event, 'tab3')">Technology</li>
    <li class="tab" onclick="openTab(event, 'tab4')">WWII</li>
    <li class="tab" onclick="openTab(event, 'tab5')">Cold War</li>
    <li class="tab" onclick="openTab(event, 'tab6')">Vietnam War</li>
  </ul>

  <div id="tab1" class="tab-content active"> 
  <!-- Health -->
<h2 id="health">Health</h2>
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
  <!-- Gender Equality -->
    
    <h2 id="gender-equality">Gender Equality</h2>
<h3 id="temporality-analysis-of-movies-with-news">Temporality Analysis of Movies with News</h3>
<iframe src="/assets/plots/gender_equality/gender_equality_movies_and_news_frequency_year.html" width="100%" height="600" frameborder="0"></iframe>

<p>Folks, now it&#39;s time to analyze the topic of gender equality. This first graph shows that movies and news events discussing gender equality themes are connected, but with a time delay. Specifically, there’s a lag of 26 years, meaning societal discussions in the news have influenced movies after about two decades. What could be the reason? Filmmakers may take time to process societal shifts and incorporate them into storytelling.</p>
<iframe src="/assets/plots/gender_equality/gender_equality_movies_news_interactive_lag.html" width="100%" height="600" frameborder="0"></iframe>

<iframe src="/assets/plots/gender_equality/gender_equality_movies_news_cross_correlation.html" width="100%" height="600" frameborder="0"></iframe>

<p>These surprising results show that the frequency at which the theme &#39;Gender Equality&#39; appears in news and movies with a similar evolution pattern, but with a 26 years time difference. Interesting! This number could indicate that news and movies conform to different generations. This comes as a surprise for us, as we expected the film industry to react more slowly than the news to evolution of our societies. Did you too?</p>
<p>However, a lot of movies from the dataset are small independently produced movies. This could explain why, on the contrary, movie themes are greatly in advance compared to their news counterparts: small independent artists could tend to be visionary, whereas the mainstream news and media talk more about mainstream topics, reducing the relative frequency of niche topics. Isn&#39;t is fascinating?</p>
<iframe src="/assets/plots/gender_equality/gender_equality_movie_frequency_decade.html" width="100%" height="600" frameborder="0"></iframe>

<p>The frequency of gender equality-themed movies has been inconsistent, with noticeable spikes in certain decades, such as in the 1940s, 1970s, 1980s, or 2010s.</p>
<p>The 1970s and 1980s peaks could be due to the second feminism wave: it began in the early 1960s and lasted roughly two decades.</p>
<iframe src="/assets/plots/gender_equality/gender_equality_movie_countries_world_map.html" width="100%" height="600" frameborder="0"></iframe>

<p>Look at this map! It shows how movies addressing gender equality in the 1970s and 1980s were distributed globally. That is amazing! Countries like the United States and India were particularly active in exploring these themes through cinema, possibly reflecting their societal conversations around gender at the time. We can see how diverse the representation is, with contributions from regions like Europe, South America, and Asia, showing that gender equality was a shared concern across cultures. </p>
<p>Let&#39;s get the Gadget List ready, here come some fun analyses!</p>
<p>By analyzing the movies during these decades, we can extract four main themes: </p>
<ol>
<li>Patriarchy and resistance: showcases women&#39;s resistance against societal norms, often through acts of defiance or rebellion.</li>
<li>Intersection of gender and labor: focuses on women&#39;s economic struggles and their fight for labor rights.</li>
<li>Sexual liberation and autonomy: portraying women navigating personal freedoms in restrictive environments.</li>
<li>Feminist activism.</li>
</ol>
<p><strong>1940s</strong>: The 1940s could reflect early explorations of gender roles during or post-World War II, where women entered the workforce and societal norms began to shift.</p>
<p>The themes in 1940s gender equality movies show how society was changing during and after World War II. Widow Remarriage challenges traditional norms, showing women gaining independence and reshaping family life. Education and Women&#39;s Rights focus on breaking barriers and pushing for justice and equality in male-dominated spaces.</p>
<p>Patriotism and War Effort highlights women stepping into jobs and roles men left behind during the war, like working in factories, helping with the military, and volunteering. These stories show their strength and how they helped keep society stable while proving their abilities. This theme celebrates their patriotism and determination, paving the way for future gender equality movements. Overall, 1940s films captured a key moment in how women’s roles in society were evolving.</p>
<p>By analyzing this, we extracted 5 main themes: </p>
<ol>
<li>Gender identity and LGBTQ+ representation</li>
<li>Feminism and women&#39;s empowerment</li>
<li>Body autonomy and sexuality</li>
<li>Human trafficking and exploitation</li>
<li>Cultural and social intersectionality</li>
</ol>
<p>This can be explained by several key points:</p>
<ul>
<li>In this period, there was more acceptance and support for LGBTQ+ rights, with films exploring personal stories and struggles, influenced by the legalization of same-sex marriage and greater awareness.</li>
<li>Movements like #MeToo and body positivity brought attention to themes of consent, sexual freedom, and taking control of personal stories.</li>
<li>There was growing awareness of global human rights issues, which led to films addressing topics like trafficking and exploitation.</li>
<li>There was a bigger push for diversity and representation in media, with films focusing on the intersection of race, gender, and culture.</li>
</ul>
<iframe src="/assets/plots/gender_equality/gender_equality_movie_countries_world_map_2010.html" width="100%" height="600" frameborder="0"></iframe>

<p>Look at this plot! It shows that it affects the whole world!!</p>
<h3 id="genres-analysis">Genres Analysis</h3>
<iframe src="/assets/plots/gender_equality/gender_equality_overall_top_genres.html" width="100%" height="600" frameborder="0"></iframe>

<p>Now, about genres, what will we observe? Drama takes the lead, likely because it dives into deep societal issues. Comedy approaches gender topics in a lighter, more accessible way. World cinema adds diverse cultural perspectives, while Romance highlights equality in love and relationships. And LGBT-focused films show growing representation and support for inclusivity.</p>
<iframe src="/assets/plots/gender_equality/gender_equality_top_genres_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

<p>Let&#39;s dive now into the most interesting and surprising movies genres! Here is a Gadget List we constructed using the genres that caught our eye.</p>
<h4 id="lgbt">LGBT</h4>
<p>The LGBT genre appears from the beginning of the 1970s. The 1970s marked significant progress in LGBT rights and visibility, especially after the Stonewall Riots of 1969 in the U.S., which acted as a catalyst for the gay rights movement worldwide.
Media, including movies, began addressing LGBT themes more openly, reflecting the growing activism and demand for representation.</p>
<p>These movies explore various themes: </p>
<ol>
<li><p>Exploring LGBTQ+ Lives
These films dive into LGBTQ+ experiences, showing characters&#39; journeys of self-discovery, struggles, and relationships. Examples include movies about gender fluidity, transgender experiences, and same-sex love.</p>
</li>
<li><p>Feminism and LGBTQ+ Unity
Some movies highlight how feminism and LGBTQ+ rights come together. They show people working as a team to fight against unfair systems and demand change.</p>
</li>
<li><p>Breaking Social Rules
Many films focus on characters who don&#39;t fit traditional roles or expectations, showing how they find their own identity and path in life.</p>
</li>
<li><p>Fighting for Justice
Activism plays a big part in these stories, with individuals or groups standing up to demand fairness and equal treatment, both personally and in society.</p>
</li>
<li><p>Diverse Perspectives
These movies include cultural and social aspects, showing how LGBTQ+ experiences differ around the world. They bring in ideas like religion, race, and local traditions to enrich the stories.</p>
</li>
</ol>
<p>In the news dataset, we can find 1517 news related to the word &quot;gay&quot; and &quot;lgbt&quot; during the 70s.</p>
<h4 id="japanese-movies-in-1970s">Japanese movies in 1970s</h4>
<p>In the 1970s, Japanese cinema explored themes of gender equality through bold narratives that highlighted societal issues and the struggles of women in patriarchal structures:</p>
<ol>
<li><p>Resistance against oppression: 
The films often portrayed women resisting systemic discrimination and patriarchal structures. This mirrors the rise of feminist movements in Japan during the 1970s, which pushed for workplace equality, reproductive rights, and greater representation in a traditionally male-dominated society.</p>
</li>
<li><p>Sexual freedom and choice: 
Themes of women asserting control over their sexuality and decisions reflect societal shifts in Japan post-World War II. The country&#39;s rapid modernization and exposure to global ideas of individual freedom created a backdrop where traditional gender roles were increasingly questioned.</p>
</li>
<li><p>Marginalization in a patriarchal society:
Stories depicting women feeling trapped or marginalized in societal roles highlight the struggles of modernization. As Japan&#39;s economy boomed, women often faced a conflict between traditional expectations and new opportunities, leading to feelings of isolation and a re-evaluation of their societal roles.</p>
</li>
</ol>
<h4 id="predominence-of-adult-movies">Predominence of Adult movies</h4>
<p>Pornography and sexual freedom is omnipresent in the reduced dataset. As we can see, the Adult genres is part of the top 5 movie genres in the 1960s.
Sexual freedom emphasizes the right of individuals, especially women, to have autonomy over their bodies and sexuality without societal judgment or constraints. This aligns with gender equality by rejecting patriarchal systems that historically restricted women&#39;s choices and independence.
This can be related to the introduction of the birth control pill in the 1960s gave women greater control over their reproductive choices. In the 1960s, there&#39;s also the Sexual Revolution that challenged traditional norms around sexuality, promoting sexual freedom, bodily autonomy, and gender equality.</p>
<p>In the NYT dataset, there are 1061 news containing the word &quot;birth control&quot; and 14 containing the word &quot;sexual revolution&quot;, which might indicate a correlation in the sentiment during the 1960s.</p>
<h4 id="world">World</h4>
<iframe src="/assets/plots/gender_equality/gender_equality_movie_countries_world_map_world.html" width="100%" height="600" frameborder="0"></iframe>

<p>The main themes are women’s economic independence, opression resisting, sexual freedom, as explained before.
However, we can see that France and India are the prominent countries.</p>
<h4 id="romance">Romance</h4>
<p>Romantic movies show key aspects of gender equality within relationships. These romance movies show how love and gender equality can go hand in hand. Women stand up for themselves, break away from traditional roles, and men learn to respect and adapt. They highlight how relationships can be about fairness and mutual support, not control. The stories also touch on family and cultural pressures, showing the importance of making your own choices. At the core, they’re about love built on respect, balance, and equality.</p>
<h3 id="emotions-analysis">Emotions Analysis</h3>
<iframe src="/assets/plots/gender_equality/gender_equality_emotion_counts.html" width="100%" height="600" frameborder="0"></iframe>

<p>What an interesting plot here! We see a mix of emotions here. Trust and optimism shine through, showing progress and hope for gender equality. But there&#39;s also negativity, highlighting the struggles and oppression faced by gender minorities. Over the decades, feminism&#39;s growth is clear, with positive vibes leading the way. Still, anger and anticipation pick up in later years, reflecting the frustration and urgency for real change. It’s a balance of hope and fight, pushing toward a fairer world.</p>
<h3 id="sentiment-analysis">Sentiment Analysis</h3>
<iframe src="/assets/plots/gender_equality/gender_equality_combined_sentiment_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

<p>This plot shows the evolution of sentiment in gender equality movies by decade. Positive sentiment consistently dominates across all decades, indicating that these movies often focus on hopeful and empowering narratives. Incredible! However, negative sentiment remains significant, reflecting the continuous struggles and challenges related to gender equality.</p>
<p>Over time, there does not appear to be a dramatic shift in the ratio between positive and negative sentiments: thus, we can say that movies continuously address the systemic and societal issues tied to gender equality.</p>
<div style="display: flex; gap: 10px;">
  <iframe src="/assets/plots/gender_equality/gender_equality_top_movie_genres_by_negative_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
  <iframe src="/assets/plots/gender_equality/gender_equality_top_movie_genres_by_positive_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
</div>

<p>Drama takes the lead when it comes to showing the struggles and conflicts tied to gender equality. World and Comedy are also present, often using cultural or humorous angles to highlight challenges in a lighter way. Quite fascinating!</p>
<p>Drama also stands out for positive vibes, focusing on showing stories of progress and achievements. Comedy keeps it fun and approachable, addressing gender issues with humor, while Romance shows personal growth with love and equality. World cinema brings diverse cultural stories that inspire change. These are such interesting points of view to present the topic, aren&#39;t they?</p>
<iframe src="/assets/plots/gender_equality/gender_equality_sunburst_genres_sentiment_emotions.html" width="100%" height="600" frameborder="0"></iframe>


<h3 id="conclusion">Conclusion</h3>
<p>This was such a nice ride full of analyses, wasn&#39;t it? Gender equality in movies has grown and changed over time, reflecting what’s happening in society and history. Movies tend to follow news by about 26 years, showing that it takes time for big ideas to make it into storytelling. While news reacts quickly, movies dig deeper and tell the stories in a way that lasts.</p>
<p>The themes we see—like LGBTQ+ rights, feminism, and sexual freedom—show up a lot, with drama being the main genre. Drama deals with heavy subjects, comedy keeps it light and engaging, and world cinema brings different cultural views to the table. Romance shows love built on equality, breaking old-school gender roles.</p>
<p>In the 1940s, movies explored women stepping into new roles during the war. By the 1970s and 1980s, feminist movements and LGBTQ+ stories took the spotlight. The 1960s brought themes of sexual freedom, inspired by things like the birth control pill and the sexual revolution.</p>
<p>When it comes to emotions, there’s a mix. Positivity and hope stand out, but there’s also anger and frustration, especially as the fight for equality keeps going. </p>
<p>In the end, these movies are all about progress, resilience, and pushing for a fairer world, one story at a time. </p>

  


  </div>

  <div id="tab3" class="tab-content"> 
  <!-- Technology -->
    
    <h2 id="technology">Technology</h2>
<h3 id="temporality-analysis-of-movies-with-news">Temporality Analysis of Movies with News</h3>
<iframe src="/assets/plots/technology/technology_movies_and_news_frequency_year.html" width="100%" height="600" frameborder="0"></iframe>

<iframe src="/assets/plots/technology/technology_movies_and_news_frequency_decade.html" width="100%" height="600" frameborder="0"></iframe>

<p>Hmm, fascinating! There is no clear tendency for the presence of technology over time in movies only... No particular event seems to have triggered a movement of more movies about this theme. Curious, isn’t it? Wait, Penny is telling me something! The dataset is a bit small, so those peaks might just be tricky little outliers, sensitive to small variations. Nothing conclusive yet, team!</p>
<p>But fear not! Let’s dig deeper and uncover how this theme has been treated over the years. Gadget team, prepare to dive into the details!</p>
<p>When analyzing the correlation between news and movies, no significant correlation can be observed. We find that the optimal lag is 35 years. However, we cannot make a reasonable hypothesis about the cause of this lag, but let&#39;s try to come with some. The first hypothesis is that it is pure randomness, which is highly likely. The second hypothesis is that technology seems to be discussed approximately 30 years before similar trends appear in movies. This does not seem to make sense, as movies sometimes anticipate what could happen, depict scientific discoveries years after they occur, or reflect current worries about technological development. Therefore, movies could either be ahead of the news, approximately aligned with it or shifter with a few years, or talking about the topic many years after it appeared in the news. Thus, we can reasonably conclude that there is no clear link between the presence of the technology topic in news and movies.</p>
<h3 id="genres-analysis">Genres Analysis</h3>
<iframe src="/assets/plots/technology/technology_overall_top_genres.html" width="100%" height="600" frameborder="0"></iframe>

<p>Science-fiction as the first genre for technology, how surprising ! More than half of the themes are either Drama, Action/Adventure, Science fiction, thriller, documentary or horror. which might indicate that technology is addressed through a more serious angle. Comedy is 4th place at 10.9% is however taking a pretty big part of the cake. Technology can also lend itself to fun and a lighter tone. The presence of horror movies is also interesting, it might indicate that technology can be perceived as scary or part of a scary plot.</p>
<p>Ah, science fiction taking the top spot for technology, how unsurprising! More than half of the themes fall into genres like drama, action/adventure, science fiction, thriller, documentary, or horror, suggesting technology is often addressed from a serious angle. But wait, look at comedy in fourth place with 10.9%! That’s a pretty big slice of the pie, showing that technology can also lend itself to fun and a lighter tone.</p>
<p>And then there’s horror, its presence is intriguing, isn’t it? This might indicate that technology isn’t always seen as helpful or inspiring. Sometimes, it’s the stuff of nightmares or a chilling plot twist! Go Go Gadget Genre Investigation!</p>
<iframe src="/assets/plots/technology/technology_top_genres_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

<p>Just as expected, science fiction dominates most decades! But hold on, the 1960s tell a different story! This decade shows a much bigger presence of funnier genres like comedy, parody, and satire, with science fiction completely absent from the top 5, how curious!</p>
<p>And look at this, war paired with technology only appears during the 1940s, which makes perfect sense given the World War II context. A fascinating detail, wouldn’t you say? Of course I know Penny, the dataset is a bit small, so we have to tread carefully when interpreting genre evolution over time.</p>
<h3 id="emotions-analysis">Emotions Analysis</h3>
<iframe src="/assets/plots/technology/technology_emotion_counts.html" width="100%" height="600" frameborder="0"></iframe>

<p>Aha! The dominant emotions here are positive and negative, along with anticipation, fear, and trust. But look at this! The positive side is larger than the negative one when it comes to technology! Surprising, isn’t it? It seems movies aren’t as pessimistic about technology as one might think.</p>
<p>And take a look at trust and anticipation, both rank higher than fear. This suggests that in movies, technology is often addressed more as hope for the future rather than something completely scary. Fascinating stuff! Go Go Gadget Emotional Analysis!</p>
<iframe src="/assets/plots/technology/technology_emotion_counts_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

<p>Interesting discovery, team! The order of emotions in movies doesn’t change significantly over time, suggesting that technology tends to be addressed in a relatively consistent way. But wait, there’s more!</p>
<p>Negative emotions seem to gain importance as time goes on. Look closely, and you’ll see an increase in fear and a slight decrease in trust. This could indicate a shifting perspective, perhaps a more recent approach to technology is showing a less optimistic vision of its role and impact.</p>
<iframe src="/assets/plots/technology/technology_emotion_sentiment_counts.html" width="100%" height="600" frameborder="0"></iframe>

<p>Ah, as expected, positive sentiment dominates the technology theme overall! This is in accordance with what we have said earlier: technological progress is generally seen as a positive change rather than a scary evolution.</p>
<p>It seems movies prefer to focus on the hope and possibilities that technology brings, rather than diving into the fear factor. Go Go Gadget Optimism Detector!</p>
<h3 id="sentiment-analysis">Sentiment Analysis</h3>
<iframe src="/assets/plots/technology/technology_combined_sentiment_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

<p>Hmm, no clear trend stands out from this plot, team! Positive sentiment in movies is not simply increasing or decreasing over time, it’s a bit of a mixed bag.</p>
<p>However, the 1940s and 1950s tell a different story. During these decades, technology seemed to be associated to much larger positive emotions, reflecting more trust and hope than in the years that followed. Could it be that the optimism of these post-war years showed technology in a brighter light?</p>
<div style="display: flex; gap: 10px;">
  <iframe src="/assets/plots/technology/technology_top_movie_genres_by_negative_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
  <iframe src="/assets/plots/technology/technology_top_movie_genres_by_positive_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
</div>

<p>Well, well, well, it turns out that the genres for positive and negative sentiments are not all that different after all! The comedy genre shows up more in positive sentiment, which is just as we would expect. Meanwhile, thrillers make a big apparition in the negative sentiment zone, still no surprise there! Now, here’s the interesting part: documentaries are more often tied to positive vibes. It seems like the evolution of technology is depicted as a positive change, with these documentary movies not trying to alert on its potential dangers.</p>
<iframe src="/assets/plots/technology/technology_sunburst_genres_sentiment_emotions.html" width="100%" height="600" frameborder="0"></iframe>

<p>Here’s something truly fascinating: in science fiction, the positive side dominates by a lot! Could it be that writing about the future makes us more optimistic? It seems so! We might think that dystopian stories, which anticipate what could go wrong with technological evolution, would have a bigger impact, but that is not the case. Drama, too, is much more associated with positive emotions than negative ones. Why? Well, dramas often focus around human stories that convey hope and progress, with less frightening developments. On the other hand, thrillers are a play a big role in negative emotions, where fear is particularly significant—and that makes sense! Technology often has a bad reputation in these films, seen as something to fear. But wait, it is also possible that the plot could be sad or scary for reasons unrelated to technology. In fact, technology might even serve as a tool to overcome challenges rather than being inherently associated with a negative perception.</p>





  </div>
  
  <div id="tab4" class="tab-content"> 
  <!-- WWII -->
    <h2 id="world-war-ii">World War II</h2>
<h3 id="temporality-analysis-of-movies-with-news">Temporality Analysis of Movies with News</h3>
<iframe src="/assets/plots/ww2/ww2_movies_and_news_frequency_year.html" width="100%" height="600" frameborder="0"></iframe>

<p>It&#39;s time to investigate the case of World War II movies and news. WWII movies reached their zenith during the 1940s, with nearly 1 out of 5 movies tackling the theme. This peak was followed by a steady decline in the 1950s and 1960s, as society gradually moved on. However, the war’s shadow persisted, influencing narratives for decades. Aha! The long tail of history’s impact is clear. Fascinating!</p>
<p>Now, onto news articles on WWII! They surged alongside real-time events, capturing the immediacy of the conflict. But here&#39;s the twist, movies—due to their longer production cycles—often lagged behind. Or did they really? Between 1937 and 1941, movies seemed to anticipate real-world developments, and thus predicted trends. Could it be geopolitical tensions influencing creative minds? This is getting good!</p>
<iframe src="/assets/plots/ww2/ww2_movies_and_news_frequency_decade.html" width="100%" height="600" frameborder="0"></iframe>

<p>Movies produced before 1940 often blurred the lines between WWI and WWII themes. Why, you ask? That might be influenced by rising tensions and the looming threat of another global conflict. Aha! This adds a nuanced historical dimension to the dataset. Go-Go-Gadget Historical Insight!</p>
<p>Over decades, movies maintained a greater focus on WWII than news, solidifying cinema’s role as a medium for preserving and interpreting historical narratives. This enduring focus underscores cinema’s unique ability to memorialize and reframe history for new generations. Does the correlation between the decreasing WWII presence in both media relate a more general disinterest?</p>
<iframe src="/assets/plots/ww2/ww2_movies_news_interactive_lag.html" width="100%" height="600" frameborder="0"></iframe>
<iframe src="/assets/plots/ww2/ww2_movies_news_cross_correlation.html" width="100%" height="600" frameborder="0"></iframe>


<h3 id="genres-analysis">Genres Analysis</h3>
<iframe src="/assets/plots/ww2/ww2_top_genres_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

<p>Go-Go-Gadget Genre Tracker! Beyond the obvious dominance of drama and war, early wartime propaganda flourished in the 1930s and 1940s, rallying public morale. By the 2000s, historical and documentary films gained prominence, reflecting a shift toward reflective storytelling and educational narratives. Interesting!</p>
<p>But wait! Comedies also played their part, by offering lighter narratives even during wartime, showcasing resilience and the human spirit’s capacity for humor amid hardship. This juxtaposition of gravity and levity adds depth to the cinematic portrayal of WWII. What a dynamic evolution of genres!</p>
<h3 id="emotions-analysis">Emotions Analysis</h3>
<iframe src="/assets/plots/ww2/ww2_emotion_counts.html" width="100%" height="600" frameborder="0"></iframe>

<p>Whoa, do you see that? Fear, trust, and anger dominate the emotional spectrum, vividly portraying the war&#39;s tension and the psychological impact it had on audiences and creators alike. But still! Joy is present, even though it is overshadowed by the heavier emotions, reflecting the gravity of the times. Aha! The emotional tides tell a tale of their own.</p>
<iframe src="/assets/plots/ww2/ww2_emotion_counts_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

<p>Ah, fascinating! We observe an intriguing trend, folks: up until the 1940s, positive emotions dominate over negative ones. But after that, negative emotions take the lead—always! A common tactic during wartime, you say? Why, of course, positive movies are often used to keep the population motivated! Think propaganda or romance films, for example.</p>
<p>Now, let us use the Gadget Magnifying Glass to zoom into the 1960s. We notice a drastic decline in positive and trust-based emotions, while negative emotions like fear and anger rise. What’s going on here? Let’s dig deeper! We can link this shift to two major post-WWII events: the construction of the Berlin Wall and the Cuban Missile Crisis. These Cold War flashpoints, stemming from the long-term consequences of WWII, help explain the emotional landscape we see in this analysis. Mystery solved!</p>
<h3 id="sentiment-analysis">Sentiment Analysis</h3>
<iframe src="/assets/plots/ww2/ww2_combined_sentiment_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

<p>Ah-ha! What do we have here? A clear pattern: negative sentiments leading the charge over positive ones! But wait—there are two distinct peaks, one in 1960 and the other in 2000. What could this mean? Well, it seems that these spikes correspond to times when the fear of a new global conflict was at its highest. Tension mounting, people anxious, and the emotional landscape shifting. Case closed!</p>
<iframe src="/assets/plots/ww2/ww2_sunburst_genres_sentiment_emotions.html" width="100%" height="600" frameborder="0"></iframe>

<h3 id="conclusion">Conclusion</h3>
<p>WWII-themed movies not only documented historical realities but also mirrored and influenced public sentiment. This story reveals how cinema became a vessel for collective memory and emotion, offering a timeless exploration of humanity’s resilience and vulnerabilities. Go-Go-Gadget Cinema Time Machine!</p>





  </div>  
  
  <div id="tab5" class="tab-content"> 
  <!-- Cold War -->
   
   <h2 id="cold-war">Cold War</h2>
<p>Let me first give you some context about this theme. The Cold War (~1947–1991) was a period of intense geopolitical tension between the United States (and its allies, representing capitalist democracies) and the Soviet Union (and its allies, representing communist states). Despite the absence of direct military conflict between the two superpowers, this rivalry shaped global politics, economics, and military strategies for decades. Now let&#39;s dive into the analysis of this topic&#39;s presence in both movies and news datasets!</p>
<h3 id="temporality-analysis-of-movies-with-news">Temporality Analysis of Movies with News</h3>
<iframe src="/assets/plots/cold_war/cold_war_movies_and_news_frequency_year.html" width="100%" height="600" frameborder="0"></iframe>

<iframe src="/assets/plots/cold_war/cold_war_movies_news_interactive_lag.html" width="100%" height="600" frameborder="0"></iframe>

<p>Surprising findings here, look! There is a lag of 16 years between the movies and news related to cold war. It means that there are 16 years difference for both of them to align thematically. Let me get my Gadget List and see the possible reasons:</p>
<ul>
<li>Movies often serve as a medium for processing historical and geopolitical events years after the events have passed.</li>
<li>Historical distance: a lag allows new perspectives to emerge, moving beyond immediate reactions to provide deeper or more nuanced storytelling.</li>
<li>The patterns confirm that significant geopolitical events inspire filmmakers, creating a relationship where news inform art.</li>
</ul>
<p>Look, the plot is clickable. Let&#39;s click now on the news legend to see only the evolution of the movies frequency, and let us dive together into more detail.</p>
<p><strong>1943</strong>: During this year, the themes are Anti-Nazi and positive towards the USSR.</p>
<p><strong>1960s and 1970s</strong>: <br>
The main themes are:</p>
<ul>
<li>Nuclear anxiety: themes often include accidental nuclear strikes, space races, and clashes between democracy and communism.</li>
<li>War and resistance: stories about World War II and other conflicts dominate, showing resistance movements, espionage, and personal sacrifices during wartime.</li>
<li>Political satire: some movies use humor and satire to critique political ideologies, societal norms, which reflects Cold War propaganda or domestic issues.</li>
<li>Technology: themes around technological advancements, particularly in space exploration and military innovation, show the fascination and fear associated with rapid scientific progress during the Cold War.</li>
<li>Human relationships: a recurring theme highlights the strength of family, friendship, and love as a way to cope with the bigger conflicts.</li>
</ul>
<p>Don&#39;t you find these really interesting?</p>
<h3 id="geographical-analysis-of-movies">Geographical Analysis of Movies</h3>
<iframe src="/assets/plots/cold_war/cold_war_movie_countries_world_map.html" width="100%" height="600" frameborder="0"></iframe>

<p>No surprise there! The main countries talking about Cold War are the US and USSR.</p>
<h3 id="genres-analysis">Genres Analysis</h3>
<iframe src="/assets/plots/cold_war/cold_war_overall_top_genres.html" width="100%" height="600" frameborder="0"></iframe>

<p>Let&#39;s write down together the top 5 movies genres:</p>
<ul>
<li>Drama: shows messy conflicts and personal struggles of that time.</li>
<li>Action/Adventure: action, conflicts and tensions of that time.</li>
<li>War: well... It seems quite self-explanatory.</li>
<li>Thriller: espionage, intrigue.</li>
<li>Comedy: satire, dark-humor.</li>
</ul>
<iframe src="/assets/plots/cold_war/cold_war_top_genres_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

<p>Are you ready for the following analysis? We had a good use of the Gadget Magnifying Glass to not skip a single detail. Let&#39;s look at some relevant decades with each, their interesting genres to analyze.</p>
<p><strong>1940s</strong>: War, Spy, Propaganda Film.</p>
<p>These reflected the global conflict of World War II, with War films capturing battles and heroism, Spy films diving into espionage and secret missions (just like ours, but shhh), and Propaganda films promoting national unity and ideological messages. These genres mirrored the intense political and social atmosphere of the decade.</p>
<p><strong>1950s</strong>: Science-Fiction, Action-Adventure. </p>
<p>Science Fiction explored fears of nuclear technology and the unknown, reflecting Cold War anxieties about the future and space exploration. Action/Adventure brought excitement with the presence of heroes and quests to symbolise the ideological battles of the era. Interesting note: looking into the NYT dataset, we have 4466 news containing the word <em>nuclear</em> during this period.</p>
<p><strong>1960s</strong>: Comedy, World. </p>
<p>The World genre includes a wide range of stories exploring global conflicts, historical events, and societal changes with war and revolution, cold war and espionage and global perspectives as main themes. Comedy is used in a satire way to criticize the societal norms. That provides a lighter, yet thought-provoking lens on pressing issues of the time.</p>
<p><strong>1970s</strong> (These are the main years of the cold war): War, Spy.  </p>
<p>The War genre here explores those main themes: resistance, cultural identity, psychological cost of war and oppression, espionage... The Spy genre has themes such as paranoia, espionage and the high-stakes of world secrets and technological competition that defined East-West tensions. Again, looking in the news, 2432 of them are related to the word &quot;espionage&quot; or &quot;spy&quot;.</p>
<p><strong>1980s</strong>: Thriller, Political.</p>
<p>For the political genres, we can see American movies criticizing the Soviets through societal and political structures through allegory and personal stories. Also, we can find explorations of ideological conflicts, cultural divides, and individual struggles under oppressive system. For thriller genres, we also notice paranoia through movies that have assassination attempts and show anxiety all over the world.</p>
<p><strong>1990s</strong>: World. </p>
<p>The world genre was dominated by narratives reflecting the geopolitical shifts following the Cold War, such as the dissolution of the Soviet Union, the Balkan wars, and post-communist transitions. We can also see the critique of remaining communist countries from the capitalist ones.</p>
<p><strong>2010s</strong>: Historical. </p>
<p>As the world moved further from the Cold War and the collapse of communism, filmmakers in post-Soviet and post-communist states revised history through a new lens, often exploring themes of identity, transformation, and reconciliation. Thus, we see a lot of movies related to cold war, even if it&#39;s done.</p>
<p>Aha! How did you find our insights? Interesting, right? We hope you are still with us to keep on analyzing more thrilling data about the Cold War!</p>
<h3 id="emotions-analysis">Emotions Analysis</h3>
<iframe src="/assets/plots/cold_war/cold_war_emotion_counts_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

<p>Now is the time to analyze the emotions seen in movies talking about Cold War. Are you ready? First, we notice that there is less positive emotions during the Cold War. To be honest, that is understandable. What next? Oh, there is a decrease of positive emotions from 1940s to 1960s. The American and Soviet Union were allies during WWII, which is showcased here by the positive emotions during this period. But right then, we see a decrease of positive emotions in the period of the Cold War.</p>
<p>Negative emotions like fear, sadness, and disgust are consistently prevalent, reflecting the Cold War&#39;s tension, uncertainty, and threats (e.g., nuclear warfare, espionage). Fear shows a peak during the Cold War decades, particularly in the 1950s-1980s, corresponding to tensions during events like the Cuban Missile Crisis. It declines in the 1990s and 2000s, aligning with the Cold War&#39;s end.</p>
<p>In the more positive side, trust is relatively low but stable, perhaps reflecting the theme of distrust intrinsic to espionage and ideological rivalry. This emotion increases towards the 1990s. Fascinating!</p>
<iframe src="/assets/plots/cold_war/cold_war_emotion_sentiment_counts.html" width="100%" height="600" frameborder="0"></iframe>

<p>The counts for negative (4902) and positive (4760) sentiments are relatively close, indicating that Cold War narratives balance darker and more hopeful tones. This balance reflects the duality of Cold War that shows fear, mistrust, and conflict alongside resilience, innovation, and eventual resolution. Interesting! The near-equal distribution suggests that Cold War narratives do not focus only on despair or triumph but instead explore the nuanced emotions of the era.</p>
<h3 id="sentiment-analysis">Sentiment Analysis</h3>
<iframe src="/assets/plots/cold_war/cold_war_all_sentiments.html" width="100%" height="600" frameborder="0"></iframe>

<p>Aha! As we would expect, negative sentiment prevails.</p>
<div style="display: flex; gap: 10px;">
  <iframe src="/assets/plots/cold_war/cold_war_top_movie_genres_by_negative_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
  <iframe src="/assets/plots/cold_war/cold_war_top_movie_genres_by_positive_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
</div>

<p>Let us take the Gadget List back!</p>
<ul>
<li>Negative sentiment: comedy is prevalent because Cold War comedies often used satire to criticize political ideologies, societal paranoia, and absurdities of the era. They also used humour to show the darker truth of the era. </li>
<li>Positive sentiment: world. Many Cold War-themed world cinema narratives from the post-Cold War period focus on reconciliation.</li>
</ul>
<iframe src="/assets/plots/cold_war/cold_war_sunburst_genres_sentiment_emotions.html" width="100%" height="600" frameborder="0"></iframe>


<h3 id="conclusion">Conclusion</h3>
<p>What are the main takeoffs of these fascinating analyses? They show how movies connect with their time, often reflecting key events and emotions from history. Films about war, espionage, and politics mirror the worries and struggles of their era, but there is an interesting 16-year lag which corresponds to the time it takes for real-life events to show up on screen. 
The emotions and sentiments in Cold War-themed movies, while varied, often highlight the tension and anxiety of the period. This makes sense—it was a stressful time. In the end, movies do not just tell stories; they capture the feelings and challenges of the people who lived through those moments, helping us understand the past on a deeper level.</p>





  </div>  
  
  <div id="tab6" class="tab-content"> 
  <!-- Vietnam War -->
    
    <h2 id="vietnam-war">Vietnam War</h2>
<h3 id="temporality-analysis-of-movies-with-news">Temporality Analysis of Movies with News</h3>
<iframe src="/assets/plots/vietnam/vietnam_movies_and_news_frequency_year.html" width="100%" height="600" frameborder="0"></iframe>

<iframe src="/assets/plots/vietnam/vietnam_movies_and_news_frequency_decade.html" width="100%" height="600" frameborder="0"></iframe>

<p>For this topic about the Vietnam was, let&#39;s first talk about movies only. From both plots, we see a clear important presence of movies related to Vietnam war between 1960 and 1980, which corresponds well to the period of this war (1955 to 1975). Penny is here saying that there is a bit of noise, since our model has detected movies similar to Vietnam war before it actually started. However, the strong presence of movies related to the Vietnam war at the exact period of the war, indicates the it appeared significantly in movies-or at least that there was a very strong increase in war movies in this period. This suggests that many filmmakers and people wanted to present the conflict represented on screen and talk about this war in general.</p>
<iframe src="/assets/plots/vietnam/vietnam_movies_news_cross_correlation.html" width="100%" height="600" frameborder="0"></iframe>

<iframe src="/assets/plots/vietnam/vietnam_movies_news_interactive_lag.html" width="100%" height="600" frameborder="0"></iframe>

<p>Now let&#39;s take a look togetger at the cross-correlation plot! It is clear that the evolution of the Vietnam War theme is similar between news and movies. There is some strong noise data before 1950, when the war has not actually started. However, if we exclude that, both show a strong presence of the topic in the 1960s, with its prominence gradually decreasing over time. Interesting, right? This reflects that the war is a current crisis, before rapidly decreasing and following the same trend as movies as the war becomes a past event. Overall, the plot suggests that the topic was widely discussed in both news articles and cultural production (in our case movies), while the events were currently happening. The cross-correlation has an optimal shift of 0 year, which supports the hypothesis that wars are more represented in movies while they remain hot topics, but are addressed less frequently as time fades and they become more distant in public memory. In this case, news and movies address the issue at the same time. That is fascinating!</p>
<h3 id="genres-analysis">Genres Analysis</h3>
<iframe src="/assets/plots/vietnam/vietnam_overall_top_genres.html" width="100%" height="600" frameborder="0"></iframe>

<p>About the genres, the most important ones about Vietnam war are Drama, Action/Aventure and War. Not really surprising considering the context right? Comedy comes 4th, which can mean that there still is a relative strong need to dedramatize it, even though it remains treated more as a serious topic as suggested by the three first genres. Here! Another interesting point to note is the presence of Chinese movies, which is linked to China’s involvement in the Vietnam War and thus the country also had stories to tell from their side. Overall, we have a pretty good representation of how a war can be treated in movies. Don&#39;t you agree?</p>
<iframe src="/assets/plots/vietnam/vietnam_top_genres_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

<p>Here, it&#39;s worth observing that war is present in all periods that concern directly the Vietnam war as well as Drama and Action/Adventure. These are constant for a Vietnam war film. Another important thing to notice is the place reserved for comedies and other fun genres such as parody. Intriguing... These are not very present during the actual years of the war (1950s, 1960s and 1970s) but they become more frequent in the decades that follow, which could indicate that it is difficult to laugh of a tragic event while it is happening, but it becomes more and more possible as the event is further in the past. Fascinating!</p>
<h3 id="emotions-analysis">Emotions Analysis</h3>
<iframe src="/assets/plots/vietnam/vietnam_emotion_counts.html" width="100%" height="600" frameborder="0"></iframe>

<p>Not suprisingly, negative emotions dominate positive ones for Vietnam war films with fear being very high. It is expected for movies talking about war and crude realities of death, violence or trauma. Positive emotions are also well present. This could be because war movies also tend to represent a bit of positivity inside the atrocities of war such as friendship and camaraderie between soldiers. Can this be a reason why trust is relatively high? It&#39;s highly possible.</p>
<iframe src="/assets/plots/vietnam/vietnam_emotion_counts_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

<p>We note that positive emotions tend to increase over time, while negative emotions decrease. This could suggest that as tragic events such as the Vietnam War, become more distant in the past, their portrayal shifts, focusing less on its horrors and dedramatizing it. Similarly, trust shows an upward trend over time, while anger diminishes. The representation of the war appears to become less raw over time and less focused on negative aspects. Why? Possibly because the emotional impact of the war is less important for an audience who feels less related to it.</p>
<h3 id="sentiment-analysis">Sentiment Analysis</h3>
<iframe src="/assets/plots/vietnam/vietnam_combined_sentiment_by_decade.html" width="100%" height="600" frameborder="0"></iframe>

<p>Negative and positive emotions remain relatively constant over time, which suggests that, regardless of the period, war will always be portrayed as something deeply negative. That makes sense!</p>
<div style="display: flex; gap: 10px;">
  <iframe src="/assets/plots/gender_equality/gender_equality_top_movie_genres_by_negative_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
  <iframe src="/assets/plots/gender_equality/gender_equality_top_movie_genres_by_positive_sentiment.html" width="100%" height="600" frameborder="0"></iframe>
</div>

<p>The most noticeable changes between these graphs are the swaped positions between Comedy, Action/Adventure and War. In negative sentiments, Comedy plays a much smaller role, while War and Action/Adventure genres are predominant. So, obviously movies that focus on depicting war itself in its tough realities are far more negative than those that turn it into comedies, where the action/war side is less important. Again, that seems to make sense!</p>
<iframe src="/assets/plots/vietnam/vietnam_sunburst_genres_sentiment_emotions.html" width="100%" height="600" frameborder="0"></iframe>

<p>All genres are associated with more negative than positive sentiments. The most negative one is War while other genres, such as Drama or Action are less associated with negativity, maybe focusing more on positive sides like brotherhood, courage or hope. Comedy is the only one that has more positive than negative but not by a significant amount, which suggests that event in comedies, Vietnam War is treated as something very serious and dark.</p>





  </div>
</div>

<script src="{{ 'assets/js/scripts.js' | relative_url }}"></script>




# Conclusion

Good job dear inspectors! Now is time for us to summarize what we found in the datasets!

Overall, results were really interesting. We analyzed three themes linked to war and found that, obviously, they were associated with serious genres and negative sentiments. Movies about WWII and the Vietnam War seem to appear at the same time as the wars themselves,  which might reflect a need to talk about them. However, that is not the case of the Cold War, which query was “URSS”. That explains the lag of 16 years in the plot of the interactive lag. All other themes are associated with much more positive sentiments, where the comedy genre takes up much more space. This might indicate that we enjoy laughing about important themes, especially for gender equality or health, though less so for technology. Movies about gender equality are shifted in time compared to news, which shows that movies reflect topics discussed in society way before the news do. Other topics such as health or technology did not seem to have any noticeable correlation with news. Maybe these topics are too general and omnipresent in society in general, to be finding really interesting correlation between them. Furthermore, this suggests that their treatment in movies is independent from their presence in news articles. In conclusion, this aligns with what we expected: war is depicted in all its horror while it happens, whereas other societal themes are treated more independently in time with a much lighter tone. And voilà! This is the glimpse we had of societal themes through movies!


<br>



