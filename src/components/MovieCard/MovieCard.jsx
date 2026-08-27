// {/* T-14: Build the movie card and hover preview here. */}
import React from "react";

import styles from "./MovieCard.module.css";

import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const IMAGE_BASE =
  "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  let genres = [
    "Adventure",
    "Action",
    "Thriller",
  ];

  return (
    <div className={styles.cardWrapper}>
      {/* poster image   */}

      <img
        className={styles.poster}
        src={`${IMAGE_BASE}${movie?.poster_path}`}
        alt=""
      />

      {/* hover cards   */}

      <div className={styles.hoverCard}>
        {/* images  */}

        <img
          className={styles.hoverImage}
          src={`${IMAGE_BASE}${movie?.poster_path}`}
          alt=""
        />

        {/* badge  */}

        <div className={styles.badge}>
          Recently Added
        </div>

        {/* buttons  */}

        <div className={styles.buttonRow}>
          <FaCirclePlay
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <BsPlusCircle
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <GoCheckCircleFill
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <IoIosArrowDropdownCircle
            className={`${styles.circleButtonSmall} ${styles.circleButton}`}
            color="white"
            size={40}
          />
        </div>

        {/* meta data row   */}

        <div className={styles.metaRow}>
          <span className={styles.tag}>
            U/A 16+
          </span>
          <span className={styles.tag}>
            Movie
          </span>
          <span className={styles.tag}>HD</span>
        </div>

        {/* genres  */}

        <div className={styles.genres}>
          {genres.map((genre, index) => {
            return (
              <span key={index}>
                {genre}
                {index < genres.length - 1 && (
                  <span className={styles.dot}>
                    •
                  </span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
