import { useRouter } from "next/router";
import React from "react";
import UpperPart from "../../src/components/itemPage/UpperPart";
import ItemsList from "../../src/components/Common/ItemsList";
import PersonList from "../../src/components/Common/PersonList";
import { getLatestAnime } from "../../src/lib/Anime/homePageData";
import {
	getAnimeCrew,
	getAnimeDetails,
	getSimilar,
} from "../../src/lib/Anime/specificPageData";
import AnimeMediaPart from "../../src/components/itemPage/AnimeMediaPart";
import Spinner from "../../src/components/Common/Spinner";
import AnimeInfoPart from "../../src/components/itemPage/AnimeInfoPart";

const AnimePage = ({ details, voiceActors, crew }) => {
	const router = useRouter();
	if (router.isFallback) return <Spinner />;

	const { similarAnime, isLoading, isError } = getSimilar(
		`${router.query.id}/recommendations`
	);

	const upperpartData = details
		? {
				id: details.id,
				coverPoster: details.poster,
				poster: details.poster,
				crew: crew ? crew : [],
				info: {
					title: details.title,
					date: details.date,
					genres: details.genres,
					runtime: details.duration,
					overview: details.overview,
					rating: details.rating,
					imdb_id: -1,
				},
		  }
		: {
				id: 0,
				coverPoster: "",
				poster: "",
				crew: null,
				info: {
					title: "",
					date: "",
					genres: [],
					runtime: "",
					overview: "",
					rating: 0,
					imdb_id: -1,
				},
		  };

	return (
		<div className="flex flex-col gap-4">
			{details && <UpperPart {...upperpartData} />}
			<div className="grid grid-cols-4 grid-rows-2 gap-4 w-full">
				<div className="col-span-3">
					{voiceActors && (
						<PersonList title="Voice Actors" data={voiceActors} />
					)}
				</div>
				<div className="row-span-2">
					{details && <AnimeInfoPart {...details.generalInfo} />}
				</div>
				<div className="col-span-3">
					<AnimeMediaPart />
				</div>
			</div>
			()
			{isLoading ? (
				<Spinner />
			) : isError ? (
				<div className="text-3xl font-bold text-white">
					Error Loading Similar Anime
				</div>
			) : (
				<ItemsList
					title="Similar Anime"
					data={similarAnime}
					type="anime"
				/>
			)}
		</div>
	);
};

export async function getStaticPaths() {
	const { items } = await getLatestAnime();

	const paths = items.map((anime) => ({
		params: {
			id: anime.id.toString(),
		},
	}));

	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	const { data: details, ok } = await getAnimeDetails(params.id);
	const { data, ok: ok1 } = await getAnimeCrew(params.id);

	if (ok && !ok1)
		return {
			props: {
				details,
				voiceActors: null,
			},
		};
	if (!ok1)
		return {
			props: {
				details: null,
			},
		};
	const { voiceActors, crew } = data;

	return {
		props: {
			details,
			voiceActors,
			crew,
		},
	};
}

export default AnimePage;
