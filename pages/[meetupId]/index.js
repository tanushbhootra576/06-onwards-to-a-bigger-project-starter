import { Fragment } from "react/jsx-runtime";


function MeetupDetails() {
    return (

        <MeetupDetails  

        image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
        title='A First Meetup'
        address='Some Address 5, 12345 Some City'
        description='This is a first meetup!'
        />
        
        // <Fragment>
        //     <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg' alt='Meetup image' />
        //     <h1>A First Meetup</h1>
        //     <address>Some Address 5, 12345 Some City</address>
        //     <p>This is a first meetup!</p>
        // </Fragment>
    );
}

export default MeetupDetails;
