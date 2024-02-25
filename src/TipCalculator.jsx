import React, { useState } from 'react';

function TipCalculator() {
  // State variables
  const [billAmount, setBillAmount] = useState('0.00');
  const [tipPercentage, setTipPercentage] = useState('15');
  const [split, setSplit] = useState('1');

  // Handle input change
  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  // Calculate tip amount, total bill, and per person amount
  const calculateTipAmount = () => {
    const bill = parseFloat(billAmount);
    const tipPercent = parseFloat(tipPercentage) / 100;
    const people = parseInt(split);

    const tipAmount = bill * tipPercent;
    const totalBill = bill + tipAmount;
    const perPersonAmount = totalBill / people;

    return {
      tipAmount: tipAmount.toFixed(2),
      totalBill: totalBill.toFixed(2),
      perPersonAmount: perPersonAmount.toFixed(2)
    };
  };

  // Destructure calculated values
  const { tipAmount, totalBill, perPersonAmount } = calculateTipAmount();

  return (
    <div>
      <h2>Tip Calculator</h2>
      <div className="container">
        <div className="calculator">
          {/* Bill input */}
          <div>
            <label>Bill </label>
            <input type="number" value={billAmount} onChange={(e) => handleInputChange(e, setBillAmount)} />
          </div>

          {/* Tip percentage input */}
          <div>
            <label>Tip %</label>
            <div className="tip-input">
              <button onClick={() => setTipPercentage((prevPercentage) => String(parseFloat(prevPercentage) - 1))}>-</button>
              <input type="number" value={tipPercentage} onChange={(e) => handleInputChange(e, setTipPercentage)} />
              <button onClick={() => setTipPercentage((prevPercentage) => String(parseFloat(prevPercentage) + 1))}>+</button>
            </div>
          </div>

          {/* Number of people input */}
          <div>
            <label>Number of people </label>
            <div className="tip-input">
              <button onClick={() => setSplit((prevSplit) => String(parseInt(prevSplit) - 1))}>-</button>
              <input type="number" value={split} onChange={(e) => handleInputChange(e, setSplit)} />
              <button onClick={() => setSplit((prevSplit) => String(parseInt(prevSplit) + 1))}>+</button>
            </div>
          </div>
        </div>

        {/* Result section */}
        <div className="result">
          <p>Tip: ${tipAmount}</p>
          <p>Total: ${totalBill}</p>
          <p>Per Person: ${perPersonAmount}</p>
        </div>
      </div>
    </div>
  );
}

export default TipCalculator;
