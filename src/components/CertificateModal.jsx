import React, { useState } from "react";

const IntroPage = ({ isOpen = true, onClose }) => {
	const [hoveredCertificate, setHoveredCertificate] = useState("");

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
			<div className="modal certificate">
				<button className="btn-close" onClick={handleClose}>
					닫기
				</button>
				<h2 className="modal-title">certificate</h2>
				<div className="modal-certificate-list">
					<ul>
						<li>
							<p>컴퓨터그래픽스 기능사</p>
						</li>
						<li>
							<p>GTQ(포토샵) 1급</p>
						</li>
					</ul>
					<ul>
						<li>
							<p>웹디자인 기능사</p>
						</li>
						<li>
							<p>GTQ i(일러스트레이터) 1급</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default IntroPage;
