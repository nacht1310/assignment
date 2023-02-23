import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './Add.css'

function Add({dataHook, setData}) {

    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()

    function onSubmit(data) {
        const newData = data ? [
            ...dataHook,
            {
                id: dataHook.length + 1,
                title: data.title,
                detail:data.detail,
                date: new Date()
            }
        ] : []
        setData(newData)
        navigate('/')
    }

  return (
    <div className='add-container'>
        <div className='add'>
            <h1>Anything you want to share?</h1>
            <form method='POST' className='form' onSubmit={handleSubmit(onSubmit)}>
                <label /> Title:<br/>
                <input type='text' {...register('title')} /><br/>

                <label /> Detail:<br/>
                <textarea {...register('detail')} rows='15'></textarea><br/>
                
                <input type='submit' value='Submit' className='button' />
            </form>

        </div>
    </div>
  )
}



export default Add