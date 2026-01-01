import React, { useEffect, useState, useRef } from "react";
import data from "./data.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Animation from "./components/Animation";
import Footer from "./components/Footer";
import About from "./components/About";
import Step from "./components/Step";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [cart, setCart] = useState([]);

  // 👉 REF FOR PRODUCT SECTION
  const productRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = checkout ? "hidden" : "auto";
  }, [checkout]);

  const categories = [
    "all",
    "men's shoes",
    "women's shoes",
    "kid's shoes",
    "slides",
  ];

  const products =
    selectedCategory === "all"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    toast.success("Added to cart");
  };

  const removeFromCart = (id) =>
    setCart(cart.filter((item) => item.id !== id));

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty } : item
      )
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const cartCount = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <>
      <ToastContainer />

      {/* CHECKOUT MODAL */}
      {checkout && (
        <div className="fixed inset-0 bg-amber-50 z-50">
          <button
            className="absolute top-4 right-6 text-3xl"
            onClick={() => setCheckout(false)}
          >
            ✕
          </button>
          <h1 className="logo text-6xl text-center mt-8">shoenique</h1>
          <div className="flex justify-center mt-10">
            <Step />
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <Navbar
        cartCount={cartCount}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* CART */}
      <Cart
        cart={cart}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        updateQty={updateQty}
        removeFromCart={removeFromCart}
        total={total}
        setCheckout={setCheckout}
      />

      {/* HERO SECTION */}
      <div className="mt-16 min-h-screen bg-gradient-to-br from-black via-[#060010] to-black flex items-center overflow-hidden">
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 px-6">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center text-white z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Step Into{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Style
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl">
              Discover premium footwear crafted for comfort, durability, and
              confidence. Designed to elevate every step you take.
            </p>

            <div className="flex gap-6">
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  productRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="px-10 py-4 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-300 transition duration-300 shadow-lg"
              >
                Explore Collection
              </button>
            </div>
          </div>

          {/* RIGHT ANIMATION */}
          <div className="relative hidden md:flex items-center justify-center">
            <div className="absolute w-[420px] h-[420px] bg-cyan-500/30 rounded-full blur-[120px]" />
            <div className="relative w-[420px] h-[420px] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-center">
              <Animation />
            </div>
          </div>

        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div ref={productRef}>
        <ProductList products={products} addToCart={addToCart} />
      </div>

      <About />
      <Footer />
    </>
  );
}

export default App;
