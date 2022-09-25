import React from "react";
import { useRouter } from "../../node_modules/next/router";
import UpperPart from "../../src/components/itemPage/UpperPart";
import ItemsList from "../../src/components/Common/ItemsList";
import PersonList from "../../src/components/Common/PersonList";
import { getNowPlaying } from "../../src/lib/Movies/homePageData";
import {
	getMedia,
	getMovieCast,
	getMovieDetails,
	getSimilarMovies,
} from "../../src/lib/Movies/specifiPageData";
import MoviesInfoPart from "../../src/components/itemPage/MoviesInfoPart";
import MediaPart from "../../src/components/itemPage/MediaPart";
import Spinner from "../../src/components/Common/Spinner";

const MoviePage = ({ details, cast, crew, images, videos, similarMovies }) => {
	const router = useRouter();
	if (router.isFallback) return <Spinner />;

	const upperpartData = {
		id: details.id,
		coverPoster: images.backdrops[0],
		poster: images.posters[0],
		crew: crew,
		info: {
			title: details.title,
			date: details.date,
			genres: details.genres,
			runtime: details.runtime,
			overview: details.overview,
			rating: details.rating,
			imdb_id: details.imdb_id,
		},
	};

	return (
		<div className="flex flex-col gap-4">
			<UpperPart {...upperpartData} type="movies" />
			<div className="grid grid-cols-3 grid-rows-2 gap-4 w-full md:grid-cols-4">
				<div className="col-span-3">
					<PersonList title="Cast" data={cast} />
				</div>
				<div className="col-span-full row-span-2 row-start-3 pl-2 md:col-start-4 md:row-start-1">
					<MoviesInfoPart {...details.generalInfo} />
				</div>
				<div className="col-span-3">
					<MediaPart images={images} videos={videos} />
				</div>
			</div>
			<ItemsList
				title="Similar Movies"
				data={similarMovies}
				type="movies"
			/>
		</div>
	);
};

export async function getStaticPaths() {
	const { upcomingMovies } = await getNowPlaying();

	const paths = upcomingMovies.map((movie) => {
		return {
			params: {
				id: movie.id.toString(),
			},
		};
	});

	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	const { data: details } = await getMovieDetails(params.id);
	const {
		data: { cast, crew },
	} = await getMovieCast(params.id);
	const { data: media } = await getMedia(params.id);
	const { data: similarMovies } = await getSimilarMovies(params.id);

	return {
		props: {
			details,
			cast,
			crew,
			images: media.images,
			videos: media.videos,
			similarMovies,
		},
	};
}

export default MoviePage;
