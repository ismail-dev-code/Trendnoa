import { LogOut, ShoppingCart, Trash } from "lucide-react";
import { useCart } from "@/context/CartContext"; 
import { useState } from "react";
import LoginButton from "./LoginButton";
import { signOut } from "next-auth/react";

const Navbar: React.FC = () => {
  const { cart, totalItems, totalPrice, removeFromCart, clearCart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="bg-slate-900 text-slate-300 shadow-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* ... Brand + Links ... */}

            <div className="flex items-center space-x-4">
              {/* Cart Icon */}
              <div className="relative">
                <button
                  onClick={() => setCartOpen((v) => !v)}
                  className="relative p-2 rounded-md hover:bg-slate-800"
                >
                  <ShoppingCart size={20} />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full px-1">
                      {totalItems}
                    </span>
                  )}
                </button>

                {/* Cart Dropdown */}
                {cartOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white text-slate-800 rounded-lg shadow-lg border p-3 z-50">
                    {cart.length === 0 ? (
                      <p className="text-sm text-gray-600">Your cart is empty.</p>
                    ) : (
                      <div className="space-y-3">
                        {cart.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center justify-between border-b pb-2"
                          >
                            <div className="flex items-center gap-2">
                              <img
                                src={item.imageUrl}
                                alt={item.name}
                                className="w-10 h-10 object-cover rounded"
                              />
                              <div>
                                <p className="text-sm font-semibold">{item.name}</p>
                                <p className="text-xs text-gray-500">
                                  {item.quantity} ×{" "}
                                  {item.discountPrice || item.price}৳
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash size={16} />
                            </button>
                          </div>
                        ))}

                        <div className="flex justify-between font-bold">
                          <span>Total:</span>
                          <span>{totalPrice}৳</span>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={clearCart}
                            className="w-1/2 bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-sm"
                          >
                            Clear
                          </button>
                          <button className="w-1/2 bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded text-sm">
                            Checkout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Auth buttons */}
              {session ? (
                <button
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="flex items-center gap-2 px-3 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white text-sm font-medium"
                >
                  <LogOut size={16} /> Logout
                </button>
              ) : (
                <LoginButton />
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
