import React from 'react';
import './details.css';
import { useLocation } from 'react-router-dom';

export default function NewsDetails() {
  const location = useLocation();
  const { article } = location.state;
  return (
    <div className="item-detail-hotel">
      <div className="item-detail-name">
        <div className="item-detail-name-title">Author:</div>
        <div className="item-detail-name-value">{article.author}</div>
      </div>
      <div className="item-detail-name">
        <div className="item-detail-name-title">Title:</div>
        <div className="item-detail-name-value">{article.title}</div>
      </div>
      <div className="item-detail-name">
        <div className="item-detail-name-title">Description:</div>
        <div className="item-detail-name-value">{article.description}</div>
      </div>
      <div className="item-detail-name">
        <a href={article.url} target="_blank" rel="noreferrer" className="item-detail-name-title">
          Go to article
        </a>
      </div>
      <div className="item-detail-name">
        <img src={article.urlToImage} className="images" alt="" />
      </div>
    </div>
  );
}
