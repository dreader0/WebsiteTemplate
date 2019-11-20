import React from 'react';
import MediaQuery  from 'react-responsive';
import Modal from 'react-modal';

let modalTitle = "";
let modalText = "";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
      modalIsOpen: false
    };

    this.changeFirstname = this.changeFirstname.bind(this);
    this.changeLastname = this.changeLastname.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  changeFirstname(e) {
    this.setState({firstname: e.target.value});
  }
  changeLastname(e) {
    this.setState({lastname: e.target.value});
  }
  changeEmail(e) {
    this.setState({email: e.target.value});
  }
  changeMessage(e) {
    this.setState({message: e.target.value});
  }

  async submitForm(e) {
    let myJSON = {};
    myJSON.firstname = this.state.firstname;
    myJSON.lastname = this.state.lastname;
    myJSON.email = this.state.email;
    myJSON.message = this.state.message;
    console.log(myJSON);
    let result = await sendEmail(myJSON);
    console.log(result);
    if(result.Error === "None") {
      modalTitle = "Email Successfully Sent!";
      modalText = "Thank you for taking the time to contact me, I will get back to you as soon as I can!";
      this.setState({modalIsOpen: true});
      this.setState({firstname: ""});
      this.setState({lastname: ""});
      this.setState({email: ""});
      this.setState({message: ""});
    }
    else {
      modalTitle = "Email Could Not Be Sent";
      modalText = "Due to some issue, your email was unable to send. You can try again, or email me directly at slina.frich@gmail.com. Sorry for the inconvenience!";
      this.setState({modalIsOpen: true});
    }
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h1 style={{fontSize: "40px"}}>{modalTitle}</h1>
          <div>
            <p>{modalText}</p>
          <button onClick={this.closeModal}>Okay</button>
          </div>
        </Modal>

        <MediaQuery query='(max-width: 1224px)'>
        <div className="tabContent">
        <h3 className="title">Contact Me</h3><br></br>
                <div>
                    <input style={{width: "150px"}} onChange={this.changeFirstname} type="text"id="fname"name="firstname"placeholder="Firstname" value={this.state.firstname}/><br></br><br></br>
                    <input style={{width: "150px"}} onChange={this.changeLastname} type="text"id="lname" name="lastname" placeholder="Lastname" value={this.state.lastname} /><br></br><br></br>
                    <input style={{width: "150px"}} onChange={this.changeEmail} type="text" id="email"name="email"placeholder="Email" value={this.state.email}/><br></br><br></br>
                    <textarea onChange={this.changeMessage} id="subject"name="subject"placeholder="Write something..." value={this.state.message}></textarea><br></br><br></br>
                    <button onClick={this.submitForm} >Submit</button>
                </div>
        </div>
        </MediaQuery>

        <MediaQuery query='(min-width: 1225px)'>
        <div className="tabContent">
        <h3 className="title">Contact Me</h3><br></br>
                <div>
                    <input style={{minWidth: "300px"}} onChange={this.changeFirstname} type="text"id="fname"name="firstname"placeholder="Firstname" value={this.state.firstname}/><br></br><br></br>
                    <input style={{minWidth: "300px"}} onChange={this.changeLastname} type="text"id="lname" name="lastname" placeholder="Lastname" value={this.state.lastname} /><br></br><br></br>
                    <input style={{minWidth: "300px"}}  onChange={this.changeEmail} type="text" id="email"name="email"placeholder="Email" value={this.state.email}/><br></br><br></br>
                    <textarea style={{minWidth: "500px"}} onChange={this.changeMessage} id="subject"name="subject"placeholder="Write something..." value={this.state.message}></textarea><br></br><br></br>
                    <button onClick={this.submitForm} >Submit</button>
                </div>
        </div>
        </MediaQuery>
      </div>
    );
  }
}


async function sendEmail(myjson) {
  console.log(myjson);

  let data = {};

  await (async () => {
    const rawResponse = await fetch('/api/v1/SendEmail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myjson)
    });
    data = await rawResponse.json();
  })();

    return data;
}

export default Contact;