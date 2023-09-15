import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

const API_KEY = 'xxxxxxxx';

const News = () => {
  const [articles, setArticles] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [category, setCategory] = useState('general');

  const searchTopic = async () => {
    if (searchTerm && searchTerm != '')
      fetch(
        `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setArticles(data);
        });
  };

  const searchCategory = async () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=${API_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticles(data);
      });
  };

  useEffect(() => {
    searchCategory();
  }, [category]);
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setArticles(data);
      });
  }, []);

  return (
    <div>
      News
      <div className="search">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button
          onClick={() => {
            searchTopic();
          }}
        >
          Search
        </button>
      </div>
      <div className="categories">
        <button
          onClick={() => {
            setCategory('general');
            
          }}
        >
          General
        </button>
        <button
          onClick={() => {
            setCategory('business');
            
          }}
        >
          Business
        </button>
        <button
          onClick={() => {
            setCategory('entertainment');
            
          }}
        >
          Entertainment
        </button>
        <button
          onClick={() => {
            setCategory('health');
          }}
        >
          Health
        </button>
        <button
          onClick={() => {
            setCategory('science');
          }}
        >
          Science
        </button>
        <button
          onClick={() => {
            setCategory('sports');
          }}
        >
          Sports
        </button>
        <button
          onClick={() => {
            setCategory('technology');
          }}
        >
          Technology
        </button>
      </div>
      <div className="articles">
        articles
        {articles && (
          <div id="articles">
            {articles.articles
              .filter((article) => {
                return (
                  article.description != null && article.urlToImage != null
                );
              })
              .map((article) => {
                return (
                  <NewsCard article={article} key={article.url}></NewsCard>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
