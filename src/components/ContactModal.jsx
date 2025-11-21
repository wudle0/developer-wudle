import React, { useState } from "react";

const IntroPage = ({ isOpen = true, onClose }) => {
	const [hoveredContact, setHoveredContact] = useState("");

	const handleClose = () => {
		if (onClose) {
			onClose();
		}
	};

	const handleWrapperClick = (e) => {
		// modal-wrapper를 직접 클릭했을 때만 닫기 (내부 클릭은 무시)
		if (e.target.classList.contains("modal-wrapper")) {
			handleClose();
		}
	};

	if (!isOpen) return null;

	return (
		<div className="modal-wrapper" onClick={handleWrapperClick}>
			<div className="modal contact">
				<button className="btn-close" onClick={handleClose}>
					닫기
				</button>
				<h2 className="modal-title">contact</h2>
				<div className="modal-contact">
					<div className="modal-contact-item">
						<div className="contact-item-text">
							<h4>메일</h4>
							<p>wudle.001@gmail.com</p>
						</div>
						<div className="contact-item-qr"></div>
					</div>
				</div>
				<div className="modal-contact-button">
					<button
						onClick={() =>
							(window.location.href =
								"mailto:wudle.001@gmail.com?subject=프로젝트문의(Project Inquiry)")
						}>
						메일 보내기
					</button>
				</div>
			</div>
		</div>
	);
};

export default IntroPage;
