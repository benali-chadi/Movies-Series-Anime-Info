import { getItems } from "./homePageData";

const baseMoviesUrl = `${process.env.TMDB_URL}movie/`;
const baseImageUrl = "https://image.tmdb.org/t/p/";

export async function getMovieDetails(movie_id: string) {
	const url = new URL(`${baseMoviesUrl}${movie_id}`);
	url.searchParams.set("api_key", process.env.TMDB_KEY);

	let res = await fetch(url.href);
	if (!res.ok) return { data: null, ok: res.ok };

	let data = await res.json();

	if (data.original_language === "ar") {
		url.searchParams.set("language", "ar");
		res = await fetch(url.href);
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
			rating: data.vote_average,
			generalInfo: {
				status: data.status,
				productionCompanies: data.production_companies,
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
	url.searchParams.set("api_key", process.env.TMDB_KEY);

	const res = await fetch(url.href);
	if (!res.ok) return { data: null, ok: res.ok };

	const { cast } = await res.json();

	return {
		data: cast.splice(0, 15).map((c) => {
			return {
				id: c.id,
				poster: c.profile_path
					? baseImageUrl + "w300/" + c.profile_path
					: "",
				name: c.name,
				character: c.character,
			};
		}),
		ok: res.ok,
	};
}

export async function getMedia(movie_id: string) {
	const imagesUrl = new URL(`${baseMoviesUrl}${movie_id}/images`);
	imagesUrl.searchParams.set("api_key", process.env.TMDB_KEY);
	const videosURl = new URL(`${baseMoviesUrl}${movie_id}/videos`);
	videosURl.searchParams.set("api_key", process.env.TMDB_KEY);

	const res1 = await fetch(imagesUrl.href);
	const res2 = await fetch(videosURl.href);

	if (!res1.ok || !res2.ok) return { data: null, ok: false };

	const images = await res1.json();
	const { results } = await res2.json();

	images.backdrops = images.backdrops.map(
		(i) => baseImageUrl + "original/" + i.file_path,
	);
	images.posters = images.posters.map(
		(i) => baseImageUrl + "w300/" + i.file_path,
	);

	return {
		data: { images, videos: results.map((v) => v.key) },
		ok: true,
	};
}

export async function getSimilarMovies(movie_id: string) {
	const url = new URL(`${baseMoviesUrl}${movie_id}/similar`);
	url.searchParams.set("api_key", process.env.TMDB_KEY);

	const { items: data, ok } = await getItems(url);

	return { data, ok };
}
