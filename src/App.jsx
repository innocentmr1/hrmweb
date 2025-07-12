import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Partnership from "./pages/Partnership";
import Insights from "./pages/Insights";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import HRMS from "./pages/HRMS";
import Performance from "./pages/Performance";
import TimeManagement from "./pages/TimeManagement";
import Payroll from "./pages/Payroll";
import Recruitment from "./pages/Recruitment";
import EmployeeBenefits from "./pages/EmployeeBenefits";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import Ebooks from "./pages/Ebooks";
import Glossary from "./pages/Glossary";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Sitemap from "./pages/Sitemap";
import RequestDemo from "./pages/RequestDemo";
import "./styles/main.css";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loader />;
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/hrms" element={<HRMS />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/time-management" element={<TimeManagement />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/employee-benefits" element={<EmployeeBenefits />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/request-demo" element={<RequestDemo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
