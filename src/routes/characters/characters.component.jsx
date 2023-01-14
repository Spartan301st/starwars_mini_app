import React, { useContext } from 'react'
import Character from '../../components/character/character.component';
import { CharactersContext } from '../../contexts/characters.context';
import "./characters.styles.scss"

const Characters = () => {
    const {characters} = useContext(CharactersContext);
    const {results} = characters;
  return (
    <>
        <h2 className="characters__title">Characters</h2>
        <div className="characters__container">
            {results?.map((character) => {
                const splitUrl = character.url.split('/');
                // we have / at the end of urls meaning that -1 is empty str
                const id = splitUrl[splitUrl.length - 2];
                return <Character key={id} name={character.name} characterID={id}/>
            }
            )}
        </div>
    </>
  )
}

export default Characters