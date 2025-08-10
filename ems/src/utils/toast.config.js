// src/toast.config.js
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseConfig = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
  style: {
    background: "#1e1e1e",
    color: "#fff",
    padding: "16px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "500",
  },
};

// ✅ Success Toast
export const showSuccessToast = (message) => {
  toast.success(message, {
    ...baseConfig,
    icon: "✅",
    style: {
      ...baseConfig.style,
      border: "1px solid #059669", // green border
    },
  });
};

// ❌ Error Toast
export const showErrorToast = (message) => {
  toast.error(message, {
    ...baseConfig,
    icon: "❌",
    style: {
      ...baseConfig.style,
      border: "1px solid #dc2626", // red border
    },
  });
};

// ⚠️ Warning / Failure Toast
export const showFailureToast = (message) => {
  toast.warn(message, {
    ...baseConfig,
    icon: "⚠️",
    style: {
      ...baseConfig.style,
      border: "1px solid #f59e0b", // yellow border
    },
  });
};
