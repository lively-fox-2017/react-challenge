import React from 'react'
import { Link } from 'react-router-dom'

// import logo from './logo.svg';
import pokeball from '../Pokeball2.png'
import '../App.css'


const HeadFunction = (props) =>{
// function Welcome(props) {
    return <header className="">
        <div className="App-header App">
            <img src={pokeball} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome Trainer</h1>
        </div>
        <div className="mdl-layout__header mdl-layout__header--transparent">
            <div className="mdl-layout__header-row">
                <div className="mdl-grid">
                    <div>
                        <Link className="" to="/"><h3>Home</h3></Link>
                    </div>
                    <p>||</p>
                    <div className="">
                        <Link to="/homeReactRedux"><h3>Home React-Redux</h3></Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
}

export default HeadFunction