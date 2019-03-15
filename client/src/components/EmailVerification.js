import React, { Component } from 'react'
import axios from 'axios';
export default class EmailVerification extends Component {
    componentDidMount(){
        this.setState({
            url: window.location.href
        });
        console.log(this.state);
        
    }
    constructor(props) {
      super(props)
      this.state = {
         url : '',
      }
    }
    componentDidUpdate(){
        let str = this.state.url;
        let authStr = str.substr(47);
        let sendData = {
            authStr
        };
        console.log(sendData);
        axios
            .post('/api/routes/doctor/emailverification', sendData)
            .then(res=>{
                window.alert(`${res.data} Now you are redirectedd to login.`);
                this.props.history.push('/login');
            })
            .catch(err=>console.log(err));
        
    }  
    render() {
        return (
        <div>
        </div>
        )
    }
}
 