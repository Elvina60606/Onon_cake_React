import images from '@/assets/images/images.js';

const HotSellingProducts =() => {

    return(
        <>
             <section className="bg-secondary-50">
                <div className="index-container">
                    <div className="text-center pb-6 pt-8 py-lg-8">
                        <h1 className="fs-3 fs-lg-1">熱銷排行</h1>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-6">
                        <div className="col mb-2 mb-lg-8">
                            <div className="card card-shadow rounded-xl h-100 overflow-hidden">
                                <span className="badge rank-badge fs-6">第一名</span>
                                <div className="overflow-hidden">
                                    <img src={images.canele}
                                         className="card-img-top dessert-card"
                                         alt="經典原味可麗露" />
                                </div>
                                <div className="card-body p-4">
                                    <h4 className="pb-2 text-primary-800">經典原味可麗露</h4>
                                    <p className="fs-6 text-primary-600 pb-4">
                                        外酥內嫩焦糖香，法式經典一口入魂
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="h4 text-primary-700">NT$ 180</p>
                                        <button type="button"
                                                className="btn btn-outline-secondary rounded-pill btn-card-shopping-cart">
                                            <span className="material-symbols-outlined fill">
                                                shopping_cart
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-2 mb-lg-8">
                            <div className="card card-shadow rounded-xl h-100 overflow-hidden">
                                <span className="badge rank-badge fs-6">第二名</span>
                                <div className="overflow-hidden">
                                    <img src={images.lemonMadeleine}
                                        className="card-img-top dessert-card"
                                        alt="糖漬檸檬瑪德蓮"/>
                                </div>
                                <div className="card-body p-4">
                                    <h4 className="pb-2 text-primary-800">糖漬檸檬瑪德蓮</h4>
                                    <p className="fs-6 text-primary-600 pb-4">
                                        清香檸檬糖漬點綴，鬆軟口感酸甜平衡剛剛好
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="h4 text-primary-700">NT$ 150</p>
                                        <button type="button"
                                                className="btn btn-outline-secondary rounded-pill btn-card-shopping-cart">
                                            <span className="material-symbols-outlined fill">   
                                                shopping_cart 
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-6 mb-lg-8">
                            <div className="card card-shadow rounded-xl h-100 overflow-hidden">
                                <span className="badge rank-badge fs-6">第三名</span>
                                <div className="overflow-hidden">
                                    <img src={images.basque}
                                         className="card-img-top dessert-card"
                                         alt="超濃厚巴斯克" />
                                </div>
                                <div className="card-body p-4">
                                    <h4 className="pb-2 text-primary-800">超濃厚巴斯克</h4>
                                    <p className="fs-6 text-primary-600 pb-4">
                                        香氣濃烈滑順綿密，入口即化的極致濃厚感
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="h4 text-primary-700">NT$ 240</p>
                                        <button type="button"
                                                className="btn btn-outline-secondary rounded-pill btn-card-shopping-cart">
                                            <span className="material-symbols-outlined fill"> 
                                                shopping_cart 
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center pb-8">
                        <a href="product.html" className="btn btn-light fs-6">更多商品</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HotSellingProducts;