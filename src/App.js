import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [names, setNames] = useState({
    listA: "",
    listB: ""
  });
  const [listA, setListA] = useState([]);
  const [listB, setListB] = useState([]);
  const [showTotals, setShowTotals] = useState(false);

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
      <h1>The Decider</h1>
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
          <List list={listA} setList={setListA} showTotals={showTotals} />
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
          <List list={listB} setList={setListB} showTotals={showTotals} />
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

const List = ({ list, setList, showTotals }) => {
  return (
    <div
      style={{
        width: "90%",
        padding: "4%",
        background: "#f5f5f5",
        borderRadius: "15px"
      }}
    >
      <ListForm list={list} setList={setList} />
      <div>
        <p style={{ visibility: showTotals ? "visible" : "hidden" }}>
          Total: {list.reduce((curr, total) => curr + Number(total.num), 0)}
        </p>
        {list.map((item) => (
          <div>
            <p>{item.desc}</p>
            <p>{item.num}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ListForm = ({ list, setList }) => {
  const [value, setValue] = useState({ desc: "", num: 0 });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };
  const handleClick = () => {
    console.log({ value });
    setList([...list, value]);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "180px" }}>
        <label>Pro/Con</label>
        <input
          name="desc"
          value={value.desc}
          onChange={handleChange}
          style={{
            padding: "5px",
            border: "none",
            borderRadius: "4px",
            background: "#e2e2e2"
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "60px" }}>
        <label>Weight</label>
        <input
          type="number"
          name="num"
          value={value.num}
          onChange={handleChange}
          style={{
            padding: "5px",
            border: "none",
            borderRadius: "4px",
            background: "#e2e2e2",
            marginLeft: "4px"
          }}
        />
      </div>
      <button
        onClick={handleClick}
        style={{
          background: "#28A745",
          width: "60px",
          color: "white",
          padding: "6px 10px",
          border: "none",
          borderRadius: "4px",
          marginLeft: "5px",
          fontWeight: "700"
        }}
      >
        Add
      </button>
    </div>
  );
};
