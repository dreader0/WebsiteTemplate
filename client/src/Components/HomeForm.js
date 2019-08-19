import React from 'react';
import { withRouter } from 'react-router-dom'

const Button = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/WorkTermOne') }}
    style={{padding: "12px", fontWeight: "bolder"}}
  >
    Go To My Work Term Report One
  </button>
));

class HomeForm extends React.Component {
  render() {
    return (
        <div className="tabContent">
            <h3 className="title" >Welcome To My Website</h3>
            <p>
            This website was created to detail the experiences I had during my CO-OP work terms, starting 
            at the Co-operators (Guelph location). I spent my term working with the Build Automation and 
            Release (BAR) team where we were responsible for the automation of testing, release activities,
             and building/maintaining environments. My hope is by looking through this website, you will 
             learn more about my experiences and skills gained throughout my Software Engineering CO-OP 
             program at the University of Guelph.</p> <br></br>
             <Button />
             <br></br>
        </div>
    );
  }
}


export default HomeForm;