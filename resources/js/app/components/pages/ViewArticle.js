import React from 'react';

function ViewArticle({ article = {} }) {
  const {
    title,
    body,
    created_at: createdAt,
    updated_at: updatedAt,
  } = article;
  return (
    <div className="flex flex-col">
      <h2 className="py-2 text-2xl capitalize">{title}</h2>
      <div className="my-2">
        Created on {createdAt}.
        {
          updatedAt === createdAt
            ? null
            : `Updated on ${updatedAt}`
        }
      </div>
      <div className="whitespace-pre-line">
        {body}
      </div>
    </div>
  );
}

export default ViewArticle;
