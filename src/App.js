import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './componants/Table';
import './App.css';
import { useState } from "react";

function App() {
  const [newUser, setNewUser] = useState([]);
  return (
    <div className="App">
      <Table data={newUser} updater={setNewUser}/>
    </div>
  );
}

export default App;
