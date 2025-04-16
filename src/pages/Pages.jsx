import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage/landingPage';
import LoginPage from './login';
import SignupPage from './signup';
import ContactPage from './contact';
import FAQPage from './faqs';
import Default from './default';
import Footer from './Footer/footer';
import ScrollToTop from './scrollToTop';
import AboutPage from './about';

const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        {/* Handle 404 and unknown routes */}
        <Route path="*" element={<Default />} />
      </Routes>
  );
}

export default Pages;

// Export individual components for direct access if needed
export {
  LandingPage,
  LoginPage,
  SignupPage,
  ContactPage,
  FAQPage,
  Default,
  Footer,
  ScrollToTop
};
