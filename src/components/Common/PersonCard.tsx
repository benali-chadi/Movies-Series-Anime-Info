import React, { FC } from "react";

interface Props {
	id: number;
	poster: string;
	name: string;
	character: string;
}

const PersonCard: FC<Props> = ({ id, poster, name, character }) => {
	return (
		<div className="w-[8rem] h-max rounded-xl flex flex-col justify-end flex-shrink-0">
			<img
				src={poster !== "" ? poster : "/images/default_person.png"}
				alt="Person Image"
				className="w-[8rem] h-[10rem] rounded-t-xl"
			/>
			<div className="w-full break-words">
				<h3 className="text-xl font-bold text-white">{name}</h3>
				<p className="text-sm text-white">{character}</p>
			</div>
		</div>
	);
};

export default PersonCard;
