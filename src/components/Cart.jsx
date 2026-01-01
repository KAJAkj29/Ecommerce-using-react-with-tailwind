import { IoCloseOutline, IoTrashOutline } from "react-icons/io5";

const Cart = ({
  cart,
  cartOpen,
  setCartOpen,
  updateQty,
  removeFromCart,
  total,
  setCheckout, // This triggers the navbar hiding in App.js
}) => {
  if (!cartOpen) return null;

  return (
    <>
      {/* Smooth Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[60] transition-opacity"
        onClick={() => setCartOpen(false)}
      />

      {/* Premium Side Drawer */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-slate-900 border-l border-white/10 z-[70] flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.5)]">
        
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-slate-900/50">
          <div>
            <h2 className="text-xl font-black tracking-tight text-white uppercase">Your Bag</h2>
            <p className="text-xs text-slate-400 uppercase tracking-widest">{cart.length} Items</p>
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 hover:bg-white/5 rounded-full text-slate-400 hover:text-white transition-all"
          >
            <IoCloseOutline size={28} />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-slate-800 rounded-full mb-4 flex items-center justify-center">
                <span className="text-4xl">👟</span>
              </div>
              <p className="text-slate-400 font-medium">Your cart is looking empty.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-800 border border-white/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="text-sm font-bold text-white line-clamp-1">{item.title}</h3>
                      <p className="text-sm font-black text-cyan-400">${item.price}</p>
                    </div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-tighter mt-1">Premium Edition</p>
                  </div>

                  <div className="flex items-center justify-between">
                    {/* Minimalist Qty Selector */}
                    <div className="flex items-center bg-slate-800 rounded-lg px-2 py-1 border border-white/5">
                      <button 
                        className="text-white px-2 hover:text-cyan-400"
                        onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}
                      >-</button>
                      <span className="text-xs font-bold text-white w-6 text-center">{item.qty}</span>
                      <button 
                        className="text-white px-2 hover:text-cyan-400"
                        onClick={() => updateQty(item.id, item.qty + 1)}
                      >+</button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-slate-500 hover:text-red-400 transition-colors p-1"
                    >
                      <IoTrashOutline size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Total & Checkout Footer */}
        <div className="p-8 border-t border-white/10 bg-slate-900/80 backdrop-blur-md">
          <div className="flex justify-between items-end mb-6">
            <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Subtotal</span>
            <div className="text-right">
              <p className="text-3xl font-black text-white">${total.toFixed(2)}</p>
              <p className="text-[10px] text-slate-500 italic">Shipping calculated at checkout</p>
            </div>
          </div>

          <button
            onClick={() => {
              setCheckout(true); // Triggers the Hide Navbar logic
              setCartOpen(false);
            }}
            disabled={cart.length === 0}
            className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(6,182,212,0.3)] transition-all hover:scale-[1.02] active:scale-95"
          >
            Secure Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;