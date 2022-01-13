import React, {Component} from 'react'

class PersonCard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    birthday = () => {
        console.log(this.age)
        this.setState({age: (this.state.age)+1})
    }

    render(){
        return(
            <div>
                <h3>{this.props.name}</h3>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.haircolor}</p>
                {this.props.children}
                <button onClick={this.birthday}>It's My Birthday!</button>
            </div>
        )
    }
}

export default PersonCard;