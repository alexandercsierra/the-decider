import React from 'react'
import ListItem from './ListItem'
import ListForm from './ListForm'

const List = ({ list, setList, showTotals, deleteItem, editItem, listLetter, showColors }) => {
  
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
            <ListItem item={item} deleteItem={deleteItem} listLetter={listLetter} editItem={editItem} showColors={showColors}/>
          ))}
        </div>
      </div>
    );
  };

export default List



