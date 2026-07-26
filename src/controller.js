import "./style.css";

import { handleSearch, searchBar, searchBtn } from "./model.js";

function init() {
  searchBar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSearch();
  });

  searchBtn.addEventListener("click", handleSearch);
}

init();
