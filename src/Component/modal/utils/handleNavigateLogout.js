import { logout } from "@/slices/loginSlice";


export const handleNavigateLogout =(dispatch, myModal, navigate) => {
        dispatch(logout());
        myModal.current.hide();
        navigate('/login');
    };