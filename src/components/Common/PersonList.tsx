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
		}
	];
}

const PersonList: FC<Props> = ({ title, data }) => {
	console.log("cast =", data);
	return (
		<div>
			<h2 className="pl-2 text-4xl font-bold text-my-white">{title}</h2>
			<div className="flex overflow-x-scroll flex-shrink-0 gap-4 p-4 py-8 noScroll">
				{data.map((person) => {
					return <PersonCard {...person} key={person.id} />;
				})}
			</div>
		</div>
	);
};

export default PersonList;
