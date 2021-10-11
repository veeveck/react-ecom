import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { ButtonContainer} from './Button';
import styled from 'styled-components';
import Logo from '../logo.svg'

export default class NavBar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
                <Link to='/'><img src={Logo} className='navbar-brand' alt='logo'/></Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/'className='nav-link'>Products</Link>
                    </li>
                </ul>   
                <Link to='/cart' className='ml-auto'>
                   <ButtonContainer><span className='mr-5'><i className='fas fa-cart-plus'/></span>Panier</ButtonContainer>
                </Link> 
            </NavWrapper>
        )
    }
}
const NavWrapper=styled.nav`
background:var(--lightBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize;
}

`
