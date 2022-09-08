import React, { useEffect } from "react";
import { useRouter } from "next/router";

const index = () => {
	const router = useRouter();
	useEffect(() => {
		router.push("/movies");
	}, []);
	return <div>index</div>;
};

export default index;
