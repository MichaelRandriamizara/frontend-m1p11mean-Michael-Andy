import Swal, {SweetAlertOptions, SweetAlertResult} from "sweetalert2";

const close = () => {
    Swal.close();
}

export const startApiCall = (call: (close: () => any, error: (message:string) => any) => any ) => {
    Swal.fire({
        title: 'Chargement...',
        allowOutsideClick: false,
        allowEscapeKey: false,
        willOpen(popup: HTMLElement) {
            Swal.showLoading()
        },
        didOpen(popup: HTMLElement) {
            call(close, showError);
        },
        showConfirmButton: false
    }).then()
}

export const askConfirmation = (message: string, onConfirmed: () => any) => {
    Swal.fire({
        title: message,
        icon: "question",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: true,
        showCancelButton: true
    }).then((res: SweetAlertResult) => {
        if (res.isConfirmed) {
            onConfirmed();
        }
    })
}

export const showSuccess = (onOk: () => any, message?: string) => {
    let data: SweetAlertOptions = {
        title: 'Operation effectuée',
        icon: 'success',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didClose () {
            onOk()
        }
    };
    if(message) data["text"] = message;
    Swal.fire(data).then()
}

export const showError = (message: string) => {
    close();
    Swal.fire({
        title: 'Erreur',
        icon: 'error',
        text: message
    }).then()
}
