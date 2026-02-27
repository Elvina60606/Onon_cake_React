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

    //接著從新增input串接開始
    return (<>
        { isModalOpen && (
            <div className="container px-13 pt-5 pb-5 my-5 border rounded-4">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">新增優惠卷</h5>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>)
        }
    </>)
}

export default AdminCouponModal;