import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import axios from "axios";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { connect } from "react-redux";




export const BarBoth = (props) => {
  return [
    <Bar key="" dataKey="Male" fill="#C38D9E" />,
    <Bar key="" dataKey="Female" fill="#3CB371" />,
  ];
};

export const BarOne = (props) => {
  return [
    <Bar key="" dataKey="users" fill="#3CB371" />,
  ];
};

class Charts extends PureComponent {
  _isMounted = false;
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
  constructor(props) {
    super(props)
    this.state = {
      registeredUsers: "",
      stats:{
  "gender_male": [{"count": 0}],
  "gender_female": [{"count": 0}],
  "gender_other": [{"count": 0}],
  "gender_unknown": [{"count": 0}],
  "age_group1_genderM": [{"count": 0}],
  "age_group1_genderF": [{"count": 0}],
  "age_group1_genderO": [{"count": 0}],
  "age_group2_genderM": [{"count": 0}],
  "age_group2_genderF": [{"count": 0}],
  "age_group2_genderO": [{"count": 0}],
  "age_group3_genderM": [{"count": 0}],
  "age_group3_genderF": [{"count": 0}],
  "age_group3_genderO": [{"count": 0}],
  "age_group4_genderM": [{"count": 0}],
  "age_group4_genderF": [{  "count": 0}],
  "age_group4_genderO": [{  "count": 0}],
  "age_group5_genderM": [{  "count": 0  }],
  "age_group5_genderF": [{"count": 0}],
  "age_group5_genderO": [{  "count": 0}],
  "age_group6_genderM": [{"count": 0}],
  "age_group6_genderF": [{"count": 0}],
  "age_group6_genderO": [
    {
      "count": 0
    }
  ],
  "age_0_20": [
    {
      "count": 0
    }
  ],
  "age_20_30": [
    {
      "count": 0
    }
  ],
  "age_30_40": [
    {
      "count": 0
    }
  ],
  "age_40_50": [
    {
      "count": 0
    }
  ],
  "age_50_60": [
    {
      "count": 0
    }
  ],
  "age_60": [
    {
      "count": 0
    }
  ],
  "age_unknown": [
  {
    "count": 0
  }
],
},
      locations:[],
      data: 'Both',
      gender_button_color: '',
      age_button_color:'',
      both_button_color:'#3CB371'
    }
    this.switchToGender = this.switchToGender.bind(this);
    this.switchToAge = this.switchToAge.bind(this);
    this.switchToBoth = this.switchToBoth.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    this.getStats();

  }
  componentWillUnmount() {
  this._isMounted = false;
}

  getStats = () => {
    axios.get("http://127.0.0.1:8000/stats/demographic/"+ this.props.startDate + "/" + this.props.endDate + "/" + this.props.country + "/" + this.props.tenant).then(res =>{if(this._isMounted){this.setState({ stats : res.data, registeredUsers: res.data.registered_users[0].users })}});
  };


  switchToGender = () => {
        this.setState({
          data: "Gender",
          gender_button_color: '#3CB371',
          age_button_color:'',
          both_button_color:''});
      };

  switchToBoth = () => {
       this.setState({
         data: "Both",
         gender_button_color: '',
         age_button_color:'',
         both_button_color:'#3CB371' });
        };

  switchToAge = () => {
        this.setState({
          data: "Age",
          gender_button_color: '',
          age_button_color:'#3CB371',
          both_button_color:''
       });
            };

