import React from 'react'
import {Helmet} from 'react-helmet'
const Meta = ({title, description, keywords}) => {
    return (
        <Helmet>
           <title>{title} </title> 
           <meta name='description' content={description} />
           <meta name='keyword' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps ={
    title:'Welcome to Pshop',
    description:'We sell the best products for cheap',
    keyword: 'buy, sell, electronics, shop2021'
}
export default Meta
