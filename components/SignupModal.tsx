import "./modals.css";
import React from "react";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg max-w-sm w-full relative z-50">
            <div className="modal show d-block">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Signup</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}/>
                        </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <input placeholder='Email' type="email" name='email' className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                        <button type="button" className="btn btn-theme-primary" >Send OTP</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SignupModal;
