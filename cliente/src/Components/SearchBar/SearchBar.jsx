import style from "../../styles/SearchBar.module.css";

const SearchBar = ({handleSearch,searchTerm}) => {

    return (
        <div className={style.search_bar_container}>
            <div>
                <div className={style.search_bar_subcontainer}>
                    <form className={style.form_search_bar} onSubmit={handleSearch}>
                        <input
                            className={style.searchbar_input_text}
                            type="text"
                            value={searchTerm}
                            onChange={handleSearch}
                            placeholder="🔍 Busca tu Pokémon"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
