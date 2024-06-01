import React, { useContext } from "react";
import "./Mainn.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Mainn = () => {
	const {
		onSent,
		recentPrompt,
		showResult,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

	return (
		<div className="main">
			<div className="nav">
				<p>AI-assistant</p>
				<img src={assets.user_icon} alt="" />
			</div>
			<div className="main-container">
				{!showResult ? (
					<>
						<div className="greet">
							<span>Hello, Mickey.</span>
							<p>How can I help you today?</p>
						</div>
						<div className="cards">
							<div className="card">
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing eli.</p>
								<img src={assets.compass_icon} alt="" />
							</div>
							<div className="card">
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing eli.</p>
								<img src={assets.bulb_icon} alt="" />
							</div>
							<div className="card">
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing eli.</p>
								<img src={assets.message_icon} alt="" />
							</div>
							<div className="card">
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing eli.</p>
								<img src={assets.code_icon} alt="" />
							</div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src={assets.user_icon} alt="" />
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img src={assets.gemini_icon} alt="" />
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input
							onChange={(e) => setInput(e.target.value)}
							value={input}
							type="text"
							placeholder="Enter a prompt"
						/>
						<div>
							<img src={assets.gallery_icon} alt="" />
							<img src={assets.mic_icon} alt="" />
							<img onClick={() => onSent()} src={assets.send_icon} alt="" />
						</div>
					</div>
					<p className="bottom-info">
						Assistant can make mistakes. Check important info.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Mainn;
