import "./App.css";
import HeaderTop from "./header/header";
import AboutMe from "./header/main/about/about";
import ContactUs from "./header/main/contact/contact";
import FirstPage from "./header/main/first-page";
import FooterAll from "./header/main/footer/footer";
import MainProjects from "./header/main/project/structure";

function App() {
  return (
    <div>
      <HeaderTop />
      <FirstPage />
      <AboutMe />
      <MainProjects />
      <ContactUs />
      <FooterAll />
    </div>
  );
}

export default App;
