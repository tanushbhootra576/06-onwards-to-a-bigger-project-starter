import { Fragment } from 'react';
import classes from './MeetupDetail.module.css';
function MeetupDetails(props) {
    return (
        <section className={classes.detail}>
            <img src={props.image} alt="Meetup image" className={classes.image} />
            <h1 className={classes.title}>{props.title}</h1>
            <address className={classes.address}>{props.address}</address>
            <p className={classes.description}>{props.description}</p>
            <button className={classes.button}>Contact Organizer</button>
        </section>
    );
}

export default MeetupDetails;
