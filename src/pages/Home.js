import React from 'react'
import TopicBox from '../components/TopicBox'
import Content from '../components/Content'
import './home.css'
import { Link , useNavigate } from 'react-router-dom'
import { Button } from 'bootstrap'


export default function Home() {
  const Navigate=useNavigate();
  return (
    <div>
      <h1 className='homepg'>Home Page</h1>
      <Link to="/about">Go to about page</Link>
      <br></br>
      <Link to="/contact">Go to contact us page</Link>
      <br></br>
      <button onClick={()=>Navigate("/about")}>Profile</button>
      
      {/* <TopicBox food="koththu" price="350">
        <span>This is the description</span>
      </TopicBox>
      <Content/>

      <TopicBox food="rice" price="300">
      <button>This is the button</button>
      </TopicBox>
      <Content/>

      <TopicBox food="nasiguran" price="900">
        <p>Hello how are u???</p>
      </TopicBox>
      <Content/> */}
    </div>
  )
}
