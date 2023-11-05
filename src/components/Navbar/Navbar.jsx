import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavouriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import './Navbar.scss'
import Cart from '../../pages/Cart/Cart';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Navbar = () => {

    const [open , setOpen] = useState(false);
    const products = useSelector(state => state.cart.products);

    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <div className="item"></div>
                    <div className="item">
                        <Link className='link' to='/products/7'>Woodland</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/5'>H&M</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/4'>Addidas</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/9'>Manyavar</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/8'>Levi's</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/6'>Fastrack</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className='link' to='/'>CLICK -&- BUY</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className='link' to='/'>Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/'>About</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/'>Contact</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/'>Stores</Link>
                    </div>
                    <div className="icons">
                        <PersonOutlineOutlinedIcon />
                        <FavouriteBorderOutlinedIcon />
                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon />
                            <span className="itemCount">{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div>
    )
}

export default Navbar