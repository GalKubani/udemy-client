import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from '../components/main/Footer';
import Header from '../components/main/Header';
import Home from '../components/main/Home';
import PageNotFound from '../components/main/PageNotFound';
import LoginContextProvider from '../context/LoginContext';
import LoginRoute from './LoginRouter';
import CoursesContextProvider from '../context/CoursesContext';
import PersonalArea from '../components/user/PersonalArea';
import MyLearning from '../components/user/MyLearning';
import SignupPage from '../components/user/SignupPage';
import LoginPage from '../components/user/LoginPage';

const AppRouter = () => (
  <BrowserRouter>
    <LoginContextProvider>
      <CoursesContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={() => <Navigate to="/home" replace />} />
          <Route
            path="/logout"
            element={
              <LoginRoute path="/logout">
                <Home />
              </LoginRoute>
            }
          />
          <Route
            path="/personal-area"
            element={
              <LoginRoute path="/personal-area">
                <PersonalArea />
              </LoginRoute>
            }
          />
          <Route
            path="/my-learning"
            element={
              <LoginRoute path="/my-learning">
                <MyLearning />
              </LoginRoute>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CoursesContextProvider>
      <Footer />
    </LoginContextProvider>
  </BrowserRouter>
);

export default AppRouter;
