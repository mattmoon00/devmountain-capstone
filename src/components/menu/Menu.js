import React, { useState, useEffect } from "react";
import axios from "axios";

function Menu() {
  let itemId = Math.floor(Math.random() * 20000);

  const [menuItem, setMenuItem] = useState("");
  const [menuList, setMenuList] = useState([]);
  const [tables, setTables] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5432/tables")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function addNewItem(e) {
    e.preventDefault();
    const newItem = e.target.value;
    setMenuList([...menuList, newItem]);
    axios.post("http://localhost:5432/menu", { menuList });
    // setMenuItem(newItem);
  }

  function removeItem(index) {
    setMenuList(menuList.filter((newItem, arrIndex) => arrIndex !== index));
  }

  return (
    <div>
      <button className="food" onClick={addNewItem} value="Spaghetti">
        Spaghetti
      </button>
      <button className="food" onClick={addNewItem} value="Alfredo">
        Alfredo
      </button>
      <button className="food" onClick={addNewItem} value="Lasagna">
        Lasagna
      </button>
      <button className="food" onClick={addNewItem} value="Tortellini">
        Tortellini
      </button>
      <button className="food" onClick={addNewItem} value="Shrimp Scampi">
        Shrimp Scampi
      </button>
      <button className="food" onClick={addNewItem} value="Pizza">
        Pizza
      </button>
      {menuList.map((item, index) => {
        return (
          <div>
            {item}
            <button onClick={() => removeItem(index)}>X</button>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
