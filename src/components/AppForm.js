import React from 'react';
import { Button, TextField, Grid, form } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: 400,
      },
    },
  }));

function Form() {
    const classes = useStyles();

    return (
        <form className={classes.root} direction="row" justify="flex-start" noValidate autoComplete="off">
            
            <TextField id="standard-basic" size="medium" label="First Name" />
            <TextField id="standard-basic" label="Last Name" />

            <TextField
          label="Annual Salary"
          id="standard-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        </form>
    );
}

function SubmitButton () {
    return (
        <Button  variant='contained' color="primary">Submit</Button>
    );
}

class AppForm extends React.Component {

    render() {
        return(
            <Grid item xs={3} lg={6}>
                <Form />
                <SubmitButton />
            </Grid>
        );
    }
}

export default AppForm;