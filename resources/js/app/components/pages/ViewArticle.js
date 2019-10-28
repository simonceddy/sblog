import React from 'react';
import HeadingMd from '../../shared/components/HeadingMd';
import DateInfo from '../../shared/components/DateInfo';
import CategoriesList from '../../shared/components/CategoriesList';
import CategoryBox from '../../shared/components/CategoryBox';

function ViewArticle({ article = {} }) {
  const {
    title,
    body,
    created_at: createdAt,
    updated_at: updatedAt,
    categories = []
  } = article;
  // console.log(categories);
  return (
    <div className="flex flex-col">
      <HeadingMd>{title}</HeadingMd>
      <DateInfo>
        Created on {createdAt}.
        {
          updatedAt === createdAt
            ? null
            : `Updated on ${updatedAt}`
        }
      </DateInfo>
      <CategoriesList>
        {categories.map(({ id, name, slug }) => (
          <CategoryBox key={id} slug={slug}>
            {name}
          </CategoryBox>
        ))}
      </CategoriesList>
      <div className="whitespace-pre-line">
        {body}
      </div>
    </div>
  );
}

export default ViewArticle;
