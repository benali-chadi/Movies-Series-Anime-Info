const baseAnimeURl = `${process.env.JIKAN_URL}`;

export async function getPopularCharacters() {
	const url = new URL(`${baseAnimeURl}top/characters`);

	const data = await fetch(url).then((r) => r.json());

	if (!data) return { popularCharacters: null };

	const popularCharacters = data.data.splice(0, 10).map((c) => ({
		id: c.mal_id,
		poster: c.images.jpg.image_url ?? "",
		name: c.name,
	}));

	return { popularCharacters };
}
