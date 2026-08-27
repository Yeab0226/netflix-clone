import styles from "./DisplayRow.module.css";
import SlideShow from "../SlideShow/SlideShow";

function DisplayRow() {
  // T-12: Fetch and store the movie categories here.

  return (
    <main className={styles.mainWrapper}>
      {/* T-12/T-13: Add movie rows here. */}
      <SlideShow title="Trending Movies" movies={[]} />
    </main>
  );
}

export default DisplayRow;
