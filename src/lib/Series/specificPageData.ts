import { getItems } from "./homePageData";

const baseSeriesUrl = `${process.env.TMDB_URL}tv/`;
const baseImageUrl = "https://image.tmdb.org/t/p/";
const apiKey = process.env.TMDB_KEY;

export async function getSerieDetails(serie_id: string) {
	const url = new URL(`${baseSeriesUrl}${serie_id}`);
	url.searchParams.set("api_key", apiKey);

	let res = await fetch(url.href);
	if (!res.ok) return { data: null, ok: res.ok };

	let data = await res.json();
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

	return {
		data: {
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
					}),
				),
				originalLanguage: data.original_language,
				networks: data.networks.map((n) => ({
					id: n.id,
					poster: n.logo_path
						? baseImageUrl + "w300/" + n.logo_path
						: "",
					name: n.name,
				})),
			},
		},
		ok: res.ok,
	};
}

export async function getSerieCast(serie_id: string) {
	const url = new URL(`${baseSeriesUrl}${serie_id}/credits`);
	url.searchParams.set("api_key", apiKey);

	const res = await fetch(url.href);
	if (!res.ok) return { data: null, ok: res.ok };

	const { cast, crew } = await res.json();

	const isMainCrew = (job) => {
		return job === "Director" || job === "Screenplay" || job === "Novel";
	};

	const mainCrew = crew
		.filter((c) => isMainCrew(c.job))
		.map((c) => ({
			id: c.id,
			name: c.name,
			job: c.job,
		}));

	return {
		data: {
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
			crew: mainCrew,
		},
		ok: res.ok,
	};
}

export async function getMedia(serie_id: string) {
	const imagesUrl = new URL(`${baseSeriesUrl}${serie_id}/images`);
	imagesUrl.searchParams.set("api_key", apiKey);
	const videosURl = new URL(`${baseSeriesUrl}${serie_id}/videos`);
	videosURl.searchParams.set("api_key", apiKey);

	const res1 = await fetch(imagesUrl.href);
	const res2 = await fetch(videosURl.href);

	if (!res1.ok || !res2.ok) return { data: null, ok: false };

	const images = await res1.json();
	const { results } = await res2.json();

	images.backdrops = images.backdrops.map((i) =>
		i.file_path ? baseImageUrl + "original/" + i.file_path : "",
	);
	images.posters = images.posters.map((i) =>
		i.file_path ? baseImageUrl + "w300/" + i.file_path : "",
	);

	return {
		data: { images, videos: results.map((v) => v.key) },
		ok: true,
	};
}

export async function getSimilarSeries(serie_id: string) {
	const url = new URL(`${baseSeriesUrl}${serie_id}/similar`);
	url.searchParams.set("api_key", apiKey);

	const { items: data, ok } = await getItems(url);

	return { data, ok };
}
