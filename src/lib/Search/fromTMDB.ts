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

	// {
	// const { data, error } = useSWR(ok ? url : null, SearchFetcher, {
	// 	revalidateOnFocus: false,
	// 	revalidateIfStale: false,
	// 	revalidateOnMount: false,
	// 	revalidateOnReconnect: false,
	// 	refreshWhenOffline: false,
	// 	refreshWhenHidden: false,
	// 	refreshInterval: 0,
	// });
	// }
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

	// if (data && data.results) {
	// 	const pageInfo = {
	// 		page: data.page,
	// 		totalPage: data.total_pages,
	// 	};
	// 	const items = data.results.map((itm) => ({
	// 		id: itm.id,
	// 		poster: itm.poster_path
	// 			? baseImageUrl + "w300/" + itm.poster_path
	// 			: "",
	// 		info: {
	// 			title: itm.title,
	// 			date: itm.release_date ? itm.release_date.substr(0, 4) : 0,
	// 		},
	// 		rating: itm.vote_average,
	// 	}));
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

export async function getSeriesResults(query: string, year: string) {
	const url = new URL(`${baseSearchUrl}tv`);

	url.searchParams.set("api_key", apiKey);
	url.searchParams.set("query", query);
	url.searchParams.set("year", year);

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

	// const { data, error } = useSWRImmutable(url, SearchFetcher);

	// if (data && data.results) {
	// 	const pageInfo = {
	// 		page: data.page,
	// 		totalPage: data.total_pages,
	// 	};
	// 	const items = data.results.map((itm) => ({
	// 		id: itm.id,
	// 		poster: itm.poster_path
	// 			? baseImageUrl + "w300/" + itm.poster_path
	// 			: "",
	// 		info: {
	// 			title: itm.name,
	// 			date: itm.first_air_date.substr(0, 4),
	// 		},
	// 		rating: itm.vote_average,
	// 	}));

	// 	return {
	// 		data: { pageInfo, items },
	// 		isLoading: false,
	// 		isError: null,
	// 	};
	// }
	// if (error) {
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

export async function getPeopleResults(query: string) {
	const url = new URL(`${baseSearchUrl}person`);

	url.searchParams.set("api_key", apiKey);
	url.searchParams.set("query", query);

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

	// const { data, error } = useSWRImmutable(url, SearchFetcher);

	// if (data && data.results) {
	// 	const pageInfo = {
	// 		page: data.page,
	// 		totalPage: data.total_pages,
	// 	};
	// 	const people = data.results.map((person) => ({
	// 		id: person.id,
	// 		poster: person.profile_path
	// 			? baseImageUrl + "w300/" + person.profile_path
	// 			: "",
	// 		name: person.name,
	// 		character: "", // For the person Card Component
	// 	}));
	// 	return {
	// 		data: { pageInfo, people },
	// 		isLoading: false,
	// 		isError: null,
	// 	};
	// }
	// if (error) {
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
