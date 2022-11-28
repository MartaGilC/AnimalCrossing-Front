import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from '../redux/characters.functions'
import './Character.css'
import { Link } from 'react-router-dom'

const Characters = () => {
  const dispatch = useDispatch();
  const {characters, isLoading, error} = useSelector((state) => state.characters);


  useEffect(()=> {
    dispatch(getCharacters())
  }, [])

  return (
    <div className='first'>
      
      {isLoading ? (
        <img className='loading'
          src="https://media4.giphy.com/media/9DIIOQBzgjHeO3vz05/giphy.gif?cid=6c09b9526cd7ff547bf8e9e03d7091cef746bc7c6ad2fbb5&rid=giphy.gif&ct=s"
          alt="loading"
        />
      ) : !error ? (
        
        characters.map((character) => {
          return (
            
              <div className="character" key={character._id}>
                <img className="characterPhoto"src={character.img} alt={character.name} />
                <p>{character.name}</p>
                <Link to ={`/characters/${character._id}`}>Ver más</Link>
              </div>
            
          );
        })
      ) : (
        <div style={{ backgroundColor: "red" }}>
          <h2>{error}</h2>
        </div>
      )}
    </div>
  )
}

export default Characters