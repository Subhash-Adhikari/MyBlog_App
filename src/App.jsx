import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Blog/Home';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import AddBlog from './pages/Blog/AddBlog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addblog" element={<AddBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
