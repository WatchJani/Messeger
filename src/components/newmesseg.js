import React, { Component } from "react"


class Enter extends Component {

    state = {
        mess : ""
    }

    nova_poruka = e =>{
        this.setState(
            {mess : e.target.value}
        )
    }


    poruka = () =>{
       this.props.dodajporuku(this.state)
       this.setState({mess : ""})
    }


   dole= e =>{
        if(e.keyCode===13){
            this.props.dodajporuku(this.state)
            this.setState({mess : ""})
        }
   }


    render() {
        return (
            <div className="nesto">
                <input type="text" name="" id="enter" placeholder="Vaša poruka" onChange={this.nova_poruka} onKeyUp={this.dole} value={this.state.mess}/>
                <button onClick={this.poruka}>Pošalji</button>
            </div>
        )
    }
}

export default Enter