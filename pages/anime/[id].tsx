import { useRouter } from "next/router";
import React from "react";
import UpperPart from "../../src/components/itemPage/UpperPart";
import ItemsList from "../../src/components/Common/ItemsList";
import PersonList from "../../src/components/Common/PersonList";
import { getLatestAnime } from "../../src/lib/Anime/homePageData";
import {
	getAnimeCrew,
	getAnimeDetails,
	useGetSimilar,
} from "../../src/lib/Anime/specificPageData";
import AnimeMediaPart from "../../src/components/itemPage/AnimeMediaPart";
import Spinner from "../../src/components/Common/Spinner";
import AnimeInfoPart from "../../src/components/itemPage/AnimeInfoPart";
import {
	useGetAnimeCharacters,
	useGetAnimeDetails,
	useGetAnimeStaff,
} from "../../src/lib/Anime/animeData";

const AnimePage = ({ details, voiceActors, crew }) => {
	const router = useRouter();
	// if (router.isFallback) return <Spinner />;
	const { id } = router.query;

	const { similarAnime, isLoading, isError } = useGetSimilar(
		`${id}/recommendations`
	);
	// const {
	// 	details,
	// 	isLoading: detailsLoading,
	// 	isError: detailError,
	// } = useGetAnimeDetails(`${id}/full`, !!id);
	// const {
	// 	characters,
	// 	isLoading: charactersLoading,
	// 	isError: charactersError,
	// } = useGetAnimeCharacters(`${id}/characters`, !!id);
	// const {
	// 	staff,
	// 	isLoading: staffLoading,
	// 	isError: staffError,
	// } = useGetAnimeStaff(`${id}/staff`, !!id);

	// const upperpartData = details
	// 	? {
	// 			id: details.id,
	// 			coverPoster: details.poster,
	// 			poster: details.poster,
	// 			crew: crew ? crew : [],
	// 			// info: {
	// 			title: details.title,
	// 			date: details.date,
	// 			genres: details.genres,
	// 			runtime: details.duration,
	// 			overview: details.overview,
	// 			rating: details.rating,
	// 			imdb_id: -1,
	// 			// },
	// 	  }
	// 	: {
	// 			id: 0,
	// 			coverPoster: "",
	// 			poster: "",
	// 			crew: null,
	// 			// info: {
	// 			title: "",
	// 			date: "",
	// 			genres: [],
	// 			runtime: "",
	// 			overview: "",
	// 			rating: 0,
	// 			imdb_id: -1,
	// 			// },
	// 	  };

	return (
		<div className="flex flex-col gap-4">
			<UpperPart
				// crew={staff ? staff : ""}
				crew={crew}
				details={details}
				loading={!details}
				// loading={detailsLoading}
				// error={detailError}
				coverPoster={details ? details.background : ""}
				poster={details ? details.poster : ""}
				type="anime"
			/>
			<div className="grid grid-cols-3 grid-rows-2 gap-4 w-full md:grid-cols-4">
				<div className="col-span-3">
					{/* {characters && ( */}
					<PersonList
						title="Voice Actors"
						data={voiceActors}
						// data={characters}
						// loading={charactersLoading}
						// error={charactersError}
					/>
					{/* )} */}
				</div>
				<div className="col-span-full row-span-2 row-start-3 pl-2 md:col-start-4 md:row-start-1">
					{details && <AnimeInfoPart {...details.generalInfo} />}
				</div>
				<div className="col-span-3">
					<AnimeMediaPart />
				</div>
			</div>
			<ItemsList
				title="Similar Anime"
				data={similarAnime}
				type="anime"
				loading={isLoading}
				error={isError}
			/>
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
