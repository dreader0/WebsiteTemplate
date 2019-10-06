import React from 'react';
import { Grid } from 'gymnast'
import MediaQuery  from 'react-responsive';
let myDescription = require("./MyText/AboutMe_MyDescription");

class AboutMeForm extends React.Component {
  render() {
    return (
        <div className="tabContent">
          <h3 className="title" >About Me</h3>

          <MediaQuery query='(min-width: 1224px)'>           
              <Grid marginLeft={20} marginRight={20} marginTop={0}>
                  <Grid size={5} >
                  <img  alt="Mackenzie Quigley" src={require("./MyText/mePicture.jpg")} style={{width: "280px", height: "400px"}}/>
                  </Grid>
                  <Grid size={6}>
                    <p>{myDescription.Text}</p>
                  </Grid>
              </Grid>
            </MediaQuery>

            <MediaQuery query='(max-width: 1224px)'>
                  <p>{myDescription.Text}</p>
                  <img  alt="Mackenzie Quigley" src={require("./MyText/mePicture.jpg")} style={{width: "180px", height: "250px"}}/>
            </MediaQuery>
        </div>
    );
  }
}

export default AboutMeForm;