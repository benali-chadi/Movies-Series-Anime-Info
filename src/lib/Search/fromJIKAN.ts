import { FilterState } from "../../components/helpers/context";

const baseAnimeURl = `${process.env.NEXT_PUBLIC_JIKAN_URL}anime`;
const baseCharctersURL = `${process.env.NEXT_PUBLIC_JIKAN_URL}characters`;

export async function getAnimeResults(
	query: string,
	filters: FilterState,
	page: number
) {
	const url = new URL(`${baseAnimeURl}`);

	url.searchParams.set("q", query);
	if (filters.year !== "")
		url.searchParams.set("start_date", filters.year.toString());
	url.searchParams.set("sort", filters.sort);
	url.searchParams.set("status", filters.status);
	if (page > 1) url.searchParams.set("page", page.toString());
	// Set Genres

	const data = await fetch(url).then((r) => r.json());

	if (!data) return { data: null };

	const pageInfo = {
		page: data.pagination.current_page,
		totalPage: data.pagination.items.total,
	};

	const items = data.data.map((itm) => ({
		id: itm.mal_id,
		poster: itm.images.jpg.image_url ?? "",
		info: {
			title: itm.title_english
				? itm.title_english
				: itm.title
				? itm.title
				: "",
		},
		rating: itm.score ?? "",
	}));

	return { data: { pageInfo, items } };
}

export async function getAnimeCharsResults(
	query: string,
	filters: FilterState
) {
	const url = new URL(`${baseCharctersURL}`);

	url.searchParams.set("q", query);
	url.searchParams.set("sort", filters.sort);

	const data = await fetch(url).then((r) => r.json());

	if (!data) return { data: null };

	const pageInfo = {
		page: data.pagination.current_page,
		totalPage: data.pagination.items.total,
	};

	const people = data.data.map((person) => ({
		id: person.mal_id,
		poster: person.images.jpg.image_url ?? "",
		name: person.name,
		character: "",
	}));

	return { data: { pageInfo, people } };
}
