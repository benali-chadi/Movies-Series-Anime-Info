import { useMemo } from "react";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "../Movies/movieData";

const baseJikanURl = `${process.env.NEXT_PUBLIC_JIKAN_URL}`;

export function useGetAnimeItems(url: string, options?) {
	const newUrl = useMemo(() => {
		const u = new URL(`${baseJikanURl}${url}`);
		if (options) {
			for (let o in options) {
				u.searchParams.set(o, options[o]);
			}
		}
		return u;
	}, []);

	const { data, error } = useSWRImmutable(newUrl, fetcher);

	if (data && data.data) {
		const items = data.data.map((itm) => {
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

		return {
			items,
			isLoading: false,
			isError: null,
		};
	}
	if (error) {
		return {
			items: null,
			isLoading: false,
			isError: error,
		};
	}
	return {
		items: null,
		isLoading: true,
		isError: null,
	};
}
