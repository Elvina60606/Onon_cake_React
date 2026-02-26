import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAsyncAdminCoupons } from "@/slices/adminCouponSlice";

const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;

const CouponManagement=() => {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getAsyncAdminCoupons())
    },[])

    return (<>
    <div>
        <div className="container my-5 d-flex justify-content-between">
            <h3>優惠卷後台</h3>
            <button type="button" className="btn btn-success">新增優惠卷</button>
        </div>
        <div className="border border-1 rounded-16 px-6 py-3 fs-6 d-none d-lg-block bg-white">
            <table className="table">
                    <thead>
                      <tr className="order-thead align-middle text-center">
                        <th scope="col" style={{width: '13%' }} >編號</th>
                        <th scope="col" style={{width: '12%' }} >優惠卷名稱</th>
                        <th scope="col" style={{width: '13%' }} >優惠卷成立時間</th>
                        <th scope="col" style={{width: '13%' }} >優惠卷到期日期</th>
                        <th scope="col" style={{width: '25%' }} >折價％數</th>
                        <th scope="col" style={{width: '10%' }} >是否啟用</th>
                        <th scope="col" style={{width: '10%' }} >刪除</th>
                        
                      </tr>
                    </thead>
                    {/* <tbody>
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
                    </tbody> */}
            </table>
        </div>
    </div>
    </>)
}

export default CouponManagement;