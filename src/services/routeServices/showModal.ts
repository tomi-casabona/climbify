
export const showModal = () => {
    const modalElement = document.getElementById("my_modal_1");
    if (modalElement instanceof HTMLDialogElement) {
        modalElement.showModal();
    }
};