import React from "react";
import Link from "../../node_modules/next/link";
import { useRouter } from "../../node_modules/next/router";
import { BiSearch } from "react-icons/bi";

const NavBar = () => {
	const router = useRouter();

	const activeStyle = "text-my-blue hover:text-blue-500 font-bold";
	const inactiveStyle = "text-my-black hover:text-blue-300 font-bold";

	return (
		<div className="flex absolute inset-0 z-20 justify-between p-4 w-screen bg-my-white h-max">
			<div className="flex gap-8 justify-center self-stretch w-full">
				<Link href="/movies" passHref>
					<a
						href=""
						className={`${
							router.pathname === "/movies"
								? activeStyle
								: inactiveStyle
						}`}
					>
						Movies
					</a>
				</Link>
				<Link href="/series" passHref>
					<a
						href=""
						className={`${
							router.pathname === "/series"
								? activeStyle
								: inactiveStyle
						}`}
					>
						Series
					</a>
				</Link>
				<Link href="/anime" passHref>
					<a
						href=""
						className={`${
							router.pathname === "/anime"
								? activeStyle
								: inactiveStyle
						}`}
					>
						Anime
					</a>
				</Link>
			</div>
			<div
				className="flex gap-2 items-center p-2 bg-gradient-to-b rounded-xl cursor-pointer from-my-yellow to-my-yellow/20 hover:opacity-70"
				onClick={() => router.push("/search")}
			>
				<BiSearch />
				Search
			</div>
		</div>
	);
};

export default NavBar;
