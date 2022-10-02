import { useMemo } from "react";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "./movieData";

const baseJikanURl = `${process.env.NEXT_PUBLIC_JIKAN_URL}`;

export function useGetAnimeItems(url: string, params?) {
	const newUrl = useMemo(() => {
		const u = new URL(`${baseJikanURl}${url}`);
		if (params) {
			for (let o in params) {
				u.searchParams.set(o, params[o]);
			}
		}
		return u;
		// eslint-disable-next-line react-hooks/exhaustive-deps
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

export function useGetAnimeDetails(url: string, isId: boolean, params?) {
	const newUrl = useMemo(() => {
		const u = new URL(`${baseJikanURl}${url}`);
		if (params) {
			for (let o in params) {
				u.searchParams.set(o, params[o]);
			}
		}
		return u;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { data, error } = useSWRImmutable(isId ? newUrl : null, fetcher);

	if (data && !data.status) {
		const details = {
			id: data.mal_id,
			poster: data.images.jpg.image_url ?? "",
			title: data.title_english
				? data.title_english
				: data.title
				? data.title
				: "",
			date: data.year ?? "",
			genres: data.genres.map((g) => g.name),
			duration: data.duration,
			overview: data.synopsis,
			rating: data.score,
			background: data.background ?? "",
			generalInfo: {
				status: data.status,
				producers: data.producers.map((prod) => ({
					id: prod.mal_id,
					name: prod.name,
					url: prod.url,
				})),
				studios: data.studios.map((studio) => ({
					id: studio.mal_id,
					name: studio.name,
					url: studio.url,
				})),
				numOfEpisodes: data.episodes,
				aired: data.aired.string,
			},
			external: data.external,
			streaming: data.streaming,
		};

		return {
			details,
			isLoading: false,
			isError: null,
		};
	}
	if (error) {
		return {
			details: null,
			isLoading: false,
			isError: error,
		};
	}
	return {
		details: null,
		isLoading: true,
		isError: null,
	};
}

export function useGetAnimeCharacters(url: string, isId: boolean, params?) {
	const newUrl = useMemo(() => {
		const u = new URL(`${baseJikanURl}${url}`);
		if (params) {
			for (let o in params) {
				u.searchParams.set(o, params[o]);
			}
		}
		return u;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { data, error } = useSWRImmutable(isId ? newUrl : null, fetcher);

	if (data && !data.status) {
		const characters = data.splice(0, 15).map((actor) => {
			const voiceActor = actor.voice_actors[0].person;
			const poster = voiceActor.images.jpg.image_url ?? "";

			return {
				id: voiceActor.mal_id,
				poster,
				name: voiceActor.name,
				character: actor.character.name,
			};
		});

		return {
			characters,
			isLoading: false,
			isError: null,
		};
	}
	if (error) {
		return {
			characters: null,
			isLoading: false,
			isError: error,
		};
	}
	return {
		characters: null,
		isLoading: true,
		isError: null,
	};
}

export function useGetAnimeStaff(url: string, isId: boolean, params?) {
	const newUrl = useMemo(() => {
		const u = new URL(`${baseJikanURl}${url}`);
		if (params) {
			for (let o in params) {
				u.searchParams.set(o, params[o]);
			}
		}
		return u;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { data, error } = useSWRImmutable(isId ? newUrl : null, fetcher);

	if (data && !data.status) {
		const staff = data
			.filter(
				(s) =>
					s &&
					(s.positions.includes("Director") ||
						s.positions.includes("Original Creator"))
			)
			.map((s) => ({
				id: s.person.mal_id,
				name: s.person.name,
				job: s.positions.includes("Original Creator")
					? "Creator"
					: "Director",
			}));

		return {
			staff,
			isLoading: false,
			isError: null,
		};
	}
	if (error) {
		return {
			staff: null,
			isLoading: false,
			isError: error,
		};
	}
	return {
		staff: null,
		isLoading: true,
		isError: null,
	};
}
