const baseSearchUrl = `${process.env.NEXT_PUBLIC_TMDB_URL}search/`;
const baseImageUrl = "https://image.tmdb.org/t/p/";
const apiKey = process.env.NEXT_PUBLIC_TMDB_KEY;

function SearchFetcher(url: string) {
	return fetch(url).then((r) => r.json());
}

export async function getMoviesResults(
	query: string,
	year: string,
	page: number
) {
	const url = new URL(`${baseSearchUrl}movie`);

	url.searchParams.set("api_key", apiKey);
	url.searchParams.set("query", query);
	url.searchParams.set("year", year);
	if (page > 1) url.searchParams.set("page", page.toString());

	const data = await SearchFetcher(url.href);

	if (!data) return { data: null };

	const pageInfo = {
		page: data.page,
		totalPage: data.total_pages,
	};

	const items = data.results.map((itm) => ({
		id: itm.id,
		poster: itm.poster_path ? baseImageUrl + "w300/" + itm.poster_path : "",
		info: {
			title: itm.title,
			date: itm.release_date ? itm.release_date.substr(0, 4) : 0,
		},
		rating: itm.vote_average,
	}));
	return { data: { pageInfo, items } };
}

export async function getSeriesResults(
	query: string,
	year: string,
	page: number
) {
	const url = new URL(`${baseSearchUrl}tv`);

	url.searchParams.set("api_key", apiKey);
	url.searchParams.set("query", query);
	url.searchParams.set("year", year);

	if (page > 1) url.searchParams.set("page", page.toString());

	const data = await SearchFetcher(url.href);

	if (!data) return { data: null };

	const pageInfo = {
		page: data.page,
		totalPage: data.total_pages,
	};
	const items = data.results.map((itm) => ({
		id: itm.id,
		poster: itm.poster_path ? baseImageUrl + "w300/" + itm.poster_path : "",
		info: {
			title: itm.name,
			date: itm.first_air_date ? itm.first_air_date.substr(0, 4) : 0,
		},
		rating: itm.vote_average,
	}));

	return { data: { pageInfo, items } };
}

export async function getPeopleResults(query: string, page: number) {
	const url = new URL(`${baseSearchUrl}person`);

	url.searchParams.set("api_key", apiKey);
	url.searchParams.set("query", query);
	if (page > 1) url.searchParams.set("page", page.toString());

	const data = await SearchFetcher(url.href);

	if (!data) return { data: null };

	const pageInfo = {
		page: data.page,
		totalPage: data.total_pages,
	};
	const people = data.results.map((person) => ({
		id: person.id,
		poster: person.profile_path
			? baseImageUrl + "w300/" + person.profile_path
			: "",
		name: person.name,
		character: "", // For the person Card Component
	}));

	return { data: { pageInfo, people } };
}
