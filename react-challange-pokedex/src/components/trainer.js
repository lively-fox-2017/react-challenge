import React from 'react'

import '../App.css'


const Trainer = (props) => {
    // function Welcome(props) {
    return <div className="mdl-cell--12-col mdl-cell--3-offset">
        {/* <h1 className="App-title">Welcome Trainer</h1> */}
        <table style={{ align: 'center' }}>
            <thead> 
                <tr>
                    <th>Trainer Name</th>
                    <th>Experience</th>
                    <th>Pokemon Catched: </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Ogi</th>
                    <th>8927 pts</th>
                    <th>174 Pokedex</th>
                </tr>
            </tbody>
        </table>
    </div>
}

export default Trainer