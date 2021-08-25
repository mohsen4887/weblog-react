import "./style.scss";

function Alert({ message, type, onClose }) {
  if (message && type && onClose) {
    return (
      <div
        className={`alert alert-${type} alert-dismissible fade show`}
        role="alert"
      >
        {message}
        <button
          type="button"
          onClick={onClose}
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    );
  }
  return <div></div>;
}

export default Alert;
