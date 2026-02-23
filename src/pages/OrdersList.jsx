import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Pagination from "@/Component/Pagination";
import { setTotalItems, setLoading, setError } from '../slices/paginationSlice';

const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;

function OrdersList() {
    const [ orders, setOrders ] = useState([]);
    useEffect(()=>{
      (async()=>{
        try {
          const res = await axios.get(`${VITE_API_BASE}api/${VITE_API_PATH}/orders`)
          console.log(res.data.orders)
          setOrders(res.data.orders)
        } catch (error) {
          console.log('orders:', error)  
        }
      })()
    },[])

    // orders date
    const normalizeTimestamp = (timeStamp) =>
      timeStamp < 1e12 ? timeStamp * 1000 : timeStamp;

    const formatTime = (timeStamp, addDays = 0) => {
      const date = new Date(normalizeTimestamp(timeStamp));
      date.setDate(date.getDate() + addDays);

      return date.toLocaleDateString('sv-SE', {
        timeZone: 'Asia/Taipei',
      });
    };

    // pagination
    const dispatch = useDispatch();
    const { currentPage, loading } = useSelector( state => state.pagination );
    const fetchOrders = async() => {
      try {
        const res = await axios.get(`${VITE_API_BASE}api/${VITE_API_PATH}/orders?page=${currentPage}`)
        dispatch(setLoading(true))
        setOrders(res.data.orders)
        dispatch(setTotalItems(res.data.orders.length))
        dispatch(setLoading(false))
      } catch (error) {
        dispatch(setError(error.message));
        dispatch(setLoading(false))
      }
    }

    useEffect(()=>{
      fetchOrders()
    },[currentPage])


    return (
    <>
        <div className="col-md-9">
            <div className="tab-content">
        {/*--訂單紀錄內容--*/}
              <div className="tab-pane active" 
                   tabIndex="0">
                    <h3 className="mb-6">訂單紀錄</h3>
        {/* mobile table */}
                <div className="border border-1 rounded-16 p-3 fs-6 d-lg-none bg-white">
                  {orders.map((order)=>{
                    return (
                      <div className="order-info-mobile py-3 mb-6 border-bottom" key={order.id}>
                        <div>
                          <span className="text-neutral-500">訂單編號</span>
                          <span>{order.create_at}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500">訂單成立時間</span>
                          <span>{formatTime(order.create_at)}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500">預計出貨日期</span>
                          <span>{formatTime(order.create_at, 3)}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500">狀態</span>
                          {order.is_paid ? 
                                 <span className="border border-0 rounded-pill bg-success-50 text-success-700 px-3 py-2">已完成</span>
                               : <span className="border border-0 rounded-pill bg-alert-50 text-alert-700 px-3 py-2">已成立</span>}
                        </div>
                        <div>
                          <span className="text-neutral-500">品項</span>
                            {Object.values(order.products || {}).map(product => (
                              <span key={product.id}>
                                {product.product.title}({product.product.content}) x {product.qty}
                              </span>
                            ))}
                        </div>
                        <div>
                          <span className="text-neutral-500">總金額</span>
                          <span>NT$ {order.total}</span>
                        </div>
                      </div>
                    )
                  })}
                    <Pagination />

                </div>
        {/* desktop table */}
                <div className="border border-1 rounded-16 px-6 py-3 fs-6 d-none d-lg-block bg-white">
                  <table className="table">
                    <thead>
                      <tr className="order-thead align-middle">
                        <th scope="col" style={{width: '15%' }}>訂單編號</th>
                        <th scope="col" style={{width: '15%' }} className="text-center">訂單成立時間</th>
                        <th scope="col" style={{width: '15%' }} className="text-center">預計出貨日期</th>
                        <th scope="col" style={{width: '15%' }} className="text-center">狀態</th>
                        <th scope="col" style={{width: '25%' }}>品項</th>
                        <th scope="col" style={{width: '12%' }} className="text-end">總金額</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => {
                        return (
                          <tr className="order-body" key={order.id}>
                            <th scope="row" className="py-6">{order.create_at}</th>
                            <td className="text-center">{formatTime(order.create_at)}</td>
                            <td className="text-center">{formatTime(order.create_at, 3)}</td>
                            <td className="text-center">{order.is_paid ? 
                                 <span className="border border-0 rounded-pill bg-success-50 text-success-700 px-3 py-2">已完成</span>
                               : <span className="border border-0 rounded-pill bg-alert-50 text-alert-700 px-3 py-2">已成立</span>}                              
                            </td>
                            {Object.values(order.products || {}).map(product => (
                              <td key={product.id}>
                                {product.product.title}({product.product.content}) x {product.qty}
                              </td>
                            ))}
                            <td className="text-end">NT$ {order.total}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
              {/* desktop pagination */}
                  <Pagination />
                </div>
              </div>
            </div>
        </div>
    </>
    )
}

export default OrdersList;