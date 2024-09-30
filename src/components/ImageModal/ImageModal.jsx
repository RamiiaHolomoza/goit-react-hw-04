import ReactModal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ modalImage, onClose }) => {
  if (!modalImage || !modalImage.regularUrl) {
    return null; // Якщо немає зображення, модалка не відображатиметься
  }

  return (
    <ReactModal
      isOpen={true}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={{
        overlay: {
          backgroundColor: "rgba(40, 40, 40, 0.8)",
        },
        content: {
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "1px solid white",
          background: "transparent",
          WebkitOverflowScrolling: "touch",
          padding: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // width: "auto",
          // height: "auto",
          width: "1000px",
          // max-width: "1000px",
          height: "700px",
        },
      }}
    >
      <div className={s.imgWrap}>
        <img
          className={s.img}
          src={modalImage.regularUrl}
          alt="Full-size image"
        />
        {/* <button onClick={onClose}>Close</button> */}
      </div>
    </ReactModal>
  );
};

export default ImageModal;
