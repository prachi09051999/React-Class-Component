import { Fragment, Component } from 'react';
import Users from './Users';
import classes from './UserFinder.module.css';
import UserContext from '../store/user-context';
import ErrorBoundry from './ErrorBoundry';

class UserFinder extends Component{
  static contextType = UserContext; 
  constructor(){
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: ''
    }
  }

  // Runs first time only for a Component (Kind of useEffect with no dependency)
  componentDidMount(){
    this.setState({filteredUsers: this.context.users});
  }

  // Runs each time there is a change in the dependency provided using prevProp and prevState
  componentDidUpdate(prevProp, prevState){
   if(prevState.searchTerm !== this.state.searchTerm){
     this.setState({filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))});
   }
  }

  searchChangeHandler (event) {
    this.setState({searchTerm: event.target.value});
  };

  render(){
    return (
      <Fragment>
        <div className={classes.finder}>
            <input type='search' onChange={this.searchChangeHandler.bind(this)}/>
        </div>
        <ErrorBoundry>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundry>
      </Fragment>
    );
  }
}


export default UserFinder;