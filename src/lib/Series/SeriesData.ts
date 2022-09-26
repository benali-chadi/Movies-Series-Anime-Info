import { useMemo } from "react";
import { fetcher } from "../Movies/movieData";
import useSWRImmutable from "swr/immutable";

const baseTmdbUrl = process.env.NEXT_PUBLIC_TMDB_URL;
const baseImageUrl = "https://image.tmdb.org/t/p/";
const apiKey = process.env.NEXT_PUBLIC_TMDB_KEY;

export function useGetSeriesItems(url: string, options?) {
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
		const items = data.results
			.filter((serie) => !serie.origin_country.includes("JP"))
			.map((serie) => {
				return {
					id: serie.id,
					poster: serie.poster_path
						? baseImageUrl + "w300/" + serie.poster_path
						: "",
					info: {
						title: serie.name,
						date: serie.first_air_date.substr(0, 4),
					},
					rating: serie.vote_average,
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
