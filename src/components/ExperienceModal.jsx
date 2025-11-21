import React, { useState } from "react";

const IntroPage = ({ isOpen = true, onClose }) => {
	const [hoveredExperience, setHoveredExperience] = useState("");

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
			<div className="modal experience">
				<button className="btn-close" onClick={handleClose}>
					닫기
				</button>
				<h2 className="modal-title">experience</h2>
				<div className="modal-letter">
					<h3 className="modal-letter-title">신규 제작</h3>
					<div className="modal-letter-content">
						<ul>
							<li>논문 플랫폼 검색 모듈</li>
							<li>세무사무소 신고 자동화 플랫폼</li>
							<li>가구사 이벤트 페이지</li>
							<li>공기관 PC 메신저</li>
							<li>공기관 정책 테스트</li>
						</ul>
					</div>
				</div>
				<div className="modal-letter">
					<h3 className="modal-letter-title">유지 보수 및 고도화</h3>
					<div className="modal-letter-content">
						<ul>
							<li>헬스케어 웹앱 마크업 및 프론트 개발 (react.js)</li>
							<li>백오피스 프론트 개발 (vue.js)</li>
							<li>디자인 시스템 구성 및 정립 (vue.js)</li>
							<li>목업 환경 구축</li>
							<li>IaaS, PaaS 제품 웹 UI 개발 (ant-design-vue)</li>
							<li>ai 기반 신규 서비스 (LLM) UI 개발 (MUI react)</li>
						</ul>
					</div>
				</div>
				<div className="modal-letter-button">
					<a
						href="https://www.notion.so/2a7562ea4d9d80ce9c46ee9e9b81318d?source=copy_link"
						target="_blank">
						자세히 보러가기
					</a>
				</div>
			</div>
		</div>
	);
};

export default IntroPage;
