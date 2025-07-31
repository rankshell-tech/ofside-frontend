import "./modals.css";
import React from "react";

interface SignupModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            }}
        >
            <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full relative z-50 border-2" style={{ borderColor: "var(--color-theme-primary-dark)" }}>
                <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-yellow-700 transition-colors text-2xl font-bold"
                    aria-label="Close"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className="flex flex-col items-center">
                    <div
                        className="rounded-full p-3 mb-4 shadow-lg"
                        style={{
                            background: "linear-gradient(90deg, var(--color-theme-primary) 0%, var(--color-theme-primary-dark) 100%)",
                        }}
                    >
                        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                            <path fill="#fff" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                    </div>
                    <h1 className="text-2xl font-extrabold text-gray-800 mb-2">Sign Up</h1>
                    <p className="text-gray-500 mb-6 text-center">Join us to get started! Enter your email to receive an OTP.</p>
                    <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        className="form-control mb-4 w-full px-4 py-2 rounded-lg border-2 focus:outline-none transition"
                        style={{
                            borderColor: "var(--color-theme-primary-light)",
                            background: "#fff",
                            color: "#333"
                        }}
                        id="email"
                    />
                    <button
                        type="button"
                        className="w-full py-2 rounded-lg text-white font-bold shadow-md transition"
                        style={{
                            background: "linear-gradient(90deg, var(--color-theme-primary) 0%, var(--color-theme-primary-dark) 100%)",
                        }}
                    >
                        Send OTP
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignupModal;
