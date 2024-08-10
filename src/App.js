import './App.css';
import Greeting from './Greeting';
import Operations from './Operations';
import { addition, multiplication, subtraction, division} from './utils';

function App() {
  const result = Operations(3, 5);
  const add = addition(2, 4);
  const sub = subtraction(2, 4);
  const mul = multiplication(2, 4);
  const div = division(2, 4);

  return (
    <div>
      <div>
      <a href="https://reactjs.org">Learn React</a>
    </div>
    <div className="App">
      <Greeting name="World"/>
    </div>
    <div className="App">
      <Greeting name="Welcome to Java"/>
    </div>
    <div className="App">
      <p>The result of addition : {result}</p>
    </div>
    <div>
      <p>Result of addition : {add}</p>
      <p>Result of subtraction : {sub}</p>
      <p>Result of multiplication : {mul}</p>
      <p>Result of Division : {div}</p>
    </div>
    </div>
  );
}

export default App;
