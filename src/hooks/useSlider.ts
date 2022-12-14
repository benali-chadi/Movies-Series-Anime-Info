import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useSlider = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [hasNext, setHasNext] = useState(true);
	const [hasPrev, setHasPrev] = useState(false);
	const isMobile = useMediaQuery({
		query: "(max-width: 896px)",
	});

	const scrollDown = () => {
		if (containerRef.current) {
			const containerRect = containerRef.current.getBoundingClientRect();
			const bottom = isMobile
				? containerRef.current.offsetTop + containerRect.bottom
				: containerRect.bottom;

			if (containerRef.current.scrollTop < bottom) {
				containerRef.current.scrollTo({
					top: containerRef.current.scrollTop + containerRect.height,
					behavior: "smooth",
				});

				setHasPrev(true);

				if (
					containerRef.current.scrollTop + containerRect.height >=
					bottom
				)
					setHasNext(false);
			}
		}
	};
	const scrollUp = () => {
		if (containerRef.current) {
			const containerRect = containerRef.current.getBoundingClientRect();
			if (containerRef.current.scrollTop) {
				containerRef.current.scrollTo({
					top: containerRef.current.scrollTop - containerRect.height,
					behavior: "smooth",
				});
				setHasNext(true);
				if (containerRef.current.scrollTop - containerRect.height <= 0)
					setHasPrev(false);
			}
		}
	};

	return { containerRef, hasNext, hasPrev, scrollDown, scrollUp };
};
