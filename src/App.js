import './App.css';
// import { getDatabase ,ref ,set } from "firebase/database";
import {getAuth ,createUserWithEmailAndPassword} from "firebase/auth";

import {app} from "./Firebase";


function App() {

  // LEC-1 overview and realtime db use..
  // const db = getDatabase(app);
  // function putDataToFirebase(){
  //   set(ref (db , "user/devdeep") ,{
  //     id: 1,
  //     name :"Devdeep",
  //     age: 21,
  //   });
  // }

  // LEC-2 (Authentication)
  const auth = getAuth(app);

  function signUp() {
    createUserWithEmailAndPassword(
      auth,
      "nilay@gmail.com",
      "nilay123@",
      ).then((value) => console.log(value));

  }


  return (
    <div className="App">
      <h1>Firewall connection</h1>
      {/* <button onClick={putDataToFirebase}>Put data</button> */}
      <button onClick={signUp}>Create Data</button>
    </div>
  );
}

export default App;
