import React from 'react';
import './App.css';
import AboutMeForm from "./Components/AboutMeForm";
import HomeForm from "./Components/HomeForm";
import WorkTermOneBlogForm from "./Components/WorkTermOneBlogForm";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import { createBrowserHistory } from 'history';
import MediaQuery  from 'react-responsive';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
let history = null;

const mobileOptions = {
  backgroundColor: "white",
  color: 'black', 
  textAlign: 'center',
  fontSize: '24px',
  paddingTop: "10px",
  paddingBottom: "10px",
  textDecoration: 'none',
  border: "1px solid grey",
}


const tabStyle = {
  backgroundColor: "transparent",
  color: 'grey', 
  textAlign: 'center',
  fontSize: '30px',
  marginLeft: "30px",
  marginRight: "30px",
  textDecoration: 'none',
  borderBottom: "3px solid transparent"
};

const hoverTabStyle = {
  color: 'grey',
  textAlign: 'center',
  fontSize: '30px',
  marginLeft: "30px",
  marginRight: "30px",
  textDecoration: 'none',
  borderBottom: "3px solid grey"
};


class App extends React.Component {
  constructor(props) {
    super(props);

    history = createBrowserHistory();

    this.state = {
      title: "",
      date: "",
      description: "",
      username: "",
      password: "",
      hoverHome: false,
      hoverAboutMe: false,
      modalIsOpen: false,
      menuOpen: false,
      hoverWorkTermOne: false,
      selectReport: false
    };

    
    this.changeDropDown = this.changeDropDown.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);

    this.hoverHomeOn = this.hoverHomeOn.bind(this);
    this.hoverHomeOff = this.hoverHomeOff.bind(this);
    this.selectHome = this.selectHome.bind(this);

    this.hoverAboutMeOn = this.hoverAboutMeOn.bind(this);
    this.hoverAboutMeoff = this.hoverAboutMeoff.bind(this);
    this.selectAboutMe = this.selectAboutMe.bind(this);
    
