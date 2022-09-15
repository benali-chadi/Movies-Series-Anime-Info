const baseMoviesUrl = `${process.env.TMDB_URL}movie/`;
const baseImageUrl = "https://image.tmdb.org/t/p/";
const apiKey = process.env.TMDB_KEY;

export async function getLatestTrailers() {
	const currentYear = new Date().getFullYear();
	const url = new URL(`${process.env.TMDB_URL}discover/movie`);
	url.searchParams.set("api_key", apiKey);
	url.searchParams.set("release_date.gte", `${currentYear}-01-01`);

	const res = await fetch(url);
	if (!res.ok) return { trailersIds: null, ok: res.ok };

	const { results } = await res.json();
	const ids = results.map((m) => m.id);

	let trailersIds = [];

	for (let id of ids) {
		const vidUrl = new URL(baseMoviesUrl + id + "/videos");
		vidUrl.searchParams.set("api_key", apiKey);
		const { results } = await fetch(vidUrl).then((r) => r.json());

		for (let vid of results) {
			if (vid.type === "Trailer") {
				trailersIds.push(vid.key);
				break;
			}
		}
	}

	return { trailersIds, ok: res.ok };
}

export const getItems = async (url) => {
	const res = await fetch(url);
	if (!res.ok) return { items: null, ok: res.ok };

	const { results } = await res.json();

	const items = results.map((movie) => {
		return {
			id: movie.id,
			poster: movie.poster_path
				? baseImageUrl + "w300/" + movie.poster_path
				: "",
			info: {
				title: movie.title,
				date: movie.release_date.substr(0, 4),
			},
			rating: movie.vote_average,
		};
	});

	return { items, ok: res.ok };
};

export async function getNowPlaying() {
	const url = new URL(`${baseMoviesUrl}now_playing`);
	url.searchParams.set("api_key", apiKey);

	const { items: upcomingMovies, ok } = await getItems(url);

	return { upcomingMovies, ok };
}

export async function getTopMovies() {
	const url = new URL(`${baseMoviesUrl}top_rated`);
	url.searchParams.set("api_key", apiKey);

	const { items: topMovies, ok } = await getItems(url);

	return { topMovies, ok };
}

export async function getDiscoverAr() {
	const currentYear = new Date().getFullYear();

	const url = new URL(`${process.env.TMDB_URL}discover/movie`);
	url.searchParams.set("api_key", apiKey);
	url.searchParams.set("with_original_language", "ar");
	// url.searchParams.set("sort_by", "release_date.desc");
	url.searchParams.set("release_date.gte", `${currentYear}-01-01`);
	url.searchParams.set("language", "ar");

	const { items: arabicMovies, ok } = await getItems(url);

	return { arabicMovies, ok };
}

export async function getTrendingMovies() {
	const url = new URL(`${process.env.TMDB_URL}trending/movie/week`);
	url.searchParams.set("api_key", apiKey);

	const { items: trendingMovies, ok } = await getItems(url);

	return { trendingMovies, ok };
}
