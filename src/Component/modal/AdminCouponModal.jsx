import { createAsyncCoupon, getAsyncAdminCoupons } from "@/slices/adminCouponSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AdminCouponModal =({isModalOpen, onClose}) => {
    const dispatch = useDispatch();

    const [ formData, setFormData ] = useState({
        title: "",
        percent: 0,
        is_enabled: 1,
        due_date: "",
        code: "",
    });

    const handleCreateCoupon =async() => {
        const payload = {
            ...formData,
            due_date: Math.floor(new Date(formData.due_date).getTime() / 1000),
        };

        await dispatch(createAsyncCoupon(payload));
        dispatch(getAsyncAdminCoupons());
        onClose();
    }

    return (<>
        { isModalOpen && (
            <div className="container px-13 pt-5 pb-5 my-5 border rounded-4">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="coupon_title" 
                                       className="form-label">優惠卷名稱
                                </label>
                                <input type="text" className="form-control" 
                                       id="coupon_title" 
                                       placeholder="Coupon Title"
                                       value={formData.title}
                                       onChange={(e)=>setFormData({...formData, title: e.target.value})}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="discount_percent" 
                                       className="form-label">折扣 % 數
                                </label>
                                <input type="number" className="form-control" 
                                       id="discount_percent" 
                                       placeholder="Discount Percent"
                                       value={formData.percent}
                                       onChange={(e)=>setFormData({...formData, percent: Number(e.target.value)})}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="discount_code" 
                                       className="form-label">折扣碼
                                </label>
                                <input type="text" className="form-control" 
                                       id="discount_code" 
                                       placeholder="Discount Code"
                                       value={formData.code}
                                       onChange={(e)=>setFormData({...formData, code: e.target.value})}/>
                            </div>
                            <div className="mb-3">
                                <input type="checkbox" className="form-check-input" 
                                       id="is_enable" 
                                       checked={formData.is_enabled === 1}
                                       onChange={(e)=>setFormData({...formData, is_enabled: e.target.checked ? 1 : 0})}/>
                                <label htmlFor="is_enable" 
                                       className="form-label mx-3">是否啟用
                                </label>
                            </div>
                            <div className="mb-3"> 
                                <label htmlFor="due_date" className="form-label">成立時間</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="due_date"
                                    value={formData.due_date}
                                    onChange={(e) => setFormData({...formData, due_date: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-lg btn-info"
                                    onClick={handleCreateCoupon}>新增
                            </button>
                        </div>
                    </div>
                </div>
            </div>)
        }
    </>)
}

export default AdminCouponModal;