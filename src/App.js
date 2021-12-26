import { createContext, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="book" element={<Navigate to="/home" />} />
          <Route path="book/:bedType" element={
            <PrivateRoute>
              <Book />
            </PrivateRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;
