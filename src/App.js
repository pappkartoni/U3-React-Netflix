import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainNav from "./components/MainNav"
import SubNav from "./components/SubNav"
import SocialsFooter from "./components/SocialsFooter"
import Movies from "./components/Movies"
import MovieDetails from './components/MovieDetails'
import Shows from "./components/Shows"
import { useState } from 'react'

function App() {
    const [filterQuery, setFilterQuery] = useState("")

    const filterStuff = (e) => {
        setFilterQuery(e.target.value)
    }

    return (
        <div className="App">
            <BrowserRouter>
                <MainNav filterStuff={filterStuff}/>
                <Routes>
                    <Route path="/" element={<SubNav title="Movies"/>} />
                    <Route path="/shows/" element={<SubNav title="Shows"/>} />
                </Routes>
                <Routes>
                    <Route path="/" element={<Movies queries={["harry potter", "lord of the rings", "planet of the apes"]} filterQuery={filterQuery}/>} />
                    <Route path="/shows/" element={<Shows queries={["love", "hate"]} filterQuery={filterQuery} />} />
                    <Route path="details/:id/" element={<MovieDetails />} />
                </Routes>
                <SocialsFooter />
            </BrowserRouter>
        </div>
    );
}

export default App;