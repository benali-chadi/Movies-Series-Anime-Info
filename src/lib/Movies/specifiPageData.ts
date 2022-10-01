import { getItems } from "./homePageData";

const baseMoviesUrl = `${process.env.TMDB_URL}movie/`;
const baseImageUrl = "https://image.tmdb.org/t/p/";
const apiKey = process.env.TMDB_KEY;
const pubApiKey = process.env.NEXT_PUBLIC_TMDB_KEY;
const pubMoviesUrl = `${process.env.NEXT_PUBLIC_TMDB_URL}movie/`;

export async function getMovieDetails(movie_id: string) {
	const url = new URL(`${baseMoviesUrl}${movie_id}`);
	url.searchParams.set("api_key", apiKey);

	let res = await fetch(url);
	if (!res.ok) return { data: null, ok: res.ok };

	let data = await res.json();

	if (data.original_language === "ar") {
		url.searchParams.set("language", "ar");
		res = await fetch(url);
		if (!res.ok) return { data: null, ok: res.ok };

		data = await res.json();
	}
	return {
		data: {
			id: data.id,
			imdb_id: data.imdb_id,
			title: data.title,
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
		},
		ok: res.ok,
	};
}

export async function getMovieCast(movie_id: string) {
	const url = new URL(`${baseMoviesUrl}${movie_id}/credits`);
	url.searchParams.set("api_key", apiKey);

	const res = await fetch(url);
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

export async function getMedia(movie_id: string) {
	const imagesUrl = new URL(`${pubMoviesUrl}${movie_id}/images`);
	imagesUrl.searchParams.set("api_key", pubApiKey);
	const videosURl = new URL(`${pubMoviesUrl}${movie_id}/videos`);
	videosURl.searchParams.set("api_key", pubApiKey);

	const res1 = await fetch(imagesUrl);
	const res2 = await fetch(videosURl);

	if (!res1.ok || !res2.ok) return { data: null, ok: false };

	const images = await res1.json();
	const { results } = await res2.json();

	images.backdrops = images.backdrops.map((i) =>
		i.file_path ? baseImageUrl + "original/" + i.file_path : ""
	);
	images.posters = images.posters.map((i) =>
		i.file_path ? baseImageUrl + "w300/" + i.file_path : ""
	);

	return {
		data: { images, videos: results.map((v) => v.key) },
		ok: true,
	};
}

export async function getSimilarMovies(movie_id: string) {
	const url = new URL(`${baseMoviesUrl}${movie_id}/similar`);
	url.searchParams.set("api_key", apiKey);

	const { items: data, ok } = await getItems(url);

	return { data, ok };
}

export async function getWatchProviders(path: string) {
	const url = new URL(`${process.env.TMDB_URL}${path}/watch/providers`);
	url.searchParams.set("api_key", apiKey);

	const data = await fetch(url).then((res) => res.json());

	if (!data) return { watchProviders: null };
	if (Object.keys(data.results).length < 1) return { watchProviders: null };

	const res =
		data.results["AR"] && data.results["AR"]["flatrate"]
			? data.results["AR"]["flatrate"]
			: data.results["US"] && data.results["US"]["flatrate"]
			? data.results["US"]["flatrate"]
			: data.results["US"] && data.results["US"]["buy"]
			? data.results["US"]["buy"]
			: null;

	if (!res) return { watchProviders: null };

	const watchProviders = res.map((w) => ({
		poster: w.logo_path ? baseImageUrl + "w300/" + w.logo_path : "",
		name: w.provider_name,
	}));

	return { watchProviders };
}
