import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div id="news-card">
      <img id="image" src={article.urlToImage} width="250px" alt="" />
      <div id="news-title">{article.title}</div>
      <div id="news-description">{article.description}</div>
      <a id="button" target="_blank" href={article.url}>
        {' '}
        Read more
      </a>
    </div>
  );
};

export default NewsCard;
