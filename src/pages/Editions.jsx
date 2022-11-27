import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import getEditions from '../redux/editions.functions'
const Editions = () => {
  const dispatch = useDispatch();
  const {editions, isLoading, error} = 
  useSelector((state)=> state.editions);

  useEffect(()=> {
    dispatch(getEditions())
  }, [])
  return (
    <div>{editions.map((edition)=> {
      return(
        <div className='editions' key={editions._id}>
        <h1>{edition.name}</h1>
        <img src={edition.img} alt={edition.name}/>
        <p>{edition.date}</p>
        <p>{edition.nintendo}</p>
         </div>)
    })}</div>
  )
}

export default Editions