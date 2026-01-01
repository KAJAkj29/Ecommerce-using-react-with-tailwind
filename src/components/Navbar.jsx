import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = ({
  cartCount,
  setCartOpen,
  menuOpen,
  setMenuOpen,
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <nav className="fixed top-0 w-full z-20">
      {/* MAIN NAVBAR */}
      <div className="bg-black/95 backdrop-blur-md text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4 lg:px-8">
          
          {/* Menu Toggle (Mobile) */}
          <button
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
          </button>

          {/* Logo */}
          <h1 className="logo text-2xl font-black tracking-tighter text-cyan-500 cursor-pointer">
            SHOENIQUE
          </h1>

          {/* Cart Icon */}
          <button
            onClick={() => setCartOpen(true)}
            className="relative p-2 hover:bg-white/10 rounded-full transition-all"
            aria-label="Open cart"
          >
            <MdOutlineShoppingCart size={26} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-cyan-600 text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-black">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* CATEGORY BAR (Desktop) */}
      <div className="bg-white border-b border-gray-200 shadow-sm flex justify-center items-center overflow-x-auto no-scrollbar">
        <div className="hidden md:flex gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap text-xs md:text-sm font-bold tracking-widest uppercase transition-all relative py-2
                ${
                  selectedCategory === cat
                    ? "text-cyan-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-cyan-600"
                    : "text-gray-500 hover:text-black"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[50] md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-black z-[60] shadow-2xl transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <span className="text-xl font-bold text-cyan-500">MENU</span>
          <button onClick={() => setMenuOpen(false)} className="text-white">
            <AiOutlineClose size={24} />
          </button>
        </div>

        <ul className="flex flex-col p-4">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setMenuOpen(false);
              }}
              className={`p-4 rounded-lg mb-2 cursor-pointer transition-colors ${
                selectedCategory === cat
                  ? "bg-cyan-600 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="text-sm font-bold tracking-widest uppercase">
                {cat}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
