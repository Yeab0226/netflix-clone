import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      {/* T-07/T-08: Build the Netflix header here. */}

      <div className={Styles.rightSection}>
        {/* search and notification icon  */}
        <div className={Styles.searchContainer}>
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className={Styles.searchButton}
          >
            <Search size={20} />
          </button>

          {isSearchOpen && (
            <input
              type="text"
              placeholder="movie title"
              className={Styles.searchInput}
            />
          )}
        </div>
        <button className={Styles.iconButton}>
          <Bell size={20} />
          <span className={Styles.notificationBadge}>4</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
