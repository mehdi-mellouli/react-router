import React from 'react';
import { Rating } from 'react-simple-star-rating'



const MovieCard = ({ elm  }) => {
  return (
    <>
      <div className="container-fluid"  >
        <div className="row justify-content-center "    >
          <div className="col-md-4 col-sm-6 card my-3 py-3 border-0" key={elm.id} id='card'>
            <div className="card-img-top text-center">
              <img src={elm.imgURL} alt={elm.title} className="photo w-75" />
            </div>
            <div className="card-body">
              <a href={elm.trailerURL} className="card-title fw-bold fs-4">
                {elm.title}
              </a>
              <div className="card-text">{elm.description}</div>
              <div id='rate'>
                <Rating
                initialValue={elm.rating}
                  readonly
                />
                <p id='rating-number' >{elm.rating}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard