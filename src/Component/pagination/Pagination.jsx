import { useDispatch } from "react-redux";
import { setCurrentPage } from "@/slices/productsSlice";

const Pagination =({ currentPage, totalPages, onPageChange }) =>{
    const dispatch = useDispatch();
    // const { currentPage, pagination } = useSelector(state => state.product);
    // const totalPages = pagination?.total_pages || 1;
    
    // const handleClick = (page) => {
    //     dispatch(setCurrentPage(page));
    //     };

      const handleClick = (page) => onPageChange(page);

    return(<>
        <div className="py-4">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center align-items-center gap-2">
                  <li className={`page-item ${currentPage === 1 ? 'disabled': ''}`}>
                    <button className="page-link pagination-icon" type="button"
                            onClick={()=>dispatch(setCurrentPage(1))}>
                      <span className="material-symbols-outlined align-bottom fill fs-5">
                        skip_previous
                      </span>
                    </button>
                  </li>
                  <li className="page-item">
                    <button className="page-link pagination-icon" type="button"
                            onClick={()=>dispatch(setCurrentPage(Math.max(currentPage - 1, 1)))}>
                      <span className="material-symbols-outlined align-bottom fs-5">
                        chevron_left
                      </span>
                    </button>
                  </li>
                  {Array.from({length: totalPages}, (_, i) =>(
                    <li className={`page-item ${currentPage === i+1 ? 'active' : ''}`} 
                        key={ i +1 }>
                        <button className="page-link" type="button"
                                onClick={()=> handleClick( i +1 )}>
                            <span className="align-text-bottom">{ i +1 }</span>
                        </button>
                    </li>
                        ) 
                    )}
                  <li className="page-item">
                    <button className="page-link pagination-icon" type="button"
                            onClick={()=>dispatch(setCurrentPage(Math.min(currentPage + 1, totalPages)))}>
                      <span className="material-symbols-outlined align-bottom fs-5">
                        chevron_right
                      </span>
                    </button>
                  </li>
                  <li className={`page-item ${currentPage === totalPages ? 'disabled': ''}`}>
                    <button className="page-link pagination-icon" type="button"
                            onClick={()=>dispatch(setCurrentPage(totalPages))}>
                      <span className="material-symbols-outlined align-bottom fill fs-5">
                        skip_next
                      </span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
    </>)
}

export default Pagination;