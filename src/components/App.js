import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

 const [items, setItems] = useState(itemData);
 const [DarkMode, setDarkMode] = useState(false);

 const darkModeHandler=()=>{
  setDarkMode((DarkMode)=> !DarkMode);

 }

  const appClass = DarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={darkModeHandler}>{DarkMode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
