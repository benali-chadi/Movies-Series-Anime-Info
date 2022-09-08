const baseMoviesUrl = `${process.env.TMDB_URL}movie/`;
const baseImageUrl = "https://image.tmdb.org/t/p/";

export async function getLatestTrailers() {
	const url = new URL(`${baseMoviesUrl}upcoming`);
	url.searchParams.set("api_key", process.env.TMDB_KEY);
	url.searchParams.set("page", "1");

	const res = await fetch(url.href);
	if (!res.ok) return { trailersIds: null, ok: res.ok };

	const { results } = await res.json();
	const ids = results.map((m) => m.id);

	const trailersIds = await Promise.all(
		ids.map(async (id) => {
			const vidUrl = new URL(baseMoviesUrl + id + "/videos");
			vidUrl.searchParams.set("api_key", process.env.TMDB_KEY);
			const { results } = await fetch(vidUrl.href).then((r) => r.json());

			return results[0].key;
		}),
	);

	return { trailersIds, ok: res.ok };
}

export const getItems = async (url) => {
	const res = await fetch(url.href);
	if (!res.ok) return { items: null, ok: res.ok };

	const { results } = await res.json();

	const items = results.map((movie) => {
		return {
			id: movie.id,
			poster: baseImageUrl + "w300/" + movie.poster_path,
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
	url.searchParams.set("api_key", process.env.TMDB_KEY);

	const { items: upcomingMovies, ok } = await getItems(url);

	return { upcomingMovies, ok };
}

export async function getTopMovies() {
	const url = new URL(`${baseMoviesUrl}top_rated`);
	url.searchParams.set("api_key", process.env.TMDB_KEY);

	const { items: topMovies, ok } = await getItems(url);

	return { topMovies, ok };
}
