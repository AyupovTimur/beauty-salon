import "./modal.scss";

const Modal = ({ imageUrl, description, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <img src={imageUrl} alt="Modal" className="modal-image" />
        <p className="modal-description">{description}</p>
      </div>
    </div>
  );
};

export default Modal;
