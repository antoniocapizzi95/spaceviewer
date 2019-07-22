import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

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
        width: 130,
    },
}));

export default function DateInput(props) {
    const classes = useStyles();

    return (
        <form className={classes.container} onSubmit={props.changeDate} noValidate>
            <TextField
                id="dateInit"
                label="Enter a start date"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="dateEnd"
                label="Enter a end date"
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
