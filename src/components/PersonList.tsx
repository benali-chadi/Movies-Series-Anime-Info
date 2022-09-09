import React, { FC } from "react";
import PersonCard from "./PersonCard";

interface Props {
	title: string;
	data: [
		{
			id: number;
			poster: string;
			name: string;
			character: string;
		},
	];
}

const PersonList: FC<Props> = ({ title, data }) => {
	return (
		<div>
			<h2 className="relative z-10 pl-2 text-4xl font-bold text-my-white">
				{title}
			</h2>
			<div className="flex flex-shrink-0 gap-4 p-4 py-8 overflow-x-scroll noScroll">
				{data.map((person) => {
					return <PersonCard {...person} />;
				})}
			</div>
		</div>
	);
};

export default PersonList;
