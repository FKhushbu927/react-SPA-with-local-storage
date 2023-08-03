import React from 'react';

const SingleCard = ({ movie, handleWatchTime }) => {
    // console.log(props);
    //  const {category,description,imdbRating,poster, watchTime, movieName} = props.movie;
    return (
        <div>

            <div className="movie-card card text-center w-100 m-auto">
                <div className="movie-poster w-75 m-auto">
                    <img className='w-75' src={movie.poster} alt="" />
                </div>
                <h3>{movie.movieName}</h3>
                <p>{movie.description}</p>
                <div className="timeAndRating d-flex justify-content-around">
                    <p> watchTime: {movie.watchTime}</p>
                    <p>Rating : {movie.imdbRating}</p>
                </div>
                <button onClick = {() => handleWatchTime(movie.watchTime)} className='btn btn-success w-30 m-auto'>Book Now</button>
            </div>

        </div>
    );
};

export default SingleCard;