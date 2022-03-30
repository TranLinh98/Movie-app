import React from 'react';
import HeroSlide from './../../components/heroslide/HeroSlide';
import { OutlineButton } from './../../components/button/Button';
import { Link } from 'react-router-dom';
import MovieList from './../../components/movielist/MovieList';
import { category, movieType, tvType } from '../../api/tmdbApi';

const Home = () => {
  return (
    <>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Phim lẻ thịnh hành</h2>
            <Link to="/movie">
              <OutlineButton className="small">Xem chi tiết</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top xếp hạng phim lẻ</h2>
            <Link to="/movie">
              <OutlineButton className="small">Xem chi tiết</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Phim truyền hình thịnh hành</h2>
            <Link to="/tv">
              <OutlineButton className="small">Xem chi tiết</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top xếp hạng phim truyền hình</h2>
            <Link to="/tv">
              <OutlineButton className="small">Xem chi tiết</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  );
};

export default Home;
