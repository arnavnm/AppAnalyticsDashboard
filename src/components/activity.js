import React, { PureComponent } from 'react';
import axios from "axios";
import {
  PieChart, Pie, Sector, Cell, Legend
} from 'recharts';
import { connect } from "react-redux";

class Activity extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  _isMounted = false;
  constructor(props) {
    super(props)
    this.state = {
        num_of_parameters: [],
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
      axios.get("http://127.0.0.1:8000/stats/feature-usage/"+ this.props.startDate + "/" + this.props.endDate + "/" + this.props.country + "/" + this.props.tenant).then(res => {if(this._isMounted){this.setState({
      num_of_parameters : res.data.activity[0],
    })}});


  };


  render() {

    var category = 'Activity';

    var data = () => {
        return [
          { name: '0 days', value: this.state.num_of_parameters.parameters },
          { name: '1-7 days', value: this.state.num_of_parameters.parameters2 },
          { name: '8-31 days', value: this.state.num_of_parameters.parameters3 },
          { name: 'Above 31 days', value: this.state.num_of_parameters.parameters4 },

    ]
      }


    const COLORS = ["#3CB371", "#C38D9E", "#E8A87C", "#6495ED"];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({
      cx, cy, midAngle, innerRadius, outerRadius, percent, index,
    }) => {
       const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
      };

    return (
      <div>
      {category}
      <PieChart width={300} height={267}>
        <Pie data={data()}
        cx="60%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        >
        {
            data().map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
        </Pie>
        <Legend/>
      </PieChart>
      </div>
    );
  }
  }


export default Activity;
