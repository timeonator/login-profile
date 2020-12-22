
import './App.css';
import Counter from './Counter';
import Logon from './logon'; /* logon rendered with components */
import Login from './Login'; /* login rendered with html */
import MLogin from './mLogin' /* Modal Login */


function App() {
  return (
    <div className="App">
    <MLogin />
      <Login />
      <Counter />
      <Logon />
    </div>
  );
}

export default App;
