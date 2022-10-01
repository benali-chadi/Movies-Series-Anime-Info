import React, { FC, useEffect, useState } from "react";
import { useSlider } from "../../hooks/useSlider";
import PersonCard from "./PersonCard";
import ScrollButton from "./ScrollButton";
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
	const { containerRef, hasNext, hasPrev, scrollDown, scrollUp } =
		useSlider();

	useEffect(() => {
		setPeople(data);
	}, [data]);

	if (loading || !people) return <Spinner />;
	if (error) return null;

	return (
		<div>
			<h2 className="pl-2 text-4xl font-bold text-my-white">{title}</h2>
			{/* <div className="flex overflow-x-scroll flex-shrink-0 gap-4 p-4 py-8 noScroll"> */}
			<ScrollButton up onClick={scrollUp} active={hasPrev} />
			<div
				className="grid overflow-hidden grid-cols-2 gap-4 p-5 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 max-h-[15rem]"
				ref={containerRef}
			>
				{people.slice(0, 15).map((person) => {
					return <PersonCard {...person} key={person.id} />;
				})}
			</div>
			<ScrollButton up={false} onClick={scrollDown} active={hasNext} />
		</div>
	);
};

export default PersonList;
