import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
        <div className="toolbar__logo" style={{fontWeight: 'bold'}}><a href="/">Clinic Assistant</a></div>
        <div className="spacer"/>
        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/patients">Patients List</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;
