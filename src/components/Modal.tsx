import React, { FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
	show: boolean;
	close: () => void;
	children: JSX.Element;
}

const Modal: FC<Props> = ({ show, close, children }) => {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const handleCloseClick = (e) => {
		e.preventDefault();
		close();
	};

	const modalContent = show ? (
		<div className="absolute inset-0 z-10 flex items-center justify-center w-screen h-screen">
			<div
				className="absolute inset-0 bg-black/75"
				onClick={handleCloseClick}
			></div>
			<div className="relative z-10 flex flex-col bg-black w-[70%] h-[60%]">
				<h1
					className="self-end mr-2 text-3xl font-bold text-white cursor-pointer hover:scale-110"
					onClick={handleCloseClick}
				>
					x
				</h1>
				{children}
			</div>
		</div>
	) : null;

	if (isBrowser) {
		return createPortal(
			modalContent,
			document.getElementById("modal-root"),
		);
	} else {
		return null;
	}
};

export default Modal;
