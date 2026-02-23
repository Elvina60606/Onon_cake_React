import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";

import MessageToast from '@/Component/MessageToast';
import { getAsyncMessage } from "@/slices/messageSlice";

import Pagination from "@/Component/pagination/Pagination";
import { setTotalItems, setLoading, setError } from '../slices/paginationSlice';

import { getAsyncCart } from '@/slices/cartSlice';

const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;

const Products = () => {
    const [ products, setProducts ] = useState([]);
    useEffect(() => {
        (async() => {
            try {
                const response = await axios.get(`${VITE_API_BASE}api/${VITE_API_PATH}/products/all`)
                setProducts(response.data.products)
            } catch (error) {
                console.log("setProducts:",error.message)
            }
        })()
    },[]);

    // addOneToCart
    const dispatch = useDispatch();
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
    }

    // pagination
    const { currentPage, pageSize, loading } = useSelector( state => state.pagination );
    const fetchProducts = async() => {
      try {
        const res = await axios.get(`${VITE_API_BASE}api/${VITE_API_PATH}/products?page=${currentPage}&size=${pageSize}`)
        dispatch(setLoading(true))
        setProducts(res.data.products)
        dispatch(setTotalItems(res.data.products.length))
        dispatch(setLoading(false))
      } catch (error) {
        dispatch(setError(error.message));
        dispatch(setLoading(false))
      }
    }

    useEffect(()=>{
      fetchProducts()
    },[currentPage])

  return (
    <>
      { loading && '載入中......'}
      <MessageToast />
      <main className="container py-8 py-md-12">
        <div className="row">
          {/* 商品總覽sidebar */}
          <div className="col-3 d-none d-md-block">
            <nav>
              <ul className="sidebar">
                <li className="sidebar-item active">
                  <a href="product.html">
                    <h5 className="fs-md-6 fs-lg-5">商品總覽</h5>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="#">
                    <h5 className="fs-md-6 fs-lg-5">可麗露</h5>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="#">
                    <h5 className="fs-md-6 fs-lg-5">巴斯克</h5>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="#">
                    <h5 className="fs-md-6 fs-lg-5">瑪德蓮</h5>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="#">
                    <h5 className="fs-md-6 fs-lg-5">法式小塔</h5>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="#">
                    <h5 className="fs-md-6 fs-lg-5">寄甜計畫</h5>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="#">
                    <h5 className="fs-md-6 fs-lg-5">中秋禮盒</h5>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* product cards */}
          <section className="col-12 col-md-9">
            <h2 className="fs-3 fs-lg-2 mb-6 mb-md-0">商品介紹</h2>
            {/* 手機版商品下拉選單 */}
            <div className="dropdown d-block d-md-none">
              <a
                className="form-select text-primary-800 text-start py-2"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                商品總覽
              </a>
              <ul
                className="dropdown-menu w-100 mt-1"
                aria-labelledby="dropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item " href="#">
                    可麗露
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="#">
                    巴斯克
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="#">
                    瑪德蓮
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="#">
                    法式小塔
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="#">
                    寄甜計畫
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="#">
                    中秋禮盒
                  </a>
                </li>
              </ul>
            </div>
            {/* 商品資料 */}
            <div className="row py-6 py-md-8 g-6">
              {products?.map((product) => {
                return (
                  <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
                    <div className="card h-100">
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.imageUrl}
                          className="card-img-top object-fit-cover"
                          alt="canele"
                          style={{ height: 150 }}
                        />
                      </Link>
                      <div className="card-body d-flex flex-column">
                        <a href="product-detail.html">
                          <h4 className="card-title text-primary-800">
                            {product.title}
                          </h4>
                        </a>
                        <p className="card-text text-primary-600 mb-4">
                          {product.content}
                        </p>
                        <div className="mt-auto d-flex justify-content-between align-items-center">
                          <h4 className="text-primary-700">
                            NT$ {product.price}
                          </h4>
                          <button className="btn btn-card-cart px-6"
                                  onClick={()=>addOneToCart(product.id)}>
                            <span className="material-symbols-outlined fill align-bottom">
                              shopping_cart
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

              <Pagination />

          </section>
        </div>
      </main>
    </>
  );
};

export default Products;
