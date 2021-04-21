import "./styles.css";
import React, { useState } from "react";
import List from './components/List';
import ListForm from './components/ListForm'

export default function App() {
  const [names, setNames] = useState({
    listA: "",
    listB: ""
  });
  const [listA, setListA] = useState([]);
  const [listB, setListB] = useState([]);
  const [showTotals, setShowTotals] = useState(false);

  const deleteItem = (item, listLetter) => {
    const list = listLetter === "A" ? listA : listB;
    const newList = list.filter(listItem => listItem.id !== item.id)
    listLetter === "A" ? setListA(newList) : setListB(newList)
  }

  const editItem = (item, listLetter) => {
    const list = listLetter === "A" ? listA : listB;
    const newList = list.filter(listItem => listItem.id !== item.id)
    listLetter === "A" ? setListA([...newList, item]) : setListB([...newList, item])
  }

  const getTotal = (list) => {
    return list.reduce((curr, total) => curr + Number(total.num), 0);
  };

  const getWinner = () => {
    const totalA = getTotal(listA);
    const totalB = getTotal(listB);
    if (totalA === totalB) {
      return "It's a draw";
    }
    return getTotal(listA) > getTotal(listB)
      ? `The winner is ${names.listA}`
      : `The winner is ${names.listB}`;
  };

  return names.listA && names.listB ? (
    <div className="App">
      <h1>The Decider 👩‍⚖️</h1>
      <h2>Enter pros/cons with numeric weights</h2>
      <button
        onClick={() => setShowTotals(!showTotals)}
        style={{
          background: "#138496",
          // width: "60px",
          color: "white",
          padding: "15px",
          border: "none",
          borderRadius: "4px",
          marginLeft: "5px",
          fontWeight: "700"
        }}
      >
        {showTotals ? "Hide Winner" : "Get Winner"}
      </button>
      <p
        style={{
          visibility: showTotals ? "visible" : "hidden",
          fontWeight: "600",
          fontSize: "1.2rem",
          color: "white",
          background: "#563d7c",
          padding: "20px",
          borderRadius: "35px"
        }}
      >
        {getWinner()} 🎉
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "50%"
          }}
        >
          <h4>{names.listA}</h4>
          <List 
            list={listA} 
            setList={setListA} 
            showTotals={showTotals} 
            deleteItem={deleteItem} 
            editItem={editItem}
            listLetter={"A"}/>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "50%"
          }}
        >
          <h4>{names.listB}</h4>
          <List 
            list={listB} 
            setList={setListB} 
            showTotals={showTotals} 
            deleteItem={deleteItem} 
            editItem={editItem}
            listLetter={"B"}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="App">
      <h1>The Decider</h1>
      <h2>Name the choices</h2>
      <SetLists setNames={setNames} names={names} />
    </div>
  );
}

const SetLists = ({ setNames }) => {
  const [values, setValues] = useState({
    listA: "",
    listB: ""
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const handleClick = () => {
    console.log({ values });
    setNames(values);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "250px"
          }}
        >
          <label>Name Choice 1</label>
          <input name="listA" value={values.listA} onChange={handleChange} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "250px"
          }}
        >
          <label>Name Choice 2</label>
          <input name="listB" value={values.listB} onChange={handleChange} />
        </div>
      </div>
      <button
        onClick={handleClick}
        style={{
          background: "#138496",
          // width: "60px",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "4px",
          marginTop: "25px",
          fontWeight: "700"
        }}
      >
        Set Names
      </button>
    </div>
  );
};




