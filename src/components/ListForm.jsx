import React, {useState} from 'react'

const ListForm = ({ list, setList }) => {
    const [value, setValue] = useState({ desc: "", num: 0 });
  
    const handleChange = (e) => {
      setValue({
        ...value,
        [e.target.name]: e.target.value
      });
    };
    const handleClick = () => {
      const randomNum = Math.floor(Math.random() * 10)
      setList([...list, {...value, id: randomNum}]);
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

export default ListForm;