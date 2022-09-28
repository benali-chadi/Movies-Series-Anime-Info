import React, { useEffect, useState } from "react";
import { useRouter } from "../../node_modules/next/router";
import UpperPart from "../../src/components/itemPage/UpperPart";
import ItemsList from "../../src/components/Common/ItemsList";
import PersonList from "../../src/components/Common/PersonList";
// import { getNowPlaying } from "../../src/lib/Movies/homePageData";
// import {
// 	getMedia,
// 	getMovieCast,
// 	getMovieDetails,
// 	getSimilarMovies,
// } from "../../src/lib/Movies/specifiPageData";
import MoviesInfoPart from "../../src/components/itemPage/MoviesInfoPart";
import MediaPart from "../../src/components/itemPage/MediaPart";
import Spinner from "../../src/components/Common/Spinner";
import {
	useGetMovieDetails,
	useGetMoviePeople,
	useGetMoviesItems,
} from "../../src/lib/Movies/movieData";
import { getMedia } from "../../src/lib/Movies/specifiPageData";

const MoviePage = () => {
	const router = useRouter();
	const { id } = router.query;
	// if (router.isFallback) return <Spinner />;
	const [images, setImages] = useState(null);
	const [videos, setVideos] = useState(null);
	const [mediaLoading, setMediaLoading] = useState(false);

	const {
		details,
		isLoading: detailsLoading,
		isError: detailError,
	} = useGetMovieDetails(`movie/${id}`, !!id);
	const {
		people,
		isLoading: peopleLoading,
		isError: peopleError,
	} = useGetMoviePeople(`movie/${id}/credits`, !!id);
	const {
		items: similarMovies,
		isLoading: similarLoading,
		isError: similarError,
	} = useGetMoviesItems(`movie/${id}/similar`, !!id);

	useEffect(() => {
		const getImagesAndVideos = async () => {
			const data = await getMedia(id as string);

			if (!data.data) return;
			setImages(data.data.images);
			setVideos(data.data.videos);
		};
		setMediaLoading(true);
		getImagesAndVideos();
		setMediaLoading(false);
	}, [id]);

	// let upperpartData = {};
	// if (details) {
	// 	upperpartData = {
	// 		id: details.id,
	// 		coverPoster: details.poster,
	// 		poster: details.poster,
	// 		crew: crew,
	// 		info: {
	// 			title: details.title,
	// 			date: details.date,
	// 			genres: details.genres,
	// 			runtime: details.runtime,
	// 			overview: details.overview,
	// 			rating: details.rating,
	// 			imdb_id: details.imdb_id,
	// 		},
	// 	};
	// }

	return (
		<div className="flex flex-col gap-4">
			<UpperPart
				crew={people ? people.crew : null}
				type="movie"
				details={details}
				loading={detailsLoading}
				error={detailError}
				coverPoster={images ? images.backdrops[0] : null}
				poster={images ? images.posters[0] : null}
			/>
			<div className="grid grid-cols-3 grid-rows-2 gap-4 w-full md:grid-cols-4">
				<div className="col-span-3">
					<PersonList
						title="Cast"
						data={people ? people.cast : null}
						loading={peopleLoading}
						error={peopleError}
					/>
				</div>
				<div className="col-span-full row-span-2 row-start-3 pl-2 md:col-start-4 md:row-start-1">
					{details && (
						<MoviesInfoPart
							{...details.generalInfo}
							loading={detailsLoading}
							error={detailError}
						/>
					)}
				</div>
				<div className="col-span-3">
					<MediaPart
						images={images}
						videos={videos}
						loading={mediaLoading}
					/>
				</div>
			</div>
			<ItemsList
				title="Similar Movies"
				data={similarMovies}
				type="movies"
				loading={similarLoading}
				error={similarError}
			/>
		</div>
	);
};

export default MoviePage;
