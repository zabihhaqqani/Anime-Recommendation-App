import { useState } from "react";
import "./styles.css";

//Database
const animeList = {
  Action: [
    {
      name: "My Hero Academia",
      IMDb: "IMDb : 8.4 / 10 ",
      imgURl:
        "https://m.media-amazon.com/images/M/MV5BNmQzYmE2MGEtZjk4YS00YmVjLWEwZWMtODRkMjc4MTM5N2I3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
    },
    {
      name: "Demon Slayer",
      IMDb: "IMDb : 8.7 / 10 ",
      imgURl:
        "https://m.media-amazon.com/images/M/MV5BOGZmYjkxMDItNmQ3ZC00YzdlLThjMDktYWJkOGZiOWU1NmY0XkEyXkFqcGdeQXVyMTA3MzQ4MTcw._V1_.jpg"
    },
    {
      name: "Black Clover",
      IMDb: "IMDb : 8.3 / 10",
      imgURl:
        "https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg"
    }
  ],
  Comedy: [
    {
      name: "Assassination Classroom",
      IMDb: "IMDb : 8 / 10",
      imgURl:
        "https://m.media-amazon.com/images/M/MV5BYzI0OWJlMjItYmE1NS00YzE2LWExNDAtMDM3MDA5MzM5NmExXkEyXkFqcGdeQXVyNzA5MDUyODA@._V1_.jpg"
    },
    {
      name: "Devil is a Part Timer",
      IMDb: "IMDb : 7.7 / 10 ",
      imgURl:
        "https://m.media-amazon.com/images/M/MV5BMGQyMTkxNjAtN2YxNC00YjgyLWE0YmQtZTY4ODczMDhmNzNkXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg"
    },
    {
      name: "The Vampire Dies in no Time",
      IMDb: "IMDb : 6.7 / 10",
      imgURl: "https://cdn.myanimelist.net/images/anime/1892/117151.jpg"
    }
  ],
  Suspense: [
    {
      name: "Attack on Titan",
      IMDb: "IMDb : 9/10",
      imgURl:
        "https://m.media-amazon.com/images/M/MV5BNDE5ZjMwNGEtYzMwMC00NzEwLTg3MWUtMmJmYTUyNDBjOGFiXkEyXkFqcGdeQXVyMTE3ODM0NzI1._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "Death Note",
      IMDb: "IMDb : 9/10",
      imgURl:
        "https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "Erased",
      IMDb: "IMDb : 8.5/10",
      imgURl:
        "https://m.media-amazon.com/images/M/MV5BNDFmYjRkZWYtNjgyZS00YTY5LWIyMmQtZTI0OGRiOGM5NGY3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
    }
  ],
  MyList: [
    {
      name: "Attack on Titan",
      IMDb: "10/10",
      imgURl:
        "https://m.media-amazon.com/images/M/MV5BNDE5ZjMwNGEtYzMwMC00NzEwLTg3MWUtMmJmYTUyNDBjOGFiXkEyXkFqcGdeQXVyMTE3ODM0NzI1._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "Assassination Classroom",
      IMDb: "9/10",
      imgURl:
        "https://m.media-amazon.com/images/M/MV5BYzI0OWJlMjItYmE1NS00YzE2LWExNDAtMDM3MDA5MzM5NmExXkEyXkFqcGdeQXVyNzA5MDUyODA@._V1_.jpg"
    },
    {
      name: "My Hero Academia",
      IMDb: "9/10 ",
      imgURl:
        "https://m.media-amazon.com/images/M/MV5BNmQzYmE2MGEtZjk4YS00YmVjLWEwZWMtODRkMjc4MTM5N2I3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
    }
  ]
};

export default function App() {
  let [animes, setanimes] = useState("Action");

  // click handler
  function clickHandler(anime) {
    setanimes(anime);
  }

  return (
    <div className="App">
      <h1>Anime Recommendation</h1>

      <div className="anime">
        {/* converting object animelist to array for displaying */}
        {Object.keys(animeList).map((anime) => (
          <span className="animeName" onClick={() => clickHandler(anime)}>
            {" "}
            {anime}
          </span>
        ))}
      </div>
      {/* displaying name and rating */}
      <main>
        {animeList[animes].map((list) => (
          <span key={list.name}>
            {" "}
            <span className="flex">
              {" "}
              <img className="image" src={list.imgURl} alt="img" />
              <span className="arrange"> {list.name} </span>
              <span className="arrange"> {list.IMDb} </span>{" "}
            </span>
          </span>
        ))}
      </main>
      <footer>Made with React by Zabih</footer>
    </div>
  );
}
