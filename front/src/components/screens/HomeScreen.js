import React,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Row, Col, Container} from "react-bootstrap"
import Product from "../Product"
import {listProducts} from '../../actions/productActions'
import { productListReducer } from '../../reducers/productReducers'
import Loader from '../Loader'
import Paginate from '../Paginate'
import Message from '../Message'
import Meta from "../Meta"
import ProductCarousel from '../ProductCarousel'
import {Link} from 'react-router-dom'


const HomeScreen = ({match}) => {
    const keyword = match.params.keyword
    const pageNumber = match.params.pageNumber || 1

    console.log(keyword)
    const dispatch = useDispatch()

    const productList = useSelector(state=> state.productList)
    let {loading, error, products, page, pages} = productList

    useEffect(()=>{
        dispatch(listProducts(keyword, pageNumber))
    },[dispatch, pageNumber, keyword])

  
    return (
        <>
        <Meta />
        {!keyword ? <ProductCarousel />: <Link to='/' className='btn btn-light'>
           GO BACK
        </Link> }
            <h1>Latest Products</h1>
          {loading ? (<Loader />
          ): error ? 
          (<Message variant='danger'> {error}</Message>) :(
              <>
                 <Row>
                 {products.map(product=>(
                     <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                     <Product product={product} />
                     </Col>
                 ))}
                 </Row>
                 <Paginate pages={pages} page={page} keyword={keyword ? keyword :''}/>
                 </>
          )}
        
        </>
    )
}

export default HomeScreen
