// import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CharacterDetails from "./components/character-details/character-details.component";
import Characters from "./routes/characters/characters.component";
import Navigation from "./routes/nav/nav.component";

const App = () => {
  // const [characters, setCharacters] = useState([]);
  // const getApiData = async () => {
  //   // const response = await fetch("https://swapi.dev/api/people").then(
  //   //   (response) => response.json()
  //   // );
  //   // // update the state
  //   // setCharacters(response);
  // };

  // useEffect(() => {
  //   getApiData();
  // }, []);
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        {/* <Route path="/" element={<Navigation />}> */}
          <Route path="/" element={<Characters />} />
          <Route path="/:id" element={<CharacterDetails />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
};

export default App;
