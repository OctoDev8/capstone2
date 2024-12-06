"use client";
import { MovieCard } from "@/components/MovieCard/MovieCard";
import styles from "./movielist.module.css";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabase = createClient(
	"https://ulnjfmxpfutsmdhxgvpj.supabase.co",
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const MovieList = () => {
	const [movies, setMovies] = useState([]);

	async function getMovies() {
		const { data } = await supabase.from("movies").select();
		console.log(data);
		setMovies(data);
	}

	useEffect(() => {
		getMovies();
	}, []);

	console.log(movies);

	if (!movies || movies.length === 0) {
		return <p>No movies found, try a different movie!</p>;
	}

	return (
		<section className={styles.movieList}>
			{movies.map((movie) => {
				return (
					<MovieCard
						key={movie.imdbID}
						title={movie.Title}
						poster={movie.Poster}
						year={movie.Year}
					/>
				);
			})}
		</section>
	);
};

export default MovieList;
