import React from 'react';
import { Button, TextField, Grid, form } from '@material-ui/core';

function Form() {
    return (
        <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="First Name" />
            <TextField id="standard-basic" label="Last Name" />
        </form>
    );
}

function SubmitButton () {
    return (
        <Button  variant='contained'>Submit</Button>
    );
}

class AppForm extends React.Component {

    render() {
        return(
            <Grid container>
            <Grid item xs={12}>
                <Form />
                <SubmitButton />
            </Grid>
            </Grid>
        );
    }
}

export default AppForm;