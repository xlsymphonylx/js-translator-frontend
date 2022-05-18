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

export const swalError = async (text) => {
  await MySwal.fire({
    icon: "error",
    titleText: "Error!",
    text: text,
    timer: 2000,
    showConfirmButton: false,
  });
};
