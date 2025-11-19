import React, { useState } from "react";
import htmlIcon from "../images/skills/html.png";
import cssIcon from "../images/skills/css.png";
import javascriptIcon from "../images/skills/javascript.png";
import typescriptIcon from "../images/skills/typescript.png";
import reactIcon from "../images/skills/react.png";
import vueIcon from "../images/skills/vue.png";
import antdesignIcon from "../images/skills/antdesign.png";
import muiIcon from "../images/skills/mui.png";
import jqueryIcon from "../images/skills/jquery.png";
import sassIcon from "../images/skills/sass.png";
import viteIcon from "../images/skills/vite.png";
import figmaIcon from "../images/skills/figma.png";
import xdIcon from "../images/skills/adobeXD.png";
import zeplinIcon from "../images/skills/zeplin.png";
import photoshopIcon from "../images/skills/photoshop.png";
import illustratorIcon from "../images/skills/illustrator.png";
import lottieIcon from "../images/skills/lottie.png";
import jiraIcon from "../images/skills/jira.png";
import excelIcon from "../images/skills/excel.png";
import slackIcon from "../images/skills/slack.png";
import mattermostIcon from "../images/skills/mattermost.png";

const IntroPage = ({ isOpen = true, onClose }) => {
	const [hoveredSkill, setHoveredSkill] = useState("");

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

	const skillIcons = {
		HTML5: htmlIcon,
		CSS3: cssIcon,
		JavaScript: javascriptIcon,
		TypeScript: typescriptIcon,
		"REACT.js": reactIcon,
		"VUE.js": vueIcon,
		"ant-design-vue": antdesignIcon,
		"react MUI": muiIcon,
		Jquery: jqueryIcon,
		SCSS: sassIcon,
		Vite: viteIcon,
		Figma: figmaIcon,
		"Adobe XD": xdIcon,
		Zeplin: zeplinIcon,
		Photoshop: photoshopIcon,
		Illustrator: illustratorIcon,
		Lottie: lottieIcon,
		JIRA: jiraIcon,
		WBS: excelIcon,
		Slack: slackIcon,
		mattermost: mattermostIcon,
	};

	return (
		<div className="modal-wrapper" onClick={handleWrapperClick}>
			<div className="modal skills">
				<button className="btn-close" onClick={handleClose}>
					닫기
				</button>
				<h2 className="modal-title">skills</h2>
				<ul className="modal-list" onMouseLeave={() => setHoveredSkill("")}>
					<li className="modal-item">
						<div className="modal-item-title">language</div>
						<div className="modal-item-content">
							<ul>
								<li onMouseEnter={() => setHoveredSkill("HTML5")}>HTML5</li>
								<li onMouseEnter={() => setHoveredSkill("CSS3")}>CSS3</li>
								<li onMouseEnter={() => setHoveredSkill("JavaScript")}>JavaScript</li>
								<li onMouseEnter={() => setHoveredSkill("TypeScript")}>TypeScript</li>
							</ul>
						</div>
					</li>
					<li className="modal-item">
						<div className="modal-item-title">framework</div>
						<div className="modal-item-content">
							<ul>
								<li onMouseEnter={() => setHoveredSkill("REACT.js")}>REACT.js</li>
								<li onMouseEnter={() => setHoveredSkill("VUE.js")}>VUE.js</li>
								<li onMouseEnter={() => setHoveredSkill("ant-design-vue")}>ant-design-vue</li>
								<li onMouseEnter={() => setHoveredSkill("react MUI")}>react MUI</li>
								<li onMouseEnter={() => setHoveredSkill("Jquery")}>Jquery</li>
								<li onMouseEnter={() => setHoveredSkill("SCSS")}>SCSS</li>
								<li onMouseEnter={() => setHoveredSkill("Vite")}>Vite</li>
							</ul>
						</div>
					</li>
					<li className="modal-item">
						<div className="modal-item-title">design</div>
						<div className="modal-item-content">
							<ul>
								<li onMouseEnter={() => setHoveredSkill("Figma")}>Figma</li>
								<li onMouseEnter={() => setHoveredSkill("Adobe XD")}>Adobe XD</li>
								<li onMouseEnter={() => setHoveredSkill("Zeplin")}>Zeplin</li>
								<li onMouseEnter={() => setHoveredSkill("Photoshop")}>Photoshop</li>
								<li onMouseEnter={() => setHoveredSkill("Illustrator")}>Illustrator</li>
								<li onMouseEnter={() => setHoveredSkill("Lottie")}>Lottie</li>
							</ul>
						</div>
					</li>
					<li className="modal-item">
						<div className="modal-item-title">communicate</div>
						<div className="modal-item-content">
							<ul>
								<li onMouseEnter={() => setHoveredSkill("JIRA")}>JIRA</li>
								<li onMouseEnter={() => setHoveredSkill("WBS")}>WBS</li>
								<li onMouseEnter={() => setHoveredSkill("Slack")}>Slack</li>
								<li onMouseEnter={() => setHoveredSkill("mattermost")}>mattermost</li>
							</ul>
						</div>
					</li>
				</ul>
				<div className="modal-selected">
					<h2 className="modal-selected-title">selected</h2>
					<div className="modal-selected-item">
						{hoveredSkill && skillIcons[hoveredSkill] ? (
							<div className="modal-selected-item-icon">
								<img src={skillIcons[hoveredSkill]} alt={hoveredSkill} />
								<p>{hoveredSkill}</p>
							</div>
						) : (
							<p className="modal-selected-item-text">
								스킬에 마우스 올리기
								{/* Hover over a skill */}
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default IntroPage;
