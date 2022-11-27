import axios from "axios";

const getEditions = () => async(dispatch)=> {
    dispatch({type: 'gettingEditions'})
    try {
        const result = await axios.get("https://animal-crossing-api-mauve.vercel.app/editions")
        dispatch({type:'getEditions', payload: result.data})
    } catch (error){
        dispatch({type: 'errorEditions', payload: error.message});
        
    }
}

export default getEditions