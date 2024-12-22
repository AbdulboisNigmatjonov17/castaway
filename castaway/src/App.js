import Header from "./components/Header";
import MainPart from "./components/MainPart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Boxes from "./components/Boxes";
import SectionPart from "./components/SectionPart";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <MainPart />
      <SectionPart />
      <Boxes />
      <Footer />
    </div>
  );
}
