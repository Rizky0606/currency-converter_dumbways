import { useState } from "react";
import convertRupiah from "rupiah-format";

const App = () => {
  const [input, setInput] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("USD");
  const [result, setResult] = useState<string>(
    "Please convert the currency first!"
  );

  const handleClickConvert = () => {
    if (currency === toCurrency) {
      alert("You can't exchange using the same currency");
    } else if (currency === "USD") {
      if (currency === "USD" && toCurrency === "EUR") {
        setResult(`${input * 0.94} ${toCurrency}`);
      } else if (currency === "USD" && toCurrency === "GBP") {
        setResult(`${input * 0.81} ${toCurrency}`);
      } else if (currency === "USD" && toCurrency === "IDR") {
        setResult(`${convertRupiah.convert(input * 15711)}`);
      }
    } else if (currency === "EUR") {
      if (currency === "EUR" && toCurrency === "USD") {
        setResult(`${input * 1.06} ${toCurrency}`);
      } else if (currency === "EUR" && toCurrency === "GBP") {
        setResult(`${input * 0.86} ${toCurrency}`);
      } else if (currency === "EUR" && toCurrency === "IDR") {
        setResult(`${convertRupiah.convert(input * 16639)}`);
      }
    } else if (currency === "GBP") {
      if (currency === "GBP" && toCurrency === "USD") {
        setResult(`${input * 1.23} ${toCurrency}`);
      } else if (currency === "GBP" && toCurrency === "EUR") {
        setResult(`${input * 1.16} ${toCurrency}`);
      } else if (currency === "GBP" && toCurrency === "IDR") {
        setResult(`${convertRupiah.convert(input * 19296)}`);
      }
    } else if (currency === "IDR") {
      if (currency === "IDR" && toCurrency === "USD") {
        setResult(`${input * 0.000064} ${toCurrency}`);
      } else if (currency === "IDR" && toCurrency === "EUR") {
        setResult(`${input * 0.00006} ${toCurrency}`);
      } else if (currency === "IDR" && toCurrency === "GBP") {
        setResult(`${input * 0.000052} ${toCurrency}`);
      }
    }
  };

  return (
    <div className="m-20 shadow-xl rounded-md">
      <div className="p-10">
        <h1 className="text-center text-[50px] mb-10 font-bold">
          Currency Converter
        </h1>
        <div className="flex items-center my-5 justify-center">
          <div className="mr-5">
            <input
              type="number"
              onChange={(e) => setInput(parseFloat(e.target.value))}
              className="input input-bordered w-full"
              placeholder="Input Count Currency"
            />
          </div>
          <div>
            <select
              name=""
              id=""
              onChange={(e) => setCurrency(e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="IDR">IDR</option>
            </select>
          </div>
          <h3 className="mx-5">TO</h3>
          <div>
            <select
              name=""
              id=""
              onChange={(e) => setToCurrency(e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="IDR">IDR</option>
            </select>
          </div>
          <button
            className="btn btn-outline btn-accent mx-5"
            onClick={handleClickConvert}
          >
            CONVERT
          </button>
        </div>

        <div className="text-center text-[24px] py-5">
          <h2>Result: {result}</h2>
        </div>
      </div>
    </div>
  );
};

export default App;
