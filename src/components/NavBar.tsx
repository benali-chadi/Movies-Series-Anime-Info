import React from "react";
import Link from "../../node_modules/next/link";
import { useRouter } from "../../node_modules/next/router";

const NavBar = () => {
	const router = useRouter();

	const activeStyle = "text-my-blue hover:text-blue-500 font-bold";
	const inactiveStyle = "text-my-black hover:text-blue-300 font-bold";

	return (
		<div className="flex justify-between p-4 bg-white">
			<div className="flex self-stretch justify-center w-full gap-8">
				<Link href="/" passHref>
					<a
						href=""
						className={`${
							router.pathname === "/"
								? activeStyle
								: inactiveStyle
						}`}
					>
						Movies
					</a>
				</Link>
				<Link href="/Series" passHref>
					<a
						href=""
						className={`${
							router.pathname === "/Series"
								? activeStyle
								: inactiveStyle
						}`}
					>
						Series
					</a>
				</Link>
				<Link href="/Anime" passHref>
					<a
						href=""
						className={`${
							router.pathname === "/Anime"
								? activeStyle
								: inactiveStyle
						}`}
					>
						Anime
					</a>
				</Link>
			</div>
			<div className="flex items-center gap-2">
				<i
					className="text-black cursor-pointer fa-solid fa-magnifying-glass"
					// onClick={(e) => {
					// 	let input = document.getElementById("search");

					// 	console.log(input.style.opacity);

					// 	// if (input.style.display === "none") {
					// 	if (input.style.opacity === "0") {
					// 		input.style.display = "block";
					// 		// input.style.width = "100%";
					// 		// input.style.visibility = "visible";

					// 		input.style.opacity = "1";
					// 	} else {
					// 		input.style.display = "none";
					// 		// input.style.width = "0px";
					// 		// input.style.visibility = "hidden";

					// 		input.style.opacity = "0";
					// 	}
					// }}
				></i>
				{/* <input
					type="text"
					className="opacity-0 px-3 py-1 rounded-3xl transition-[opacity] delay-1000 ease-in-out duration-1000"
					id="search"
				/> */}
			</div>
		</div>
	);
};

export default NavBar;
