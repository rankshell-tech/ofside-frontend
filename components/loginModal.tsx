import "./modals.css";
import React from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSwitchToSignup }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full relative z-50">
        <div className="modal show d-block">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Login
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={onClose}
                />
              </div>
              <div className="modal-body">
                  <div className="mb-3">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div style={{ position: "relative" }} className=" mb-3 d-flex  password-form-control">
                    <input
                      placeholder="Password"
                      type="password"
                      name="password"
                      className="form-control"
                      id="password"
                    />
                    <span style={{
                      position: "absolute",
                      right: "4px",
                      top: "50%",
                      transform: "translateY(-50%)"
                    }} className="text-primary password-eye-icon px-2 d-flex align-items-center justify-content-center">
                    </span>
                  </div>
              </div>
              <div className="modal-footer flex-column text-center">
                  <button
                    type="button"
                    className="m-auto btn btn-theme-primary"
                  >
                    Login
                  </button>
                  <div>
                    <a
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "var(--color-theme-primary)",
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#forgotPasswordBackdrop"
                    >
                      Forgot Password
                    </a>
                  </div>

                  <div
                    style={{ borderTop: "1px solid #eee" }}
                    className="text-muted text-center mt-3 pt-2 w-100"
                  >
                    {" "}
                    New to Ofside?
                  </div>
                  <p className="text-muted fw-bold text-center my-2 ">
                    <small>OR</small>
                  </p>
                  <div>
                    <a
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "var(--color-theme-primary)",
                      }}
                      data-bs-toggle="modal"
                    >
                      <button onClick={onSwitchToSignup}>Register now</button>
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
