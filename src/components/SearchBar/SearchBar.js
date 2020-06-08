import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./SearchBar.module.scss";
import { BASE_URL } from "../../constants";

const SearchBar = ({ search }) => {
    const [searchQuery, setSearchQuery] = useState(search);
    const router = useRouter();

    const goToMainPage = () => {
        router.push("/");
    };

    const submitSearchQuery = (event) => {
        event.preventDefault();
        router.push("/items", `/items?search=${searchQuery}`);
    };

    return (
        <div className={styles.container} data-test="search-bar">
            <a className={styles.logoContainer} onClick={goToMainPage}>
                <img className={styles.logo} data-test="logo" src={"/Logo_ML@2x.png.png"} alt="Logo"></img>
            </a>
            <form className={styles.bar} onSubmit={submitSearchQuery}>
                <input
                    className={styles.searchBox}
                    data-test="search-box"
                    type="text"
                    placeholder="Nunca dejes de buscar"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                ></input>
                <a className={styles.searchIconContainer} data-test="search-icon" onClick={submitSearchQuery}>
                    <img className={styles.searchIcon} src={"/ic_Search@2x.png.png"} alt="Logo"></img>
                </a>
            </form>
        </div>
    );
};

export default SearchBar;
