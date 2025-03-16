import "../styles/search-bar.css";

const Searchbar = ({setValue}) => {
  return (
    <div id="search-bar">
      <input className="search-bar-input" onChange={() => setValue(event.target.value)}/>
      <button className="search-bar-btn">
        <i class="fas fa-search"></i>
      </button>
    </div>
  );
};

export default Searchbar;
