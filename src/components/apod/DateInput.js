import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const hei = {
  height: '100%'
};
const marg = {
    margin: '10px'
};

const DateInput = props => (
    <form onSubmit={props.changeDate}>
        <TextField
            id="date"
            label="Enter a date"
            type="date"
            className={hei}
            defaultValue={new Date().toLocaleString()}
            InputLabelProps={{
                shrink: true,
            }}
        />
        <Button variant="contained" type="submit" style={marg} className={hei}>
            Ok
        </Button>
    </form>
);

export default DateInput;