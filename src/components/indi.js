import * as React from 'react';
import { Component } from 'react';
import axios from "axios";
import { DataGrid } from '@material-ui/data-grid';



export default class IndividualStats extends Component {
    constructor(props) {
      super(props)
      this.state = {
          stats: []
      }
    }

    componentDidMount() {
      this.getStats();

    }

    componentWillReceiveProps(newProps) {
      if (newProps.token) {
        this.getStats();
      }
    }

    getStats = () => {
      axios.get("http://127.0.0.1:8000/stats/individual-stat/").then(res => this.setState({ stats : res.data.thermofisher_individual_stats}));
    };


    render() {

      const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'gender', headerName: 'Gender', width: 130 },
        { field: 'dob', headerName: 'DOB', width: 130 },
        { field: 'number_of_medicines', headerName: 'No. of Meds', width: 130 },
        { field: 'number_of_parameters', headerName: 'No. of parameters', width: 130 },
        { field: 'number_of_conditions', headerName: 'No. of conditions', width: 130 },
        { field: 'dependent_added', headerName: 'Dependent added', width: 130 },
        { field: 'allergy_added', headerName: 'Allergy added', width: 130 },
        { field: 'side_effect_added', headerName: 'Side Effect added', width: 130 },

      ];

      const rows = this.state.stats;

      return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} pageSize={20} />
        </div>
    );
  }
  }
