import React from 'react';
import { withRouter } from 'react-router-dom';
import MediaQuery  from 'react-responsive';

const Button = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/WorkTermOne'); window.location.reload(); }}
    style={{padding: "12px", fontWeight: "bolder"}}
  >My First Term Report
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
            Description of why I started my website/what it's purpose is.</p> <br></br>
             <Button />
             <br></br>
        </div>
        </MediaQuery>

        <MediaQuery query='(min-width: 1225px)'>
        <div className="tabContent">
            <h3 className="title" >Welcome To My Website</h3>
            <p style={{paddingLeft: "30px", paddingRight: "30px"}}>
            Description of why I started my website/what it's purpose is.</p> <br></br>
             <Button />
             <br></br>
        </div>
        </MediaQuery>
      </div>
    );
  }
}


export default HomeForm;