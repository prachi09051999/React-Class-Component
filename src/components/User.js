import classes from './User.module.css';

import { Component } from 'react';

// a basic component

class User extends Component {

  // use every time a Component ends or unmount
  componentWillUnmount(){
    console.log("unmounting");
  }

  render(){
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
