import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '../../components/Details';
import { APIKey } from '../../config/Key';
import { Link } from "react-router-dom";

export function Details() {
  const { id } = useParams();

  const [ movie, setMovie ] = useState({});
  const image_path = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`)
      .then(res => res.json())
      .then(data => {
        const { title, poster_path, overview, release_date } = data;
        const movie = {
          id,
          title: title,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date
        }

        setMovie(movie)
      })
  }, [id])

  return (
    <Container>
      <div className='movie'>
        <img src={movie.image} alt={movie.sinopse} />
        <div className='details'>
          <h2>
            {movie.title}
          </h2>
          <span>Sinopse: {movie.sinopse}</span>
          <span className='dateSpan'>Release date: {movie.releaseDate}</span>
          <Link to={`/`}>
            <button>Go back</button>
          </Link>
        </div>
      </div>
    </Container>
  )
}