import React from "react";

const DateInput = props => (
    <form onSubmit={props.changeDate}>
        Enter the start date and end date (YYYY-MM-DD):
        <input />
        <input />
        <input type="submit" />
    </form>
);

export default DateInput;