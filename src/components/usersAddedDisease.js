import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";

class UsersAddedDisease extends Component {
  _isMounted = false;
  constructor(props) {
    super(props)
    this.state = {
        numOfUsers: "",
        registeredUsers: ""
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
    axios.get("http://127.0.0.1:8000/stats/user-count/"+ this.props.startDate + "/" + this.props.endDate + "/" + this.props.country + "/" + this.props.tenant).then(res => {   if(this._isMounted){this.setState({ numOfUsers : res.data.users_added_condition[0].users, registeredUsers:res.data.registered_users[0].users})    }});
  };


  render() {
    var registered_users = this.state.registeredUsers;
    return (
      <div style ={{display:"inline"}}>
      <br/>
      Added Condition
      <h1 style={{color:"#3CB371"}}>{this.state.numOfUsers} <p style={{display:"inline", color: "grey", }}>({Math.round(((this.state.numOfUsers / registered_users) * 100) * 10) / 10}% )</p></h1>
      </div>

    );
  }
  }



export default UsersAddedDisease;
