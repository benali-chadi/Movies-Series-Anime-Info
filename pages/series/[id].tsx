import React from "react";
import { useRouter } from "../../node_modules/next/router";
import UpperPart from "../../src/components/itemPage/UpperPart";
import ItemsList from "../../src/components/ItemsList";
import { getTrendingSeries } from "../../src/lib/Series/homePageData";
import {
	getMedia,
	getSerieCast,
	getSerieDetails,
	getSimilarSeries,
} from "../../src/lib/Series/specificPageData";

const SeriePage = ({ details, cast, crew, images, videos, similarSeries }) => {
	const router = useRouter();
	if (router.isFallback) return <div>Loading...</div>;
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
			<UpperPart {...upperpartData} />
			<ItemsList title="Similar Series" data={similarSeries} />
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

		console.log("DETAILS =", details.seasons[0]);

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
