import React, { useState } from 'react';
import './filters.css';

export default function Filters(x) {
  const [topic, setTopic] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    x.parentCallback(topic);
  };

  return (
    <form className="form-filter" onSubmit={handleSubmit}>
      <label>
        Topic
        <input
          type="search"
          value={topic}
          onChange={(e) => {
            setTopic(e.target.value);
          }}
        />
      </label>
      <div>
        <button className="form-filter-btn">Search</button>
      </div>
    </form>
  );
}
