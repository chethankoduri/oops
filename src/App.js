import logo from './logo.svg';
import './App.css';
import TenthStudent from './components/TenthStudent';
import SSCStudent from './classes/SSCStudent';

function App() {

  let dhoni = new SSCStudent("Mahendra Singh", "Dhoni",99,88,77,66,55,44);
  dhoni.calculateResult();

  let kohli = new SSCStudent("virat", "kohli",91,81,71,61,51,41);
  kohli.engMarks=34;
  kohli.calculateResult();

  return (
    <div className="App">
      <TenthStudent
      firstName ="Sachin" 
      lastName = "tendulkar" 
      engMarks="91" 
      hinMarks="92" 
      telMarks="93" 
      sciMarks="94" 
      socMarks="95" 
      mathsMarks="96" 
      />
    </div>
  );
}

export default App;
