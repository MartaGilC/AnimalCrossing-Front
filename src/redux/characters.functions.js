import axios from "axios"


const getCharacters = () => async(dispatch)=>{dispatch({type: 'gettingCharacters'})

try{
  const result = await axios.get("https://animal-crossing-api-mauve.vercel.app/characters")
  dispatch({type: 'getCharacters', payload: result.data})
} catch(error){
  dispatch({type: 'errorCharacters', payload: error.message});
}
}


export default getCharacters