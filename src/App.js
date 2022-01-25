import UserFinder from './components/UserFinder';
import UserContext from './store/user-context';

const Dummy_Users = [ { id: 'u1', name: 'Max' },
{ id: 'u2', name: 'Manuel' },
{ id: 'u3', name: 'Julie' },];

function App() {

  const userContext = {
   users: Dummy_Users
  }

  return (
    <UserContext.Provider value={userContext}>
      <UserFinder />
    </UserContext.Provider>
  );
}

export default App;
