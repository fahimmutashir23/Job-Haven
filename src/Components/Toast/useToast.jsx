import Swal from "sweetalert2";

const alert = Swal.fire({
  title: 'success',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})


const useToast = () => {
  return alert
    
};

export default useToast;