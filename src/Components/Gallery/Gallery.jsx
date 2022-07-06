import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Fade from "react-reveal/Fade";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import MUIFade from "@mui/material/Fade";

import images from "./Images.js";
import "./Gallery.css";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "transparent",
	boxShadow: 24,
};
const Gallery = () => {
	const [currentImage, setCurrentImage] = useState(null);

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Fade bottom duration={1000} distance="40px">
			<div className="gallery" id="gallery">
				<h3>I Love Freezing the Moment </h3>
				<Swiper
					modules={[Navigation, Pagination, EffectCoverflow]}
					navigation={true}
					effect={"coverflow"}
					centeredSlides={true}
					slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
					loop={true}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					pagination={{ clickable: true }}
					className="mySwiper"
				>
					{images.map((image, index) => (
						<SwiperSlide key={index}>
							<img
								src={image}
								alt=""
								onClick={() => {
									setCurrentImage(image);
									handleOpen();
								}}
							/>
						</SwiperSlide>
					))}
				</Swiper>

				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					open={open}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
					style={{ border: "none" }}
				>
					<MUIFade in={open}>
						<Box sx={style}>
							<img src={currentImage} alt="" className="modalImage" />
						</Box>
					</MUIFade>
				</Modal>
			</div>
		</Fade>
	);
};

export default Gallery;
