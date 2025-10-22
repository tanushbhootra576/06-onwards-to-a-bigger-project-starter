import MeetupDetail from '../../../components/meetups/MeetupDetail';

function MeetupDetailsPage() {
    return (
        <MeetupDetail
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg"
            title="A First Meetup"
            address="Some Address 5, 12345 Some City"
            description="This is a first meetup!"
        />
    );
}

export default MeetupDetailsPage;
