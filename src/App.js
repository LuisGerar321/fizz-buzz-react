import logo from './logo.svg';
import './App.css';
import FizzBuzz from  "./shared/components/FizzBuzz.jsx"

function App() {
  return (
    <div className="App">
      <div className  = "Instructions">
        <h1>FizzBuzz exercise</h1>
        <h2> Follow the instructions: </h2>
        <ul>
          <li>
            Loop through the numbers from 1 to 100 and print out the current number.
          </li>
          <li>
            However, if the number is dividable by 3, you write out Fizz with the background RED.
          </li>
          <li>
            If the number is dividable by 5, you write out Buzz with the background YELLOW.
          </li>
          <li>
            If the number is dividable by 3 and 5, you write out Fizz Buzz with the background GREEN.
          </li>
        </ul>
      </div>

      <FizzBuzz
        arr = {Array(100).fill().map(  (_, idx) => idx + 1   ) }
      >

      </FizzBuzz>
      

    </div>
  );
}

export default App;
