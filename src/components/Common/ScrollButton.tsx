import React, { FC } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

interface Props {
	up: boolean;
	onClick: () => void;
	active: boolean;
}

const ScrollButton: FC<Props> = ({ up, onClick, active }) => {
	// if (!active)
	// 	return <div className="flex justify-center w-full h-[2rem]"></div>;
	return (
		<div
			className="flex justify-center w-full text-[2rem] text-white bg-gradient-to-t from-black/50 to-transparent cursor-pointer hover:bg-black/50"
			onClick={onClick}
		>
			{up ? <BiUpArrow /> : <BiDownArrow />}
		</div>
	);
};

export default ScrollButton;
