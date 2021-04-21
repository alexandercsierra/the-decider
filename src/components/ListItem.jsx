import React, {useState, useEffect} from 'react'

const ListItem = ({item, deleteItem, editItem, listLetter, showColors}) => {

    const [isEditing, setIsEditing] = useState(false)
    const [editedItem, setEditedItem] = useState({
        desc: item.desc,
        num: item.num
    })

    const handleChange = e => {
        setEditedItem({
            ...editedItem,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()

        console.log({editedItem})
        editItem(editedItem, listLetter)
        setIsEditing(false)
    }


    const backgroundColor = (num) => {
        if(!showColors) return "#6C757D";
        else if(num == 0) return "#6C757D";
        else if (num > 0) return "#1A8596";
        else return "#DC3545"

    }



    return (
        isEditing ? (
            <div
            style={{
                display: "flex", 
                padding: '4%', 
                background: backgroundColor(),
                borderRadius:'20px', 
                margin: '10px auto', 
                color: 'white',
                fontWeight:'500'
            }}
        >
            <div style={{
                display: "flex", 
                flexDirection:'column',
                justifyContent: 'space-between', 
                width:'90%'
                }}
            >
                <input name={"desc"} value={editedItem.desc} onChange={handleChange}/>
                <input type="number" name={"num"} value={editedItem.num} onChange={handleChange}/>
                <button onClick={onSubmit}>done</button>
            </div>
            <p
                style={{
                    marginLeft:'10px', 
                    cursor: 'pointer'
                }}
                onClick={()=>setIsEditing(!isEditing)}
            >📝</p>
            <p style={{ marginLeft:'10px', cursor: 'pointer'}} onClick={()=>deleteItem(item, listLetter)}>❌</p>
        </div>
        ) : (
            <div
                style={{
                    display: "flex", 
                    padding: '4%', 
                    background: backgroundColor(item.num),
                    borderRadius:'20px', 
                    margin: '10px auto', 
                    color: 'white',
                    fontWeight:'500'
                }}
            >
                <div style={{
                    display: "flex", 
                    justifyContent: 'space-between', 
                    width:'90%'
                    }}
                >
                    <p>{item.desc}</p>
                    <p>{item.num}</p>
                </div>
                <p
                    style={{
                        marginLeft:'10px', 
                        cursor: 'pointer'
                    }}
                    onClick={()=>setIsEditing(!isEditing)}
                >📝</p>
                <p style={{ marginLeft:'10px', cursor: 'pointer'}} onClick={()=>deleteItem(item, listLetter)}>❌</p>
            </div>
        )
    )
}

export default ListItem;