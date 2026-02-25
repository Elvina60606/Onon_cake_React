import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAsyncProducts } from "@/slices/productsSlice";
import HotSellingProducts from "./HotSellingProducts";


const HotProductsContainer =() =>{
    const products = useSelector(state => state.product.products);

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getAsyncProducts())
    },[dispatch]);

    const hotProductsId = ['-OmCaBPD7BMoohDSFVoa', '-Om8_fXd3nhxI18dHkWj', '-Om8X8SgK8wLoxrzYcYv'];

    const hotProducts = products?.filter( product => 
        hotProductsId?.includes(product.id)
    );

    console.log('products:', products);
    console.log('products ids:', products.map(p => p.id));

    if (!products.length) return <div>Loading hot products...</div>;
    if (!hotProducts.length) return <div>No hot products yet</div>;

    return <HotSellingProducts products={hotProducts} />;
};

export default HotProductsContainer;