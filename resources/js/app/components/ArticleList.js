import React from 'react';
import { Link } from 'react-router-dom';

function ArticleList({ articles = [] }) {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id} className="flex flex-row">
          <h2 className="text-lg"><Link to={`/article/${article.id}`}>{article.title}</Link></h2>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
