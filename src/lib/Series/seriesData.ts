import { useMemo } from "react";
import { fetcher } from "../Movies/movieData";
import useSWRImmutable from "swr/immutable";

const baseTmdbUrl = process.env.NEXT_PUBLIC_TMDB_URL;
const baseImageUrl = "https://image.tmdb.org/t/p/";
const apiKey = process.env.NEXT_PUBLIC_TMDB_KEY;

export function useGetSeriesItems(url: string, params?) {
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

export function useGetSerieDetails(url: string, isId: boolean, params?) {
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
		const latest_ep = data.last_episode_to_air;
		const seasons = data.seasons
			? data.seasons
					.filter((s) => s.season_number > 0)
					.map((s) => ({
						id: s.id,
						poster: s.poster_path
							? baseImageUrl + "w300/" + s.poster_path
							: "",
						airDate: s.air_date,
						epCount: s.episode_count,
						name: s.name,
						number: s.season_number,
						overview: s.overview,
					}))
			: null;

		const details = {
			id: data.id,
			name: data.name,
			firstAirDate: data.first_air_date,
			genres: data.genres.map((g) => g.name),
			episodeRunTime: data.episode_run_time,
			overview: data.overview,
			rating: data.vote_average,
			creators: data.created_by.map((c) => ({
				id: c.id,
				name: c.name,
				job: "creator",
			})),
			latestEpisode: {
				poster: latest_ep.still_path
					? baseImageUrl + "w300/" + latest_ep.still_path
					: "",
				airDate: latest_ep.air_date,
				epNumber: latest_ep.episode_number,
				name: latest_ep.name,
				overview: latest_ep.overview,
				seasonNumber: latest_ep.season_number,
				rating: latest_ep.vote_average,
			},
			seasons,
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
				networks: data.networks.map((n) => ({
					id: n.id,
					poster: n.logo_path
						? baseImageUrl + "w300/" + n.logo_path
						: "",
					name: n.name,
				})),
				numOfEpisodes: data.number_of_episodes,
				numOfSeasons: data.number_of_seasons,
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

export function useGetSeriePeople(url: string, isId: boolean, params?) {
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
