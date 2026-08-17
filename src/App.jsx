import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout";
import Home from "./Home";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// bernd1@example.com
// password123