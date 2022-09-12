import React, { useContext } from 'react';
import Context from '../context/context';

const ModalImg = ({ url }: { url: string }) => {
  const { openModalImg, setOpenModalImg } = useContext(Context);
  return (
    <div
      className={`modal fade ${openModalImg && 'show d-block'}`}
      tabIndex={1}
    >
      <div className="modal-dialog">
        <div className="modal modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Photo</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setOpenModalImg(false)}
            ></button>
          </div>
          <div className="modal-body">
            <img src={url} alt="" />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => setOpenModalImg(false)}
            >
              Close
            </button>
          </div>
        </div>
        <div
          className={`modal-backdrop fade ${openModalImg && 'show d-block'}`}
        ></div>
      </div>
    </div>
  );
};

export default ModalImg;
