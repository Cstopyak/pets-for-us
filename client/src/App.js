import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Link, Router } from '@reach/router';
import Main from './views/Main';
import AddPet from './views/AddPet';
import UpdatePet from './views/UpdatePet';
import OnePet from './views/OnePet';
function App() {
  return (
    <div className="container-fluid">
    <div className="Jumbotron">
      <h1> Pet Shelter</h1> 
      <p> these pets are looking for a good home</p>
      <h4><Link to="pet/new">Add a pet to the shelter</Link> | <Link to="/">Home</Link> </h4>
      
    </div>
    <Router>
        <Main path="/"/>
        <AddPet path="/pet/new"/>
        <OnePet path= "/pet/:_id"/>
        <UpdatePet path= "/pet/update/:_id"/>
    </Router>
    </div>
  );
}

export default App;
