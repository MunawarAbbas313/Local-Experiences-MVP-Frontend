import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import ExperienceDetail from "./pages/ExperienceDetail";
import Profile from "./pages/Profile";
import BookingFlow from "./pages/BookingFlow";
import UserDashboard from "./pages/UserDashboard";
import HostDashboard from "./pages/HostDashboard";
import CreateExperience from "./pages/CreateExperience";
import ItineraryBuilder from "./pages/ItineraryBuilder";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="experiences" element={<SearchResults />} />
          <Route path="experience/:id" element={<ExperienceDetail />} />
          <Route path="booking/:experienceId" element={<BookingFlow />} />
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="host" element={<HostDashboard />} />
          <Route path="host/create" element={<CreateExperience />} />
          <Route path="itinerary" element={<ItineraryBuilder />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </Router>
  );
}
