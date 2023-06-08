import React from 'react'
import {useState, useEffect} from 'react';
import Axios from 'axios';


function App() {
  
  const [userName, setUserName]  = useState('')
  const [userData, setUserDate]= useState(null)
  const fetchAge=()=>{
      Axios.get(`https://api.agify.io/?name=${userName}`)
      .then((res)=>{
       setUserDate(res.data)
      })
  }
 

  return (
    <div>
      <h1>Age Predictor</h1>
      <input
        placeholder='Insert you name to predict age: '
        onChange={(evt)=>setUserName(evt.target.value)}
      />
      <button
      onClick={fetchAge}
      >
        Predict
      </button>
      <h2>{userData?.name}'s Predicted age is {userData?.age} which has been counted for {userData?.count}</h2>
    </div>
  )
}

export default App