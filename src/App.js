import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MainNav from "./components/MainNav"
import SubNav from "./components/SubNav"
import SocialsFooter from "./components/SocialsFooter"
import Gallery from "./components/Gallery"

function App() {
  return (
    <div className="App">
      <MainNav />
      <SubNav title="Movies"/>
      <Gallery query="harry potter"></Gallery>
      <Gallery query="lord of the rings"></Gallery>
      <Gallery query="planet of the apes"></Gallery>
      <SocialsFooter />
    </div>
  );
}

export default App;