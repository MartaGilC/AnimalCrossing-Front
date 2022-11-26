import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import getCharacters  from '../redux/characters.functions' 


const Characters = () => {
  const dispatch = useDispatch();
  const {characters, isLoading, error} = useSelector((state) => state.characters);


  useEffect(()=> {
    dispatch(getCharacters())
  }, [])

  return (
    <div>
      
      {isLoading ? (
        <img
          src="https://tbphelps.com/skin/frontend/ultimo/default/images/wating.gif"
          alt="loading"
        />
      ) : !error ? (
        
        characters.map((character) => {
          return (
            
              <div className="ropa" key={character._id}>
                <p>{character.name}</p>
                <img src={character.img} alt={character.name} />
             
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