import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import './style.css';

function LatestNews({ news }) {
  return (
    <div className="latest-news">
      <h2>Latest News</h2>
      <div className="news-container">
        <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={4}>
          {news.map((article, index) => (
            <div key={index} className="news-item">
              <img src={article.image} alt={article.title} />
              <div className="news-details">
                <h3>{article.title}</h3>
                <p>Date: {article.date}</p>
                <p>{article.description}</p>
              </div>
            </div>
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
}

export default LatestNews;
