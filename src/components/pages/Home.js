import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'



export default function Home() {
 


  return (
    <>
      <h1 className='text-center my-5' id='home_heading'>Welocome to News Hunt's</h1>
      <p className='justify-center px-4 text-dark'>
      News is information about current events. This may be provided through many different media: word of mouth, printing, postal systems, broadcasting, electronic communication, or through the testimony of observers and witnesses to events. News is sometimes called "hard news" to differentiate it from soft media.

Common topics for news reports include war, government, politics, education, health, the environment, economy, business, fashion, entertainment, and sport, as well as quirky or unusual events. Government proclamations, concerning royal ceremonies, laws, taxes, public health, and criminals, have been dubbed news since ancient times. Technological and social developments, often driven by government communication and espionage networks, have increased the speed with which news can spread, as well as influenced its content. <br/>CCS Insight mentioned that a foldable iPad would launch before a folding iPhone and buck the trend of consumer electronics companies launching foldable smartphones.
      </p>
     <Link to='/news' className=' text-decoration-none'><button  className='btn btn-success d-block m-auto  ' style={{textDecoration:'none'}}>Read News</button></Link>
      
        

    </>
  )
}

