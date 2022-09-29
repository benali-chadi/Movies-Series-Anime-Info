import React, { FC, useEffect, useRef, useState } from "react";
import Item from "./Item";
import ScrollButton from "./ScrollButton";
import Spinner from "./Spinner";

interface Props {
	title: string;
	data: [
		{
			id: number;
			poster: string;
			info: {
				title: string;
				date: string;
			};
			rating: number;
		}
	];
	type: string;
	loading: boolean;
	error: boolean;
}

const ItemsList: FC<Props> = ({ title, data, type, loading, error }) => {
	const myRef = useRef<HTMLDivElement>(null);
	const [hasNext, setHasNext] = useState(true);
	const [hasPrev, setHasPrev] = useState(false);

	const scrollDown = () => {
		if (myRef.current) {
			const rect = myRef.current.getBoundingClientRect();
			if (myRef.current.scrollTop < rect.bottom) {
				myRef.current.scrollTo({
					top: myRef.current.scrollTop + 290,
					behavior: "smooth",
				});
				setHasPrev(true);
				if (myRef.current.scrollTop + 290 >= rect.bottom)
					setHasNext(false);
			}
		}
	};
	const scrollUp = () => {
		if (myRef.current) {
			if (myRef.current.scrollTop) {
				myRef.current.scrollTo({
					top: myRef.current.scrollTop - 290,
					behavior: "smooth",
				});
				setHasNext(true);
				if (myRef.current.scrollTop - 290 <= 0) setHasPrev(false);
			}
		}
	};

	if (loading) return <Spinner />;
	if (error) return null;
	return (
		<div>
			<h2 className="relative z-10 pl-2 text-4xl font-bold text-my-white">
				{title}
			</h2>
			<ScrollButton up onClick={scrollUp} active={hasPrev} />
			{/* <div className="flex overflow-x-scroll flex-shrink-0 gap-4 p-4 py-8 noScroll"> */}
			<div
				className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 max-h-[18rem] overflow-hidden gap-4 p-5 noScroll"
				ref={myRef}
			>
				{data.map((item) => {
					return (
						<Item
							id={item.id}
							poster={item.poster}
							info={item.info}
							rating={item.rating}
							type={type}
							key={item.info.title}
						/>
					);
				})}
			</div>

			<ScrollButton up={false} onClick={scrollDown} active={hasNext} />
		</div>
	);
};

export default ItemsList;
