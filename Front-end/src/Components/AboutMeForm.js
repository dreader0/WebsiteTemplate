import React from 'react';
let myDescription = require("./MyText/AboutMe_MyDescription")

class AboutMeForm extends React.Component {
  render() {
    return (
        <div className="tabContent">
            <h3 className="title" >About Me</h3> <br></br>
            <p>{myDescription.Text}</p> <br></br>
        </div>
    );
  }
}

export default AboutMeForm;