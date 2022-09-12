const baseSeriesUrl = `${process.env.TMDB_URL}tv/`;
const baseImageUrl = "https://image.tmdb.org/t/p/";
const apiKey = process.env.TMDB_KEY;

export async function getLatestTrailers() {
	const currentYear = new Date().getFullYear();
	const url = new URL(`${process.env.TMDB_URL}discover/tv`);
	url.searchParams.set("api_key", apiKey);
	url.searchParams.set("first_air_date_year", `${currentYear}`);

	const res = await fetch(url.href);
	if (!res.ok) return { trailersIds: null, ok: res.ok };

	const { results } = await res.json();
	const ids = results.map((s) => s.id);
	let trailersIds = [];

	for (let id of ids) {
		const vidUrl = new URL(baseSeriesUrl + id + "/videos");
		vidUrl.searchParams.set("api_key", apiKey);
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

export const getItems = async (url) => {
	const res = await fetch(url.href);
	if (!res.ok) return { items: null, ok: res.ok };

	const { results } = await res.json();
	const items = results
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

	return { items, ok: res.ok };
};

export async function getTopSeries() {
	const url = new URL(`${baseSeriesUrl}top_rated`);
	url.searchParams.set("api_key", apiKey);

	const { items: topSeries, ok } = await getItems(url);

	return { topSeries, ok };
}

export async function getPopularSeries() {
	const url = new URL(`${baseSeriesUrl}popular`);
	url.searchParams.set("api_key", apiKey);

	const { items: recentSeries, ok } = await getItems(url);

	return { recentSeries, ok };
}

export async function getTrendingSeries() {
	const url = new URL(`${process.env.TMDB_URL}trending/tv/week`);
	url.searchParams.set("api_key", apiKey);

	const { items: trendingSeries, ok } = await getItems(url);

	return { trendingSeries, ok };
}
