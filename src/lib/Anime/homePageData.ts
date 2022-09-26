async function fetchGenres(url: string) {
	const res = await fetch(url);
	if (!res.ok) return { genres: null, ok: res.ok };

	const json = await res.json();

	const genres = json.data.map((genre) => genre.attributes.name);

	return { genres, ok: res.ok };
}

// From Kitsu

export async function getAnimeHomeData() {
	const TrendigUrl = new URL(`${process.env.KITSU_URL}/trending/anime`);

	TrendigUrl.searchParams.set("sort", "updatedAt");

	const res = await fetch(TrendigUrl);
	if (!res.ok) return { data: null, ok: res.ok };
	const { data } = await res.json();

	const videosIds = data.map((v) => {
		return v.attributes.youtubeVideoId;
	});

	let items = [];

	for (let item of data) {
		const attr = item.attributes;
		let { genres, ok } = await fetchGenres(
			process.env.KITSU_URL + item.relationships.genres.links.related
		);
		if (!ok) return { data: { items: null, videosIds }, ok: res.ok };

		items.push({
			poster: attr.posterImage.original ?? "",
			info: {
				title: attr.titles.en
					? attr.titles.en
					: attr.titles.en_jp
					? attr.titles.en_jp
					: "",
				date: attr.startDate.substr(0, 4) ?? "",
				genre: genres ?? [""],
			},
			rating: attr.averageRating,
		});
	}

	return { data: { items, videosIds }, ok: res.ok };
}

// From GoGo Anime

export async function getLatestEpisodes() {
	const baseUrl = "https://gogoanime.herokuapp.com";
	const RecentReleasedUrl = new URL(`${baseUrl}/recent-release`);

	const res = await fetch(RecentReleasedUrl);
	if (!res.ok) return { episodesUrl: null, ok: res.ok };
	const data = await res.json();

	const episodesUrl = data.map((ep) => ep.episodeUrl);

	return { episodesUrl, ok: res.ok };
}

// From Jikan

export const getItems = async (url) => {
	const res = await fetch(url);
	if (!res.ok) return { items: null, ok: res.ok };

	const { data } = await res.json();

	const items = data.map((itm) => {
		itm = itm.entry ? itm.entry : itm;
		return {
			id: itm.mal_id,
			poster: itm.images.jpg.image_url ?? "",
			info: {
				title: itm.title_english
					? itm.title_english
					: itm.title
					? itm.title
					: "",
				date: itm.year ?? "",
			},
			rating: itm.score ?? "",
		};
	});

	return { items, ok: res.ok };
};

export async function getALatestTrailers() {
	const url = new URL(`${process.env.NEXT_PUBLIC_JIKAN_URL}top/anime`);
	url.searchParams.set("filter", "upcoming");

	const res = await fetch(url);
	if (!res.ok) return { trailersIds: null, ok: res.ok };
	const { data } = await res.json();

	const trailersIds = data
		.filter((itm) => itm.trailer.youtube_id)
		.map((itm) => itm.trailer.youtube_id);

	return { trailersIds, ok: res.ok };
}

export async function getTopAnime() {
	const url = new URL(`${process.env.JIKAN_URL}top/anime`);
	url.searchParams.set("filter", "bypopularity");

	return getItems(url);
}

export async function getLatestAnime() {
	const url = new URL(`${process.env.JIKAN_URL}top/anime`);

	url.searchParams.set("filter", "airing");

	return getItems(url);
}
