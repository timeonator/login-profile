import BasicRoute from './basicRoute';
import './App.css';
import ModalWrapper from './modal-wrapper'



function App() {
    var userContext = React.createContext(defaultContext);


  return (
    <div className="App">
        <userContext.Provider>
            <BasicRoute />
            <ModalWrapper element="login" title="Login" />
            <ModalWrapper element="register" title="Register" />
            <ModalWrapper element="profile" title="Edit Profile" />
        </userContext.Provider>
    </div>
  );
}

export default App;
