import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";

class UsedBy extends Component {
  _isMounted = false;
  constructor(props) {
    super(props)
    this.state = {
        numOfUsersMed: "",
        numOfUsersCon: "",
        numOfUsersPar: "",
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
    axios.get("http://127.0.0.1:8000/stats/user-count/"+ this.props.startDate + "/" + this.props.endDate + "/" + this.props.country + "/" + this.props.tenant).then(
      res => {if(this._isMounted){this.setState({ numOfUsersMed : res.data.user_added_med[0].users, numOfUsersCon : res.data.user_added_condition[0].users , numOfUsersPar : res.data.user_added_parameter[0].users,})}});
  };


  render() {
    if (this.props.value === 'meds') {
      var category = 'User added Med'
        var used = <h1 style={{color:"#3CB371"}}>{this.state.numOfUsersMed}</h1>;
      } else if (this.props.value === 'conditions') {
        category = 'User added Condition'
        var used = <h1 style={{color:"#3CB371"}}>{this.state.numOfUsersCon}</h1>;
      } else {
        category = 'User added Parameter'
        var used =<h1 style={{color:"#3CB371"}}>{this.state.numOfUsersPar}</h1>;
      }

    return (
      <div style ={{display:"inline"}}>
      {category}
      {used}
      </div>

    );
  }
  }


export default UsedBy;
