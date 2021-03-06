import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core";

const hei = {
  height: '100%'
};
const marg = {
    margin: '10px'
};

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 125,
    },
}));
export default function DateInput(props) {
    const classes = useStyles();

    return (
        <form className={classes.container} onSubmit={props.changeDate} noValidate>
            <TextField
                id="date"
                label="Enter a date"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button variant="contained" type="submit" style={marg} className={hei}>
                Ok
            </Button>
        </form>
    );
}