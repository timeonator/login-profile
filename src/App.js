import BasicRoute from './basicRoute';
import './App.css';
import ModalWrapper from './modal-wrapper'



function App() {

  return (
    <div className="App">
    <BasicRoute />

    <ModalWrapper element="login" title="Login" />
    <ModalWrapper element="register" title="Register" />
    <ModalWrapper element="profile" title="Edit Profile" />

    </div>
  );
}

export default App;
