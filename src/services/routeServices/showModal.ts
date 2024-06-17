
export const showModal = (modal: string) => {
    const modalElement = document.getElementById(modal);
    if (modalElement instanceof HTMLDialogElement) {
        modalElement.showModal();
    }
};