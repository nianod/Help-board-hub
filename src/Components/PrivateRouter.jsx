import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserAuth } from '../Supabase/AuthContext';

const PrivateRouter = () => {
  const { session } = UserAuth();

  return session ? <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateRouter;
