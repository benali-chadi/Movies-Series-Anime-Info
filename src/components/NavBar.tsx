import React, { useState } from "react";
import Link from "../../node_modules/next/link";
import { useRouter } from "../../node_modules/next/router";
import { BiSearch } from "react-icons/bi";

const NavBar = () => {
	const router = useRouter();

	const [query, setQuery] = useState("");
	const [showSearchBar, setShowSearchBar] = useState(false);

	const activeStyle = "text-my-blue hover:text-blue-500 font-bold";
	const inactiveStyle = "text-my-black hover:text-blue-300 font-bold";

	return (
		<div className="absolute inset-0 z-20 grid md:grid-cols-[90%_10%] grid-cols-1 p-4 w-screen bg-my-white h-max">
			<div className="flex gap-8 justify-center items-center self-stretch w-full">
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
			<form
				className="flex relative gap-2 items-center place-self-end p-2 bg-gradient-to-b from-white rounded-xl cursor-pointer to-my-black/20 hover:opacity-70"
				onSubmit={(e) => {
					e.preventDefault();
					const params = new URL("https://google.com").searchParams;
					params.set("q", query);
					setQuery("");
					setShowSearchBar(false);

					router.push(`/search?${params.toString()}`);
				}}
			>
				<div
					onClick={() => setShowSearchBar(!showSearchBar)}
					className="flex gap-1 items-center"
				>
					<BiSearch />
					Search
				</div>
				{showSearchBar && (
					<input
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
				)}
			</form>
		</div>
	);
};

export default NavBar;
