import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard, Landing, Error, Register } from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
