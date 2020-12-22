
import './App.css';
import Counter from './Counter';
import Logon from './logon'; /* logon rendered with components */
import Login from './Login'; /* login rendered with html */


function App() {
  return (
    <div className="App">
      <Login />
      <Counter />
      <Logon />
    </div>
  );
}

export default App;
