import classes from "./Header.module.css";
import {Fragment} from "react";

import meals from "../Assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton/>
            </header>

            <div className={classes['main-image']}>
                <img src={meals} alt="foods"/>
            </div>
        </Fragment>
    )
}

export default Header;