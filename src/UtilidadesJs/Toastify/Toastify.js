import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function notifyBorrarProducto(){
     toast.error('Borraste un producto!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
}

export function notifyBorrasTodo(){
    toast.error('Borraste Todo el Carrito!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
}

export function notifyCompra(){
    toast.success('🚀 Gracais por tu compra!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
}

export function notifyAgregar(){

    toast.success('💪Producto Agregado al Carrito!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
} 