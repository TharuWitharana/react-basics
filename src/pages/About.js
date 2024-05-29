import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const Navigate = useNavigate();
    return (
        <div >
            <h1 className='homepg'>This is about page</h1>
            <br></br>
            <button onClick={() => Navigate("/")}>Back</button>

        </div>
    )
}
