import images from "@/assets/images/images.js";

import { useState } from "react";
import "./ShoppingCart.scss";

const ShoppingCart = () => {
  const [selectedInvoiceType, setSelectedInvoiceType] = useState("personalInvoice");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);

  // 購物車商品數量管理
  const [quantities, setQuantities] = useState({
    product1: 1,
    product2: 2,
  });

  // 台灣縣市與地區資料
  const cityData = {
    基隆市: [
      "仁愛區",
      "信義區",
      "中正區",
      "中山區",
      "安樂區",
      "暖暖區",
      "七堵區",
    ],
    臺北市: [
      "中正區",
      "大同區",
      "中山區",
      "松山區",
      "大安區",
      "萬華區",
      "信義區",
      "士林區",
      "北投區",
      "內湖區",
      "南港區",
      "文山區",
    ],
    新北市: [
      "萬里區",
      "金山區",
      "板橋區",
      "汐止區",
      "深坑區",
      "石碇區",
      "瑞芳區",
      "平溪區",
      "雙溪區",
      "貢寮區",
      "新店區",
      "坪林區",
      "烏來區",
      "永和區",
      "中和區",
      "土城區",
      "三峽區",
      "樹林區",
      "鶯歌區",
      "三重區",
      "新莊區",
      "泰山區",
      "林口區",
      "蘆洲區",
      "五股區",
      "淡水區",
      "三芝區",
      "石門區",
      "八里區",
    ],
    桃園市: [
      "中壢區",
      "平鎮區",
      "龍潭區",
      "楊梅區",
      "新屋區",
      "觀音區",
      "桃園區",
      "龜山區",
      "八德區",
      "大溪區",
      "復興區",
      "大園區",
      "蘆竹區",
    ],
    新竹市: ["東區", "北區", "香山區"],
    新竹縣: [
      "竹北市",
      "竹東鎮",
      "新埔鎮",
      "關西鎮",
      "湖口鄉",
      "新豐鄉",
      "峨眉鄉",
      "寶山鄉",
      "北埔鄉",
      "芎林鄉",
      "五峰鄉",
      "尖石鄉",
    ],
    苗栗縣: [
      "苗栗市",
      "苑裡鎮",
      "通霄鎮",
      "竹南鎮",
      "頭份市",
      "後龍鎮",
      "卓蘭鎮",
      "大湖鄉",
      "公館鄉",
      "銅鑼鄉",
      "南庄鄉",
      "頭屋鄉",
      "三義鄉",
      "西湖鄉",
      "造橋鄉",
      "三灣鄉",
      "獅潭鄉",
      "泰安鄉",
    ],
    臺中市: [
      "中區",
      "東區",
      "南區",
      "西區",
      "北區",
      "西屯區",
      "南屯區",
      "北屯區",
      "豐原區",
      "東勢區",
      "大甲區",
      "清水區",
      "沙鹿區",
      "梧棲區",
      "后里區",
      "神岡區",
      "潭子區",
      "大雅區",
      "新社區",
      "石岡區",
      "外埔區",
      "大安區",
      "烏日區",
      "大肚區",
      "龍井區",
      "霧峰區",
      "太平區",
      "大里區",
      "和平區",
    ],
    彰化縣: [
      "彰化市",
      "員林市",
      "和美鎮",
      "鹿港鎮",
      "溪湖鎮",
      "田中鎮",
      "北斗鎮",
      "二林鎮",
      "線西鄉",
      "伸港鄉",
      "福興鄉",
      "秀水鄉",
      "花壇鄉",
      "芬園鄉",
      "大村鄉",
      "埔心鄉",
      "埔鹽鄉",
      "永靖鄉",
      "社頭鄉",
      "二水鄉",
      "田尾鄉",
      "埤頭鄉",
      "芳苑鄉",
      "大城鄉",
      "竹塘鄉",
      "溪州鄉",
    ],
    南投縣: [
      "南投市",
      "埔里鎮",
      "草屯鎮",
      "竹山鎮",
      "集集鎮",
      "名間鄉",
      "鹿谷鄉",
      "中寮鄉",
      "魚池鄉",
      "國姓鄉",
      "水里鄉",
      "信義鄉",
      "仁愛鄉",
    ],
    雲林縣: [
      "斗六市",
      "斗南鎮",
      "虎尾鎮",
      "西螺鎮",
      "土庫鎮",
      "北港鎮",
      "古坑鄉",
      "大埤鄉",
      "莿桐鄉",
      "林內鄉",
      "二崙鄉",
      "崙背鄉",
      "麥寮鄉",
      "東勢鄉",
      "褒忠鄉",
      "臺西鄉",
      "元長鄉",
      "四湖鄉",
      "口湖鄉",
      "水林鄉",
    ],
    嘉義市: ["東區", "西區"],
    嘉義縣: [
      "太保市",
      "大林鎮",
      "民雄鄉",
      "溪口鄉",
      "新港鄉",
      "六腳鄉",
      "東石鄉",
      "義竹鄉",
      "布袋鎮",
      "鹿草鄉",
      "竹崎鄉",
      "梅山鄉",
      "番路鄉",
      "大埔鄉",
      "阿里山鄉",
      "中埔鄉",
      "水上鄉",
    ],
    臺南市: [
      "中西區",
      "東區",
      "南區",
      "北區",
      "安平區",
      "安南區",
      "永康區",
      "歸仁區",
      "新化區",
      "左鎮區",
      "玉井區",
      "楠西區",
      "南化區",
      "仁德區",
      "關廟區",
      "龍崎區",
      "官田區",
      "麻豆區",
      "佳里區",
      "西港區",
      "七股區",
      "將軍區",
      "學甲區",
      "北門區",
      "新營區",
      "後壁區",
      "白河區",
      "東山區",
      "六甲區",
      "下營區",
      "柳營區",
      "鹽水區",
      "善化區",
      "大內區",
      "山上區",
      "新市區",
      "安定區",
    ],
    高雄市: [
      "新興區",
      "前金區",
      "苓雅區",
      "鹽埕區",
      "鼓山區",
      "旗津區",
      "前鎮區",
      "三民區",
      "楠梓區",
      "小港區",
      "左營區",
      "仁武區",
      "大社區",
      "岡山區",
      "路竹區",
      "阿蓮區",
      "田寮區",
      "燕巢區",
      "橋頭區",
      "梓官區",
      "彌陀區",
      "永安區",
      "湖內區",
      "鳳山區",
      "大寮區",
      "林園區",
      "鳥松區",
      "大樹區",
      "旗山區",
      "美濃區",
      "六龜區",
      "內門區",
      "杉林區",
      "甲仙區",
      "桃源區",
      "那瑪夏區",
      "茂林區",
      "茄蓃區",
    ],
    屏東縣: [
      "屏東市",
      "潮州鎮",
      "東港鎮",
      "恆春鎮",
      "萬丹鄉",
      "長治鄉",
      "麟洛鄉",
      "九如鄉",
      "里港鄉",
      "鹽埔鄉",
      "高樹鄉",
      "萬巒鄉",
      "內埔鄉",
      "竹田鄉",
      "新埤鄉",
      "枋寮鄉",
      "新園鄉",
      "崁頂鄉",
      "林邊鄉",
      "南州鄉",
      "佳冬鄉",
      "琉球鄉",
      "車城鄉",
      "滿州鄉",
      "枋山鄉",
      "三地門鄉",
      "霧臺鄉",
      "瑪家鄉",
      "泰武鄉",
      "來義鄉",
      "春日鄉",
      "獅子鄉",
      "牡丹鄉",
    ],
    宜蘭縣: [
      "宜蘭市",
      "羅東鎮",
      "蘇澳鎮",
      "頭城鎮",
      "礁溪鄉",
      "壯圍鄉",
      "員山鄉",
      "冬山鄉",
      "五結鄉",
      "三星鄉",
      "大同鄉",
      "南澳鄉",
    ],
    花蓮縣: [
      "花蓮市",
      "鳳林鎮",
      "玉里鎮",
      "新城鄉",
      "吉安鄉",
      "壽豐鄉",
      "光復鄉",
      "豐濱鄉",
      "瑞穗鄉",
      "萬榮鄉",
      "秀林鄉",
      "卓溪鄉",
      "富里鄉",
    ],
    臺東縣: [
      "臺東市",
      "成功鎮",
      "關山鎮",
      "卑南鄉",
      "大武鄉",
      "太麻里鄉",
      "東河鄉",
      "長濱鄉",
      "鹿野鄉",
      "池上鄉",
      "綠島鄉",
      "蘭嶼鄉",
      "延平鄉",
      "海端鄉",
      "達仁鄉",
      "金峰鄉",
    ],
  };

  // 處理縣市選擇
  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    setSelectedDistrict("");
    setDistricts(cityData[city] || []);
  };

  // 處理發票類型切換
  const handleInvoiceTypeChange = (e) => {
    setSelectedInvoiceType(e.target.value);
  };

  // 處理商品數量增減
  const handleQuantityChange = (productId, action) => {
    setQuantities((prev) => {
      const currentValue = prev[productId] || 1;
      if (action === "decrease" && currentValue > 1) {
        return { ...prev, [productId]: currentValue - 1 };
      } else if (action === "increase") {
        return { ...prev, [productId]: currentValue + 1 };
      }
      return prev;
    });
  };

  return (
    <div className="shopping-cart">
      {/* 購物車商品清單區塊 */}
      <section className="bg-neutral-50">
        <div className="container">
          <h2 className="fs-3 fs-md-2 text-black pt-8 pt-md-12 mb-6 mb-md-8">
            購物車商品清單
          </h2>

          <div>
            {/* 購物車標題列 */}
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

            <ul className="list-group">
              {/* 商品 1 */}
              <li className="list-group-item rounded-4 px-7 py-4 mb-4">
                <div className="row align-items-center g-4">
                  <div className="col-12 col-md-7 d-flex align-items-center">
                    <img
                      src={images.originalBasque} // 改用導入的 images 物件
                      className="rounded me-4"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }} // 加入 objectFit 避免變形
                      alt="超濃厚巴斯克"
                    />
                    <div>
                      <h5 className="fs-6 fs-md-5">超濃厚巴斯克</h5>
                      <p className="fs-6 fw-bold mt-2 d-md-none">NT$ 590</p>
                    </div>
                  </div>
                  <div className="col-md-1 d-none d-md-block">
                    <p className="fs-6 fw-bold text-center">NT$ 590</p>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="row align-items-center">
                      <div className="col-5 col-md-6 d-flex justify-content-md-center">
                        <div
                          className="input-group input-group-sm border rounded-2 bg-white"
                          style={{ width: "130px" }}
                        >
                          <button
                            className="btn btn-decrease"
                            type="button"
                            onClick={() =>
                              handleQuantityChange("product1", "decrease")
                            }
                          >
                            <i className="bi bi-dash-lg"></i>
                          </button>
                          <input
                            type="number"
                            className="form-control fs-6 fw-bold text-center border-0 quantity-input"
                            value={quantities.product1}
                            min="1"
                            readOnly
                          />
                          <button
                            className="btn btn-increase"
                            type="button"
                            onClick={() =>
                              handleQuantityChange("product1", "increase")
                            }
                          >
                            <i className="bi bi-plus-lg"></i>
                          </button>
                        </div>
                      </div>
                      <div className="col-5 col-md-3">
                        <p className="fs-5 fw-bold text-secondary-500 text-center">
                          NT$ {590 * quantities.product1}
                        </p>
                      </div>
                      <div className="col-2 col-md-3 text-center">
                        <button className="btn btn-trash">
                          <i className="bi bi-trash3-fill"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* 商品 2 */}
              <li className="list-group-item rounded-4 px-7 py-4 mb-4">
                <div className="row align-items-center g-4">
                  <div className="col-12 col-md-7 d-flex align-items-center">
                    <img
                      src={images.productCanele6} // 改用導入的 images 物件
                      className="rounded me-4"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                      alt="經典可麗露禮盒"
                    />
                    <div>
                      <h5 className="fs-6 fs-md-5">經典可麗露禮盒 (6入/盒)</h5>
                      <p className="fs-6 fw-bold mt-2 d-md-none">NT$ 420</p>
                    </div>
                  </div>
                  <div className="col-md-1 d-none d-md-block">
                    <p className="fs-6 fw-bold text-center">NT$ 420</p>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="row align-items-center">
                      <div className="col-5 col-md-6 d-flex justify-content-md-center">
                        <div
                          className="input-group input-group-sm border rounded-2 bg-white"
                          style={{ width: "130px" }}
                        >
                          <button
                            className="btn btn-decrease"
                            type="button"
                            onClick={() =>
                              handleQuantityChange("product2", "decrease")
                            }
                          >
                            <i className="bi bi-dash-lg"></i>
                          </button>
                          <input
                            type="number"
                            className="form-control fs-6 fw-bold text-center border-0 quantity-input"
                            value={quantities.product2}
                            min="1"
                            readOnly
                          />
                          <button
                            className="btn btn-increase"
                            type="button"
                            onClick={() =>
                              handleQuantityChange("product2", "increase")
                            }
                          >
                            <i className="bi bi-plus-lg"></i>
                          </button>
                        </div>
                      </div>
                      <div className="col-5 col-md-3">
                        <p className="fs-5 fw-bold text-secondary-500 text-center">
                          NT$ {420 * quantities.product2}
                        </p>
                      </div>
                      <div className="col-2 col-md-3 text-center">
                        <button className="btn btn-trash">
                          <i className="bi bi-trash3-fill"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* 使用紅利點數與結帳總金額區塊 */}
          <div className="row g-3">
            {/* 紅利點數 */}
            <div className="col-12 col-md-4 mt-4">
              <div
                className="p-5 p-md-6 border rounded-4"
                style={{ backgroundColor: "#ffffff" }}
              >
                <label className="form-label d-block mb-1">
                  可用點數:10點,本次使用
                </label>
                <div className="row g-2">
                  <div className="col-12 col-md pe-3 mb-4 mb-md-0">
                    <input
                      type="number"
                      className="form-control coupons"
                      placeholder="請輸入紅利點數"
                    />
                  </div>
                  <div className="col-6 col-md-auto">
                    <button className="btn use-btn w-100">使用</button>
                  </div>
                  <div className="col-6 col-md-auto">
                    <button className="btn btn-primary w-100">清除</button>
                  </div>
                </div>
              </div>
            </div>

            {/* 優惠碼 */}
            <div className="col-12 col-md-4 mt-4">
              <div
                className="p-5 p-md-6 border rounded-4"
                style={{ backgroundColor: "#ffffff" }}
              >
                <label className="form-label d-block mb-1">優惠碼</label>
                <div className="row g-2">
                  <div className="col-12 col-md pe-3 mb-4 mb-md-0">
                    <input
                      type="text"
                      className="form-control coupons"
                      placeholder="請輸入優惠碼"
                    />
                  </div>
                  <div className="col-6 col-md-auto">
                    <button className="btn use-btn w-100">使用</button>
                  </div>
                  <div className="col-6 col-md-auto">
                    <button className="btn btn-primary w-100">清除</button>
                  </div>
                </div>
              </div>
            </div>

            {/* 優惠券 */}
            <div className="col-12 col-md-4 mt-4">
              <div
                className="p-5 p-md-6 border rounded-4"
                style={{ backgroundColor: "#ffffff" }}
              >
                <label className="form-label d-block mb-1">優惠券</label>
                <div className="row g-2">
                  <div className="col-12 col-md pe-3 mb-4 mb-md-0">
                    <select className="form-select coupons" defaultValue="">
                      <option value="" disabled>
                        請選擇優惠券
                      </option>
                      <option value="1">優惠券 A</option>
                      <option value="2">優惠券 B</option>
                    </select>
                  </div>
                  <div className="col-6 col-md-auto">
                    <button className="btn use-btn w-100">使用</button>
                  </div>
                  <div className="col-6 col-md-auto">
                    <button className="btn btn-primary w-100">清除</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 訂單金額區塊 */}
          <div className="row mt-4 pb-8 pb-md-12">
            <div className="col-12">
              <div
                className="p-5 p-md-6 border rounded-4"
                style={{ backgroundColor: "#ffffff" }}
              >
                <div className="d-flex justify-content-between pb-2 fs-7 fs-md-6">
                  <span>小計</span>
                  <span>$ 10,000</span>
                </div>
                <div className="d-flex justify-content-between pb-2 fs-7 fs-md-6">
                  <span>運費</span>
                  <span>$ 0</span>
                </div>
                <div className="d-flex justify-content-between pb-2 fs-7 fs-md-6">
                  <span>點數</span>
                  <span>- $ 50</span>
                </div>
                <div className="d-flex justify-content-between pb-2 fs-7 fs-md-6">
                  <span>優惠碼</span>
                  <span>- $ 50</span>
                </div>
                <div className="d-flex justify-content-between fs-7 fs-md-6">
                  <span>優惠券</span>
                  <span>- $ 50</span>
                </div>
                <hr className="my-2" />
                <div className="d-flex justify-content-between">
                  <span className="h5" style={{ fontWeight: 500 }}>
                    總金額
                  </span>
                  <span className="text-secondary h4">NT$ 9,850</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 填寫資訊區塊 */}
      <section className="container">
        <div className="shipping-info">
          <h2 className="mt-lg-12 mb-lg-8 mt-8 mb-6">填寫資訊</h2>
          <form className="cart-border p-6 mb-6">
            {/* 同會員資料 */}
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

            {/* 收件人姓名 & 聯絡電話 */}
            <div className="gap-2 mb-4 d-md-flex">
              <div style={{ flex: 1 }} className="mb-4 mb-md-0">
                <label htmlFor="recipientName" className="form-label">
                  收件人姓名 <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control placeholder-neutral-500"
                  id="recipientName"
                  placeholder="請填寫姓名"
                  style={{ height: "40px", width: "100%" }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="phone" className="form-label">
                  聯絡電話 <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control placeholder-neutral-500"
                  id="phone"
                  placeholder="請填寫聯絡電話"
                  style={{ height: "40px", width: "100%" }}
                />
              </div>
            </div>

            {/* 收件地址 */}
            <div className="mb-4">
              <label className="form-label">
                收件地址 <span className="text-danger">*</span>
              </label>
              <div className="d-flex flex-wrap gap-2 mb-4 flex-md-nowrap">
                <div className="address-col-200 mb-4 mb-md-0">
                  <input
                    type="text"
                    className="form-control placeholder-neutral-500"
                    placeholder="郵遞區號"
                    style={{ height: "40px" }}
                  />
                </div>
                <div className="address-col-200 mb-4 mb-md-0">
                  <select
                    className="form-select text-neutral-500"
                    id="city-select"
                    style={{ height: "40px" }}
                    value={selectedCity}
                    onChange={handleCityChange}
                  >
                    <option value="" disabled>
                      縣市
                    </option>
                    {Object.keys(cityData).map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="address-col-200 mb-4 mb-md-0">
                  <select
                    className="form-select text-neutral-500"
                    id="district-select"
                    style={{ height: "40px" }}
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    disabled={!selectedCity}
                  >
                    <option value="" disabled>
                      鄉鎮市區
                    </option>
                    {districts.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="address-col-624">
                  <input
                    type="text"
                    className="form-control placeholder-neutral-500"
                    placeholder="請輸入地址"
                    style={{ height: "40px" }}
                  />
                </div>
              </div>
            </div>

            {/* 預計出貨日 */}
            <div className="mb-4">
              <label htmlFor="shipDate" className="form-label">
                預計出貨日 <span className="text-danger">*</span>
              </label>
              <div
                className="input-group shipdate-picker"
                style={{ maxWidth: "1248px", height: "40px" }}
              >
                <input
                  type="text"
                  className="form-control placeholder-neutral-500"
                  id="shipDate"
                  placeholder="請選擇日期"
                  readOnly
                />
                <button
                  className="btn btn-outline-neutral date-text-trigger"
                  type="button"
                >
                  <i className="bi bi-calendar"></i>
                </button>
              </div>
            </div>

            {/* 備註 */}
            <div>
              <label htmlFor="remarks" className="form-label text-neutral-800">
                備註
              </label>
              <textarea
                className="form-control resize-none placeholder-neutral-500"
                id="remarks"
                placeholder="請填寫備註"
                style={{ maxWidth: "1248px", height: "160px" }}
              ></textarea>
            </div>
          </form>
        </div>
      </section>

      {/* 付款方式 & 發票區塊 */}
      <section className="container">
        <div className="row flex-md-colomn g-6">
          {/* 付款方式 */}
          <div className="col-md-6">
            <div className="cart-border p-6">
              <h5 className="text-neutral-800 mb-4">付款方式</h5>
              <div className="form-check py-2 ps-7">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="creditCard"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="creditCard">
                  線上刷卡
                </label>
              </div>
              <div className="form-check py-2 ps-7">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="linePay"
                />
                <label className="form-check-label" htmlFor="linePay">
                  LINE PAY
                </label>
              </div>
              <div className="form-check py-2 ps-7">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="applePay"
                />
                <label className="form-check-label" htmlFor="applePay">
                  APPLE PAY
                </label>
              </div>
              <div className="form-check py-2 ps-7">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="atmTransfer"
                />
                <label className="form-check-label" htmlFor="atmTransfer">
                  ATM轉帳
                </label>
              </div>
            </div>
          </div>

          {/* 發票開立 */}
          <div className="col-md-6">
            <div className="cart-border p-6">
              <h5 className="text-neutral-800 mb-4">發票開立</h5>
              <div className="mb-4">
                <select
                  className="form-select"
                  id="invoiceSelect"
                  value={selectedInvoiceType}
                  onChange={handleInvoiceTypeChange}
                >
                  <option value="personalInvoice">個人發票</option>
                  <option value="companyInvoice">公司發票</option>
                </select>
              </div>

              {/* 個人發票開立方式 */}
              {selectedInvoiceType === "personalInvoice" && (
                <div className="invoice-block" id="personalBlock">
                  <div className="form-check py-2 ps-7">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="invoiceCarrier"
                      id="memberCarrier"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="memberCarrier">
                      會員載具
                    </label>
                  </div>

                  <div id="invoiceCollapseGroup">
                    {/* 手機條碼 */}
                    <div className="d-flex flex-column flex-md-row">
                      <div className="form-check py-2 ps-7 me-8">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="invoiceCarrier"
                          id="mobileBarcode"
                          data-bs-toggle="collapse"
                          data-bs-target="#mobileBarcodeInput"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="mobileBarcode"
                        >
                          手機條碼
                        </label>
                      </div>
                      <div
                        className="collapse flex-grow-1"
                        id="mobileBarcodeInput"
                        data-bs-parent="#invoiceCollapseGroup"
                      >
                        <input
                          className="form-control rounded-3"
                          type="text"
                          placeholder="請填寫手機條碼"
                          style={{ height: "40px" }}
                        />
                      </div>
                    </div>

                    {/* 自然人憑證 */}
                    <div className="d-flex flex-column flex-md-row">
                      <div className="form-check py-2 ps-7 me-8">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="invoiceCarrier"
                          id="citizenDigitalCertificate"
                          data-bs-toggle="collapse"
                          data-bs-target="#citizenDigitalCertificateInput"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="citizenDigitalCertificate"
                        >
                          自然人憑證
                        </label>
                      </div>
                      <div
                        className="collapse flex-grow-1"
                        id="citizenDigitalCertificateInput"
                        data-bs-parent="#invoiceCollapseGroup"
                      >
                        <input
                          className="form-control rounded-3"
                          type="text"
                          placeholder="請填寫自然人憑證"
                          style={{ height: "40px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 公司發票區塊 */}
              {selectedInvoiceType === "companyInvoice" && (
                <div className="invoice-block" id="companyBlock">
                  <div className="mb-4">
                    <label htmlFor="companyName" className="form-label">
                      公司抬頭
                      <span className="fs-7 text-alert-500 align-top ms-1">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="companyName"
                      placeholder="請填寫公司抬頭"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="unifiedNumber" className="form-label">
                      統一編號
                      <span className="fs-7 text-alert-500 align-top ms-1">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="unifiedNumber"
                      placeholder="請填寫統一編號"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <button className="btn btn-primary w-50 mt-8 mb-12">
            <p>確認訂購</p>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ShoppingCart;
