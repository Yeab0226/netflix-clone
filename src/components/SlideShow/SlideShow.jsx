import styles from "./SlideShow.module.css";

function SlideShow({ title, movies }) {
  return (
    <section>
      <h2 className={styles.title}>{title}</h2>
      {/* T-13: Build the Swiper carousel here. */}
    </section>
  );
}

export default SlideShow;
