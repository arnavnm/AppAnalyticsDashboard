import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import axios from "axios";
import { connect } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



class TopRankParameters extends PureComponent {
  _isMounted = false;
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
  constructor(props) {
    super(props)
    this.state = {
      topParm: [],
      data:[],
      registeredUsers: "",
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

    axios.get("http://127.0.0.1:8000/stats/feature-usage/"+ this.props.startDate + "/" + this.props.endDate + "/" + this.props.country + "/" + this.props.tenant).then(res =>{if(this._isMounted){this.setState({topParm:res.data.top_parameters, registeredUsers: res.data.registered_users[0].users
  })}});
  };



  render() {
    var registered_users = this.state.registeredUsers;

    /*if (this.props.value == 'meds') {
        var category = <h3>Top 10 Medicines</h3>;
        var trData = this.state.topMeds;
      } else if (this.props.value == 'conditions') {
        var category = <h3>Top 10 Conditions</h3>;
        var trData = this.state.topCont;
      } else {
        var category = <h3>Top 10 Parameters</h3>;
        var trData = this.state.topParm;
      }*/

    var category = <h3>Leading Parameters</h3>;
    var trData = this.state.topParm;

    let { data } = this.state;

    var data2 = []
    var rows = []

    const topRanking = () => {
      for (var i = 0; i < trData.length; i++) {
        data2.push({ name: trData[i].name || '' , users: trData[i].count || ''})
        rows.push({ name: trData[i].name, users: trData[i].count })
      }
    }
    topRanking();




    return (
      <div style={{color:"#3CB371", textAlign:"center",  fontFamily: "Trebuchet MS"}}>
      <br/>
      {category}
      <div className="grid-container">
          <div className="grid-item">
            <ResponsiveContainer width="100%" height={200}>
            <BarChart
              data={data2}
              margin={{
                top: 50, right: 10, left: 10, bottom: 10,
              }}
            >
              <CartesianGrid vertical={true} horizontal={true} strokeDasharray="3 3"/>
              <XAxis dataKey="name" tick={false}/>
              <YAxis/>
              <Tooltip />
              <Bar dataKey="users" fill="#3CB371" />,
              </BarChart>
              </ResponsiveContainer>


              <TableContainer component={Paper}>
                 <Table size="small" aria-label="a dense table">
                   <TableBody>
                     {rows.map((row) => (
                       <TableRow key={row.name}>
                         <TableCell component="th" scope="row" style={{color:"#3CB371", fontWeight:"bold"}}>
                           {row.name} <p style={{display:"inline", color: "grey"}}>({Math.round(((row.users / registered_users) * 100) * 10) / 10}% )</p>
                         </TableCell>
                       </TableRow>
                     ))}
                   </TableBody>
                 </Table>
                </TableContainer>
              </div>

     </div>


      </div>
    );
  }
  }


export default TopRankParameters;
