import React, { FC, useEffect, useState } from "react";
import PersonCard from "./PersonCard";
import Spinner from "./Spinner";

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
	loading;
	error;
}

const PersonList: FC<Props> = ({ title, data, loading, error }) => {
	const [people, setPeople] = useState(data);

	useEffect(() => {
		console.log("person list =", people);
		setPeople(data);
	}, [data]);

	if (loading || !people) return <Spinner />;
	if (error) return null;

	return (
		<div>
			<h2 className="pl-2 text-4xl font-bold text-my-white">{title}</h2>
			<div className="flex overflow-x-scroll flex-shrink-0 gap-4 p-4 py-8 noScroll">
				{people /*.splice(0, 15)*/
					.map((person) => {
						return <PersonCard {...person} key={person.id} />;
					})}
			</div>
		</div>
	);
};

export default PersonList;
