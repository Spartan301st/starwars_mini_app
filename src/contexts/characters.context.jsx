import { createContext, useState, useEffect } from "react";
import { PEOPLE_ENDPOINT } from "../endpoints/people.endpoint";

export const CharactersContext = createContext({
    characters: []
})

export const CharactersProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);

    const getApiData = async () => {
        const response = await fetch(PEOPLE_ENDPOINT).then(
          (response) => response.json()
        );
        // update the state
        setCharacters(response);
      };
      useEffect(() => {
        getApiData();
      }, []);
    const value = { characters };

    return (
        <CharactersContext.Provider value={value}>
            {children}
        </CharactersContext.Provider>
    )
}