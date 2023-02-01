import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";

class RegisteredUsers extends Component {
  _isMounted = false;
  constructor(props) {
    super(props)
    this.state = {
        numOfUsers: ""
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.getStats();

  }

  componentWillUnmount() {
  this._isMounted = false;
}



  getStats = () => {
    axios.get("http://127.0.0.1:8000/stats/user-count/"+ this.props.startDate + "/" + this.props.endDate + "/" + this.props.country + "/" + this.props.tenant).then(res => {   if(this._isMounted){this.setState({ numOfUsers : res.data.registered_users[0].users})    }});
  };


  render() {
    return (
      <div style ={{display:"inline"}}>
      <br/>
      Registrations
      <h1 style={{color:"#3CB371"}}>{this.state.numOfUsers}</h1>
      </div>

    );
  }
  }



export default RegisteredUsers;
