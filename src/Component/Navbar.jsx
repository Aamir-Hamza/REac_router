import React from 'react'
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
     <div  style={{display:"flex", justifyContent:"space-between",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",height:"40px"}}>
        <Link style={{textDecoration:"none"}} to={"/home"}>Home</Link>
        <Link style={{textDecoration:"none"}} to={"/about"}>About</Link>
        <Link  style={{textDecoration:"none"}} to={"/contact"}>Contact</Link>
     </div>
  )
}

