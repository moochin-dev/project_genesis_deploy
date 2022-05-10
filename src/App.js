import "./App.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import BackTopButton from "./components/BackTopButton";
import WhichWaterDoYouDrink from "./components/WhichWaterDoYouDrink";
import InvalidWatersTable from "./components/InvalidWatersTable";
import GeneralTable from "./components/GeneralTable";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <BackTopButton />
      <Intro />
      <WhichWaterDoYouDrink />
      <InvalidWatersTable />
      <GeneralTable />
      <Footer />
    </>
  );
}

export default App;
