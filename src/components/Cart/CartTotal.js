import React from 'react'
import {Link} from 'react-router-dom';
export default function CartTotal({value}) {
    const{cartSubTotal,cartTax,cartTotal,clearCart}= value;
    return (
        <>
            <div class='container'>
                <div className='row'>
                    <div className='col-10 mt-2 ml-5 sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
                        <Link to='/'>
                            <button className='btn btn-outline-danger text-uppercase mb-3 px-5' type='button'onClick={()=>clearCart()}>
                                Clear Cart
                            </button>    
                        </Link>
                        <h5><span className='text-title'>Subtotal : $ {cartSubTotal}</span></h5>
                        <h5><span className='text-title'>Tax : $ {cartTax}</span></h5>
                        <h5><span className='text-title'>Total : $ {cartTotal}</span></h5>
                    </div>    
                </div>    
            </div>    
        </>
    )
}
