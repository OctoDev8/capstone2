"use client";
import styles from "./moviecard.module.css";

export default function MovieCard({ movies }) {
	if (!movies || movies.length === 0) {
		return <p>No movies found, try a different movie!</p>;
	}

	return (
		<section className={styles.movieCard}>
			<img src={movies.poster} alt={movies.plot} />
		</section>
	);
}
