import axios from "axios"


export const getCharacters = () => async(dispatch)=>{dispatch({type: 'gettingCharacters'})

try{
    const result = await axios.get("https://animal-crossing-api-mauve.vercel.app/characters")
  dispatch({type: 'getCharacters', payload: result.data})
} catch(error){
  dispatch({type: 'errorCharacters', payload: error.message});
}
}





export const createCharacter = (datos, navigateTo) => async(dispatch)=> {
  dispatch({type: 'creatingCharacters'})
  try {
    const result = await axios.post("https://animal-crossing-api-mauve.vercel.app/characters/create", datos);
    dispatch({type: 'createdCharacters'})
    localStorage.setItem('id', result.data._id)
    navigateTo('/characters')
  } catch (error) {
    dispatch({type: 'errorCreating'})
    
  }
}