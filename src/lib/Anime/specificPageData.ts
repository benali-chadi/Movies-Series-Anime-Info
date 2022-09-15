import { getItems } from "./homePageData";

const baseAnimeUrl = `${process.env.JIKAN_URL}anime/`;

export async function getAnimeDetails(anime_id: string) {
	const url = new URL(`${baseAnimeUrl}${anime_id}/full`);

	let res = await fetch(url);
	if (!res.ok) return { data: null, ok: res.ok };

	let { data } = await res.json();

	return {
		data: {
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
		},
		ok: res.ok,
	};
}

export async function getAnimeCrew(anime_id: string) {
	const charctersUrl = new URL(`${baseAnimeUrl}${anime_id}/characters`);
	const staffUrl = new URL(`${baseAnimeUrl}${anime_id}/staff`);

	const res1 = await fetch(charctersUrl);
	const res2 = await fetch(staffUrl);
	if (!res1.ok || !res2.ok) return { data: null, ok: res1.ok };

	const { data } = await res1.json();
	const { data: staff } = await res2.json();

	const mainVoiceActors = data.splice(0, 15).map((actor) => {
		const voiceActor = actor.voice_actors[0].person;
		const poster = voiceActor.images.jpg.image_url ?? "";

		return {
			id: voiceActor.mal_id,
			poster,
			name: voiceActor.name,
			character: actor.character.name,
		};
	});
	const mainStaff = staff
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
		data: { voiceActors: mainVoiceActors, crew: mainStaff },
		ok: res1.ok,
	};
}

export async function getMedia(anime_id: string) {
	const imagesUrl = new URL(`${baseAnimeUrl}${anime_id}/pictures`);
	const videosUrl = new URL(`${baseAnimeUrl}${anime_id}/videos`);

	const res1 = await fetch(imagesUrl);
	const res2 = await fetch(videosUrl);
	console.log(`img = ${res1.status} vids = ${res2.status}`);

	if (!res1.ok || !res2.ok) return { data: null, ok: res1.ok };

	let { data: images } = await res1.json();
	let { data: videos } = await res2.json();
	// console.log("images =", images);

	images = images.map((img) => img.jpg.image_url ?? "");
	delete videos.episodes;
	videos.promo = videos.promo.map((v) => v.trailer.youtube_id ?? "");
	videos.music_videos = videos.music_videos.map(
		(v) => v.video.youtube_id ?? ""
	);
	return { data: { images, videos }, ok: res1.ok };
}

export async function getSimilarAnimes(anime_id: string) {
	const url = new URL(`${baseAnimeUrl}${anime_id}/recommendations`);

	const { items, ok } = await getItems(url);

	console.log("ITEMS =", items);

	return { items, ok };
}
