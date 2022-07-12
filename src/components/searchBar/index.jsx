import * as S from "./styles";
import images from "images";
import { useState } from "react";

const SearchBar = ({ data }) => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <S.SearchBar>
      <div className="search-bar">
        <div className="input-bar">
          <input
            type="text"
            placeholder="Pesquisar..."
            onChange={inputHandler}
          />
          <div className="submit">
            <button type="submit">
              <img src={images.searchIcon} alt="pesquisar" />
            </button>
          </div>
        </div>
      </div>
      <Gallery value={inputText} data={data} />
    </S.SearchBar>
  );
};

const Gallery = ({ value, data }) => {
  const filteredData = data.filter((person) =>
    value === "" ? person : person.props.prop1.toLowerCase().includes(value)
  );

  return (
    <S.Gallery className="gallery">
      {filteredData.map((card) => card)}
      {filteredData.length === 0 && <h1>Esse nome não existe...</h1>}
    </S.Gallery>
  );
};

export default SearchBar;
