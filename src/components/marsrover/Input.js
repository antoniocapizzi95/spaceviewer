import React from "react";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

const hei = {
    height: '100%'
};
const marg = {
    margin: '10px'
};


const Input = props => (
    <form onSubmit={props.chooseData}>
        <FormControl>
            <InputLabel>Rover</InputLabel>
            <Select
                inputProps={{
                    name: 'rover',
                    id: 'rover-id',
                }}
            >
                <MenuItem value={"Curiosity"}>Curiosity</MenuItem>
                <MenuItem value={"Opportunity"}>Opportunity</MenuItem>
                <MenuItem value={"Spirit"}>Spirit</MenuItem>
            </Select>
        </FormControl>
        <FormControl>
            <InputLabel>Camera</InputLabel>
            <Select
                inputProps={{
                    name: 'camera',
                    id: 'camera-id',
                }}
            >
                <MenuItem value={"FHAZ"}>Front Hazard Avoidance Camera</MenuItem>
                <MenuItem value={"RHAZ"}>Rear Hazard Avoidance Camera</MenuItem>
                <MenuItem value={"NAVCAM"}>Navigation Camera</MenuItem>
            </Select>
        </FormControl>
        <Button variant="contained" type="submit" style={marg} className={hei}>
            Ok
        </Button>
    </form>
);

export default Input;