import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games/:gameName" element={<GamesPage />} />

        <Route path="/leaderboards" element={<LeaderboardsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function GamesPage() {
  return (
    <div>
      <p>This is GamesPage</p>
    </div>
  );
}

function LeaderboardsPage() {
  return (
    <div>
      <p>This is LeaderboardsPage</p>
    </div>
  );
}

function RegisterPage() {
  return (
    <div>
      <p>This is RegisterPage</p>
    </div>
  );
}
function LoginPage() {
  return (
    <div>
      <p>This is HomePage</p>
    </div>
  );
}
function UserProfilePage() {
  return (
    <div>
      <p>This is UserProfilePage</p>
    </div>
  );
}
