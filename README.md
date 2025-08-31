### Weighted Rating System and Statistical Modelling - Addressing Small-Sample Bias

    Project Name: Weighted Rating System
    Project Type: Weighted Scores (Statistical Modeling)
    Author: Melvin Tai (Last Updated: July 2nd, 2025)

**Behind the Project Idea:**  
Have you ever had the experience of pressing "Sort by Rating" - may it be online shopping, food delivery, or even Kaggle datasets - and before you know it, you spend the next 20 minutes scrolling over products rated 5-stars by one guy? Well, it gets even better when you realize that guy probably is the seller themselves. 

We call these rating systems *naive*. These naive rating systems rank products solely by their mean score, which obviously and unfairly promotes items with very few perfect ratings while heavily penalizing well-established items with thousands of votes. This small-sample bias leads to inaccurate and unreliable rankings. 

Therefore, the goal of this investigation is to develop a statistical algorithm that evaluates existing advanced rating systems, such as the Bayesian Average, Wilson Score Interval, Bradley–Terry–Luce, and Dirichlet–Multinomial models, to balance rating quality with vote count, thus producing fairer and more stable rankings.

---

**Project Description:**  
This project evaluates advanced weighted rating algorithms (i.e. Bayesian Average, Wilson Score Intervals, Bradley–Terry–Luce Model, and Dirichlet–Multinomial Model) to correct small-sample bias in average-based rating systems.

    Investigation Methodology: "Weighted Rating System and Statistical Modelling - Addressing Small-Sample Bias.ipynb".
    Investigation Outcome: "10,000_Movies_ReRanked_WRS.csv".

---

**Project Tools Selection:**  
**Polars** was chosen for this project due to its time- and memory-efficiency that exceeds Pandas for large datasets (although Pandas was still applied in the investigation for in-depth statistical models), and compatibility with NumPy, SciPy, and Matplotlib for statistical modeling and data visualization would make things much easier for us.

---

**Affiliated Weighted Rating Algorithms:**
- The **Bayesian Average** balances each product’s mean rating with the global mean, weighted by vote count. This prevents low-vote products from dominating rankings. IMDB uses this method for their Top 250 movies list.
- The **Wilson Score Interval** provides a conservative confidence interval estimate of a product’s true rating, prioritizing reliability. It reduces the rank of items with too few votes.
- The **Bradley-Terry-Luce Model** (scaled to 0-5) estimates the probability of one item being preferred over another based on pairwise comparisons (thus widely used in ranking and preference modeling).
- The **Dirichlet–Multinomial Model** accounts for uncertainty in multinomial ratings (1–5 stars), providing a probabilistic model that avoids overconfidence when data is sparse.

---

**Affiliated Data Visualization Tools:**
- Constructed a **histogram** and **boxplot** to visualize before and after data cleaning.
- Constructed **pairwise plots** and **scatter plots with K-Means clustering** for each dataset to visualize the correlation between "Rated" and "Votes".
- Constructed a **rate of growth graph** to visualize the rate of growth of each weighted rating algorithm.
- Constructed **histograms with normal distribution** and **overlay histograms** for each dataset to visualize the score distribution of each weighted rating algorithm.

---

**Affiliated Datasets:**
- **"df_books"** is a 1,071 row, 15 column (158 KB) dataset titled "Books Sales and Ratings", authored by The Devastator and acquired via Kaggle. From my selection of three datasets, "df_books" served as the small, simple, and fundamental dataset that was used for 'confirming' purposes. Every task had to pass this dataset before moving on to the next two. It was also the easiest and more dependable one to handle, and due to its small size, working on data visualization did not take me as long as I had expected.
- **"df_games"** is a 16,720 row, 16 column (1.54 MB) dataset titled "Global Video Game Sales & Ratings" (Raw Data.csv), authored by The Devastator and acquired via Kaggle. From my selection of three datasets, "df_games" serves as the 'showcase' dataset - showcasing my findings and my use of techniques. As we are using the raw data document, there is a need for more in-depth data cleaning than other datasets, and as this dataset is also slightly larger than the "df_books", it is used to display our findings.
- **"df_reviews"** is a 413,841 row, 6 column (125 MB) dataset titled "Amazon Reviews: Unlocked Mobile Phones", authored by PromptCloud and acquired via Kaggle. Unlike the others, this dataset refers to customer reviews after the purchase of some phone product on Amazon (and not product ratings). "Rated" refers to the customers' appraisal, while "Votes" refer to ratings of the appraisal, i.e. people who may or may not have purchased the same product, but found the customers' ratings to be truthful. From my selection of three datasets, "df_reviews" serves as the 'verification' dataset, proving that this project can be integrated to larger datasets of completely different uses.

---

#### Use of Generative AI:
    The functions of the respective weighted rating algorithms (Bayesian Average, Wilson Score Interval, Bradley-Terry-Luce Model, and Dirichlet–Multinomial Model) were generated by ChatGPT (GPT-5 model), adapted and later amended by Melvin to serve applicable and practical for dataset analysis.

#### Used Datasets:
    KARKAVELRAJA J. (2023, March 10). IMDB Top 250 Movies.  
    Kaggle. https://www.kaggle.com/datasets/karkavelrajaj/imdb-top-250-movies 

    PromptCloud. (2017, January 11). Amazon Reviews: Unlocked Mobile Phones. Kaggle.  
    https://www.kaggle.com/datasets/PromptCloudHQ/amazon-reviews-unlocked-mobile-phones 

    The Devastator. (2023a, December 6). Books Sales and Ratings. Kaggle.  
    https://www.kaggle.com/datasets/thedevastator/books-sales-and-ratings  

    The Devastator. (2023b, February 10). Global Video Game Sales & Ratings. Kaggle.  
    https://www.kaggle.com/datasets/thedevastator/global-video-game-sales-ratings?select=Cleaned%2BData%2B2.csv  
