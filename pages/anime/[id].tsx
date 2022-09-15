import { useRouter } from "next/router";
import React from "react";
import UpperPart from "../../src/components/itemPage/UpperPart";
import ItemsList from "../../src/components/ItemsList";
import { getLatestAnime } from "../../src/lib/Anime/homePageData";
import {
	getAnimeCrew,
	getAnimeDetails,
	getMedia,
	getSimilarAnimes,
} from "../../src/lib/Anime/specificPageData";

const AnimePage = ({
	details,
	voiceActors,
	crew,
	images,
	videos,
	similarAnime,
}) => {
	const router = useRouter();
	if (router.isFallback) return <div>Loading...</div>;
	console.log(similarAnime);

	const upperpartData = {
		id: details.id,
		coverPoster: details.poster,
		poster: details.poster,
		crew,
		info: {
			title: details.title,
			date: details.date,
			genres: details.genres,
			runtime: details.duration,
			overview: details.overview,
			rating: details.rating,
			imdb_id: -1,
		},
	};

	return (
		<div className="flex flex-col gap-4">
			<UpperPart {...upperpartData} />
			{/* <ItemsList title="Similar Anime" data={similarAnime} /> */}
		</div>
	);
};

export async function getStaticPaths() {
	const { items } = await getLatestAnime();

	// const paths = items.map((anime) => ({
	// 	params: {
	// 		id: anime.id.toString(),
	// 	},
	// }));

	return { paths: [{ params: { id: "1" } }], fallback: true };
}

export async function getStaticProps({ params }) {
	const { data: details, ok } = await getAnimeDetails(params.id);
	const { data, ok: ok1 } = await getAnimeCrew(params.id);
	const { data: media, ok: ok2 } = await getMedia(params.id);
	const { items: similarAnime, ok: ok3 } = await getSimilarAnimes(params.id);
	// if (!ok || !ok1 || !ok2 || !ok3) {
	// 	console.log("NOT OK!");
	// 	return {
	// 		props: {},
	// 	};
	// }
	console.log("MEDIA =", media);
	console.log("SIMILAR =", similarAnime);

	// const { images, videos } = media;
	const { voiceActors, crew } = data;

	return {
		props: {
			details,
			voiceActors,
			crew,
			// images,
			// videos,
			similarAnime,
		},
	};
}

export default AnimePage;
