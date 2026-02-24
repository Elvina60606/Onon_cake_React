import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminAsyncOrders, setAdminOrders, removeAdminOrder } from "@/slices/adminOrdersSlice";
import AdminPagination from "@/Component/pagination/AdminPagination";


const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;

const OrderManagement =() => {
    const dispatch = useDispatch();

    const { adminOrders, currentPage } = useSelector(state => state.adminorder);

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

    useEffect(() => {
      dispatch(getAdminAsyncOrders(currentPage))
    }, [dispatch, currentPage]);

    const handleClickChange= async(orderId, currentStatus) => {
        try {
            const res = await axios.put(`${VITE_API_BASE}api/${VITE_API_PATH}/admin/order/${orderId}`,{ data:{is_paid: !currentStatus}});
            dispatch(setAdminOrders(
                adminOrders.map((order) =>
                    order.id === orderId ? { ...order, is_paid: !currentStatus } : order
                )
              )
            );
        } catch (error) {
            console.log(error)
        } 
    };

    const handleRemove = async(orderId) => {
      try {
          const res = await axios.delete(`${VITE_API_BASE}api/${VITE_API_PATH}/admin/order/${orderId}`)
          console.log(res.data.message)
          dispatch(removeAdminOrder(orderId))
      } catch (error) {
        console.log('刪除訂單失敗：',error)
      }
    }


    return (<>
        <div>
            <h3 className="mb-5">後台訂單管理</h3>
            {adminOrders.length === 0 ? (<p>目前沒有訂單</p>) : 
            ( <div className="border border-1 rounded-16 px-6 py-3 fs-6 d-none d-lg-block bg-white">
                  <table className="table">
                    <thead>
                      <tr className="order-thead align-middle">
                        <th scope="col" style={{width: '13%' }}>訂單編號</th>
                        <th scope="col" style={{width: '13%' }} className="text-center">訂單成立時間</th>
                        <th scope="col" style={{width: '13%' }} className="text-center">預計出貨日期</th>
                        <th scope="col" style={{width: '12%' }} className="text-center">狀態</th>
                        <th scope="col" style={{width: '25%' }}>品項</th>
                        <th scope="col" style={{width: '10%' }} className="text-end">總金額</th>
                        <th scope="col" style={{width: '10%' }} className="text-center">刪除</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {adminOrders.map((order) => {
                        return (
                          <tr className="order-body" key={order.id}>
                            <th scope="row" className="py-6">{order.create_at}</th>
                            <td className="text-center">{formatTime(order.create_at)}</td>
                            <td className="text-center">{formatTime(order.create_at, 3)}</td>
                            <td className="text-center">{order.is_paid ? 
                                 <button className="border border-0 rounded-pill bg-success-50 text-success-700 px-3 py-2"
                                         onClick={()=>handleClickChange(order.id, order.is_paid)}>已完成</button>
                               : <button className="border border-0 rounded-pill bg-alert-50 text-alert-700 px-3 py-2"
                                         onClick={()=>handleClickChange(order.id, order.is_paid)}>已成立</button>}                              
                            </td>
                            <td>
                              {Object.values(order.products || {}).map(product => (
                                <div key={product.id} >
                                  {product.product.title}({product.product.content}) x {product.qty}
                                </div>
                              ))}
                            </td>
                            <td className="text-end">NT$ {order.total}</td>
                            <td className="text-center">
                              <button className="btn" type="button"
                                      onClick={()=>handleRemove(order.id)}>
                                <i className="bi bi-trash text-danger"></i>
                              </button>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
        )}
        </div>
        <AdminPagination />
    </>)
}

export default OrderManagement;