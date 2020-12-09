import './App.css';
import Movie from './Movie';


function App() {
  const list = [
    {
      title: "The Fellowship of the Ring",
      hours: 2,
      minutes: 58
    }, {
      title: "The To Towers",
      hours: 2,
      minutes: 59
    }, {
      title: "The Return of the King",
      hours: 3,
      minutes: 21
    }
  ]
      const movies = list.map((movie, index) => {
        return <Movie title={movie.title} hours={movie.hours} minutes={movie.minutes} key={`list-item-${index}`} />
      })
    
  return (
    <div>
    
     
        {movies}

      
  </div>
  );
}

export default App;
