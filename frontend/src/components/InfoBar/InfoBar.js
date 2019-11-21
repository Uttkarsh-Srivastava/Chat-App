import React from "react";
import CloseIcon from "../../Icons/closeIcon.png";
import OnlineIcon from "../../Icons/onlineIcon.png";
import "./InfoBar.css";

const InfoBar = ({ room }) => {
	return (
		<div className='infoBar'>
			<div className='leftInnerContainer'>
				<img className='onlineIcon' src={OnlineIcon} alt='online' />
				<h3>{room}</h3>
			</div>
			<div className='righttInnerContainer'>
				<a href='/'>
					<img src={CloseIcon} alt='close-icon' />
				</a>
			</div>
		</div>
	);
};

export default InfoBar;
