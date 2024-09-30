import ReactModal from "react-modal";
// import s from "./ImageModal.module.css";

const ImageModal = ({ modalImage, onClose }) => {
  if (!modalImage || !modalImage.regularUrl) {
    return null; // Якщо немає зображення, модалка не відображатиметься
  }

  return (
    <ReactModal isOpen={true} onRequestClose={onClose}>
      <img src={modalImage.regularUrl} alt="Full-size image" />
      <button onClick={onClose}>Close</button>
    </ReactModal>
  );
};

export default ImageModal;
