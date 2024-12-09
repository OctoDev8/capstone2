import axios from "axios";

const endpoint = process.env.OMDB_ENDPOINT;

export const SearchMoviesByTitle = async (title) => {
	try {
		const response = await axios.get(endpoint, {
			params: {
				s: title,
			},
		});
		if (!response) {
			throw new Error("Could not get movie");
		}
		return response.data;
	} catch (error) {
		console.error("Something went wrong");
	}
};

export const getMovieDeatails = async (imdbID) => {
	try {
		const response = await axios.get(endpoint, {
			params: {
				i: imdbID,
			},
		});
		if (!response) {
			throw new Error("Could not get movie");
		}
		return response.data;
	} catch (error) {
		console.error("Something went wrong");
	}
};
