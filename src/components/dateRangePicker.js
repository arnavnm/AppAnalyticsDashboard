import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  //KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const customTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#3CB371',
			light:  '#3CB371',
			dark:  '#3CB371',
		},
		secondary: {
			main: '#3CB371',
		},
	},
})

export default function MaterialUIPickers(props) {
  // The first commit of Material-UI


  return (
    <MuiThemeProvider theme={customTheme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-inline"
        label="From"
        format="dd-MM-yyyy"
        value={props.startValue}
        onChange={props.onHandleStartChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-inline"
          label="To"
          format="dd-MM-yyyy"
          value={props.endValue}
          onChange={props.onHandleEndChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
}
