import React from "react";
import Stepper from "awesome-react-stepper";

const card =
  "w-[30rem] min-h-[37rem] mx-auto bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl";

const label =
  "text-sm text-gray-300 mb-1 block";

const input =
  "w-full p-3 rounded-xl bg-black/40 border border-white/20 text-white focus:outline-none focus:border-cyan-400 transition";

const button =
  "bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-xl px-6 py-2 text-lg font-semibold hover:scale-105 transition";

function Step() {
  return (
    <Stepper
      strokeColor="#ffffff20"
      fillStroke="#22d3ee"
      activeColor="#22d3ee"
      activeProgressBorder="2px solid #22d3ee"
      continueBtn={<button className={button}>Next</button>}
      backBtn={<button className={button}>Back</button>}
      submitBtn={<button className={button}>Place Order</button>}
      onSubmit={() => alert("🎉 Order placed successfully!")}
    >
      {/* STEP 1 — PERSONAL INFO */}
      <div className={card}>
        <h2 className="text-2xl font-bold text-white mb-6">
          Personal Information
        </h2>

        <div className="grid gap-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={label}>First Name</label>
              <input className={input} placeholder="John" />
            </div>
            <div>
              <label className={label}>Last Name</label>
              <input className={input} placeholder="Doe" />
            </div>
          </div>

          <div>
            <label className={label}>Phone Number</label>
            <input type="tel" className={input} placeholder="+91 98765 43210" />
          </div>

          <div>
            <label className={label}>Email Address</label>
            <input type="email" className={input} placeholder="john@example.com" />
          </div>

          <div>
            <label className={label}>Date of Birth</label>
            <input type="date" className={input} />
          </div>

          <p className="text-xs text-gray-400 text-center">
            🔒 We only use this information for order updates
          </p>
        </div>
      </div>

      {/* STEP 2 — ADDRESS */}
      <div className={card}>
        <h2 className="text-2xl font-bold text-white mb-6">
          Shipping Address
        </h2>

        <div className="grid gap-5">
          <div>
            <label className={label}>Full Address</label>
            <textarea
              className={`${input} h-28 resize-none`}
              placeholder="House no, Street, Area"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className={label}>State</label>
              <input className={input} placeholder="Your State" />
            </div>
            <div>
              <label className={label}>District</label>
              <input className={input} placeholder="Your District" />
            </div>
            <div>
              <label className={label}>Pincode</label>
              <input className={input} placeholder="600000" />
            </div>
          </div>

          <p className="text-xs text-gray-400 text-center">
            📦 Please ensure the address is accurate
          </p>
        </div>
      </div>

      {/* STEP 3 — PAYMENT */}
      <div className={card}>
        <h2 className="text-2xl font-bold text-white mb-6">
          Payment Details
        </h2>

        <div className="grid gap-5">
          <div>
            <label className={label}>Card Type</label>
            <div className="flex gap-3">
              {[
                "pngegg-2.png",
                "pngegg-3.png",
                "pngegg-6.png",
                "pngegg-5.png",
              ].map((img, i) => (
                <label
                  key={i}
                  className="flex items-center gap-2 px-4 py-3 bg-white/10 border border-white/20 rounded-xl cursor-pointer hover:border-cyan-400 transition"
                >
                  <input
                    type="radio"
                    name="cardType"
                    className="accent-cyan-400"
                  />
                  <img src={img} alt="card" className="h-7" />
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className={label}>Card Holder</label>
            <input className={input} placeholder="John Doe" />
          </div>

          <div>
            <label className={label}>Card Number</label>
            <input className={input} placeholder="1234 5678 9012 3456" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <label className={label}>Expiry Date</label>
              <div className="flex gap-2">
                <select className={input}>
                  {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(m => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
                <select className={input}>
                  {Array.from({ length: 10 }, (_, i) => 2026 + i).map(y => (
                    <option key={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className={label}>CVV</label>
              <input type="password" className={input} placeholder="***" />
            </div>
          </div>

          <div className="flex justify-between items-center bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-xl p-4 text-white font-semibold">
            <span>Total Amount</span>
            <span className="text-cyan-400">$000.00</span>
          </div>

          <p className="text-xs text-gray-400 text-center">
            🔒 100% Secure Payment
          </p>
        </div>
      </div>
    </Stepper>
  );
}

export default Step;
