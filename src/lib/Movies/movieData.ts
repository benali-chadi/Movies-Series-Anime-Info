import { useMemo } from "react";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";

const baseTmdbUrl = process.env.NEXT_PUBLIC_TMDB_URL;
const baseImageUrl = "https://image.tmdb.org/t/p/";
const apiKey = process.env.NEXT_PUBLIC_TMDB_KEY;

export const fetcher = (url) => fetch(url).then((r) => r.json());

export function useGetMoviesItems(url: string, params?) {
	const newUrl = useMemo(() => {
		const u = new URL(`${baseTmdbUrl}${url}`);

		u.searchParams.set("api_key", apiKey);
		if (params) {
			for (let o in params) {
				u.searchParams.set(o, params[o]);
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

export function useGetMovieDetails(url: string, isId: boolean, params?) {
	const newUrl = useMemo(() => {
		const u = new URL(`${baseTmdbUrl}${url}`);

		u.searchParams.set("api_key", apiKey);
		if (params) {
			for (let o in params) {
				u.searchParams.set(o, params[o]);
			}
		}
		return u;
	}, [url]);

	const { data, error } = useSWRImmutable(isId ? newUrl : null, fetcher);
	if (data) {
		const details = {
			id: data.id,
			imdb_id: data.imdb_id,
			title: data.title,
			poster: data.backdrop_path
				? baseImageUrl + "w300/" + data.backdrop_path
				: "",
			date: data.release_date,
			genres: data.genres.map((g) => g.name),
			runtime: data.runtime,
			overview: data.overview,
			rating: data.vote_average ?? "",
			generalInfo: {
				status: data.status,
				productionCompanies: data.production_companies.map(
					(company) => ({
						id: company.id,
						poster: company.logo_path
							? baseImageUrl + "w300/" + company.logo_path
							: "",
						name: company.name,
					})
				),
				originalLanguage: data.original_language,
				budget: data.budget,
				revenue: data.revenue,
			},
		};

		return {
			details,
			isLoading: false,
			isError: null,
		};
	}
	if (error) {
		return {
			details: null,
			isLoading: false,
			isError: error,
		};
	}
	return {
		details: null,
		isLoading: true,
		isError: null,
	};
}

export function useGetMoviePeople(url: string, isId: boolean, params?) {
	const newUrl = useMemo(() => {
		const u = new URL(`${baseTmdbUrl}${url}`);

		u.searchParams.set("api_key", apiKey);
		if (params) {
			for (let o in params) {
				u.searchParams.set(o, params[o]);
			}
		}
		return u;
	}, [url]);

	const { data, error } = useSWRImmutable(isId ? newUrl : null, fetcher);

	if (data) {
		console.log("people =", data);
		const { cast, crew } = data;
		const isMainCrew = (job) => {
			return (
				job === "Director" || job === "Screenplay" || job === "Novel"
			);
		};
		const repeatedCrew = (mainCrew) => {
			let toDelete = [];
			for (let i = 0; i < mainCrew.length; i++) {
				for (let j = i + 1; j < mainCrew.length; j++) {
					if (mainCrew[i].id === mainCrew[j].id) {
						toDelete.push(mainCrew[j]);
						mainCrew[i].job.push(mainCrew[j].job.flat());
					}
				}
			}
			for (let del of toDelete) {
				mainCrew.splice(mainCrew.indexOf(del), 1);
			}
			return mainCrew;
		};

		const people = {
			crew: repeatedCrew(
				crew
					.filter((c) => isMainCrew(c.job))
					.map((c) => ({
						id: c.id,
						name: c.name,
						job: [c.job],
					}))
			),
			cast: cast.splice(0, 15).map((c) => {
				return {
					id: c.id,
					poster: c.profile_path
						? baseImageUrl + "w300/" + c.profile_path
						: "",
					name: c.name,
					character: c.character,
				};
			}),
		};

		return {
			people,
			isLoading: false,
			isError: null,
		};
	}
	if (error) {
		return {
			people: null,
			isLoading: false,
			isError: error,
		};
	}
	return {
		people: null,
		isLoading: true,
		isError: null,
	};
}
