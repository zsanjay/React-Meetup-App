import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useHistory} from 'react-router-dom';

function NewMeetup(){

    const history = useHistory();
    
    function meetUpDataHandler(meetupData){
        fetch('https://react-db-18d35-default-rtdb.firebaseio.com/meetups.json' ,
        {
            method : 'POST',
            body : JSON.stringify(meetupData),
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        ).then(() => {
            history.replace('/');
        });
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetUp={meetUpDataHandler}/>
    </section>;
}

export default NewMeetup;