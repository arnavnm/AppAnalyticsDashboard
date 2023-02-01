import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import pillIcon from './images/pillIcon.png';
import vitalIcon from './images/vitalIcon.png';
import diseaseIcon from './images/diseaseIcon.png';
import Avatar from '@material-ui/core/Avatar';
import axios from "axios";
import { connect } from "react-redux";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3CB371",
    },
  },
});

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function CenteredTabs(props) {
  const classes = useStyles();
  const [Tenantvalue, setTenantValue] = React.useState("Country");

  let [responseData, setResponseData] = React.useState('');
  const fetchData = React.useCallback(() => {
  axios({
        "method": "GET",
        "url": "http://127.0.0.1:8000/stats/role",
        "headers": {
          "Content-Type": "application/json",

        }
      })
      .then((response) => {
        setResponseData(response.data.role)
      })
      .catch((error) => {
        console.log(error)
      })
    }, [])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])


  const handleTenantChange = (event, newValue) => {
    setTenantValue(newValue);
  };

  if (Tenantvalue === 'Country') {

    var tabGroup =  <Tab value = "USA" label="USA" />
    var tabgr = <Tab  value = "India" label="India" />
    var tabgro = <Tab  value = "Others" label="Others" />

  }
  else{
    console.log("HEY")
    console.log(responseData)
    if (responseData == 'show'){
      var tabGroup =   <Tab  value = "KYM" label="KYM" />
      var tabgr = <Tab value= "Thermofisher" label="Thermofisher" />
      var tabgro = <Tab value="CGS" label="CGS" />
      var tabgrou = <div></div>
  } else{
      var tabGroup =   <div></div>
      var tabgr = <div></div>
      var tabgro = <div></div>
  }
  }
    return (
    <ThemeProvider theme={theme}>
    <div>
    <Paper className={classes.root}>
      <Tabs
        value={Tenantvalue}
        onChange={handleTenantChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >

        <Tab label = 'Country' value='Country'/><Tab label = 'Tenant' value='Tenant'/>

      </Tabs>
    </Paper>
    </div>
    <Paper className={classes.root}>
      <Tabs
        value={props.value}
        onChange= {props.onHandleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
      {tabgrou}
      {tabGroup}
      {tabgr}
      {tabgro}
      </Tabs>

    </Paper>
    </ThemeProvider>
  );
}

export default CenteredTabs;
