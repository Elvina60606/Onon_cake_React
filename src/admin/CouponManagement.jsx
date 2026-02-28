import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncAdminCoupons, createAsyncCoupon, deleteAsyncCoupon } from "@/slices/adminCouponSlice";
import AdminCouponModal from "@/Component/modal/AdminCouponModal";

const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;

const CouponManagement=() => {
    const dispatch = useDispatch()
    const { adminCoupons } = useSelector(state => state.admincoupon)
    
    useEffect(()=>{
        dispatch(getAsyncAdminCoupons())
    },[dispatch])

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const handleRemoveCoupon = async(id) => {
      await dispatch(deleteAsyncCoupon(id));
      dispatch(getAsyncAdminCoupons());
    }

    // coupon date
    const normalizeTimestamp = (timeStamp) =>
      timeStamp < 1e12 ? timeStamp * 1000 : timeStamp;

    const formatTime = (timeStamp, addDays = 0) => {
      const date = new Date(normalizeTimestamp(timeStamp));
      date.setDate(date.getDate() + addDays);

      return date.toLocaleDateString('sv-SE', {
        timeZone: 'Asia/Taipei',
      });
    };

    return (<>
    <div>
        <div className="container my-5 d-flex justify-content-between">
            <h3>優惠卷後台</h3>
            <button type="button" className="btn btn-primary"
                    onClick={()=>setIsModalOpen(prev => !prev)}>
                    新增優惠卷
            </button>
        </div>
        <AdminCouponModal isModalOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}/>
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
                    <tbody>
                      {adminCoupons.map((coupon) => {
                        return (
                          <tr className="order-body align-middle text-center" key={coupon.id}>
                            <th scope="row" className="py-6">{coupon.due_date}</th>
                            <td>{coupon.title}</td>
                            <td>{formatTime(coupon.due_date)}</td>
                            <td>{formatTime(coupon.due_date, 30)}</td>
                            <td>{coupon.percent}</td>
                            <td>{coupon.is_enabled ? '啟用' : '未啟用'}</td>
                            <td>
                              <button className="btn btn-danger" type="button"
                                      onClick={() => handleRemoveCoupon(coupon.id)}>
                                <i className="bi bi-trash text-white"></i>
                              </button>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
            </table>
        </div>
    </div>
    </>)
}

export default CouponManagement;