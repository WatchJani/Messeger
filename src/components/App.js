import React, { Component } from "react"
import Baza from "./baza"



class App extends Component {
    state = {
        poruka: [
            {
                id: 1,
                mess: "React je najjaci"
            }
        ]
    }


    dodajporuku = (poruke)=>{
        poruke.id = Math.floor(Math.random()*(10000 - 10)-10)
        this.setState({poruka:[...this.state.poruka, poruke]})
    }



    render() {
        return (
            <Baza poruka={this.state.poruka} dodajporuku={this.dodajporuku}/>
        )
    }
}

export default App