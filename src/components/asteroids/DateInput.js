import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const hei = {
    height: '100%'
};
const marg = {
    margin: '10px'
};

const margright = {
    marginRight: '10px'
};

const DateInput = props => (
    <form onSubmit={props.changeDate}>
        <TextField
            id="dateInit"
            label="Enter a start date"
            type="date"
            className={hei}
            style={margright}
            InputLabelProps={{
                shrink: true,
            }}
        />
        <TextField
            id="date"
            label="Enter a end date"
            type="date"
            className={hei}
            style={margright}
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