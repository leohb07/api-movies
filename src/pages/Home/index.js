import { Container } from "../../components/Container";
import { MovieList } from "../../components/MovieList";
import { Movie } from "../../components/Movie";


export function Home() {
  const movies = [
    {
      id: 1,
      title: 'Spider Man',
      image_url: 'https://cdn.pocket-lint.com/r/s/485x/assets/images/159643-tv-news-spider-man-no-way-home-image1-dryautoefj.jpg',
    },
    {
      id: 2,
      title: 'Avengers',
      image_url: 'https://cdn.pocket-lint.com/r/s/485x/assets/images/159643-tv-news-spider-man-no-way-home-image1-dryautoefj.jpg',
    },
    {
      id: 3,
      title: 'Capitão América',
      image_url: 'https://cdn.pocket-lint.com/r/s/485x/assets/images/159643-tv-news-spider-man-no-way-home-image1-dryautoefj.jpg',
    }
  ]

  return (
    <Container>
      <h1>Movies</h1>

      <MovieList>
        {movies.map(movie => {
          return (
            <Movie key={movie.id}>
              <a href="https://www.google.com.br">
                <img src={movie.image_url} alt={movie.title}/>
              </a>
                <span>{movie.title}</span>
            </Movie>
          )
        })}
      </MovieList>
    </Container>
  )
}