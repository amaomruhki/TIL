import React, { useContext } from "react";
import { Store } from "../../store/index";
import VideoPlay from "../VideoPlay/VideoPlay";
import Style from "./VideoDetail.module.scss";

const VideoDetail = () => {
	const { globalState } = useContext(Store);

	return globalState.selected && globalState.selected.id ? (
		<div className={Style.wrap}>
			<VideoPlay id={globalState.selected.id} />
			<pre>{globalState.selected.snippet.title}</pre>
			<hr />
			<pre>{globalState.selected.snippet.description}</pre>
		</div>
	) : (
		<span>no data</span>
	);
};

export default VideoDetail;
