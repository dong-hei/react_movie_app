import React from "react";
import Movie from "../components/Movie";
import { dummy } from '../movieDummy';


export default function Movies(){
  const onClickMoveItem = () =>{}
    return(
        <div>
        <div className="movies-container" onClick={onClickMoveItem}>
          {
            dummy.results.map((item) =>{
              return (
                <Movie
                  title={item.title}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                  overView={item.overview}
                />
              );
            })}
          </div>
    </div>
    );
}