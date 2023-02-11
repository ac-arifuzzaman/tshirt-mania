import { getAuth } from "firebase/auth";
import "./App.css";
import ReactBootstrap from "./components/ReactBootstrap";
import app from "./firebase/firebase.init";

const auth = getAuth(app);

function App() {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };
  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <input type="email" name="email" id="email" placeholder="Your email" />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
        />
        <br />
        <input type="submit" value="Register" />
      </form>
      <h1>React Bootstrap</h1>
      <ReactBootstrap />
    </div>
  );
}

export default App;
