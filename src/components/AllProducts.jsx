import React, { useEffect, useState } from 'react'
import Products from './Products';

function AllProducts() {
  const [item, setItem] = useState([])
  useEffect(function () {
    async function fetchData () {
      const res = await fetch(`http://localhost:8000/data`);
      const data =  await res.json()
     // console.log(data);
      setItem(data)
    }
    fetchData()
  }, [])
  return (
    <div className='all-products'>
      {
        item.map((data) => (
          <Products product={data} key={data.id} />
        ))
      }
    </div>
  )
}

export default AllProducts