import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [item, setItem] = useState([])
  useEffect(function () {
    async function fetchData () {
      const res = await fetch(`http://localhost:8000/data`);
      const data =  await res.json()
      console.log(data);
      setItem(data)
    }
    fetchData()
  }, [])
  return (
   <>
   <div className="container">
       <Header />
       <Main />
   </div>
   </>
  )
}

export default App