import React, {Component} from 'react';
import ReactDOM from "react-dom";
import './PatientsList.css';
import './PopUps.css';
import Accordion from '../Accordion/Accordion.js';


class Popup extends React.Component {
  render() {
    return(
      <div className='popup'>
        <div className='popup_inner'>
        <h1>{this.props.text}</h1>
        <div>
          <Accordion>
            <div label='11 February 2019'>
              <p>
                <strong>Subjective:</strong> Back pain, chest pain, dry skin
              </p>
              <p>
                <strong>Objective:</strong>
              </p>
              <p>
                <strong>Assessment:</strong> Currently Not Endangered
              </p>
              <p>
                <strong>Plan:</strong> Currently Not Endangered
              </p>
            </div>
            <div label='14 March 2019'>
            <p>
              <strong>Subjective:</strong> Back pain, chest pain, dry skin
            </p>
            <p>
              <strong>Objective:</strong>
            </p>
            <p>
              <strong>Assessment:</strong> Currently Not Endangered
            </p>
            <p>
              <strong>Plan:</strong> Currently Not Endangered
            </p>
            </div>
            </Accordion>
          </div>
          <div>
            <button style={{background: 'light-blue', height: '40px',
            width: '64px', fontSize: '18px', justifyContent: 'right', fontFamily: 'Helvetica',
            fontWeight: 'bold'}} onClick={this.props.closePopup}>OK</button>
          </div>
        </div>
      </div>
    );
  }
}

class PatientsList extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div>
      {this.state.showPopup ?
        <Popup
          text='Nathan Fielder'
          closePopup={this.togglePopup.bind(this)}
        />
        : null
      }
        <ul id="PatientList">
          <li><button class="PatientName" onClick={this.togglePopup.bind(this)}>Alphonse Bell</button></li>
          <li><button class="PatientName" onClick={this.togglePopup.bind(this)}>Nathan Fielder</button></li>
          <li><button class="PatientName" onClick={this.togglePopup.bind(this)}>Harper Kennedy</button></li>
          <li><button class="PatientName" onClick={this.togglePopup.bind(this)}>Tanya Webb</button></li>
          <li><button class="PatientName" onClick={this.togglePopup.bind(this)}>Bobby Fischer</button></li>
          <li><button class="PatientName" onClick={this.togglePopup.bind(this)}>Shannon Crawford</button></li>
        </ul>
      </div>
    );
  }
}

export default PatientsList;
const rootElement = document.getElementById("root");
ReactDOM.render(<PatientsList />, rootElement);
