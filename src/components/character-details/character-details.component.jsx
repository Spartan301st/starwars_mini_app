import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { CharactersContext } from '../../contexts/characters.context';
import CharacterDetail from '../character-detail/character-detail';
import "./character-details.styles.scss"

const CharacterDetails = () => {
  const {id} = useParams();
  const {characters} = useContext(CharactersContext);
  const {results} = characters;

  const currentCharacter = results.filter(character => {
    const splitUrl = character.url.split('/');
    const characterId = splitUrl[splitUrl.length - 2];
    return characterId === id;
  })[0];

  const dataToSkip = ["created", "edited", "url"];

  return (
    <div className='characterDetails__container'>
        {Object.entries(currentCharacter).map(([key, value]) => {
            return !dataToSkip.includes(key) && <CharacterDetail key={key} detailTitle={key} detailValue={value} />;
        })}
    </div>
  )
}

export default CharacterDetails