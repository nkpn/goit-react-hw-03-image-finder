import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifyInfo = () =>
  toast.dark('Ну введи же хоть что-нибудь, а ;)', {
    position: 'top-right',
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const notifySuccess = () =>
  toast.success('Отличный запрос!', {
    position: 'top-right',
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
