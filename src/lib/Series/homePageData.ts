const baseSeriesUrl = `${process.env.TMDB_URL}tv/`;
const baseImageUrl = "https://image.tmdb.org/t/p/";

export async function getLatestTrailers() {
	const url = new URL(`${baseSeriesUrl}on_the_air`);
	url.searchParams.set("api_key", process.env.TMDB_KEY);
	// url.searchParams.set("page", "1");

	const res = await fetch(url.href);
	if (!res.ok) return { trailersIds: null, ok: res.ok };

	const { results } = await res.json();
	const ids = results.map((s) => s.id);
	let trailersIds = [];

	for (let id of ids) {
		const vidUrl = new URL(baseSeriesUrl + id + "/videos");
		vidUrl.searchParams.set("api_key", process.env.TMDB_KEY);
		const { results } = await fetch(vidUrl.href).then((r) => r.json());

		for (let vid of results) {
			if (vid.type === "Trailer") {
				trailersIds.push(vid.key);
				break;
			}
		}
	}

	return { trailersIds, ok: res.ok };
}

const getItems = async (url) => {
	const res = await fetch(url.href);
	if (!res.ok) return { items: null, ok: res.ok };

	const { results } = await res.json();
	const items = results
		.filter((serie) => !serie.origin_country.includes("JP"))
		.map((serie) => {
			return {
				id: serie.id,
				poster: baseImageUrl + "w300/" + serie.poster_path,
				info: {
					title: serie.name,
					date: serie.first_air_date.substr(0, 4),
				},
				rating: serie.vote_average,
			};
		});

	return { items, ok: res.ok };
};

export async function getTopSeries() {
	const url = new URL(`${baseSeriesUrl}top_rated`);
	url.searchParams.set("api_key", process.env.TMDB_KEY);

	const { items: topSeries, ok } = await getItems(url);

	return { topSeries, ok };
}

export async function getPopularSeries() {
	const url = new URL(`${baseSeriesUrl}popular`);
	url.searchParams.set("api_key", process.env.TMDB_KEY);

	const { items: recentSeries, ok } = await getItems(url);

	return { recentSeries, ok };
}
