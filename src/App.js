import "./App.css";
import Row from "./components/row/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1> Netflix app </h1>
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending NOW" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romances Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
