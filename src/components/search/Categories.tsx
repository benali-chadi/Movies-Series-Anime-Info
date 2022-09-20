import React, { FC } from "react";

interface Props {
	setCategory: React.Dispatch<
		React.SetStateAction<
			"movie" | "serie" | "anime" | "people" | "animeCharacter"
		>
	>;
	category: "movie" | "serie" | "anime" | "people" | "animeCharacter";
}

const Categories: FC<Props> = ({ setCategory, category }) => {
	return (
		<div className="h-max w-full rounded-xl bg-my-white">
			<div className="p-4 bg-my-blue rounded-t-xl">
				<h3 className="text-2xl font-bold text-white">Categories</h3>
			</div>
			<div
				className={`p-2 cursor-pointer ${
					category === "movie"
						? "bg-my-blue/70"
						: "hover:bg-my-blue/40"
				}`}
				onClick={() => setCategory("movie")}
			>
				<h4 className="text-lg ">Movies</h4>
			</div>

			<div
				className={`p-2 cursor-pointer ${
					category === "serie"
						? "bg-my-blue/70"
						: "hover:bg-my-blue/40"
				}`}
				onClick={() => setCategory("serie")}
			>
				<h4 className="text-lg ">Series</h4>
			</div>
			<div
				className={`p-2 cursor-pointer ${
					category === "anime"
						? "bg-my-blue/70"
						: "hover:bg-my-blue/40"
				}`}
				onClick={() => setCategory("anime")}
			>
				<h4 className="text-lg ">Anime</h4>
			</div>
			<div
				className={`p-2 cursor-pointer ${
					category === "people"
						? "bg-my-blue/70"
						: "hover:bg-my-blue/40"
				}`}
				onClick={() => setCategory("people")}
			>
				<h4 className="text-lg ">People</h4>
			</div>
			<div
				className={`p-2 cursor-pointer ${
					category === "animeCharacter"
						? "bg-my-blue/70"
						: "hover:bg-my-blue/40"
				}`}
				onClick={() => setCategory("animeCharacter")}
			>
				<h4 className="text-lg ">Anime Characters</h4>
			</div>
		</div>
	);
};

export default Categories;
