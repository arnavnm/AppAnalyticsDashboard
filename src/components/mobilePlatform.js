import React, { Component } from 'react';
import axios from "axios";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";

class MobilePlatform extends Component {
  _isMounted=false;
  constructor(props) {
    super(props)
    this.state = {
        platform: [],
        registeredUsers: [],


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
    axios.get("http://127.0.0.1:8000/stats/user-count/"+ this.props.startDate + "/" + this.props.endDate + "/" + this.props.country + "/" + this.props.tenant).then(res => {if(this._isMounted) { this.setState({ platform : res.data.mobile_platform , registeredUsers : res.data.registered_users[0].users}) } });
  };


  render() {
    var rows = this.state.platform;
    var registered_users = this.state.registeredUsers;

    /*if (this.props.value === 'meds') {
        var a = 0;
      } else if (this.props.value === 'conditions') {
        a = 0;
      } else {
        a = 0;
      }*/


    return (
      <div style ={{display:"inline"}}>
      Platforms
      <div></div>
      <br/>
      <div>
      <TableContainer component={Paper}>
         <Table size="small" aria-label="a dense table">
           <TableBody>
             {rows.map((row) => (
               <TableRow key={row.platform}>
                 <TableCell component="th" scope="row" style={{color:"#C38D9E", fontWeight:"bold"}}>
                   {row.platform}
                 </TableCell>
                 <TableCell align="right" style={{color:"#3CB371", fontWeight:"bold"}}>{row.users}           <p style={{display:"inline", color: "grey", }}>({Math.round(((row.users / registered_users) * 100) * 10) / 10}% )</p></TableCell>
               </TableRow>
             ))}
           </TableBody>
         </Table>
        </TableContainer>

      </div>
      </div>

    );
  }
  }

export default MobilePlatform;
