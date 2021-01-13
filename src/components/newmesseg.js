import React, { Component } from "react"


class Enter extends Component {

    state = {
        mess: ""
    }

    nova_poruka = e => {
        this.setState(
            { mess: e.target.value }
        )
    }


    poruka = (e) => {
        if (e.target.value !== "") {
            this.props.dodajporuku(this.state)
            this.setState({ mess: "" })
        }
    }

    /*dodaj poruku na enter*/
    dole = e => {
        if (e.keyCode === 13) {
            if (e.target.value !== "") {
                this.props.dodajporuku(this.state)
                this.setState({ mess: "" })
            }
        }
    }


    render() {
        return (
            <div className="nesto">
                <input type="text" name="" id="enter" placeholder="Vaša poruka" onChange={this.nova_poruka} onKeyDown={this.dole} value={this.state.mess} />
                <button onClick={this.poruka}>Pošalji</button>
            </div>
        )
    }
}

export default Enter