import { Route, Routes } from 'react-router-dom';
import './App.css';
import EmailConfirmation from './assets/components/Auth/ EmailConfirmation';
import PasswordReset from './assets/components/Auth/ PasswordReset';
import PasswordResetOtp from './assets/components/Auth/ PasswordResetOtp';
import Auth from './assets/components/Auth/Auth';
import NewPassword from './assets/components/Auth/NewPassword';
import Registration from './assets/components/Auth/Registration';
import Greetings from './assets/components/Greetings/Greetings';


function App() {
  return (
    <div className="App">
      <div className='Container'>
        <Routes> 
            <Route path="/" element={<Greetings/>}/>
            <Route path="/Auth" element={<Auth/>}/>
            <Route path="/Registration" element={<Registration/>}/>
            <Route path="/EmailConfirmation" element={<EmailConfirmation/>}/>
            <Route path="/PasswordReset" element={<PasswordReset/>}/>
            <Route path="/PasswordResetOtp" element={<PasswordResetOtp/>}/>
            <Route path="/NewPassword" element={<NewPassword/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
