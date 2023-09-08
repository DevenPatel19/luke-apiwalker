import People from "./components/People";
import Planet from "./components/Planet";
import Entry from "./components/Entry";
import Error from "./components/Error";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <fieldset>
                <legend>App.js</legend>
                <h1 className="mt-5">Luke APIwalker</h1>
                <Entry />

                <Routes>
                    <Route path="/people/:id" element={<People />} />
                    <Route path="/planets/:id" element={<Planet />} />
                    <Route path="/error" element={<Error />} />
                </Routes>
            </fieldset>
        </div>
    );
}

export default App;
