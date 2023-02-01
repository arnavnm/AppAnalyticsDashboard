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

class Location extends Component {
  _isMounted = false;
  constructor(props) {
    super(props)
    this.state = {
        location: []
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
    axios.get("http://127.0.0.1:8000/stats/user-count/"+ this.props.startDate + "/" + this.props.endDate).then(res => {   if(this._isMounted){this.setState({ location : res.data.location})}});
  };


  render() {
    const rows = this.state.location;

    if (this.props.value == 'meds') {
        var a = 0;
      } else if (this.props.value == 'conditions') {
        var a = 550;
      } else {
        var a = 1200;
      }


    return (
      <div style ={{display:"inline"}}>
      Top Locations
      <div></div>
      <br/>
      <div>
      <TableContainer component={Paper}>
         <Table size="small" aria-label="a dense table">
           <TableBody>
             {rows.map((row) => (
               <TableRow key={row.country}>
                 <TableCell component="th" scope="row" style={{color:"#C38D9E", fontWeight:"bold"}}>
                   {row.country}
                 </TableCell>
                 <TableCell align="right" style={{color:"#E8A87C", fontWeight:"bold"}}>{row.users - a}</TableCell>
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


  export default Location;