  render() {
    var gmc = this.state.stats.gender_male[0].count;
    var registered_users = parseInt(this.state.registeredUsers);
    const gender_data = [
      {
        stat: 'Male' + " ( " + (Math.round(((this.state.stats.gender_male[0].count / registered_users) * 100) * 10) / 10) + "% )",  users: this.state.stats.gender_male[0].count
      },
      {
        stat: 'Female' + " ( " + (Math.round(((this.state.stats.gender_female[0].count / registered_users) * 100) * 10) / 10) + "% )", users: this.state.stats.gender_female[0].count
      },
      {
      stat: 'Other' + " ( " + (Math.round(((this.state.stats.gender_other[0].count / registered_users) * 100) * 10) / 10) + "% )", users: this.state.stats.gender_other[0].count
      },
     {
        stat: 'Unknown' + " ( " + (Math.round(((this.state.stats.gender_unknown[0].count / registered_users) * 100) * 10) / 10) + "% )", users: this.state.stats.gender_unknown[0].count
      },


    ];

    const age_group_data = [
      {
        stat: '0-20' + " (" + (Math.round(((this.state.stats.age_0_20[0].count / registered_users) * 100) * 10) / 10) + "%)", users: this.state.stats.age_0_20[0].count
      },
      {
        stat: '20-30'+ " (" + (Math.round(((this.state.stats.age_20_30[0].count / registered_users) * 100) * 10) / 10) + "%)", users: this.state.stats.age_20_30[0].count
      },
      {
        stat: '30-40'+ " (" + (Math.round(((this.state.stats.age_30_40[0].count / registered_users) * 100) * 10) / 10) + "%)", users: this.state.stats.age_30_40[0].count
      },
      {
        stat: '40-50'+ " (" + (Math.round(((this.state.stats.age_40_50[0].count / registered_users) * 100) * 10) / 10) + "%)", users: this.state.stats.age_40_50[0].count
      },
      {
        stat: '50-60'+ " (" + (Math.round(((this.state.stats.age_50_60[0].count / registered_users) * 100) * 10) / 10) + "%)", users: this.state.stats.age_50_60[0].count
      },
      {
        stat: '60-70'+ " (" + (Math.round(((this.state.stats.age_60[0].count / registered_users) * 100) * 10) / 10) + "%)", users: this.state.stats.age_60[0].count
      },
      {
        stat: 'Unknown'+ " (" + (Math.round(((this.state.stats.age_unknown[0].count / registered_users) * 100) * 10) / 10) + "%)", users: this.state.stats.age_unknown[0].count
        },

    ];

    const ageGroup_gender = [
  {
    stat: '0-20'+ "(" + (Math.round(((this.state.stats.age_group1_genderM[0].count / registered_users) * 100) * 10) / 10) + ","+ (Math.round(((this.state.stats.age_group1_genderF[0].count / registered_users) * 100) * 10) / 10)+ ")%" , Male: this.state.stats.age_group1_genderM[0].count, Female: this.state.stats.age_group1_genderF[0].count
  },
  {
    stat: '20-30'+ "(" + (Math.round(((this.state.stats.age_group2_genderM[0].count / registered_users) * 100) * 10) / 10) + ","+ (Math.round(((this.state.stats.age_group2_genderF[0].count / registered_users) * 100) * 10) / 10)+ ")%" , Male: this.state.stats.age_group2_genderM[0].count, Female: this.state.stats.age_group2_genderF[0].count
  },
  {
    stat: '30-40'+ "(" + (Math.round(((this.state.stats.age_group3_genderM[0].count / registered_users) * 100) * 10) / 10) + ","+ (Math.round(((this.state.stats.age_group3_genderF[0].count / registered_users) * 100) * 10) / 10)+ ")%" , Male: this.state.stats.age_group3_genderM[0].count, Female: this.state.stats.age_group3_genderF[0].count
  },
  {
    stat: '40-50'+ "(" + (Math.round(((this.state.stats.age_group4_genderM[0].count / registered_users) * 100) * 10) / 10) + ","+ (Math.round(((this.state.stats.age_group4_genderF[0].count / registered_users) * 100) * 10) / 10)+ ")%" , Male: this.state.stats.age_group4_genderM[0].count, Female: this.state.stats.age_group4_genderF[0].count
  },
  {
    stat: '50-60'+ "(" + (Math.round(((this.state.stats.age_group5_genderM[0].count / registered_users) * 100) * 10) / 10) + ","+ (Math.round(((this.state.stats.age_group5_genderF[0].count / registered_users) * 100) * 10) / 10)+ ")%" , Male: this.state.stats.age_group5_genderM[0].count, Female: this.state.stats.age_group5_genderF[0].count
  },
  {
    stat: '> 60'+ "(" + (Math.round(((this.state.stats.age_group6_genderM[0].count / registered_users) * 100) * 10) / 10) + ","+ (Math.round(((this.state.stats.age_group6_genderF[0].count / registered_users) * 100) * 10) / 10)+ ")%" , Male: this.state.stats.age_group6_genderM[0].count, Female: this.state.stats.age_group6_genderF[0].count
  },

];


    let {data} = this.state;

    const selectAgeGender = () =>{
      if(data === 'Both') {
        return ageGroup_gender
      } else if(data === 'Gender'){
        return gender_data
      }
      else{
        return age_group_data
      }
    }

    const selectBar = () =>{
      if(data === 'Both') {
        return BarBoth()
      }
      else{
        return BarOne()
      }
    }



    return (
      <div style={{color:"#3CB371", textAlign:"center",  fontFamily: "Trebuchet MS"}}>
      <br/>
      <h3>Demographic</h3>

      <div className="grid-container">
          <div className="grid-item">
          <ButtonGroup aria-label="outlined primary button group" width="80%">
            <Button onClick={this.switchToGender} value="Gender" style={{
                                                                          borderColor: this.state.gender_button_color}}>Gender</Button>
            <Button onClick={this.switchToAge} value="Age" style={{
                                                                    borderColor: this.state.age_button_color}}>Age</Button>
            <Button onClick={this.switchToBoth} value="Both" style={{
                                                                      borderColor: this.state.both_button_color}}>Both</Button>
          </ButtonGroup>

            <ResponsiveContainer width="100%" height={200}>
            <BarChart
              data={selectAgeGender()}
              margin={{
                top: 50, right: 30, left: 10, bottom: 10,
              }}
            >
              <CartesianGrid vertical={true} horizontal={true} strokeDasharray="3 3"/>
              <XAxis dataKey="stat" tick={true}/>
              <YAxis/>
              <Tooltip />
              <Legend />




              {selectBar()}
              </BarChart>
              </ResponsiveContainer>

              </div>

     </div>


      </div>
    );
  }
  }



export default Charts;
