import React from "react";
import { Layout } from "../Layout";
import "./App.css";
import { useRoutes } from "../routes";
import { useAuth } from "../hooks/useAuth";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { token, login, logout, userId } = useAuth();
  const isAuth = !!token;

  const routes = useRoutes(isAuth);
  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuth,
      }}
    >
      <BrowserRouter>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Layout>{routes}</Layout>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
