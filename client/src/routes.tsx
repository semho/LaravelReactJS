import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { Content } from "./components/Content/Content";
import { AuthPage } from "./pages/AuthPage";
import { RegPage } from "./pages/RegPage";

export function useRoutes(isAuth: boolean) {
  if (isAuth) {
    return (
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/reg" element={<RegPage />} />
      <Route path="*" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
}
