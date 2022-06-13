import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./routes/Navigation/Navigation";
import Authentication from "./routes/authentication/Authentication";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>

      <Route />
    </Routes>
  );
}

export default App;
