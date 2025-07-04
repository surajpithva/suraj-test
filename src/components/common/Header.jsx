import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import Sidebar from "./Sidebar";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthProvider";

const Header = () => {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { setCart } = useCart();
  const { logout, isLoggedIn } = useAuth();

  return (
    <>
      <header className="bg-black text-white">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hashtechy</h1>

          <div className="flex items-center gap-6">
            {isLoggedIn && (
              <>
                <button
                  onClick={() => navigate("/cart")}
                  className="text-2xl hover:text-gray-300"
                  aria-label="Go to Cart"
                >
                  <FiShoppingCart />
                </button>

                <button
                  onClick={logout}
                  className="hover:text-gray-300 text-xl"
                >
                  Logout
                </button>
              </>
            )}
            <button
              onClick={() => setIsSidebarMenuOpen(true)}
              className="text-2xl hover:text-gray-300"
              aria-label="Open Sidebar"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </header>

      <Sidebar
        isOpen={isSidebarMenuOpen}
        onClose={() => setIsSidebarMenuOpen(false)}
      />
    </>
  );
};

export default Header;
