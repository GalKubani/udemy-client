import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from '../components/main/Footer';
import Header from '../components/main/Header';
import Home from '../components/main/Home';
import PageNotFound from '../components/main/PageNotFound';
import LoginContextProvider from '../context/LoginContext';
import LoginRoute from './LoginRouter';
// import CoursesContextProvider from '../context/CoursesContext';

const AppRouter = () => (
  <BrowserRouter>
    <LoginContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={() => <Navigate to="/home" replace />} />
        {/*<LoginRoute path="/logout" component={Home} />*/}
        <Route
          path="/home"
          element={
            <LoginRoute path="/logout">
              <Home />
            </LoginRoute>
          }
        />
        {/*<AdvertContextProvider>*/}
        <Route path="/home" element={Home} />
        {/*</AdvertContextProvider>*/}
        <Route path="*" element={PageNotFound} />
      </Routes>
      <Footer />
    </LoginContextProvider>
  </BrowserRouter>
);

export default AppRouter;
