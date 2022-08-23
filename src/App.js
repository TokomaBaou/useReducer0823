import { Example2 } from "./Example2";
import "./styles.css";
import Example from "./UseReducer_test";

export default function App() {
  return (
    <div className="App">
      <h1>useReducer</h1>
      <Example />
      <h1>Pure</h1>
      <Example2 />
    </div>
  );
}
