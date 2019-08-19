import React from 'react';
import { Grid } from 'gymnast'
let myDescription = require("./MyText/AboutMe_MyDescription");

class AboutMeForm extends React.Component {
  render() {
    return (
        <div className="tabContent">
            <h3 className="title" >About Me</h3>
            <Grid marginLeft={20} marginRight={20} marginTop={0}>
                <Grid size={5} >
                <img  alt="Mackenzie Quigley" src={require("./MyText/mePicture.jpg")} style={{width: "280px", height: "400px"}}/>
                </Grid>
                <Grid size={6}>
                  <p>{myDescription.Text}</p>
                </Grid>
            </Grid>
        </div>
    );
  }
}

export default AboutMeForm;