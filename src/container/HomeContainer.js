import React from 'react'
import {connect } from 'react-redux'
import Home from '../components/Home'
import {addToCart ,removeFromCart}from '../services/Actions/actions.js'

const mapStateToProps = state =>({
    data:state
})

const mapDispatchToProps =dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeFromCartHandler:data=>dispatch(removeFromCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
