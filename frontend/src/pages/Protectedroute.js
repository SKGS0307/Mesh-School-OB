import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function Protectedroute() {
  // Check if the user is authenticated by checking the token or logged-in status
  const isAuthenticated = localStorage.getItem('token') !== null;

  // Redirect to the login page if not authenticated
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default Protectedroute;
