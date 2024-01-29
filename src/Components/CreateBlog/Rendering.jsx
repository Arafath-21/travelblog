import React, { useState, useEffect } from 'react';
import Create from './Create'; // Assuming Create component is in the same directory
import Login from './Login'; // Assuming Login component is in the same directory

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on component mount
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.email && userData.password) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div>
      {isAuthenticated ? <Create /> : <Login />}
    </div>
  );
}

export default App;
