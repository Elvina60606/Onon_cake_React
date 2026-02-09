

export const handleNavigateLogout =( myModal, navigate) => {
        myModal.current.hide();

        setTimeout(() => {
            navigate('/login');
        }, 500)
    };