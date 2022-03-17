import { Link } from 'react-router-dom';
import './news.css';

export default function New(data) {
  const article = data.article;
  const { author, title, url, urlToImage } = article;

  return (
    <div className="item separator">
      <div className="item-detail">Author: {author}</div>
      <div className="item-detail">
        <Link to={`/news`} state={{ article }}>
          Title: {title}{' '}
        </Link>
      </div>
      <div className="item">
        <div className="item-detail">
          <a href={url} target="_blank" rel="noreferrer">
            Go to article
          </a>
        </div>
      </div>
      <div className="item">
        <a href={url} target="_blank" rel="noreferrer">
          <img src={urlToImage} className="images" alt="News" />
        </a>
      </div>
    </div>
  );
}
