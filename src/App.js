import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Navigation from './routes/Navigation/Navigation';
import SignIn from './routes/sign-in/SignIn';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='signin' element={<SignIn />} />
      </Route>

      <Route />
    </Routes>
  );
}

export default App;
