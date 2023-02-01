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


class IndividualStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
        stats: []
    }
  }

  componentDidMount() {
    this.getStats();

  }


  getStats = () => {
      axios.get("http://127.0.0.1:8000/stats/task/").then(res => this.setState({ stats : res.data.thermofisher_individual_stats}));
  };


  render() {
    const rows = this.state.stats;


    return (
      <div style ={{display:"inline"}}>
      Platforms
      <div></div>
      <br/>
      <div>
      <TableContainer component={Paper}>
         <Table size="small" aria-label="a dense table">
         <TableHead>
            <TableRow>
              <TableCell align="right">id</TableCell>
              <TableCell align="right">gender</TableCell>
              <TableCell align="right">dob</TableCell>
              <TableCell align="right">no. of meds</TableCell>
              <TableCell align="right">no. of parameters</TableCell>
              <TableCell align="right">no. of conditions</TableCell>
              <TableCell align="right">dependent added</TableCell>
              <TableCell align="right">allery added</TableCell>
              <TableCell align="right">side effect added</TableCell>
            </TableRow>
        </TableHead>
           <TableBody>
             {rows.map((row) => (
               <TableRow key={row.user_id}>
                 <TableCell component="th" scope="row" style={{color:"#C38D9E", fontWeight:"bold"}}>
                   {row.user_id}
                 </TableCell>
                 <TableCell align="right" style={{color:"#E8A87C", fontWeight:"bold"}}>{row.gender}</TableCell>
                 <TableCell align="right" style={{color:"#E8A87C", fontWeight:"bold"}}>{row.dob}</TableCell>
                 <TableCell align="right" style={{color:"#E8A87C", fontWeight:"bold"}}>{row.number_of_medicines}</TableCell>
                 <TableCell align="right" style={{color:"#E8A87C", fontWeight:"bold"}}>{row.number_of_parameters}</TableCell>
                 <TableCell align="right" style={{color:"#E8A87C", fontWeight:"bold"}}>{row.number_of_conditions}</TableCell>
                 <TableCell align="right" style={{color:"#E8A87C", fontWeight:"bold"}}>{row.dependent_added}</TableCell>
                 <TableCell align="right" style={{color:"#E8A87C", fontWeight:"bold"}}>{row.allergy_added}</TableCell>
                 <TableCell align="right" style={{color:"#E8A87C", fontWeight:"bold"}}>{row.side_effect_added}</TableCell>
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


export default IndividualStats;
