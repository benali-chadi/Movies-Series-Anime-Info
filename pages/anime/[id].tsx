import { useRouter } from "next/router";
import React from "react";
import UpperPart from "../../src/components/itemPage/UpperPart";
import ItemsList from "../../src/components/Common/ItemsList";
import PersonList from "../../src/components/Common/PersonList";
import {
	getAnimeCrew,
	getAnimeDetails,
	useGetSimilar,
} from "../../src/lib/Anime/specificPageData";
import AnimeMediaPart from "../../src/components/itemPage/AnimeMediaPart";
// import Spinner from "../../src/components/Common/Spinner";
import AnimeInfoPart from "../../src/components/itemPage/AnimeInfoPart";

const AnimePage = ({ details, voiceActors, crew }) => {
	const router = useRouter();
	const { id } = router.query;

	const { similarAnime, isLoading, isError } = useGetSimilar(
		`${id}/recommendations`
	);

	return (
		<div className="flex flex-col gap-4">
			<UpperPart
				crew={crew}
				details={details}
				loading={!details}
				error={false}
				coverPoster={details ? details.background : ""}
				poster={details ? details.poster : ""}
				type="anime"
			/>
			<div className="grid grid-cols-3 grid-rows-2 gap-4 w-full md:grid-cols-4">
				<div className="col-span-3">
					<PersonList
						title="Voice Actors"
						data={voiceActors}
						loading={false}
						error={false}
					/>
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

export async function getServerSideProps({ query }) {
	const { data: details, ok } = await getAnimeDetails(query.id);
	const { data, ok: ok1 } = await getAnimeCrew(query.id);

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
