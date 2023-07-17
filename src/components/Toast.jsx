import React, { useEffect, useState } from "react";
import { AuthContext } from "../authContext";

const Toast = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const { state } = React.useContext(AuthContext);

  useEffect(() => {
    if (state.isAuthenticated) {
      setShowToast(true);
      setToastMessage("Logged in Successfully");

      const timeout = setTimeout(() => {
        setShowToast(false);
      }, 4000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [state.isAuthenticated]);

  return (
    <div
      className={`fixed bottom-4 right-4 bg-gray-500 text-white py-3 px-5 rounded ${
        showToast ? "block" : "hidden"
      }`}
    >
      {toastMessage}
    </div>
  );
};

export default Toast;
