import Swal, {SweetAlertOptions} from "sweetalert2";
import {HttpError} from "../interface";

export const ObserverObject = (next: (res: any) => any) => {
  return {
    next: next,
    error: (err: any) => {
      console.log(err);
      let errorData: SweetAlertOptions = {icon: "error", title: "Erreur",};
      if (err.status === 0) {
        errorData.text = "Êtes-vous connecté a internet ?";
      }
      else if (err.status === 403) {
        errorData.text = "Veuillez vous connecter a un compte qui peut ouvrir cette Page !";
      }
      else if (500 - err.status <= 0) {
        errorData.text = "Une erreur est survenue"
      }
      else {
        errorData.text = err.error.message;
      }
      Swal.fire(errorData).then();
    }
  }
};
