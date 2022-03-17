import React, { useState, useEffect, useCallback } from 'react';
import { getNews, getNewsByTopic } from '../../services/news';
import New from '../New';
import './newslist.css';
import Filters from '../Filters';

export default function ListOfNews() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getNews();
        const json = await response.json();
        setNews(json.articles);
      } catch (e) {
        setError(e);
      }
    }
    fetchData();
  }, []);

  const handleCallback = useCallback(async (topic) => {
    try {
      const response = await getNewsByTopic(topic);
      const json = await response.json();
      setNews(json.articles);
    } catch (e) {
      setError(e);
    }
  }, []);

  return (
    <div>
      <Filters parentCallback={handleCallback} />
      {error ? <span className="span-error-list">{error.message}</span> : ''}
      <div className="list-hotel">
        {news.map((article, index) => (
          <New key={index} article={article} />
        ))}
      </div>
    </div>
  );
}
