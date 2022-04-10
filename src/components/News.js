import React from 'react';
import NewsCard from './NewsCard';

const News = ({ news }) => {

  return (
    <div className="bg-gray-100">
      <NewsCard news={news} />
    </div>
  )
}

export default News;