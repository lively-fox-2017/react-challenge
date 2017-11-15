import React from 'react'

let putih = {
  backgroundColor: 'white'
}

function Header () {
    return ( 
    <div style={putih} className="jumbotron jumbotron-fluid" >
    <img className= "img-fluid" src="http://fc01.deviantart.net/fs71/f/2013/030/8/0/dota_2___troll_warlord_render_by_faith_lv-d5t5gor.png" alt="Card image cap"/>   
    {/* <img className=""  /> */}
    </div>
    )
}

export default Header