import React, { FC, useState } from "react";
import Modal from "./Modal";

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
				className="max-h-[15rem] hover:scale-110 hover:rounded-[1rem]"
				// onClick={() => setEnlargeImage(true)}
			/>
			{/* <Modal show={enlargeImage} close={() => setEnlargeImage(false)}>
				<img src={src} alt="Image" className={`h-full min-w-[20rem]`} />
			</Modal> */}
		</div>
	);
};

export default MyImage;
