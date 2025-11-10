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
import bubbleSvg_1_1 from "../images/bubble_1_1.svg";
import bubbleSvg_1_2 from "../images/bubble_1_2.svg";
import bubbleSvg_1_3 from "../images/bubble_1_3.svg";
import bubbleSvg_1_4 from "../images/bubble_1_4.svg";
import bubbleSvg_1_5 from "../images/bubble_1_5.svg";
import bubbleSvg_1_6 from "../images/bubble_1_6.svg";
import bubbleSvg_1_7 from "../images/bubble_1_7.svg";
import bubbleSvg_1_8 from "../images/bubble_1_8.svg";
import bubbleSvg_2_1 from "../images/bubble_2_1.svg";
import bubbleSvg_2_2 from "../images/bubble_2_2.svg";
import bubbleSvg_2_3 from "../images/bubble_2_3.svg";
import bubbleSvg_2_4 from "../images/bubble_2_4.svg";
import bubbleSvg_2_5 from "../images/bubble_2_5.svg";
import bubbleSvg_3_1 from "../images/bubble_3_1.svg";
import bubbleSvg_3_2 from "../images/bubble_3_2.svg";
import bubbleSvg_3_3 from "../images/bubble_3_3.svg";
import bubbleSvg_3_4 from "../images/bubble_3_4.svg";
import bubbleSvg_3_5 from "../images/bubble_3_5.svg";
import bubbleSvg_4_1 from "../images/bubble_4_1.svg";
import bubbleSvg_4_2 from "../images/bubble_4_2.svg";
import bubbleSvg_4_3 from "../images/bubble_4_3.svg";
import bubbleSvg_4_4 from "../images/bubble_4_4.svg";
import bubbleSvg_4_5 from "../images/bubble_4_5.svg";
import bubbleSvg_4_6 from "../images/bubble_4_6.svg";
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
				<div className="bubble04">
					<img class="bubble04_1" src={bubbleSvg_4_1} alt="" />
					<img class="bubble04_2" src={bubbleSvg_4_2} alt="" />
					<img class="bubble04_3" src={bubbleSvg_4_3} alt="" />
					<img class="bubble04_4" src={bubbleSvg_4_4} alt="" />
					<img class="bubble04_5" src={bubbleSvg_4_5} alt="" />
					<img class="bubble04_6" src={bubbleSvg_4_6} alt="" />
				</div>
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
				<div className="bubble01">
					<img class="bubble01_1" src={bubbleSvg_1_1} alt="" />
					<img class="bubble01_2" src={bubbleSvg_1_2} alt="" />
					<img class="bubble01_3" src={bubbleSvg_1_3} alt="" />
					<img class="bubble01_4" src={bubbleSvg_1_4} alt="" />
					<img class="bubble01_5" src={bubbleSvg_1_5} alt="" />
					<img class="bubble01_6" src={bubbleSvg_1_6} alt="" />
					<img class="bubble01_7" src={bubbleSvg_1_7} alt="" />
					<img class="bubble01_8" src={bubbleSvg_1_8} alt="" />
				</div>
				<div className="bubble02">
					<img class="bubble02_1" src={bubbleSvg_2_1} alt="" />
					<img class="bubble02_2" src={bubbleSvg_2_2} alt="" />
					<img class="bubble02_3" src={bubbleSvg_2_3} alt="" />
					<img class="bubble02_4" src={bubbleSvg_2_4} alt="" />
					<img class="bubble02_5" src={bubbleSvg_2_5} alt="" />
				</div>
				<div className="bubble03">
					<img class="bubble03_1" src={bubbleSvg_3_1} alt="" />
					<img class="bubble03_2" src={bubbleSvg_3_2} alt="" />
					<img class="bubble03_3" src={bubbleSvg_3_3} alt="" />
					<img class="bubble03_4" src={bubbleSvg_3_4} alt="" />
					<img class="bubble03_5" src={bubbleSvg_3_5} alt="" />
				</div>
			</footer>
		</div>
	);
};

export default IntroPage;
