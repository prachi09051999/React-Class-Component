import { Component } from "react";

// To catch and handle the errors
class ErrorBoundry extends Component {
  constructor(){
    super();
    this.state = {
      hasError: false
    }
  }
  componentDidCatch(err){
    console.log(err);
     this.setState({hasError: true});
  }
  render(){
    if(this.state.hasError){
      return <p>Something is wrong</p>
    }
    else{
      return this.props.children;
    }
  }
}

export default ErrorBoundry;