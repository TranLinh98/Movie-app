import React from 'react';
import { useParams } from 'react-router';

import { category as cate } from '../../api/tmdbApi';
import PageHeader from './../../components/pageheader/PageHeader';
import MovieGrid from './../../components/moviegrid/MovieGrid';

const Catalog = () => {
  const { category } = useParams();

  return (
    <>
      <PageHeader>
        {category === cate.movie ? 'Phim lẻ' : 'Phim truyền hình'}
      </PageHeader>

      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
};

export default Catalog;
