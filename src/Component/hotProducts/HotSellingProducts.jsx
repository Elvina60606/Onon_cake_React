import axios from 'axios';
import { useNavigate, Link } from 'react-router';
import { useDispatch } from 'react-redux';

import MessageToast from '@/Component/MessageToast';
import { getAsyncMessage } from "@/slices/messageSlice";

import { getAsyncCart } from '@/slices/cartSlice';

const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;

const HotSellingProducts =( { products } ) => {
    const dispatch = useDispatch();

    // addOneToCart
    const addOneToCart = async(id) => {
        const data ={
            "product_id": id,
            "qty": 1
        };
        try {
            const res = await axios.post(`${VITE_API_BASE}api/${VITE_API_PATH}/cart`, {data})
            console.log(res.data)
            dispatch(getAsyncMessage(res.data))
            dispatch(getAsyncCart())
        } catch (error) {
            console.log('未加入購物車')
            dispatch(getAsyncMessage(error.response?.data))
        }
    };

    const navigate = useNavigate();
    const handleNavigate =() =>{
        navigate('/products')
    };
    const handleLink =(id) =>{
        navigate(`/product/${id}`, {replace: false})
    }

    return(
        <>
            <MessageToast />
             <section className="bg-secondary-50">
                <div className="index-container">
                    <div className="text-center pb-6 pt-8 py-lg-8">
                        <h1 className="fs-3 fs-lg-1">熱銷排行</h1>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-6">
                        { products.map((product, index) => {
                            return (
                                <div className="col mb-2 mb-lg-8" key={product.id}>
                                    <div className="card card-shadow rounded-xl h-100 overflow-hidden">
                                        <span className="badge rank-badge fs-6">第{ index +1 }名</span>
                                        <button type='button'
                                                className="overflow-hidden button-reset "
                                                onClick={()=> handleLink(product.id)}>
                                            <img src={product.imageUrl}
                                                style={{height: 300}}
                                                className="card-img-top dessert-card"
                                                alt="經典原味可麗露" />
                                        </button>
                                        <div className="card-body p-4">
                                            <h4 className="pb-2 text-primary-800">{product.title}</h4>
                                            <p className="fs-6 text-primary-600 pb-4">
                                                {product.content}
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="h4 text-primary-700">NT$ {product.price}</p>
                                                <button type="button"
                                                        className="btn btn-outline-secondary rounded-pill btn-card-shopping-cart"
                                                        onClick={()=>addOneToCart(product.id)}>
                                                    <span className="material-symbols-outlined fill">
                                                        shopping_cart
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="d-flex justify-content-center align-items-center pb-8">
                        <button className="btn btn-light fs-6" type='button'
                                onClick={()=> handleNavigate()}>更多商品
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HotSellingProducts;