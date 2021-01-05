import BasicRoute from './basicRoute';
import './App.css';
import ModalWrapper from './modal-wrapper'
import ProfileName from './profile-name';
import Register from './register';
import Login from './login';


function App() {
  var profilename=<ProfileName />;
  var register=<Register />;
  var login=<Login />;
  return (
    <div className="App">
    <BasicRoute />
    <ModalWrapper element={login} title="Login" />
    <ModalWrapper element={register} title="Register" />
    <ModalWrapper element={profilename} title="Edit Profile" />

    </div>
  );
}

export default App;
