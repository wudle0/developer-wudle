import React from "react";
import MenuList from "../components/MenuList";
import logoSvg from "../images/logo.svg";
import deskSvg from "../images/desk.png";
import diskSvg from "../images/disk.png";
import bookSvg from "../images/book.png";
import tapeComputerSvg from "../images/computer_with_tape.png";
import tapeClockSvg from "../images/clock_with_tape.png";
import dogSvg from "../images/dog.svg";
import bottleSvg from "../images/bottle.svg";
import dolphinSvg from "../images/dolphin.svg";
import jellyfishSvg from "../images/jellyfish.svg";
import starfishSvg from "../images/starfish.svg";
import fishSvg from "../images/fish.svg";
import clockSvg from "../images/clock.png";
import computerSvg from "../images/computer.png";
import gameboySvg from "../images/gameboy.png";
import tape01Svg from "../images/tape01.png";
import tape02Svg from "../images/tape02.png";

const IntroPage = () => {
	return (
		<div className="container intro">
			<section className="content">
				<img class="logo" src={logoSvg} alt="developer wudle" />
				<img class="dolphin" src={dolphinSvg} alt="the dolphin" />
				<img class="jellyfish" src={jellyfishSvg} alt="the jellyfish" />
			</section>
			<footer>
				<img class="desk" src={deskSvg} alt="the desk" />
				<img class="disk" src={diskSvg} alt="the disk" />
				<img class="book" src={bookSvg} alt="the book" />
				{/* <img class="clock" src={clockSvg} alt="the clock" /> */}
				<img class="computer" src={tapeComputerSvg} alt="the computer with tape" />
				<img class="clock" src={tapeClockSvg} alt="the clock with tape" />
				<img class="dog" src={dogSvg} alt="the dog" />
				<img class="bottle" src={bottleSvg} alt="the bottle" />
				<img class="starfish" src={starfishSvg} alt="the starfish" />
				<img class="fish" src={fishSvg} alt="the fish" />
			</footer>
		</div>
	);
};

export default IntroPage;
