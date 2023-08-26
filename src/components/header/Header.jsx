import React, { useEffect, useState } from 'react'
import "./Header.scss"

const Header = () => {
  const [fetch, setFetch] = useState([])
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
        .then(response => response.json())
        .then(data => console.log(data))
  }, [])
  return (
    <div className="header">
        
    </div>
  )
}

export default Header