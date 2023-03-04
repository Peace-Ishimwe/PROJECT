import React from 'react'
import { useLocation , useNavigate } from 'react-router-dom'

export const Home = () => {
  
    const location = useLocation()

    return (
        <div className='home-page'>
            <h1>Hello {location.state.id} and welcome to the home</h1>
        </div>
    )
}
