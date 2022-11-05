import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { AuthContextProvider } from './context/authContext';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './route/PrivateRoute';
import PublicRoute from './route/PublicRoute';

function App() {
  return (
    <BrowserRouter>
     <AuthContextProvider>
      <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<PublicRoute><Home/></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login/></PublicRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      </Routes>
      </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
