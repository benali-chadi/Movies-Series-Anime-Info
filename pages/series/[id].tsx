import React from "react";
import { useRouter } from "../../node_modules/next/router";
import LatestSeason from "../../src/components/itemPage/LatestSeason";
import MediaPart from "../../src/components/itemPage/MediaPart";
import SeriesInfoPart from "../../src/components/itemPage/SeriesInfoPart";
import UpperPart from "../../src/components/itemPage/UpperPart";
import ItemsList from "../../src/components/Common/ItemsList";
import PersonList from "../../src/components/Common/PersonList";
import { getTrendingSeries } from "../../src/lib/Series/homePageData";
import {
	getMedia,
	getSerieCast,
	getSerieDetails,
	getSimilarSeries,
} from "../../src/lib/Series/specificPageData";
import Spinner from "../../src/components/Common/Spinner";

const SeriePage = ({ details, cast, crew, images, videos, similarSeries }) => {
	const router = useRouter();
	if (router.isFallback) return <Spinner />;
	if (!details) {
		return <h1 className="text-3xl text-white">Error Loading Data</h1>;
	}

	const upperpartData = {
		id: details.id,
		coverPoster: images.backdrops[0],
		poster: images.posters[0],
		crew: details.creators,
		info: {
			title: details.name,
			date: details.firstAirDate,
			genres: details.genres,
			runtime: details.episodeRunTime,
			overview: details.overview,
			rating: details.rating,
			imdb_id: -1,
		},
	};

	return (
		<div className="flex flex-col gap-4">
			<UpperPart {...upperpartData} type="series" />
			<div className="grid grid-cols-3 grid-rows-2 gap-4 w-full md:grid-cols-4">
				<div className="col-span-3">
					<PersonList title="Cast" data={cast} />
				</div>
				<div className="col-span-full row-span-2 row-start-3 pl-2 md:col-start-4 md:row-start-1">
					<SeriesInfoPart {...details.generalInfo} />
				</div>
				<div className="col-span-3 ml-4">
					<LatestSeason
						{...details.seasons[details.seasons.length - 1]}
					/>
				</div>
				<div className="col-span-3">
					<MediaPart images={images} videos={videos} />
				</div>
			</div>
			<ItemsList
				title="Similar Series"
				data={similarSeries}
				type="series"
			/>
		</div>
	);
};

export async function getStaticPaths() {
	const { trendingSeries } = await getTrendingSeries();

	const paths = trendingSeries.map((serie) => {
		return {
			params: {
				id: serie.id.toString(),
			},
		};
	});

	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	try {
		const { data: details } = await getSerieDetails(params.id);
		const {
			data: { cast, crew },
		} = await getSerieCast(params.id);
		const { data: media } = await getMedia(params.id);
		const { data: similarSeries } = await getSimilarSeries(params.id);

		return {
			props: {
				details,
				cast,
				crew,
				images: media.images,
				videos: media.videos,
				similarSeries,
			},
		};
	} catch (e) {
		console.log("error =", e);
		return { props: { details: null } };
	}
}

export default SeriePage;
