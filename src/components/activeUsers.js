import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";

class ActiveUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
        numOfUsers: "" //|| 0
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
    axios.get("http://127.0.0.1:8000/stats/user-count/"+ this.props.startDate + "/" + this.props.endDate + "/" + this.props.country + "/" + this.props.tenant).then(res =>{ if(this._isMounted){this.setState({ numOfUsers : res.data.active_users})}});
  };


  render() {

    var used = <h1 style={{color:"#3CB371"}}>{this.state.numOfUsers}</h1>;

    return (
      <div style ={{display:"inline", }}>
      <br/>
      Active Users
      {used}
      </div>

    );
  }
  }



export default ActiveUsers;
