import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const hei = {
    height: '100%'
};
const marg = {
    marginTop: '20px'
};

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        rover: 'curiosity',
        camera: 'FHAZ',
    });

    const inputLabel = React.useRef('');
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    function handleChange(event) {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <form className={classes.root} autoComplete="off" onSubmit={props.search}>
            <div>
                <TextField
                    id="sol"
                    label="Enter a word"
                    className={classes.formControl}
                />
                <Button variant="contained" type="submit" style={marg} className={hei}>
                    Ok
                </Button>
            </div>


        </form>
    );
}