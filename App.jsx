import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import StudyTools from './pages/StudyTools';
import Resources from './pages/Resources';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import DarkModeToggle from './components/DarkModeToggle';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import ErrorBoundary from './components/ErrorBoundary'; 
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase'; 
import Chatbot from './components/Chatbot'; 
import Quiz from './pages/Quiz'; 
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); 
      } else {
        setUser(null); 
      }
    });
    return unsubscribe; 
  }, []);

  const handleSignupSuccess = () => {
    setUser(getAuth().currentUser); 
  };

  const handleLoginSuccess = () => {
    setUser(getAuth().currentUser); 
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null); 
    }).catch((error) => {
      console.error("Error logging out: ", error);
    });
  };

  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Navbar />
          <DarkModeToggle />

          
          <div className="auth-buttons">
            {user ? (
              <>
                <p>Welcome, {user.displayName || 'User'}!</p>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <p>Please log in to access the content.</p>
            )}
          </div>

          
          <Routes>
            <Route path="/signup" element={<Signup onSignupSuccess={handleSignupSuccess} />} />
            <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          </Routes>

          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/study-tools" element={<StudyTools />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quiz" element={<Quiz />} /> {/* Added Quiz route */}
          </Routes>

          
          <Chatbot />

         
          
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
