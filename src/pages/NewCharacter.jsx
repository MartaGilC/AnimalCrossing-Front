import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCharacter } from '../redux/characters.functions';
const NewCharacter = () => {
    const { 
        register,
        handleSubmit,

        formState: { errors, isValid },
    } = useForm();

    let navigateTo = useNavigate();
    const dispatch = useDispatch();

    const newCharacter = async(datos) => {
        dispatch(createCharacter(datos, navigateTo))
        console.log(datos)
    }
  return (
    <div className='form'>
    <h2> Añade tu personaje favorito </h2>
        <form onSubmit={ handleSubmit(newCharacter)}>
        <label>
            <p> Nombre </p>
            <input type= "text" name="name" {...register("name", {required:true})}/>
        </label>
        
        <label>
            <p> Género </p>
            <input type= "text" name="genre" {...register("genre")}/>
        </label>

        <label>
            <p> Nacimiento  </p>
            <input type= "date" name="birthday" {...register("birthday", {required:true})}/>
        </label>

        <label>
            <p> Imagen </p>
            <input type= "text" name="img" {...register("img", {required:true})}/>
        </label>

    <button onClick={createCharacter}> Añadir </button>

        </form>
    </div>
  )
}

export default NewCharacter