import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserAuth } from '../Supabase/AuthContext';

const PrivateRouter = () => {
  const { session, loading } = UserAuth();
    if (loading) return <div className="text-center">Loading...</div>;
  return session ? <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateRouter;
