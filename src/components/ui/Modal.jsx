function Modal({title,onClose,children}){
    return(
        <div className="model-backdrop" onClick={onClose}>
            <div className="model-box" onClick={(e)=>e.stopPropagation()}>
                <div className="model-header">
                    <h2>{title}</h2>
                    <button className="model-close-btn" onClick={onclose}>  ✕ </button>
                </div>
                <div className="model-body">{children}
                </div>

            </div>

        </div>
    );
}

export default Modal;