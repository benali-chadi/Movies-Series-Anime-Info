import useSWRImmutable from "swr/immutable";
import { FilterState } from "../../components/helpers/context";

const baseSearchUrl = `${process.env.NEXT_PUBLIC_TMDB_URL}search/`;
const baseImageUrl = "https://image.tmdb.org/t/p/";
const apiKey = process.env.NEXT_PUBLIC_TMDB_KEY;

function SearchFetcher(url: string) {
	return fetch(url).then((r) => r.json());
}

export async function getMoviesResults(query: string, year: string) {
	const url = new URL(`${baseSearchUrl}movie`);

	url.searchParams.set("api_key", apiKey);
	url.searchParams.set("query", query);
	url.searchParams.set("year", year);

	// const { data, error } = useSWRImmutable(url, SearchFetcher);
	const data = await SearchFetcher(url.href);

	// if (data && data.results) {
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

	// 	return {
	// 		data: { pageInfo, items },
	// 		isLoading: false,
	// 		isError: null,
	// 	};
	// } else if (error) {
	// 	return {
	// 		data: null,
	// 		isLoading: false,
	// 		isError: error,
	// 	};
	// }
	// return {
	// 	data: null,
	// 	isLoading: true,
	// 	isError: null,
	// };
}

export function getSeriesResults(query: string, year: string) {
	const url = new URL(`${baseSearchUrl}/tv`);

	url.searchParams.set("api_key", apiKey);
	url.searchParams.set("query", query);
	url.searchParams.set("year", year);

	const { data, error } = useSWRImmutable(url, SearchFetcher);

	if (data && data.results) {
		const pageInfo = {
			page: data.page,
			totalPage: data.total_pages,
		};
		const items = data.results.map((itm) => ({
			id: itm.id,
			poster: itm.poster_path
				? baseImageUrl + "w300/" + itm.poster_path
				: "",
			info: {
				title: itm.name,
				date: itm.first_air_date.substr(0, 4),
			},
			rating: itm.vote_average,
		}));

		return {
			data: { pageInfo, items },
			isLoading: false,
			isError: null,
		};
	}
	if (error) {
		return {
			data: null,
			isLoading: false,
			isError: error,
		};
	}
	return {
		data: null,
		isLoading: true,
		isError: null,
	};
}

export function getPeopleResults(query: string) {
	const url = new URL(`${baseSearchUrl}/person`);

	url.searchParams.set("api_key", apiKey);
	url.searchParams.set("query", query);

	const { data, error } = useSWRImmutable(url, SearchFetcher);

	if (data && data.results) {
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
		return {
			data: { pageInfo, people },
			isLoading: false,
			isError: null,
		};
	}
	if (error) {
		return {
			data: null,
			isLoading: false,
			isError: error,
		};
	}
	return {
		data: null,
		isLoading: true,
		isError: null,
	};
}
