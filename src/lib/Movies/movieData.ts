import { useMemo } from "react";
// import useSWR from "swr";
import useSWRImmutable from "swr/immutable";

const baseTmdbUrl = process.env.NEXT_PUBLIC_TMDB_URL;
const baseImageUrl = "https://image.tmdb.org/t/p/";
const apiKey = process.env.NEXT_PUBLIC_TMDB_KEY;

export const fetcher = (url) => fetch(url).then((r) => r.json());

export function useGetMoviesItems(url: string, options?) {
	const newUrl = useMemo(() => {
		const u = new URL(`${baseTmdbUrl}${url}`);

		u.searchParams.set("api_key", apiKey);
		if (options) {
			for (let o in options) {
				u.searchParams.set(o, options[o]);
			}
		}
		return u;
	}, []);

	const { data, error } = useSWRImmutable(newUrl, fetcher);

	if (data && data.results) {
		const items = data.results.map((movie) => {
			return {
				id: movie.id,
				poster: movie.poster_path
					? baseImageUrl + "w300/" + movie.poster_path
					: "",
				info: {
					title: movie.title,
					date: movie.release_date.substr(0, 4),
				},
				rating: movie.vote_average ? movie.vote_average : -1,
			};
		});

		return {
			items,
			isLoading: false,
			isError: null,
		};
	}
	if (error) {
		return {
			items: null,
			isLoading: false,
			isError: error,
		};
	}
	return {
		items: null,
		isLoading: true,
		isError: null,
	};
}

export function useGetMoviePeople(url: URL) {
	url = new URL(`${baseImageUrl}${url}`);

	url.searchParams.set("api_key", apiKey);
}
