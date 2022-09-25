const basePeopleUrl = `${process.env.TMDB_URL}person/`;
const baseImageUrl = "https://image.tmdb.org/t/p/";
const apiKey = process.env.TMDB_KEY;

export async function getPopularPeople() {
	const url = new URL(`${basePeopleUrl}popular`);

	url.searchParams.set("api_key", apiKey);

	let data = await fetch(url).then((r) => r.json());

	if (!data) return { popularPeople: null };

	const popularPeople = data.results.splice(0, 10).map((p) => ({
		id: p.id,
		poster: p.profile_path ? baseImageUrl + "w300/" + p.profile_path : "",
		name: p.name,
	}));

	return { popularPeople };
}
