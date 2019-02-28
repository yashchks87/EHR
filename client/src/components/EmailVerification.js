import React, { Component } from 'react'

export default class EmailVerification extends Component {
    componentDidMount(){
        this.setState({
            url: window.location
        });
    }
    constructor(props) {
      super(props)
    
      this.state = {
         url : '',
      }
    }
    componentDidUpdate(){
        console.log(this.state);
    }  
    render() {
        return (
        <div>
            Hello there....
        </div>
        )
    }
}
