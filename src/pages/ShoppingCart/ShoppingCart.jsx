import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ShoppingCart.scss";

import { useDispatch } from "react-redux";
import { getAsyncCart } from "@/slices/cartSlice";

// --- 導入外部 JSON 資料 ---
import taiwanDistricts from "@/data/taiwanDistricts.json";

// --- 連結至 Products 頁面---
import { Link } from "react-router";

const BASE_URL = "https://vue3-course-api.hexschool.io/v2";
const API_PATH = "ononcakeapi";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const [cartList, setCartList] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedInvoiceType, setSelectedInvoiceType] =
    useState("personalInvoice");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [districts, setDistricts] = useState([]);

  const [tempPoints, setTempPoints] = useState("");
  const [tempPromo, setTempPromo] = useState("");
  const [tempCoupon, setTempCoupon] = useState("");

  const shippingFee = 60;

  const getCart = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/api/${API_PATH}/cart`);
      if (res.data.success) {
        setCartList(res.data.data.carts);
        setSubTotal(res.data.data.total);
        setFinalTotal(res.data.data.final_total);
      }
    } catch (error) {
      console.error("API 連線失敗");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const handleQuantityChange = async (
    cartId,
    productId,
    currentQty,
    action,
  ) => {
    const newQty = action === "increase" ? currentQty + 1 : currentQty - 1;
    if (newQty < 1) return;
    setIsLoading(true);
    try {
      await axios.put(`${BASE_URL}/api/${API_PATH}/cart/${cartId}`, {
        data: { product_id: productId, qty: newQty },
      });
      getCart();
    } catch (error) {
      alert("更新數量失敗");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCartItem = async (cartId) => {
    if (window.confirm("確定要移除此商品嗎？")) {
      setIsLoading(true);
      try {
        await axios.delete(`${BASE_URL}/api/${API_PATH}/cart/${cartId}`);
        getCart();
        dispatch(getAsyncCart());
      } catch (error) {
        alert("刪除失敗");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleApplyCoupon = async (code) => {
    const couponCode = code || tempCoupon;
    if (!couponCode) return;
    setIsLoading(true);
    try {
      await axios.post(`${BASE_URL}/api/${API_PATH}/coupon`, {
        data: { code: couponCode },
      });
      alert("優惠券套用成功");
      getCart();
    } catch (error) {
      alert("無效的優惠券碼");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    if (cartList.length === 0) return alert("購物車目前是空的");
    const form = e.target;
    const orderData = {
      data: {
        user: {
          name: form.name.value,
          email: "test@gmail.com",
          tel: form.tel.value,
          address: `${zipCode}${selectedCity}${selectedDistrict}${form.address.value}`,
        },
        message: form.message.value,
      },
    };
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${BASE_URL}/api/${API_PATH}/order`,
        orderData,
      );
      alert(`訂單送出成功！編號：${res.data.orderId}`);
      getCart();
      dispatch(getAsyncCart());
    } catch (error) {
      alert("送出失敗，請檢查輸入內容");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCityChange = (e) => {
    const cityName = e.target.value;
    setSelectedCity(cityName);
    setSelectedDistrict("");
    setZipCode("");
    const targetCity = taiwanDistricts.find((item) => item.city === cityName);
    setDistricts(targetCity ? targetCity.districts : []);
  };

  const handleDistrictChange = (e) => {
    const distName = e.target.value;
    setSelectedDistrict(distName);
    const targetDist = districts.find((d) => d.name === distName);
    if (targetDist) {
      setZipCode(targetDist.zip);
    }
  };

  return (
    <div className="shopping-cart-page">
      <div className="shopping-cart">
        <section className="bg-neutral-50 pb-8 pb-md-12">
          <div className="container">
            <h2 className="fs-3 fs-md-2 text-black pt-8 pt-md-12 mb-6 mb-md-8">
              購物車商品清單
            </h2>

            <div>
              <div className="row">
                <ul
                  className="list-unstyled fs-md-7 fs-lg-6 px-7 mb-4 d-none d-md-flex"
                  style={{ color: "#6f6f6f" }}
                >
                  <li className="col-md-7 text-center">商品資料</li>
                  <li className="col-md-1 text-center">單價</li>
                  <li className="col-md-2 text-center">數量</li>
                  <li className="col-md-1 text-center">小計</li>
                  <li className="col-md-1 text-center">刪除</li>
                </ul>
              </div>

              {/* 1. 商品列表：移除底邊距 mb-0 */}
              <ul className="list-group mb-0">
                {cartList.length > 0 ? (
                  cartList.map((item) => (
                    <li
                      className="list-group-item rounded-4 px-7 py-4 mb-4"
                      key={item.id}
                    >
                      <div className="row align-items-center g-4">
                        <div className="col-12 col-md-7 d-flex align-items-center">
                          <img
                            src={item.product.imageUrl}
                            className="rounded me-4"
                            style={{
                              width: "80px",
                              height: "80px",
                              objectFit: "cover",
                            }}
                            alt={item.product.title}
                          />
                          <div>
                            <h5 className="fs-6 fs-md-5">
                              {item.product.title}
                            </h5>
                            <p className="fs-6 fw-bold mt-2 d-md-none">
                              NT$ {item.product.price}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-1 d-none d-md-block text-center fw-bold">
                          NT$ {item.product.price}
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="row align-items-center">
                            <div className="col-5 col-md-6 d-flex justify-content-md-center">
                              <div
                                className="input-group input-group-sm border rounded-2 bg-white"
                                style={{ width: "130px" }}
                              >
                                <button
                                  type="button"
                                  className="btn btn-decrease"
                                  onClick={() =>
                                    handleQuantityChange(
                                      item.id,
                                      item.product_id,
                                      item.qty,
                                      "decrease",
                                    )
                                  }
                                >
                                  <i className="bi bi-dash-lg"></i>
                                </button>
                                <input
                                  type="number"
                                  className="form-control text-center border-0"
                                  value={item.qty}
                                  readOnly
                                />
                                <button
                                  type="button"
                                  className="btn btn-increase"
                                  onClick={() =>
                                    handleQuantityChange(
                                      item.id,
                                      item.product_id,
                                      item.qty,
                                      "increase",
                                    )
                                  }
                                >
                                  <i className="bi bi-plus-lg"></i>
                                </button>
                              </div>
                            </div>
                            <div className="col-5 col-md-3 text-center">
                              <p className="fs-5 fw-bold text-secondary-500 mb-0">
                                NT$ {item.total}
                              </p>
                            </div>
                            <div className="col-2 col-md-3 text-center">
                              <button
                                type="button"
                                className="btn btn-trash"
                                onClick={() => deleteCartItem(item.id)}
                              >
                                <i className="bi bi-trash3-fill"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="list-group-item text-center py-10 rounded-4 mb-4">
                    目前購物車是空的，
                    <Link to="/products" className="text-primary-700 fw-bold">
                      去逛逛商品吧！
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            {/* 3. 優惠區塊：移除 mt，統一用間距器控制 */}
            <div className="row g-3">
              <div className="col-12 col-md-4">
                <div className="p-5 p-md-6 border rounded-4 bg-white h-100">
                  <label className="form-label d-block mb-1">
                    可用點數：500點
                  </label>
                  <div className="row g-2">
                    <div className="col-12 col-md pe-3 mb-4 mb-md-0">
                      <input
                        type="number"
                        className="form-control coupons"
                        placeholder="請輸入紅利點數"
                        value={tempPoints}
                        onChange={(e) => setTempPoints(e.target.value)}
                      />
                    </div>
                    <div className="col-6 col-md-auto">
                      <button className="btn use-btn w-100" type="button">
                        使用
                      </button>
                    </div>
                    <div className="col-6 col-md-auto">
                      <button
                        className="btn btn-primary w-100"
                        type="button"
                        onClick={() => setTempPoints("")}
                      >
                        清除
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="p-5 p-md-6 border rounded-4 bg-white h-100">
                  <label className="form-label d-block mb-1">優惠碼</label>
                  <div className="row g-2">
                    <div className="col-12 col-md pe-3 mb-4 mb-md-0">
                      <input
                        type="text"
                        className="form-control coupons"
                        placeholder="請輸入優惠碼"
                        value={tempPromo}
                        onChange={(e) => setTempPromo(e.target.value)}
                      />
                    </div>
                    <div className="col-6 col-md-auto">
                      <button
                        className="btn use-btn w-100"
                        type="button"
                        onClick={() => handleApplyCoupon(tempPromo)}
                      >
                        使用
                      </button>
                    </div>
                    <div className="col-6 col-md-auto">
                      <button
                        className="btn btn-primary w-100"
                        type="button"
                        onClick={() => setTempPromo("")}
                      >
                        清除
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="p-5 p-md-6 border rounded-4 bg-white h-100">
                  <label className="form-label d-block mb-1">優惠券</label>
                  <div className="row g-2">
                    <div className="col-12 col-md pe-3 mb-4 mb-md-0">
                      <select
                        className="form-select coupons"
                        value={tempCoupon}
                        onChange={(e) => setTempCoupon(e.target.value)}
                      >
                        <option value="" disabled>
                          請選擇優惠券
                        </option>
                        <option value="60">天大地大!壽星最大!</option>
                        <option value="percent_0.88">不限金額即享88折</option>
                      </select>
                    </div>
                    <div className="col-6 col-md-auto">
                      <button
                        className="btn use-btn w-100"
                        type="button"
                        onClick={() => handleApplyCoupon()}
                      >
                        使用
                      </button>
                    </div>
                    <div className="col-6 col-md-auto">
                      <button
                        className="btn btn-primary w-100"
                        type="button"
                        onClick={() => setTempCoupon("")}
                      >
                        清除
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. 精確 16px 間距器 */}
            <div style={{ height: "16px" }}></div>

            {/* 5. 金額計算 */}
            <div className="row">
              <div className="col-12">
                <div className="p-5 p-md-6 border rounded-4 bg-white">
                  <div className="d-flex justify-content-between pb-2 fs-7 fs-md-6">
                    <span>小計</span>
                    <span>$ {subTotal.toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between pb-2 fs-7 fs-md-6">
                    <span>運費</span>
                    <span>$ {shippingFee}</span>
                  </div>
                  <div className="d-flex justify-content-between pb-2 fs-7 fs-md-6 text-secondary">
                    <span>折扣金額</span>
                    <span>- $ {(subTotal - finalTotal).toLocaleString()}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="d-flex justify-content-between">
                    <span className="h5 fw-normal">總金額</span>
                    <span className="text-secondary h4">
                      NT$ {(finalTotal + shippingFee).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 下半部：填寫資訊 (維持不變) --- */}
        <section style={{ backgroundColor: "#FFFFFF" }}>
          <div className="container pt-8 pt-md-12">
            <form className="shipping-info" onSubmit={handleCheckout}>
              <h2 className="mb-lg-8 mb-6">填寫資訊</h2>
              <div className="cart-border p-6 mb-6">
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="sameAsMember"
                  />
                  <label className="form-check-label" htmlFor="sameAsMember">
                    同會員資料
                  </label>
                </div>
                <div className="gap-2 mb-4 d-md-flex">
                  <div style={{ flex: 1 }} className="mb-4 mb-md-0">
                    <label className="form-label">
                      收件人姓名 <span className="text-danger">*</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="請填寫姓名"
                      required
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label className="form-label">
                      聯絡電話 <span className="text-danger">*</span>
                    </label>
                    <input
                      name="tel"
                      type="text"
                      className="form-control"
                      placeholder="請填寫聯絡電話"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">
                    收件地址 <span className="text-danger">*</span>
                  </label>
                  <div className="d-flex flex-wrap gap-2 mb-4 flex-md-nowrap">
                    <div className="address-col-200 mb-4 mb-md-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="郵遞區號"
                        value={zipCode}
                        readOnly
                      />
                    </div>
                    <div className="address-col-200 mb-4 mb-md-0">
                      <select
                        className="form-select"
                        value={selectedCity}
                        onChange={handleCityChange}
                        required
                      >
                        <option value="" disabled>
                          縣市
                        </option>
                        {taiwanDistricts.map((item) => (
                          <option key={item.city} value={item.city}>
                            {item.city}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="address-col-200 mb-4 mb-md-0">
                      <select
                        className="form-select"
                        value={selectedDistrict}
                        onChange={handleDistrictChange}
                        disabled={!selectedCity}
                        required
                      >
                        <option value="" disabled>
                          鄉鎮市區
                        </option>
                        {districts.map((d) => (
                          <option key={d.name} value={d.name}>
                            {d.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="address-col-624 flex-grow-1">
                      <input
                        name="address"
                        type="text"
                        className="form-control"
                        placeholder="請輸入地址"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="form-label">備註</label>
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="請填寫備註"
                    style={{ height: "160px" }}
                  ></textarea>
                </div>
              </div>

              <div className="row g-6">
                <div className="col-md-6">
                  <div className="cart-border p-6 h-100">
                    <h5 className="text-neutral-800 mb-4">付款方式</h5>
                    {["線上刷卡", "LINE PAY", "APPLE PAY", "ATM轉帳"].map(
                      (m, i) => (
                        <div className="form-check py-2 ps-7" key={m}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="pay"
                            id={`pay${i}`}
                            defaultChecked={i === 0}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`pay${i}`}
                          >
                            {m}
                          </label>
                        </div>
                      ),
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cart-border p-6 h-100">
                    <h5 className="text-neutral-800 mb-4">發票開立</h5>
                    <div className="mb-4">
                      <select
                        className="form-select"
                        value={selectedInvoiceType}
                        onChange={(e) => setSelectedInvoiceType(e.target.value)}
                      >
                        <option value="personalInvoice">個人發票</option>
                        <option value="companyInvoice">公司發票</option>
                      </select>
                    </div>
                    {selectedInvoiceType === "personalInvoice" ? (
                      <div className="invoice-block">
                        <div className="form-check py-2 ps-7">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inv"
                            id="inv1"
                            defaultChecked
                          />
                          <label className="form-check-label" htmlFor="inv1">
                            會員載具
                          </label>
                        </div>
                        <div id="invoiceGroup">
                          <div className="d-flex flex-column flex-md-row align-items-md-center">
                            <div className="form-check py-2 ps-7 me-8">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inv"
                                id="inv2"
                                data-bs-toggle="collapse"
                                data-bs-target="#phoneCol"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inv2"
                              >
                                手機條碼
                              </label>
                            </div>
                            <div
                              className="collapse flex-grow-1"
                              id="phoneCol"
                              data-bs-parent="#invoiceGroup"
                            >
                              <input
                                className="form-control"
                                type="text"
                                placeholder="請填寫手機條碼"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-column flex-md-row align-items-md-center">
                            <div className="form-check py-2 ps-7 me-8">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inv"
                                id="inv3"
                                data-bs-toggle="collapse"
                                data-bs-target="#personCol"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inv3"
                              >
                                自然人憑證
                              </label>
                            </div>
                            <div
                              className="collapse flex-grow-1"
                              id="personCol"
                              data-bs-parent="#invoiceGroup"
                            >
                              <input
                                className="form-control"
                                type="text"
                                placeholder="請填寫自然人憑證"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="invoice-block">
                        <div className="mb-4">
                          <label className="form-label">公司抬頭 *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="請填寫公司抬頭"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="form-label">統一編號 *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="請填寫統一編號"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-8 mb-10 mb-md-12">
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={isLoading}
                >
                  {isLoading ? "處理中..." : "確認訂購"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShoppingCart;
