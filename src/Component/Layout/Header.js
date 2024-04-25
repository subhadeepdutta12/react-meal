import { Fragment } from "react"
import HeaderCardButton from "./HeaderCardButton"
import mealsImage from '../../assests/meals.jpg'
import classes from './Header.module.css'
const Header=props=>{
    return <Fragment>

        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCardButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of delicious meal'/>
        </div>
    </Fragment>
}
export default Header