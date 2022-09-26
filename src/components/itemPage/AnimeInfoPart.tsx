import React, { FC } from "react";
interface Props {
	status: string;
	producers: [
		{
			id: number;
			name: string;
			url: string;
		}
	];
	studios: [
		{
			id: number;
			name: string;
			url: string;
		}
	];
	numOfEpisodes: number;
	aired: number;
}
const AnimeInfoPart: FC<Props> = ({
	status,
	producers,
	studios,
	numOfEpisodes,
	aired,
}) => {
	return (
		<div className="flex flex-col gap-2 text-white">
			<h2 className="mb-4 text-4xl font-bold">Info</h2>

			<h3 className="text-xl font-bold">
				Status<p className="pl-2 font-normal">{status}</p>
			</h3>
			<h3 className="text-xl font-bold">
				Number Of Episodes
				<p className="pl-2 font-normal">{numOfEpisodes}</p>
			</h3>
			<h3 className="text-xl font-bold">
				Aired
				<p className="pl-2 font-normal">from {aired}</p>
			</h3>

			{/* Studios */}
			<h3 className="text-xl font-bold">Studios</h3>
			<div className="flex flex-wrap gap-4 w-full">
				{studios.map((studio) => (
					<div key={studio.id} className="w-[6rem]">
						<a
							href={studio.url}
							target="_blank"
							rel="noreferrer"
							className="pt-2 text-blue-300 hover:text-blue-500"
						>
							{studio.name}
						</a>
					</div>
				))}
			</div>
			{/* Producers */}
			<h3 className="text-xl font-bold">Producers</h3>
			<div className="flex flex-wrap gap-4 w-full">
				{producers.map((producer) => (
					<div key={producer.id} className="w-[6rem]">
						<a
							href={producer.url}
							target="_blank"
							rel="noreferrer"
							className="pt-2 text-blue-300 hover:text-blue-500"
						>
							{producer.name}
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default AnimeInfoPart;
