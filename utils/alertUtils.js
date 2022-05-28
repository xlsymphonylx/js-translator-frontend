import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export const swalSuccess = async (text) => {
  await MySwal.fire({
    icon: "success",
    titleText: "Exito!",
    text: text,
    timer: 2000,
    showConfirmButton: false,
  });
};
export const swalWarning = async (text) => {
  await MySwal.fire({
    icon: "warning",
    titleText: "Advertencia!",
    text: text,
    timer: 2000,
    showConfirmButton: false,
  });
};
export const swalDecision = async (text, callback) => {
  await MySwal.fire({
    title: "Estas Seguro?",
    showCancelButton: true,
    confirmButtonColor: "green",
    text: text,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
    }
  });
};
export const swalError = async (text) => {
  await MySwal.fire({
    icon: "error",
    titleText: "Error!",
    text: text,
    timer: 2000,
    showConfirmButton: false,
  });
};
