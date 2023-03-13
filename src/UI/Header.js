import classes from "./Header.module.css";
import {Fragment} from "react";

import meals from "../Assets/meals.jpg"

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button type="submit">Cart</button>
                {/*<button type="submit">asdasd</button>*/}
            </header>

            <div className={classes['main-image']}>
                <img src={meals} alt="foods"/>
            </div>
        </Fragment>
    )
}

export default Header;