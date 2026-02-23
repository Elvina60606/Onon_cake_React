import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminAsyncProducts } from "@/slices/adminProductsSlice";
import AdminProductModal from "@/Component/modal/AdminProductModal";

const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;

const INITIAL_TEMPLATE_DATA = {
  id: "",
  title: "",
  category: "",
  origin_price: "",
  price: "",
  unit: "",
  description: "",
  content: "",
  is_enabled: false,
  imageUrl: "",
  imagesUrl: [],
};

const ProductManagement =() => {

    // 產品資料
    const [templateProduct, setTemplateProduct] = useState(INITIAL_TEMPLATE_DATA);
    const [modalType, setModalType] = useState("")

    // 產品modal
    const [ isOpen, setIsOpen ] = useState(false);
    const adminProducts = useSelector(state => {
        return state.adminproduct.adminProducts;
        });

    const dispatch = useDispatch();
      useEffect(()=>{
            dispatch(getAdminAsyncProducts());
        },[dispatch]);

    const openModal = (type, product) => {
        setModalType(type)
        setTemplateProduct((preData) => ({
          ...preData,
          ...product,
        }))
        setIsOpen(true);
      };

    const updateProduct = async(id) => {
        let url = `${VITE_API_BASE}/api/${VITE_API_PATH}/admin/product`
        let method = "post"
        const productData = {
          data : {
            ...templateProduct,
            origin_price : Number(templateProduct.origin_price),
            price : Number(templateProduct.price),
            is_enabled : templateProduct.is_enabled ? 1 : 0,
            imagesUrl : [...templateProduct.imagesUrl.filter((url) =>  url !== "")]
          }
        }

        if( modalType === "edit" ){
          url = `${VITE_API_BASE}/api/${VITE_API_PATH}/admin/product/${id}`
          method = "put"
        }

        try {
          const response = await axios[method](url, productData)
          dispatch(getAdminAsyncProducts());
          setIsOpen(false)
        } catch (error) {
          console.log(error)
        }
      };

    const delProduct = async(id) => {
        try {
          const response = await axios.delete(`${VITE_API_BASE}/api/${VITE_API_PATH}/admin/product/${id}`)
          dispatch(getAdminAsyncProducts());
          setIsOpen(false)
        } catch (error) {
          console.log(error)
        }
      }; 


    return (<>
        <div className="container mt-5">
          <h2>產品列表</h2>
          <div className="text-end my-4 me-5">
            <button type='button' 
                    className='btn btn-primary' 
                    onClick={() => {openModal("create", INITIAL_TEMPLATE_DATA)}}>
              建立新的產品
            </button>
          </div>
            <table className="table">
                <thead>
                  <tr>
                    <th>分類</th>
                    <th>產品名稱</th>
                    <th>原價</th>
                    <th>售價</th>
                    <th>是否啟用</th>
                    <th>編輯</th>
                  </tr>
                </thead>
                <tbody>
                  {adminProducts?.map((item) => (
                    <tr key={item.id}>
                      <td>{item.category}</td>
                      <td>{item.title}</td>
                      <td>{item.origin_price}</td>
                      <td>{item.price}</td>
                      <td className={item.is_enabled? "text-success" : "" }>
                        {item.is_enabled ? "啟用" : "未啟用"}
                      </td>
                      <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                          <button type="button" 
                                  className="btn btn-outline-primary btn-sm"
                                  onClick={()=>{openModal("edit", item)}}
                                  >
                                  編輯
                          </button>
                          <button type="button" 
                                  className="btn btn-outline-danger btn-sm"
                                  onClick={() => openModal("delete", item)}
                                  >
                                    刪除
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
            </table>
      </div>

      <AdminProductModal isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    modalType={modalType}
                    templateProduct={templateProduct}
                    setTemplateProduct={setTemplateProduct}
                    updateProduct={updateProduct}
                    delProduct={delProduct}
      />
    </>)
}

export default ProductManagement;