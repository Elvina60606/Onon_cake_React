import images from "@/assets/images/images.js";
import { useState } from "react";
import "./ShoppingCart.scss";

const ShoppingCart = () => {
  // --- 基礎 UI 狀態 ---
  const [selectedInvoiceType, setSelectedInvoiceType] = useState("personalInvoice");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);

  // --- 購物車商品狀態 ---
  const [cartList, setCartList] = useState([
    { id: "product1", title: "超濃厚巴斯克", price: 590, qty: 1, img: images.originalBasque },
    { id: "product2", title: "經典可麗露禮盒 (6入/盒)", price: 420, qty: 2, img: images.productCanele6 },
  ]);

  // --- 優惠折扣狀態 ---
  const [tempPoints, setTempPoints] = useState("");
  const [tempPromo, setTempPromo] = useState("");
  const [tempCoupon, setTempCoupon] = useState(""); 

  const [appliedPoints, setAppliedPoints] = useState(0);
  const [appliedPromo, setAppliedPromo] = useState(0);
  const [activeCouponType, setActiveCouponType] = useState(""); 

  const shippingFee = 60;

  // --- 核心計算邏輯 (連動更新) ---
  const subTotal = cartList.reduce((acc, item) => acc + item.price * item.qty, 0);

  // 動態計算優惠券金額
  let couponDiscount = 0;
  if (activeCouponType === "percent_0.88") {
    couponDiscount = Math.floor(subTotal * 0.12); 
  } else if (activeCouponType) {
    couponDiscount = Number(activeCouponType); 
  }

  // 總金額：小計 + 運費 - 各項折扣
  const finalTotal = Math.max(0, subTotal + shippingFee - appliedPoints - appliedPromo - couponDiscount);

  // --- 處理函式 ---
  const handleQuantityChange = (productId, action) => {
    setCartList((prev) =>
      prev.map((item) => {
        if (item.id === productId) {
          const newQty = action === "increase" ? item.qty + 1 : item.qty - 1;
          return { ...item, qty: Math.max(1, newQty) };
        }
        return item;
      })
    );
  };

  const deleteCartItem = (productId) => {
    if (window.confirm("確定要將此商品從購物車移除嗎？")) {
      setCartList((prev) => prev.filter((item) => item.id !== productId));
    }
  };

  const handleApplyCoupon = () => {
    setActiveCouponType(tempCoupon);
  };

  const handleClearCoupon = () => {
    setTempCoupon("");
    setActiveCouponType("");
  };

  // 縣市資料 (略)
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
    臺東縣: ["臺東市", "成功鎮", "關山鎮", "卑南鄉", "大武鄉", "太麻里鄉", "東河鄉", "長濱鄉", "鹿野鄉", "池上鄉", "綠島鄉", "蘭嶼鄉", "延平鄉", "海端鄉", "達仁鄉", "金峰鄉"],
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

            {/* 商品清單區 (略) */}
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
                {cartList.map((item) => (
                  <li className="list-group-item rounded-4 px-7 py-4 mb-4" key={item.id}>
                    <div className="row align-items-center g-4">
                      <div className="col-12 col-md-7 d-flex align-items-center">
                        <img src={item.img} className="rounded me-4" style={{ width: "80px", height: "80px", objectFit: "cover" }} alt={item.title} />
                        <div>
                          <h5 className="fs-6 fs-md-5">{item.title}</h5>
                          <p className="fs-6 fw-bold mt-2 d-md-none">NT$ {item.price}</p>
                        </div>
                      </div>
                      <div className="col-md-1 d-none d-md-block">
                        <p className="fs-6 fw-bold text-center">NT$ {item.price}</p>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="row align-items-center">
                          <div className="col-5 col-md-6 d-flex justify-content-md-center">
                            <div className="input-group input-group-sm border rounded-2 bg-white" style={{ width: "130px" }}>
                              <button className="btn btn-decrease" type="button" onClick={() => handleQuantityChange(item.id, "decrease")}><i className="bi bi-dash-lg"></i></button>
                              <input type="number" className="form-control fs-6 fw-bold text-center border-0 quantity-input" value={item.qty} readOnly />
                              <button className="btn btn-increase" type="button" onClick={() => handleQuantityChange(item.id, "increase")}><i className="bi bi-plus-lg"></i></button>
                            </div>
                          </div>
                          <div className="col-5 col-md-3">
                            <p className="fs-5 fw-bold text-secondary-500 text-center">NT$ {item.price * item.qty}</p>
                          </div>
                          <div className="col-2 col-md-3 text-center">
                            <button className="btn btn-trash" onClick={() => deleteCartItem(item.id)}><i className="bi bi-trash3-fill"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* 優惠區塊 (略) */}
            <div className="row g-3">
              <div className="col-12 col-md-4 mt-4">
                <div className="p-5 p-md-6 border rounded-4" style={{ backgroundColor: "#ffffff" }}>
                  <label className="form-label d-block mb-1">可用點數：500點</label>
                  <div className="row g-2">
                    <div className="col-12 col-md pe-3 mb-4 mb-md-0">
                      <input type="number" className="form-control coupons" placeholder="請輸入紅利點數" value={tempPoints} onChange={(e) => setTempPoints(e.target.value)} />
                    </div>
                    <div className="col-6 col-md-auto">
                      <button className="btn use-btn w-100" type="button" onClick={() => setAppliedPoints(Number(tempPoints) || 0)}>使用</button>
                    </div>
                    <div className="col-6 col-md-auto">
                      <button className="btn btn-primary w-100" type="button" onClick={() => { setTempPoints(""); setAppliedPoints(0); }}>清除</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 mt-4">
                <div className="p-5 p-md-6 border rounded-4" style={{ backgroundColor: "#ffffff" }}>
                  <label className="form-label d-block mb-1">優惠碼</label>
                  <div className="row g-2">
                    <div className="col-12 col-md pe-3 mb-4 mb-md-0">
                      <input type="text" className="form-control coupons" placeholder="請輸入優惠碼" value={tempPromo} onChange={(e) => setTempPromo(e.target.value)} />
                    </div>
                    <div className="col-6 col-md-auto">
                      <button className="btn use-btn w-100" type="button" onClick={() => setAppliedPromo(tempPromo === "GEMINI" ? 100 : 0)}>使用</button>
                    </div>
                    <div className="col-6 col-md-auto">
                      <button className="btn btn-primary w-100" type="button" onClick={() => { setTempPromo(""); setAppliedPromo(0); }}>清除</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 mt-4">
                <div className="p-5 p-md-6 border rounded-4" style={{ backgroundColor: "#ffffff" }}>
                  <label className="form-label d-block mb-1">優惠券</label>
                  <div className="row g-2">
                    <div className="col-12 col-md pe-3 mb-4 mb-md-0">
                      <select className="form-select coupons" value={tempCoupon} onChange={(e) => setTempCoupon(e.target.value)}>
                        <option value="" disabled>請選擇優惠券</option>
                        <option value="60">天大地大!壽星最大!</option>
                        <option value="percent_0.88">不限金額即享88折</option>
                      </select>
                    </div>
                    <div className="col-6 col-md-auto">
                      <button className="btn use-btn w-100" type="button" onClick={handleApplyCoupon}>使用</button>
                    </div>
                    <div className="col-6 col-md-auto">
                      <button className="btn btn-primary w-100" type="button" onClick={handleClearCoupon}>清除</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 金額計算區 - 已更新顏色為 text-secondary */}
            <div className="row mt-4 pb-8 pb-md-12">
              <div className="col-12">
                <div className="p-5 p-md-6 border rounded-4" style={{ backgroundColor: "#ffffff" }}>
                  <div className="d-flex justify-content-between pb-2 fs-7 fs-md-6">
                    <span>小計</span>
                    <span>$ {subTotal.toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between pb-2 fs-7 fs-md-6">
                    <span>運費</span>
                    <span>$ {shippingFee}</span>
                  </div>
                  <div className="d-flex justify-content-between pb-2 fs-7 fs-md-6 text-secondary">
                    <span>點數</span>
                    <span>- $ {appliedPoints.toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between pb-2 fs-7 fs-md-6 text-secondary">
                    <span>優惠碼</span>
                    <span>- $ {appliedPromo.toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between fs-7 fs-md-6 text-secondary">
                    <span>優惠券</span>
                    <span>- $ {couponDiscount.toLocaleString()}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="d-flex justify-content-between">
                    <span className="h5" style={{ fontWeight: 500 }}>總金額</span>
                    <span className="text-secondary h4">NT$ {finalTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 填寫資訊 (略) */}
        <section className="container">
          <div className="shipping-info">
            <h2 className="mt-lg-12 mb-lg-8 mt-8 mb-6">填寫資訊</h2>
            <form className="cart-border p-6 mb-6">
              <div className="form-check mb-4">
                <input className="form-check-input" type="checkbox" id="sameAsMember" />
                <label className="form-check-label" htmlFor="sameAsMember">同會員資料</label>
              </div>
              <div className="gap-2 mb-4 d-md-flex">
                <div style={{ flex: 1 }} className="mb-4 mb-md-0">
                  <label className="form-label">收件人姓名 <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" placeholder="請填寫姓名" style={{ height: "40px" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="form-label">聯絡電話 <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" placeholder="請填寫聯絡電話" style={{ height: "40px" }} />
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label">收件地址 <span className="text-danger">*</span></label>
                <div className="d-flex flex-wrap gap-2 mb-4 flex-md-nowrap">
                  <div className="address-col-200 mb-4 mb-md-0">
                    <input type="text" className="form-control" placeholder="郵遞區號" style={{ height: "40px" }} />
                  </div>
                  <div className="address-col-200 mb-4 mb-md-0">
                    <select className="form-select" style={{ height: "40px" }} value={selectedCity} onChange={handleCityChange}>
                      <option value="" disabled>縣市</option>
                      {Object.keys(cityData).map((c) => (<option key={c} value={c}>{c}</option>))}
                    </select>
                  </div>
                  <div className="address-col-200 mb-4 mb-md-0">
                    <select className="form-select" style={{ height: "40px" }} value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} disabled={!selectedCity}>
                      <option value="" disabled>鄉鎮市區</option>
                      {districts.map((d) => (<option key={d} value={d}>{d}</option>))}
                    </select>
                  </div>
                  <div className="address-col-624 flex-grow-1">
                    <input type="text" className="form-control" placeholder="請輸入地址" style={{ height: "40px" }} />
                  </div>
                </div>
              </div>
              <div>
                <label className="form-label">備註</label>
                <textarea className="form-control" placeholder="請填寫備註" style={{ height: "160px" }}></textarea>
              </div>
            </form>
          </div>
        </section>

        {/* 付款與發票 (略) */}
        <section className="container">
          <div className="row g-6">
            <div className="col-md-6">
              <div className="cart-border p-6 h-100">
                <h5 className="text-neutral-800 mb-4">付款方式</h5>
                {["線上刷卡", "LINE PAY", "APPLE PAY", "ATM轉帳"].map((m, i) => (
                  <div className="form-check py-2 ps-7" key={m}>
                    <input className="form-check-input" type="radio" name="pay" id={`c${i}`} defaultChecked={i === 0} />
                    <label className="form-check-label" htmlFor={`c${i}`}>{m}</label>
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
                      <input className="form-check-input" type="radio" name="inv" id="r1" defaultChecked />
                      <label className="form-check-label" htmlFor="r1">會員載具</label>
                    </div>
                    <div id="invoiceCollapseGroup">
                      <div className="d-flex flex-column flex-md-row align-items-md-center">
                        <div className="form-check py-2 ps-7 me-8">
                          <input className="form-check-input" type="radio" name="inv" id="r2" data-bs-toggle="collapse" data-bs-target="#mb1" />
                          <label className="form-check-label" htmlFor="r2">手機條碼</label>
                        </div>
                        <div className="collapse flex-grow-1" id="mb1" data-bs-parent="#invoiceCollapseGroup">
                          <input className="form-control" type="text" placeholder="請填寫手機條碼" style={{ height: "40px" }} />
                        </div>
                      </div>
                      <div className="d-flex flex-column flex-md-row align-items-md-center">
                        <div className="form-check py-2 ps-7 me-8">
                          <input className="form-check-input" type="radio" name="inv" id="r3" data-bs-toggle="collapse" data-bs-target="#mb2" />
                          <label className="form-check-label" htmlFor="r3">自然人憑證</label>
                        </div>
                        <div className="collapse flex-grow-1" id="mb2" data-bs-parent="#invoiceCollapseGroup">
                          <input className="form-control" type="text" placeholder="請填寫自然人憑證" style={{ height: "40px" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="invoice-block">
                    <div className="mb-4">
                      <label className="form-label">公司抬頭 *</label>
                      <input type="text" className="form-control" placeholder="請填寫公司抬頭" />
                    </div>
                    <div className="mb-4">
                      <label className="form-label">統一編號 *</label>
                      <input type="text" className="form-control" placeholder="請填寫統一編號" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <button className="btn btn-primary w-50 mt-8 mb-12">
              <p className="m-0">確認訂購</p>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShoppingCart;