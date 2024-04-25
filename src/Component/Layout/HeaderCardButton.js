import { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCardButton.module.css'
import CartContext from '../../Store/CartContext'

const HeaderCardButton=(props)=>{
    const cartCtx=useContext(CartContext)

    // const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
    //     return curNumber+item.amount
    // },0)
    const numberOfCartItems = cartCtx.items ? cartCtx.items.reduce((curNumber, item) => curNumber + item.amount, 0) : 0;

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}
export default HeaderCardButton
