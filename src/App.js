import {Fragment} from "react";
import Header from "./UI/Header";
import Meals from "./Meals/Meals";

function App() {
    return (
        <Fragment>
            <Header/>
            <main>
                <Meals/>
            </main>
        </Fragment>
    );
}

export default App;
