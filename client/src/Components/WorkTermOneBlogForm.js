import React from 'react';
import MediaQuery  from 'react-responsive';

class WorkTermOneBlogForm extends React.Component {
  //constructor(props) {
    //super(props);
  //}

  render() {
    return (
      <div className="tabContent">
        <MediaQuery query='(max-width: 1224px)'>
          <h3 className="mobileTitle">
            My Position Name
          </h3>
          <p className="mobilePlacement">
            My Placement Name
          </p>
        </MediaQuery>

        <MediaQuery query='(min-width: 1225px)'>
        <h3 className="mobileTitle">
            My Position Name
          </h3>
          <p className="mobilePlacement">
            My Placement Name
          </p>
        </MediaQuery> 
    </div>
    );
  }
}


export default WorkTermOneBlogForm;
