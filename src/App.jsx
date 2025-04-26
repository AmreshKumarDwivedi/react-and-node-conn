
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { useState, useEffect } from 'react'



function App() {
  const [jokes, setJokes]=useState([]);
useEffect(()=>{
  axios.get('/api/jokes').
  then((response)=>{
    setJokes(response.data)
  }).catch((err)=>{
    console.log('error')
  })
})
  return (
    <>
  <h1>Frontend and Backend Connection</h1>
  <p>Jokes:{jokes.length}</p>
  {
    jokes.map((joke,index)=>(
      <div key={joke.id}>
        <h2>{joke.question}</h2>
        <p>{joke.answer}</p>

      </div>

    ))
  }
  
    </>
  )
}

export default App
