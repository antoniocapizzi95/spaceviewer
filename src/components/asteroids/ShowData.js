import React from "react";

const ShowData = props => (
    <div>
        {props.asteroids.id} - {props.asteroids.name} - {props.asteroids.close_approach_data[0].close_approach_date} - <a href={props.asteroids.nasa_jpl_url}>Link</a>
    </div>
);

export default ShowData;