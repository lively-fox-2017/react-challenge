import React from 'react'
import { Link } from 'react-router-dom'

// import logo from './logo.svg';
import pokeball from '../Pokeball2.png'
import '../App.css'


const HeadFunction = (props) =>{
// function Welcome(props) {
    return <header className="App-header">
        <img src={pokeball} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome Trainer</h1>
        <Link to="/"><h3>Home</h3></Link>
    </header>
}

export default HeadFunction