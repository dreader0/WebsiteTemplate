import React from 'react';
import { withRouter } from 'react-router-dom';
import MediaQuery  from 'react-responsive';

const Button = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/WorkTermOne'); window.location.reload(); }}
    style={{padding: "12px", fontWeight: "bolder"}}
  >
    The Co-operators
  </button>
));

class HomeForm extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query='(max-width: 1224px)'>
        <div className="tabContent">
            <h3 className="title" >Welcome To My Website</h3>
            <p style={{paddingLeft: "30px", paddingRight: "30px"}}>
            This website was created to detail the experiences I had during my CO-OP work terms, starting 
            at the Co-operators (Guelph location). I spent my term working with the Build Automation and 
            Release (BAR) team where we were responsible for the automation of testing, release activities,
             and building/maintaining environments. My hope is by looking through this website, you will 
             learn more about the experiences and skills I gained throughout my Software Engineering CO-OP 
             program at the University of Guelph. To learn more about my first and second work term at The 
             Co-operators, click the button below.</p> <br></br>
             <Button />
             <br></br>
        </div>
        </MediaQuery>

        <MediaQuery query='(min-width: 1225px)'>
        <div className="tabContent">
            <h3 className="title" >Welcome To My Website</h3>
            <p style={{paddingLeft: "30px", paddingRight: "30px"}}>
            This website was created to detail the experiences I had during my CO-OP work terms, starting 
            at the Co-operators (Guelph location). I spent my term working with the Build Automation and 
            Release (BAR) team where we were responsible for the automation of testing, release activities,
             and building/maintaining environments. My hope is by looking through this website, you will 
             learn more about the experiences and skills I gained throughout my Software Engineering CO-OP 
             program at the University of Guelph. To learn more about my first and second work term at The 
             Co-operators, click the button below.</p> <br></br>
             <Button />
             <br></br>
        </div>
        </MediaQuery>
      </div>
    );
  }
}


export default HomeForm;