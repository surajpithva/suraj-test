import React from "react";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/all-products");
    onClose(); 
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        />
      )}

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-200 shadow-lg z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Close Menu</h2>
          <button onClick={onClose} className="text-xl">
            <FiX />
          </button>
        </div>

        <nav className="p-4 space-y-2 text-gray-800">
          <div>
            <button
              onClick={handleNavigate}
              className="font-semibold mb-2 pb-1 hover:text-blue-600"
            >
              Products
            </button>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Makeup</h3>
            <ul className="ml-4 mt-2 space-y-1 text-sm">
              <li>Face Makeup</li>
              <li>Lip Makeup</li>
              <li>Eye Makeup</li>
              <li>Brushes & Tools</li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
