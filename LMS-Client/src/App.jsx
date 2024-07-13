import "./App.css";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import AuthPage from "./page/authPage";

function App() {
  return (
    <>
      <Routes>
        {/* Auth Route - public Route */}
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