    this.updateHistory = this.updateHistory.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.hoverWorkTermOneOn = this.hoverWorkTermOneOn.bind(this);
    this.hoverWorkTermOneOff = this.hoverWorkTermOneOff.bind(this);
    this.selectWorkTermOne = this.selectWorkTermOne.bind(this);
  }

  async selectWorkTermOne() {
    this.setState({ hoverWorkTermOne: true });
    this.setState({ selectReport: true });
    this.setState({ hoverAboutMe: false });
    this.setState({ hoverHome: false });
    await history.push("/WorkTermOne");
  }
  hoverWorkTermOneOn(){
    this.setState({ hoverWorkTermOne: true });
  }
  hoverWorkTermOneOff(){ 
    if(history.location.pathname !== "/WorkTermOne") {
      this.setState({ hoverWorkTermOne: false });
    }
  }

  changeDropDown(e) {
    this.setState({ selectedOption:  e.target.value});
  }

  openMenu() {
    this.setState({ menuOpen: true })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  // Closes the modal that alerts the client they are making an insurance-less client
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  updateHistory() {
    history = createBrowserHistory();
  }

  async selectHome() {
    this.setState({ hoverAboutMe: false });
    this.setState({ hoverHome: true });
    this.setState({ selectReport: false });
    this.setState({ hoverWorkTermOne: false });
    await history.push("/");
  }

  hoverHomeOn(){
    this.setState({ hoverHome: true });
  }

  hoverHomeOff(){ 
    if(history.location.pathname !== "/") {
      this.setState({ hoverHome: false });
    }
  }


  async selectAboutMe(){
    this.setState({ hoverAboutMe: true });
    this.setState({ hoverHome: false });
    this.setState({ selectReport: false });
    this.setState({ hoverWorkTermOne: false });
    await history.push("/AboutMe");
  }

  hoverAboutMeOn(){
    this.setState({ hoverAboutMe: true });
  }

  hoverAboutMeoff(){ 
    if(history.location.pathname !== "/AboutMe") {
      this.setState({  hoverAboutMe: false });    
    }
  }

  handleStateChange = async(e) => {
    await this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <div style={{display: "block", overflow: "auto"}}>
              <MediaQuery query='(min-width: 1225px)'>
                <div className="myheader">
                <label style={{border: "2px solid grey", float: "left", padding: "10px", marginLeft: "40px", width: "250px", height: "150px", display: "block"}}>Logo</label>
               
                   <nav className="tabHeader">
                
                  {history.location.pathname === "/" && 
                    <Link 
                    style={hoverTabStyle} 
                    to="/">
                    Home
                    </Link>
                  }

                  {history.location.pathname !== "/" &&
                    <Link 
                    style={this.state.hoverHome ? hoverTabStyle : tabStyle} 
                    onMouseEnter={this.hoverHomeOn} 
                    onMouseLeave={this.hoverHomeOff}  
                    onClick={this.selectHome} 
                    to="/">
                    Home
                    </Link>
                  }
                  

                  <div className="dropdown">
                    {(this.state.selectReport === true) &&
                      <label style={hoverTabStyle} >Work Term Reports</label>
                    }
                    {(this.state.selectReport !== true) &&
                      <label style={this.state.WorkTerm ? hoverTabStyle : tabStyle} >Work Term Reports</label>
                    }

                  <div className="dropdown-content">
                      {history.location.pathname === "/WorkTermOne" &&
                      <div>
                        <Link style={hoverTabStyle} onMouseEnter={this.hoverWorkTermOneOn}  onMouseLeave={this.hoverWorkTermOneOff} onClick={this.selectWorkTermOne}  to="/WorkTermOne">Work Term One</Link> <br></br>
                      </div>
                      }
                      {history.location.pathname !== "/WorkTermOne" &&
                      <div>
                        <Link style={this.state.hoverWorkTermOne ? hoverTabStyle : tabStyle} onMouseEnter={this.hoverWorkTermOneOn}  onMouseLeave={this.hoverWorkTermOneOff} onClick={this.selectWorkTermOne} to="/WorkTermOne">Work Term One</Link> <br></br>
                      </div>
                      }
                      </div>
                  </div>
                  
                {history.location.pathname === "/AboutMe" && 
                <Link
                style={ hoverTabStyle} 
                to="/AboutMe">
                  About Me
                  </Link>
              }

                {history.location.pathname !== "/AboutMe" && 
                <Link
                onClick={this.selectAboutMe} 
                style={this.state.hoverAboutMe ? hoverTabStyle : tabStyle} 
                onMouseEnter={this.hoverAboutMeOn} 
                onMouseLeave={this.hoverAboutMeoff} 
                to="/AboutMe">
                  About Me
                  </Link>
              } 


              </nav>
              </div>
          </MediaQuery>

          <MediaQuery query='(max-width: 1224px)'>
          <div  >
            <div style={{padding: "10px", float: "left"}}>
                <CheeseburgerMenu
                  isOpen={this.state.menuOpen}
                  closeCallback={this.closeMenu.bind(this)}>
                        <Link onClick={this.closeMenu.bind(this)} style={{textDecoration: "none"}} to="/">
                          <p style={{mobileOptions}}>Home</p>
                        </Link>
                        <Link onClick={this.closeMenu.bind(this)} style={{textDecoration: "none"}} to="/WorkTermOne">
                          <p style={{mobileOptions}}>Work Term One</p>
                        </Link>
                        <Link  onClick={this.closeMenu.bind(this)}style={{textDecoration: "none"}} to="/AboutMe">
                          <p style={{mobileOptions}}>About Me</p>
                        </Link>
                </CheeseburgerMenu>
          
                <HamburgerMenu
                  isOpen={this.state.menuOpen}
                  menuClicked={this.openMenu.bind(this)}
                  width={32}
                  height={24}
                  strokeWidth={3}
                  rotate={0}
                  color='black'
                  borderRadius={0}
                  animationDuration={0.5}
                />
            </div>
            <div style={{float: "Center"}}>
              <label style={{border: "2px solid grey", width: "200px", height: "100px"}}>Logo</label>
          </div>
           </div>
        </MediaQuery>
        </div>

        <div>
              <Switch onChange={this.updateHistory}>
                  <Route exact path="/" onChange={this.updateHistory}><HomeForm/></Route>
                  <Route exact path="/WorkTermOne" onChange={this.updateHistory}> <WorkTermOneBlogForm/> </Route>
                  <Route exact path="/AboutMe" onChange={this.updateHistory}><AboutMeForm/></Route>
              </Switch>
          </div>
        </div>
      </Router>
      <div style={{margin: "50px"}}>
        <br></br><label style={{backgroundColor: "transparent", fontSize: "20px"}}>Website Designed and Created By Mackenzie Quigley</label>
        </div>
      </div>
    );
  }
}

export default App;
