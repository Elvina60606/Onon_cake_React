import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "@/slices/adminOrdersSlice";

const AdminPagination = () => {
  const dispatch = useDispatch();
  const { currentPage, pagination } = useSelector(state => state.adminorder);
  const totalPages = pagination?.total_pages || 1;

  const handleClick = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <ul className="pagination justify-content-center">
      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
        <button className="page-link" onClick={() => handleClick(1)}>«</button>
      </li>
      {Array.from({ length: totalPages }, (_, i) => (
        <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handleClick(i + 1)}>{i + 1}</button>
        </li>
      ))}
      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
        <button className="page-link" onClick={() => handleClick(totalPages)}>»</button>
      </li>
    </ul>
  );
};

export default AdminPagination;