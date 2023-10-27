import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import Home from './components/Home';

function App() {
  return (
<Routes>
  <Route path='/sign-in' element={<SignIn/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/*' element={<SignIn/>}/>
</Routes>
  );
}

export default App;
