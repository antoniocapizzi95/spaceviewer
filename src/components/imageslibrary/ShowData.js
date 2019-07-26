import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const dim = {
    height: 'auto',
    width: '700px',
    margin: '20px'
};
const dimImage = {
    height: 'auto',
    maxWidth: '100%'
};

const ShowData = props => (

    <Card style={dim} direction='row'>
        <CardContent>
            <img className={dimImage} src={props.images.img_link}></img>
            <Typography variant="body2" gutterBottom>
                Description: {props.images.description}
            </Typography>
        </CardContent>


    </Card>

);

export default ShowData;