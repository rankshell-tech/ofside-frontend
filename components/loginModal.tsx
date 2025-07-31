import React from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSwitchToSignup,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-md relative border-2"  style={{ borderColor: "var(--color-theme-primary-dark)" }}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition"
          aria-label="Close"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
        <div
          className="flex flex-col items-center mb-6"
        >
          <div
            className="rounded-full p-3 mb-4 shadow-lg"
            style={{
              background:
          "linear-gradient(90deg, var(--color-theme-primary) 0%, var(--color-theme-primary-dark) 100%)",
            }}
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <path
          fill="#fff"
          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
            Login
          </h2>
        </div>
        <form className="space-y-5">
            <div>
              <input
              placeholder="Email"
              type="email"
              name="email"
              className="w-full px-4 py-2 rounded-t-lg border-x border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary border-b-4 border-b-[var(--color-theme-primary)]"
              id="email"
              autoComplete="email"
              />
            </div>
            <div className="relative">
              <input
              placeholder="Password"
              type="password"
              name="password"
              className="w-full px-4 py-2 rounded-t-lg border-x border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary border-b-4 border-b-[var(--color-theme-primary)]"
              id="password"
              autoComplete="current-password"
              />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary cursor-pointer">
              {/* Add eye icon here if needed */}
            </span>
          </div>
            <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-gray-900 dark:text-white font-semibold py-2 rounded-lg transition"
            >
            Login
            </button>
        </form>
        <div className="flex justify-between items-center mt-4">
          <button
            type="button"
            className="text-sm text-primary underline hover:text-primary-dark"
            onClick={() => {/* handle forgot password */}}
          >
            Forgot Password?
          </button>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>
        <div className="text-center text-gray-500 dark:text-gray-400 mb-2">
          New to Ofside?
        </div>
        <div className="flex items-center justify-center">
          <span className="text-gray-400 mx-2">OR</span>
        </div>
        <div className="mt-2 flex justify-center">
          <button
            onClick={onSwitchToSignup}
            className="text-primary underline hover:text-primary-dark font-semibold"
          >
            Register now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
