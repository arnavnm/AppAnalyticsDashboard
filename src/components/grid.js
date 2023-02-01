import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CenteredTabs from './tab';
import MenuAppBar from './topBar';
import Charts from './charts';
import UsedBy from './usedBy';
import ActiveUsers from './activeUsers';
import Activity from './activity';
import UsersAddedMed from './usersAddedMed'
import UsersAddedDisease from './usersAddedDisease';
import UsersAddedParameter from './usersAddedParameter';
import PieMed from './pieMed';
import PieCondition from './pieCondition';
import PieParameter from './pieParameter';
import TopRankMeds from './topRankMeds';
import TopRankConditions from './topRankConditions';
import TopRankParameters from './topRankParameters';
import MobilePlatform from './mobilePlatform';
import Location from './location';
import NumberPie from './numberPie';
import IndividualStats from './indi';
import RegisteredUsers from './registrations';
import Button from '@material-ui/core/Button';
import axios from "axios";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',

  },
}));

function AutoGrid() {
  const classes = useStyles();


  const [value, setValue] = useState("India");
  const handleChange = (event, value) => {
    setValue(value);
  };
  console.log(value)
  var timeElapsed = Date.now();
  var timeElapsedPrevious = Date.now() - 7 * 24 * 60 * 60 * 1000;
  var today = new Date(timeElapsedPrevious).toISOString().slice(0, 10);
  var lastWeek = new Date(timeElapsed).toISOString().slice(0, 10);

  var [selectedDate, setSelectedDate] = useState(today); //today
  var [selectedEndDate, setSelectedEndDate] = useState(lastWeek); //lastWeek

  var choiceSelectedDate = true;
  const handleDateChange = (event) => {
    setSelectedDate(String(event.target.value));
    choiceSelectedDate = true;

  };

  const handleEndDateChange = (event) => {
    setSelectedEndDate(String(event.target.value));
    choiceSelectedDate = false;

  };

  if (value === "India") {
      var reg = <RegisteredUsers value='India' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="india" tenant='all'/>;
      var used = <UsedBy value= 'India' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="india" tenant='all'/>;
      var active = <ActiveUsers  value='India' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="india" tenant='all'/>;
      var plt = <MobilePlatform value='India' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="india" tenant='all'/>;
      var charts = <Charts value='India' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="india" tenant='all'/>;
      var locate = <Location   value='India' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} EndDate={selectedEndDate} country="india" tenant='all'/>;
      var numpie = <NumberPie value='India' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="india" tenant='all'/>;
      var indi = <IndividualStats value='India'/>;
      var topRankConditions = <TopRankConditions value='India' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="india" tenant='all'/>;
      var topRankMeds = <TopRankMeds value='India' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="india" tenant='all'/>;
      var topRankParameters = <TopRankParameters value='India' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="india" tenant='all'/>;
      var medadd= <UsersAddedMed value='India' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="india" tenant='all'/>;
      var disadd= <UsersAddedDisease value='India' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="india" tenant='all'/>;
      var paradd= <UsersAddedParameter value='India' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="india" tenant='all'/>;
      var piemed= <PieMed value='India' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="india" tenant='all'/>;
      var piecondition= <PieCondition value='India' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="india" tenant='all'/>;
      var pieparameter= <PieParameter value='India' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="india" tenant='all'/>;
      var activity= <Activity value='India' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="india" tenant='all'/>;
    } else if (value === "USA") {
      var reg = <RegisteredUsers value='USA' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="united_states" tenant='all'/>;
      var used = <UsedBy value= 'USA' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="united_states" tenant='all'/>;
      var active = <ActiveUsers  value='USA' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="united_states" tenant='all'/>;
      var plt = <MobilePlatform value='USA' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="united_states" tenant='all'/>;
      var charts = <Charts value='USA' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="united_states" tenant='all'/>;
      var locate = <Location   value='USA' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} EndDate={selectedEndDate} country="united_states" tenant='all'/>;
      var numpie = <NumberPie value='USA' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="united_states" tenant='all'/>;
      var indi = <IndividualStats value='USA'/>;
      var topRankConditions = <TopRankConditions value='USA' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="united_states" tenant='all'/>;
      var topRankMeds = <TopRankMeds value='USA' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="united_states" tenant='all'/>;
      var topRankParameters = <TopRankParameters value='USA' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="united_states" tenant='all'/>;
      var medadd= <UsersAddedMed value='USA' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="united_states" tenant='all'/>;
      var disadd= <UsersAddedDisease value='USA' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="united_states" tenant='all'/>;
      var paradd= <UsersAddedParameter value='USA' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="united_states" tenant='all'/>;
      var piemed= <PieMed value='USA' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="united_states" tenant='all'/>;
      var piecondition= <PieCondition value='USA' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="united_states" tenant='all'/>;
      var pieparameter= <PieParameter value='USA' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="united_states" tenant='all'/>;
      var activity= <Activity value='USA' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="united_states" tenant='all'/>;
    }else if (value === "Thermofisher") {
      var reg = <RegisteredUsers value='Thermofisher' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='2'/>;
      var used = <UsedBy value= 'Thermofisher' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='2'/>;
      var active = <ActiveUsers  value='Thermofisher' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='2'/>;
      var plt = <MobilePlatform value='Thermofisher' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='2'/>;
      var charts = <Charts value='Thermofisher' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='2'/>;
      var locate = <Location   value='Thermofisher' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} EndDate={selectedEndDate} country="all" tenant='2'/>;
      var numpie = <NumberPie value='Thermofisher' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='2'/>;
      var indi = <IndividualStats value='Thermofisher'/>;
      var topRankConditions = <TopRankConditions value='Thermofisher' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='2'/>;
      var topRankMeds = <TopRankMeds value='Thermofisher' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='2'/>;
      var topRankParameters = <TopRankParameters value='Thermofisher' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='2'/>;
      var medadd= <UsersAddedMed value='Thermofisher' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='2'/>;
      var disadd= <UsersAddedDisease value='Thermofisher' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='2'/>;
      var paradd= <UsersAddedParameter value='Thermofisher' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='2'/>;
      var piemed= <PieMed value='Thermofisher' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='2'/>;
      var piecondition= <PieCondition value='Thermofisher' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='2'/>;
      var pieparameter= <PieParameter value='Thermofisher' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='2'/>;
      var activity= <Activity value='Thermofisher' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='2'/>;
    }else if (value === "CGS") {
      var reg = <RegisteredUsers value='CGS' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='3'/>;
      var used = <UsedBy value= 'CGS' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='3'/>;
      var active = <ActiveUsers  value='CGS' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='3'/>;
      var plt = <MobilePlatform value='CGS' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='3'/>;
      var charts = <Charts value='CGS' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='3'/>;
      var locate = <Location   value='CGS' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} EndDate={selectedEndDate} country="all" tenant='3'/>;
      var numpie = <NumberPie value='CGS' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='3'/>;
      var indi = <IndividualStats value='CGS'/>;
      var topRankConditions = <TopRankConditions value='CGS' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='3'/>;
      var topRankMeds = <TopRankMeds value='CGS' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='3'/>;
      var topRankParameters = <TopRankParameters value='CGS' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='3'/>;
      var medadd= <UsersAddedMed value='CGS' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='3'/>;
      var disadd= <UsersAddedDisease value='CGS' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='3'/>;
      var paradd= <UsersAddedParameter value='CGS' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='3'/>;
      var piemed= <PieMed value='CGS' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='3'/>;
      var piecondition= <PieCondition value='CGS' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='3'/>;
      var pieparameter= <PieParameter value='CGS' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='3'/>;
      var activity= <Activity value='CGS' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='3'/>;
    }else if (value === "Others") {
      var reg = <RegisteredUsers value='Others' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="others" tenant='all'/>;
      var used = <UsedBy value= 'Others' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="others" tenant='all'/>;
      var active = <ActiveUsers  value='Others' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="others" tenant='all'/>;
      var plt = <MobilePlatform value='Others' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="others" tenant='all'/>;
      var charts = <Charts value='Others' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="others" tenant='all'/>;
      var locate = <Location   value='Others' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} EndDate={selectedEndDate} country="others" tenant='all'/>;
      var numpie = <NumberPie value='Others' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="others" tenant='all'/>;
      var indi = <IndividualStats value='Others'/>;
      var topRankConditions = <TopRankConditions value='Others' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="others" tenant='all'/>;
      var topRankMeds = <TopRankMeds value='Others' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="others" tenant='all'/>;
      var topRankParameters = <TopRankParameters value='Others' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="others" tenant='all'/>;
      var medadd= <UsersAddedMed value='Others' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="others" tenant='all'/>;
      var disadd= <UsersAddedDisease value='Others' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="others" tenant='all'/>;
      var paradd= <UsersAddedParameter value='Others' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="others" tenant='all'/>;
      var piemed= <PieMed value='Others' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='all'/>;
      var piecondition= <PieCondition value='Others' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='all'/>;
      var pieparameter= <PieParameter value='Others' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='all'/>;
      var activity= <Activity value='Others' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='all'/>;
    }else if (value === "KYM") {
      var reg = <RegisteredUsers value='KYM' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='all'/>;
      var used = <UsedBy value= 'KYM' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='all'/>;
      var active = <ActiveUsers  value='KYM' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='all'/>;
      var plt = <MobilePlatform value='KYM' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='all'/>;
      var charts = <Charts value='KYM' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='all'/>;
      var locate = <Location   value='KYM' key={[selectedDate,selectedEndDate,value,value]} startDate= {selectedDate} EndDate={selectedEndDate} country="all" tenant='all'/>;
      var numpie = <NumberPie value='KYM' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='all'/>;
      var indi = <IndividualStats value='KYM' />;
      var topRankConditions = <TopRankConditions value='KYM' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='all'/>;
      var topRankMeds = <TopRankMeds value='KYM' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='all'/>;
      var topRankParameters = <TopRankParameters value='KYM' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='all'/>;
      var medadd= <UsersAddedMed value='KYM' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='all'/>;
      var disadd= <UsersAddedDisease value='KYM' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='all'/>;
      var paradd= <UsersAddedParameter value='KYM' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='all'/>;
      var piemed= <PieMed value='KYM' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='all'/>;
      var piecondition= <PieCondition value='KYM' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='all'/>;
      var pieparameter= <PieParameter value='KYM' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='all'/>;
      var activity= <Activity value='KYM' key={[selectedDate,selectedEndDate,value]} startDate= {selectedDate} endDate={selectedEndDate} country="all" tenant='all'/>;
    } else {
      var reg = <p></p>;
      var used = <p></p>;
      var active = <p></p>;
      var plt = <p></p>;
      var charts = <p></p>;
      var locate = <p></p>;
      var numpie = <p></p>;
      var indi =<p></p>;
      var topRankMeds = <p></p>;
      var topRankConditions = <p></p>;
      var topRankParameters = <p></p>;
      var medadd= <p></p>;
      var disadd= <p></p>;
      var paradd= <p></p>;
      var piemed= <p></p>;
      var piecondition= <p></p>;
      var pieparameter= <p></p>;
      var activity = <p></p>;
    }


  return (


    <div style={{backgroundColor:"#F8F8F8"}}>

    <MenuAppBar/>
    <CenteredTabs onHandleChange={handleChange} value={value} />
    <div style={{margin: "2vw"}}>
      <input style={{margin: "1vw"}} type="date" id="startDate" name="start" value={selectedDate} onChange={handleDateChange}/>
      To <input style={{margin: "1vw"}} type="date" id="endDate" name="end" value={selectedEndDate} onChange={handleEndDateChange}/>
    </div>
    <Container maxWidth="lg" style={{marginTop: "5em"}}>



    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            {reg}
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            {active}
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            {plt}
          </Paper>
        </Grid>

      </Grid>

      <Grid container spacing={3}>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          {activity}
        </Paper>
      </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
           {charts}
          </Paper>
        </Grid>
      </Grid>




      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            {medadd}
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            {disadd}
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            {paradd}
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
           {piemed}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
           {piecondition}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
           {pieparameter}
          </Paper>
        </Grid>
      </Grid>



      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
           {topRankMeds}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
           {topRankConditions}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
           {topRankParameters}
          </Paper>
        </Grid>
      </Grid>





    </div>
    </Container>
    </div>
  );
}



export default AutoGrid;
