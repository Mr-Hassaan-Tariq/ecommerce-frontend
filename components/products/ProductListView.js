import React from 'react'
import style from '../../styles/product.module.css'

export default function ProductListView(props) {
    const { product } = props;
    return (
        <div className={`flex `}>
            <div>
                <img className={style.productListViewImg} alt={product.productName} data-src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16725_941_1662118132_6311e8f412286-892180671110.jpg" src={product.productImg} lazy="loaded" />
            </div>
            <div className={`${style.productListviewDesc}`}>
                <h2 >{product.productName}</h2>
                <div className='flex gap-2 '>
                    <del >{product.actualProductPrice}</del>
                    <span className="discounted_price">{product.discountedProductPrice} </span>
                </div>
                <p>{product.productDesctiption}</p>
            </div>

            <div className={style.productListviewAddtoCard}>
                <button>Add to cart</button>
            </div>
        </div>
    )
}
