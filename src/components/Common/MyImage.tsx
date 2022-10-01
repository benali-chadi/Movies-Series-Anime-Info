import React, { FC, useState } from "react";
import Modal from "./Modal";
import Image from "next/image";

interface Props {
	src: string;
}

const MyImage: FC<Props> = ({ src }) => {
	// const [enlargeImage, setEnlargeImage] = useState(false);
	return (
		<div className="flex-shrink-0">
			<img
				src={src}
				alt="Image"
				className="max-h-[15rem] hover:scale-110 hover:rounded-[.5rem]"
				// onClick={() => setEnlargeImage(true)}
			/>
			{/* <Image src={src} alt="Image" width={400} height={200} /> */}
			{/* <Modal show={enlargeImage} close={() => setEnlargeImage(false)}>
				<img src={src} alt="Image" className={`h-full min-w-[20rem]`} />
			</Modal> */}
		</div>
	);
};

export default MyImage;
