import { useState } from "react"
import Collection from "../../components/collections/Collection"
import CollectionHeader from "../../components/collections/CollectionHeader"
import GlobalLayout from "../../components/globalLayout"
import ProductCardView from "../../components/products/ProductCardView"
import ProductListView from "../../components/products/ProductListView"
import CollectionFilter from "../../components/collections/CollectionFilter"

const Collections = () => {

    const [gridView, setGridView] = useState(false)
    const [drawer,setDrawer] = useState(true)


    const [products, setProducts] = useState([{
        "productBrand": "WEST LINE",
        "productName": "west line women overcoat shirt",
        "productDesctiption":"Ever thought of LED SMD with Projector Light technology? Yes, that is ACTIVE. Now get your car beam with a cut-off beam with LED SMD today. A83 LED SMD Projector...",
        "discountedProductPrice": " Rs 1,449",
        "actualProductPrice": "Rs 3,200",
        "discount": "-50%",
        "productImg": "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16725_941_1662118132_6311e8f412286-892180671110.jpg"

    },{
        "productBrand": "WEST LINE",
        "productName": "west line women overcoat shirt",
        "discountedProductPrice": " Rs 1,449",
        "productDesctiption":"Ever thought of LED SMD with Projector Light technology? Yes, that is ACTIVE. Now get your car beam with a cut-off beam with LED SMD today. A83 LED SMD Projector...",
        "actualProductPrice": "Rs 3,200",
        "discount": "-50%",
        "productImg": "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16725_941_1662118132_6311e8f412286-892180671110.jpg"

    },{
        "productBrand": "WEST LINE",
        "productName": "west line women overcoat shirt",
        "discountedProductPrice": " Rs 1,449",
        "productDesctiption":"Ever thought of LED SMD with Projector Light technology? Yes, that is ACTIVE. Now get your car beam with a cut-off beam with LED SMD today. A83 LED SMD Projector...",
        "actualProductPrice": "Rs 3,200",
        "discount": "-50%",
        "productImg": "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092022/16725_941_1662118132_6311e8f412286-892180671110.jpg"

    }])
    return (

        <div className="container">
            <CollectionHeader filterDrawerOpen={drawer} setFilterDrawerOpen={setDrawer} gridView={gridView} setGridView={setGridView} />

            {gridView && <div className="row">
                {products.map(product => (
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <ProductCardView product={product} />
                    </div>
                ))}
            </div>}

            {!gridView && <div>
                {products.map(product => (
                    <div className="">
                        <ProductListView product={product} />
                    </div>
                ))}
                </div>}


                {drawer && <CollectionFilter setFilterDrawerOpen={setDrawer} />}
            {/* <Collection /> */}

        </div>
    )
}

export default Collections