import { useState } from "react";

export default function MyexpenseManager() {
  const [input, setInput] = useState();
  const [balace, setBalance] = useState();
  const [income, setIncome] = useState();
  const [expense, setExpense] = useState();
  const [type, setType] = useState("Income")

 function inputTrack  (e) {
    setInput(e.target.value);
  };

function  UpdateBalance () {
    const ammount = Number(input)
    if (ammount) {
        return;
    }
    else if(type === "Income"){
        console.log(type);
        

    }

    else if(type !== "Income"){
        console.log(type);
        

    }
  }



  return (
    <div>
      <h1>Expense Manager</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "90px",
        }}
      >
        <h1>Balance</h1> <h1>Income</h1> <h1>Expense</h1>
      </div>
      <div>
        <input onChange={inputTrack} type="Number" placeholder="Number" />
        <select onChange={(e)=> {setType(e.target.value)}} name="Type" value={type} id="">
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
        </select>
        <button onClick={UpdateBalance}>UpdateBalance</button>
      </div>
    </div>
  );
}
