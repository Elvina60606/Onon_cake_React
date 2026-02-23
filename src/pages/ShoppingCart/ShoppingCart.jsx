import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ShoppingCart.scss";

import { useDispatch } from "react-redux";
import { getAsyncCart } from "@/slices/cartSlice";

// --- API 設定 ---
const BASE_URL = "https://vue3-course-api.hexschool.io/v2";
const API_PATH = "ononcakeapi";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  
  // --- 1. 狀態管理 ---
  const [cartList, setCartList] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedInvoiceType, setSelectedInvoiceType] = useState("personalInvoice");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);

  const [tempPoints, setTempPoints] = useState("");
  const [tempPromo, setTempPromo] = useState("");
  const [tempCoupon, setTempCoupon] = useState("");

  const shippingFee = 60;

  // --- 2. 縣市資料 ---
  const cityData = {
    基隆市: ["仁愛區", "信義區", "中正區", "中山區", "安樂區", "暖暖區", "七堵區"],
    臺北市: ["中正區", "大同區", "中山區", "松山區", "大安區", "萬華區", "信義區", "士林區", "北投區", "內湖區", "南港區", "文山區"],
    新北市: ["萬里區", "金山區", "板橋區", "汐止區", "深坑區", "石碇區", "瑞芳區", "平溪區", "雙溪區", "貢寮區", "新店區", "坪林區", "烏來區", "永和區", "中和區", "土城區", "三峽區", "樹林區", "鶯歌區", "三重區", "新莊區", "泰山區", "林口區", "蘆洲區", "五股區", "淡水區", "三芝區", "石門區", "八里區"],
    桃園市: ["中壢區", "平鎮區", "龍潭區", "楊梅區", "新屋區", "觀音區", "桃園區", "龜山區", "八德區", "大溪區", "復興區", "大園區", "蘆竹區"],
    新竹市: ["東區", "北區", "香山區"],
    新竹縣: ["竹北市", "竹東鎮", "新埔鎮", "關西鎮", "湖口鄉", "新豐鄉", "峨眉鄉", "寶山鄉", "北埔鄉", "芎林鄉", "五峰鄉", "尖石鄉"],
    苗栗縣: ["苗栗市", "苑裡鎮", "通霄鎮", "竹南鎮", "頭份市", "後龍鎮", "卓蘭鎮", "大湖鄉", "公館鄉", "銅鑼鄉", "南庄鄉", "頭屋鄉", "三義鄉", "西湖鄉", "造橋鄉", "三灣鄉", "獅潭鄉", "泰安鄉"],
    臺中市: ["中區", "東區", "南區", "西區", "北區", "西屯區", "南屯區", "北屯區", "豐原區", "東勢區", "大甲區", "清水區", "沙鹿區", "梧棲區", "后里區", "神岡區", "潭子區", "大雅區", "新社區", "石岡區", "外埔區", "大安區", "烏日區", "大肚區", "龍井區", "霧峰區", "太平區", "大里區", "和平區"],
    彰化縣: ["彰化市", "員林市", "和美鎮", "鹿港鎮", "溪湖鎮", "田中鎮", "北斗鎮", "二林鎮", "線西鄉", "伸港鄉", "福興鄉", "秀水鄉", "花壇鄉", "芬園鄉", "大村鄉", "埔心鄉", "埔鹽鄉", "永靖鄉", "社頭鄉", "二水鄉", "田尾鄉", "埤頭鄉", "芳苑鄉", "大城鄉", "竹塘鄉", "溪州鄉"],
    南投縣: ["南投市", "埔里鎮", "草屯鎮", "竹山鎮", "集集鎮", "名間鄉", "鹿谷鄉", "中寮鄉", "魚池鄉", "國姓鄉", "水里鄉", "信義鄉", "仁愛鄉"],
    雲林縣: ["斗六市", "斗南鎮", "虎尾鎮", "西螺鎮", "土庫鎮", "北港鎮", "古坑鄉", "大埤鄉", "莿桐鄉", "林內鄉", "二崙鄉", "崙背鄉", "麥寮鄉", "東勢鄉", "褒忠鄉", "臺西鄉", "元長鄉", "四湖鄉", "口湖鄉", "水林鄉"],
    嘉義市: ["東區", "西區"],
    嘉義縣: ["太保市", "大林鎮", "民雄鄉", "溪口鄉", "新港鄉", "六腳鄉", "東石鄉", "義竹鄉", "布袋鎮", "鹿草鄉", "竹崎鄉", "梅山鄉", "番路鄉", "大埔鄉", "阿里山鄉", "中埔鄉", "水上鄉"],
    臺南市: ["中西區", "東區", "南區", "北區", "安平區", "安南區", "永康區", "歸仁區", "新化區", "左鎮區", "玉井區", "楠西區", "南化區", "仁德區", "關廟區", "龍崎區", "官田區", "麻豆區", "佳里區", "西港區", "七股區", "將軍區", "學甲區", "北門區", "新營區", "後壁區", "白河區", "東山區", "六甲區", "下營區", "柳營區", "鹽水區", "善化區", "大內區", "山上區", "新市區", "安定區"],
    高雄市: ["新興區", "前金區", "苓雅區", "鹽埕區", "鼓山區", "旗津區", "前鎮區", "三民區", "楠梓區", "小港區", "左營區", "仁武區", "大社區", "岡山區", "路竹區", "阿蓮區", "田寮區", "燕巢區", "橋頭區", "梓官區", "彌陀區", "永安區", "湖內區", "鳳山區", "大寮區", "林園區", "鳥松區", "大樹區", "旗山區", "美濃區", "六龜區", "內門區", "杉林區", "甲仙區", "桃源區", "那瑪夏區", "茂林區", "茄蓃區"],
    屏東縣: ["屏東市", "潮州鎮", "東港鎮", "恆春鎮", "萬丹鄉", "長治鄉", "麟洛鄉", "九如鄉", "里港鄉", "鹽埔鄉", "高樹鄉", "萬巒鄉", "內埔鄉", "竹田鄉", "新埤鄉", "枋寮鄉", "新園鄉", "崁頂鄉", "林邊鄉", "南州鄉", "佳冬鄉", "琉球鄉", "車城鄉", "滿州鄉", "枋山鄉", "三地門鄉", "霧臺鄉", "瑪家鄉", "泰武鄉", "來義鄉", "春日鄉", "獅子鄉", "牡丹鄉"],
    宜蘭縣: ["宜蘭市", "羅東鎮", "蘇澳鎮", "頭城鎮", "礁溪鄉", "壯圍鄉", "員山鄉", "冬山鄉", "五結鄉", "三星鄉", "大同鄉", "南澳鄉"],
    花蓮縣: ["花蓮市", "鳳林鎮", "玉里鎮", "新城鄉", "吉安鄉", "壽豐鄉", "光復鄉", "豐濱鄉", "瑞穗鄉", "萬榮鄉", "秀林鄉", "卓溪鄉", "富里鄉"],
    臺東縣: ["臺東市", "成功鎮", "關山鎮", "卑名鄉", "大武鄉", "太麻里鄉", "東河鄉", "長濱鄉", "鹿野鄉", "池上鄉", "綠島鄉", "蘭嶼鄉", "延平鄉", "海端鄉", "達仁鄉", "金峰鄉"],
  };

  // --- 3. API 核心函式 (含監控 log) ---

  const getCart = async () => {
    setIsLoading(true);
    console.log("--- [Debug] 開始讀取購物車資料 ---");
    try {
      const res = await axios.get(`${BASE_URL}/api/${API_PATH}/cart`);
      console.log("--- [Debug] API 回傳結果：", res.data);

      if (res.data.success) {
        setCartList(res.data.data.carts);
        setSubTotal(res.data.data.total);
        setFinalTotal(res.data.data.final_total);
        
        if (res.data.data.carts.length === 0) {
          console.warn("--- [Debug] 提示：購物車陣列目前是空的 (carts: []) ---");
        }
      }
    } catch (error) {
      console.error("--- [Debug] API 連線失敗！ ---");
      console.error("錯誤狀態碼：", error.response?.status);
      console.error("錯誤訊息：", error.response?.data?.message || error.message);
    } finally {
      setIsLoading(false);
      console.log("--- [Debug] 讀取程序結束 ---");
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const handleQuantityChange = async (cartId, productId, currentQty, action) => {
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
      await axios.post(`${BASE_URL}/api/${API_PATH}/coupon`, { data: { code: couponCode } });
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
          address: `${selectedCity}${selectedDistrict}${form.address.value}`,
        },
        message: form.message.value,
      },
    };
    setIsLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/api/${API_PATH}/order`, orderData);
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
    const city = e.target.value;
    setSelectedCity(city);
    setSelectedDistrict("");
    setDistricts(cityData[city] || []);
  };

  return (
    <div className="shopping-cart-page">
      <div className="shopping-cart">
        <section className="bg-neutral-50">
          <div className="container">
            <h2 className="fs-3 fs-md-2 text-black pt-8 pt-md-12 mb-6 mb-md-8">購物車商品清單</h2>

            {/* 商品清單表格 */}
            <div>
              <div className="row">
                <ul className="list-unstyled fs-md-7 fs-lg-6 px-7 mb-4 d-none d-md-flex" style={{ color: "#6f6f6f" }}>
                  <li className="col-md-7 text-center">商品資料</li>
                  <li className="col-md-1 text-center">單價</li>
                  <li className="col-md-2 text-center">數量</li>
                  <li className="col-md-1 text-center">小計</li>
                  <li className="col-md-1 text-center">刪除</li>
                </ul>
              </div>

              <ul className="list-group">
                {cartList.length > 0 ? (
                  cartList.map((item) => (
                    <li className="list-group-item rounded-4 px-7 py-4 mb-4" key={item.id}>
                      <div className="row align-items-center g-4">
                        <div className="col-12 col-md-7 d-flex align-items-center">
                          <img src={item.product.imageUrl} className="rounded me-4" style={{ width: "80px", height: "80px", objectFit: "cover" }} alt={item.product.title} />
                          <div>
                            <h5 className="fs-6 fs-md-5">{item.product.title}</h5>
                            <p className="fs-6 fw-bold mt-2 d-md-none">NT$ {item.product.price}</p>
                          </div>
                        </div>
                        <div className="col-md-1 d-none d-md-block text-center fw-bold">NT$ {item.product.price}</div>
                        <div className="col-12 col-md-4">
                          <div className="row align-items-center">
                            <div className="col-5 col-md-6 d-flex justify-content-md-center">
                              <div className="input-group input-group-sm border rounded-2 bg-white" style={{ width: "130px" }}>
                                <button type="button" className="btn btn-decrease" onClick={() => handleQuantityChange(item.id, item.product_id, item.qty, "decrease")}><i className="bi bi-dash-lg"></i></button>
                                <input type="number" className="form-control text-center border-0" value={item.qty} readOnly />
                                <button type="button" className="btn btn-increase" onClick={() => handleQuantityChange(item.id, item.product_id, item.qty, "increase")}><i className="bi bi-plus-lg"></i></button>
                              </div>
                            </div>
                            <div className="col-5 col-md-3 text-center">
                              <p className="fs-5 fw-bold text-secondary-500 mb-0">NT$ {item.total}</p>
                            </div>
                            <div className="col-2 col-md-3 text-center">
                              <button type="button" className="btn btn-trash" onClick={() => deleteCartItem(item.id)}><i className="bi bi-trash3-fill"></i></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="list-group-item text-center py-10 rounded-4">目前購物車是空的，去逛逛商品吧！</li>
                )}
              </ul>
            </div>

            {/* 優惠區塊 */}
            <div className="row g-3">
              <div className="col-12 col-md-4 mt-4">
                <div className="p-5 p-md-6 border rounded-4 bg-white">
                  <label className="form-label d-block mb-1">可用點數：500點</label>
                  <div className="row g-2">
                    <div className="col-12 col-md pe-3 mb-4 mb-md-0">
                      <input type="number" className="form-control coupons" placeholder="請輸入紅利點數" value={tempPoints} onChange={(e) => setTempPoints(e.target.value)} />
                    </div>
                    <div className="col-6 col-md-auto"><button className="btn use-btn w-100" type="button">使用</button></div>
                    <div className="col-6 col-md-auto"><button className="btn btn-primary w-100" type="button" onClick={() => setTempPoints("")}>清除</button></div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 mt-4">
                <div className="p-5 p-md-6 border rounded-4 bg-white">
                  <label className="form-label d-block mb-1">優惠碼</label>
                  <div className="row g-2">
                    <div className="col-12 col-md pe-3 mb-4 mb-md-0">
                      <input type="text" className="form-control coupons" placeholder="請輸入優惠碼" value={tempPromo} onChange={(e) => setTempPromo(e.target.value)} />
                    </div>
                    <div className="col-6 col-md-auto"><button className="btn use-btn w-100" type="button" onClick={() => handleApplyCoupon(tempPromo)}>使用</button></div>
                    <div className="col-6 col-md-auto"><button className="btn btn-primary w-100" type="button" onClick={() => setTempPromo("")}>清除</button></div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 mt-4">
                <div className="p-5 p-md-6 border rounded-4 bg-white">
                  <label className="form-label d-block mb-1">優惠券</label>
                  <div className="row g-2">
                    <div className="col-12 col-md pe-3 mb-4 mb-md-0">
                      <select className="form-select coupons" value={tempCoupon} onChange={(e) => setTempCoupon(e.target.value)}>
                        <option value="" disabled>請選擇優惠券</option>
                        <option value="60">天大地大!壽星最大!</option>
                        <option value="percent_0.88">不限金額即享88折</option>
                      </select>
                    </div>
                    <div className="col-6 col-md-auto"><button className="btn use-btn w-100" type="button" onClick={() => handleApplyCoupon()}>使用</button></div>
                    <div className="col-6 col-md-auto"><button className="btn btn-primary w-100" type="button" onClick={() => setTempCoupon("")}>清除</button></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 金額計算 */}
            <div className="row mt-4 pb-8 pb-md-12">
              <div className="col-12">
                <div className="p-5 p-md-6 border rounded-4 bg-white">
                  <div className="d-flex justify-content-between pb-2 fs-7 fs-md-6"><span>小計</span><span>$ {subTotal.toLocaleString()}</span></div>
                  <div className="d-flex justify-content-between pb-2 fs-7 fs-md-6"><span>運費</span><span>$ {shippingFee}</span></div>
                  <div className="d-flex justify-content-between pb-2 fs-7 fs-md-6 text-secondary"><span>折扣金額</span><span>- $ {(subTotal - finalTotal).toLocaleString()}</span></div>
                  <hr className="my-2" />
                  <div className="d-flex justify-content-between"><span className="h5 fw-normal">總金額</span><span className="text-secondary h4">NT$ {(finalTotal + shippingFee).toLocaleString()}</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 訂購表單 */}
        <section className="container">
          <form className="shipping-info" onSubmit={handleCheckout}>
            <h2 className="mt-lg-12 mb-lg-8 mt-8 mb-6">填寫資訊</h2>
            <div className="cart-border p-6 mb-6">
              <div className="form-check mb-4">
                <input className="form-check-input" type="checkbox" id="sameAsMember" />
                <label className="form-check-label" htmlFor="sameAsMember">同會員資料</label>
              </div>
              <div className="gap-2 mb-4 d-md-flex">
                <div style={{ flex: 1 }} className="mb-4 mb-md-0">
                  <label className="form-label">收件人姓名 <span className="text-danger">*</span></label>
                  <input name="name" type="text" className="form-control" placeholder="請填寫姓名" required />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="form-label">聯絡電話 <span className="text-danger">*</span></label>
                  <input name="tel" type="text" className="form-control" placeholder="請填寫聯絡電話" required />
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label">收件地址 <span className="text-danger">*</span></label>
                <div className="d-flex flex-wrap gap-2 mb-4 flex-md-nowrap">
                  <div className="address-col-200 mb-4 mb-md-0"><input type="text" className="form-control" placeholder="郵遞區號" /></div>
                  <div className="address-col-200 mb-4 mb-md-0">
                    <select className="form-select" value={selectedCity} onChange={handleCityChange} required>
                      <option value="" disabled>縣市</option>
                      {Object.keys(cityData).map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="address-col-200 mb-4 mb-md-0">
                    <select className="form-select" value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} disabled={!selectedCity} required>
                      <option value="" disabled>鄉鎮市區</option>
                      {districts.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                  <div className="address-col-624 flex-grow-1"><input name="address" type="text" className="form-control" placeholder="請輸入地址" required /></div>
                </div>
              </div>
              <div><label className="form-label">備註</label><textarea name="message" className="form-control" placeholder="請填寫備註" style={{ height: "160px" }}></textarea></div>
            </div>

            {/* 付款與發票 */}
            <div className="row g-6">
              <div className="col-md-6">
                <div className="cart-border p-6 h-100">
                  <h5 className="text-neutral-800 mb-4">付款方式</h5>
                  {["線上刷卡", "LINE PAY", "APPLE PAY", "ATM轉帳"].map((m, i) => (
                    <div className="form-check py-2 ps-7" key={m}>
                      <input className="form-check-input" type="radio" name="pay" id={`pay${i}`} defaultChecked={i === 0} />
                      <label className="form-check-label" htmlFor={`pay${i}`}>{m}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-6">
                <div className="cart-border p-6 h-100">
                  <h5 className="text-neutral-800 mb-4">發票開立</h5>
                  <div className="mb-4">
                    <select className="form-select" value={selectedInvoiceType} onChange={(e) => setSelectedInvoiceType(e.target.value)}>
                      <option value="personalInvoice">個人發票</option>
                      <option value="companyInvoice">公司發票</option>
                    </select>
                  </div>
                  {selectedInvoiceType === "personalInvoice" ? (
                    <div className="invoice-block">
                      <div className="form-check py-2 ps-7">
                        <input className="form-check-input" type="radio" name="inv" id="inv1" defaultChecked />
                        <label className="form-check-label" htmlFor="inv1">會員載具</label>
                      </div>
                      <div id="invoiceGroup">
                        <div className="d-flex flex-column flex-md-row align-items-md-center">
                          <div className="form-check py-2 ps-7 me-8">
                            <input className="form-check-input" type="radio" name="inv" id="inv2" data-bs-toggle="collapse" data-bs-target="#phoneCol" />
                            <label className="form-check-label" htmlFor="inv2">手機條碼</label>
                          </div>
                          <div className="collapse flex-grow-1" id="phoneCol" data-bs-parent="#invoiceGroup">
                            <input className="form-control" type="text" placeholder="請填寫手機條碼" />
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row align-items-md-center">
                          <div className="form-check py-2 ps-7 me-8">
                            <input className="form-check-input" type="radio" name="inv" id="inv3" data-bs-toggle="collapse" data-bs-target="#personCol" />
                            <label className="form-check-label" htmlFor="inv3">自然人憑證</label>
                          </div>
                          <div className="collapse flex-grow-1" id="personCol" data-bs-parent="#invoiceGroup">
                            <input className="form-control" type="text" placeholder="請填寫自然人憑證" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="invoice-block">
                      <div className="mb-4"><label className="form-label">公司抬頭 *</label><input type="text" className="form-control" placeholder="請填寫公司抬頭" /></div>
                      <div className="mb-4"><label className="form-label">統一編號 *</label><input type="text" className="form-control" placeholder="請填寫統一編號" /></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <button type="submit" className="btn btn-primary w-50 mt-8 mb-12" disabled={isLoading}>
                    {isLoading ? "處理中..." : "確認訂購"}
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ShoppingCart;