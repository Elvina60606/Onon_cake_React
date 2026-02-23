import images from '@/assets/images/images.js';
import HotSellingProducts from '@/Component/HotSellingProducts';
import ImagesChange from '@/Component/product/ImagesChange';
import axios from 'axios';

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { getAsyncMessage } from '@/slices/messageSlice';
import MessageToast from '@/Component/MessageToast';
import { getAsyncCart } from '@/slices/cartSlice';

const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;


const Product =() => {
    const paramas = useParams();
    const { id } = paramas;

    // product
    const [ product, setProduct ] = useState({});
    const [ showImages, setShowImages ] = useState([]);
    useEffect(() => {
        (async() => {
            try {
                const response = await axios.get(`${VITE_API_BASE}api/${VITE_API_PATH}/product/${id}`);
                const productData = response.data.product;
                const newProductData = {
                    ...productData,
                    imagesUrl: productData.imagesUrl?.slice(0, 3) || [],
                }
                setProduct(newProductData);
                setShowImages([
                    productData.imageUrl,
                    ...productData.imagesUrl?.slice(0, 3) || []
                ])
                } catch (error) {
                console.log("setProduct:", error);
            }
        })();
    },[id]);

    // qty & cart
    const dispatch = useDispatch();

    const [ qty, setQty ] = useState(1);

    const decrementCount =() => {
        if( qty <= 1 ) return;
        setQty( prev => prev-1 )
    }

    const incrementCount =() => {
        if( qty >= 10 ) return;
        setQty( prev => prev+1 )
    }

    const addCarts = async() => {
        const data ={
            "product_id": id,
            "qty": qty
        };

        try {
            const res = await axios.post(`${VITE_API_BASE}api/${VITE_API_PATH}/cart`, {data})
            console.log(res.data)
            dispatch(getAsyncMessage(res.data))
            dispatch(getAsyncCart());
        } catch (error) {
            console.log('未加入購物車')
            dispatch(getAsyncMessage(error.response?.data))
        }
    }

    return(
        <>
        <MessageToast />
          {/* 商品區塊 */}
             <section className="container pt-8 pb-5">
              {/* 麵包屑 */}
                        <nav className="my-breadcrumb"
                            aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/'>首頁</Link></li>
                                <li className="breadcrumb-item"><Link to='/products'>商品介紹</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    {product.title}
                                </li>
                            </ol>
                        </nav>
                        <div className="row">
                            <ImagesChange setShowImages={setShowImages}
                                          showImages={showImages}/>
                        { /* 商品資訊 */}
                            <div className="col-12 col-lg-7 order-3 ps-lg-8">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h3 className="fw-bold mb-0 text-primary-800 fs-lg-2">{product.title}</h3>
                                    <button id="heartBtn" className="btn p-0 border-0 bg-transparent">
                                        <i id="heartIcon" className="bi bi-heart fs-4"></i>
                                    </button>
                                </div>
                                <p className="text-primary-700 mb-4 mb-lg-6">{product.description}</p>
                            { /* 價格 */ }
                                <div className="d-flex align-items-baseline">
                                    <span className="fs-3 text-secondary-500 fw-bold me-6 mb-4 mb-lg-6">NT$ {product.price}</span>
                                    <span className="text-decoration-line-through text-gray-700 fs-7">原價 NT$ {product.origin_price}</span>
                                </div>
                                <div className="mb-5 mb-lg-0">
                                    <span className="badge text-bg-secondary-50 text-secondary-500 p-2 fs-6 rounded-1 fw-500 border border-1 border-secondary-500">此商品為冷凍寄出</span>
                                </div>
                                <hr className="d-none d-lg-block my-lg-6" />

                            { /* desktop addcarts */}
                                <div className="cart-actions d-none d-lg-flex align-items-center w-100">
                                {/* 數量選擇器 */}
                                    <div className="quantity-control d-flex align-items-center w-50">
                                        <button className="qty-btn btn btn-outline-secondary"
                                                type='button'
                                                onClick={()=> decrementCount()}>-
                                        </button>
                                        <input  type="text"
                                                className="form-control text-center mx-2"
                                                value={qty}
                                                readOnly
                                                style={{width: 60}}/>
                                        <button className="qty-btn btn btn-outline-secondary"
                                                type='button'
                                                onClick={()=> incrementCount()}>+
                                        </button>
                                    </div>
                                    <button className="btn btn-primary w-50"
                                            type='button'
                                            onClick={()=> addCarts(id)}>
                                            加入購物車
                                    </button>
                                </div>

                            { /* mobile addcarts */}
                                <div className="cart-actions-mobile d-lg-none fixed-bottom px-3 py-4 bg-white shadow">
                                    <button id="mobileAddCart" 
                                            className="btn btn-primary w-100">加入購物車
                                    </button>

                                { /* 點擊後顯示數量（待修改） */}
                                    <div id="mobileCartControls"
                                        className="d-none bg-white py-1 px-2 rounded">
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                        { /* 左邊：數量文字 */ }
                                            <span className="me-6">數量：</span>

                                        { /* 中間：數量控制框 */ }
                                            <div className="quantity-control d-flex align-items-center">
                                                <button className="qty-btn btn btn-outline-secondary">-</button>
                                                <input type="text"
                                                    className="form-control text-center mx-2"
                                                    defaultValue="1"
                                                    style={{width: 60}}/>
                                                <button className="qty-btn btn btn-outline-secondary">+</button>
                                            </div>

                                        { /* 右邊：關閉按鈕 */ }
                                            <button id="closeCartControls"
                                                    type="button"
                                                    className="btn-close ms-8"
                                                    aria-label="Close">
                                            </button>
                                        </div>

                                        { /* 確認按鈕 */}
                                        <button className="btn btn-primary w-100">確認</button>
                                    </div>
                                </div>
                            </div>
                        </div>
             </section>

          { /* 商品規格區 */}
              <section className="tabs-container py-lg-8">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tabs-inner-wrapper">
                                    <nav className="nav nav-tabs tabs-nav-top nowrap gap-2 mb-lg-6"
                                        id="myTab"
                                        role="tablist">
                                        <button className="tabs-nav-link active fs-lg-4 text-primary-800 fw-bold lh-288 p-lg-6"
                                                id="product-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#product-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="product-tab-pane"
                                                aria-selected="true">商品規格
                                        </button>
                                        <button className="tabs-nav-link fs-lg-4 text-primary-800 fw-bold lh-288 p-lg-6"
                                                id="notes-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#notes-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="notes-tab-pane"
                                                aria-selected="false">注意事項
                                        </button>
                                        <button className="tabs-nav-link fs-lg-4 text-primary-800 fw-bold lh-288 p-lg-6"
                                                id="delivery-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#delivery-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="delivery-tab-pane"
                                                aria-selected="false">宅配寄送
                                        </button>
                                    </nav>
                                    <div className="tab-content tabs-content-bottom" id="myTabContent">
                                        <div className="tab-pane fade show active"
                                            id="product-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="product-tab"
                                            tabIndex="0">
                                            <h4 className="h4-with-icon nav-link d-flex align-items-center fs-lg-4 text-neutral-800 fw-bold lh-288 mb-4">
                                                <span className="material-symbols-outlined icon-filled fs-lg-4 text-primary-300 me-2">sms
                                                </span>
                                            商品規格
                                        </h4>
                                        <div className="fs-lg-6 lh-24 text-neutral-800">
                                            <p>【規格】{product.content}</p>
                                            <p className="mb-4">【保存方式與最佳賞味期限】冷凍21天</p>
                                            <p>因台灣氣候悶熱，收貨後請一樣冷凍保存，以維持商品品質。</p>
                                            <p>本產品堅持不添加防腐劑，開封後請儘速食用完畢。</p>
                                            <p>強烈建議：「肚子裡」絕對是最好的保存位置。</p>
                                        </div>
                                        </div>
                                        <div className="tab-pane fade"
                                             id="notes-tab-pane"
                                             role="tabpanel"
                                             aria-labelledby="notes-tab"
                                             tabIndex="0">
                                        <h4 className="h4-with-icon nav-link d-flex align-items-center fs-lg-4 text-neutral-800 fw-bold lh-288 mb-4">
                                            <span className="material-symbols-outlined icon-filled fs-lg-4 text-primary-300 me-2">info
                                            </span>注意事項
                                        </h4>
                                        <ul className="fs-lg-6 lh-24 text-neutral-800 product-detail-list">
                                            <li>本產品含有牛奶、蛋、麩質的穀類，不適合其過敏體質者食用。</li>
                                            <li>訂單完成付款後，接單按訂單順序安排製作出貨。</li>
                                            <li>若有希望到貨日期，請先私訊確認。</li>
                                            <li>本店無提供外島配送之服務。</li>
                                        </ul>
                                        </div>
                                        <div className="tab-pane fade"
                                             id="delivery-tab-pane"
                                             role="tabpanel"
                                             aria-labelledby="delivery-tab"
                                             tabIndex="0">
                                            <div className="h4-with-icon nav-link d-flex align-items-center fs-lg-4 text-neutral-800 fw-bold lh-288 mb-4">
                                                <span className="material-symbols-outlined icon-filled fs-lg-4 text-primary-300 me-2">delivery_truck_speed
                                                </span>
                                                宅配寄送
                                            </div>
                                            <ul className="fs-lg-6 lh-24 text-neutral-800 product-detail-list">
                                                <li>此商品為冷凍寄出。</li>
                                                <li>為保證品質，此商品皆以「冷凍」宅配寄出。</li>
                                                <li>部分商品可存放於不同溫層，較低溫層宅配寄出。</li>
                                                <li>如遇商品溫層互不相容，請分開下單，運費無法合計。</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <img className="rectangle303-svg"
                             src={images.Rectangle303}
                             alt="背景波浪圖案"/>
              </section>

          { /* 熱銷排行 */}
              <HotSellingProducts />
        </>
    )
}

export default Product;