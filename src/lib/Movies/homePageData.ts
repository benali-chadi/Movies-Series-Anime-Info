const baseMoviesUrl = `${process.env.TMDB_URL}movie/`;
const baseImageUrl = "https://image.tmdb.org/t/p/";

export async function getUpcomingMovies() {
	console.log("url =", `${baseMoviesUrl}now_playing`);
	const url = new URL(`${baseMoviesUrl}now_playing`);
	url.searchParams.set("api_key", process.env.TMDB_KEY);

	const res = await fetch(url.href);

	if (!res.ok) return { upcomingMovies: null, ok: res.ok };

	const { results } = await res.json();

	const upcomingMovies = results.map((movie) => {
		return {
			id: movie.id,
			poster: baseImageUrl + "w300/" + movie.poster_path,
			info: {
				title: movie.title,
				date: movie.release_date.substr(0, 4),
				genre: [""],
			},
			rating: movie.vote_average,
		};
	});

	return { upcomingMovies, ok: res.ok };
}

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
