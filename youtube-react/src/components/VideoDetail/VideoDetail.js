import React from "react";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { fetchSelectData } from "../../apis";
import { Store } from "../../store/index";
import VideoPlay from "../VideoPlay/VideoPlay";
import Style from "./VideoDetail.module.scss";

const VideoDetail = () => {
	const { globalState, setGlobalState } = useContext(Store);
	const location = useLocation();
	const setSelectedVideo = async () => {
		const searchParams = new URLSearchParams(location.search);
		const id = searchParams.get("v");
		await fetchSelectData(id).then((res) => {
			const item = res.data.items.shift();
			setGlobalState({ type: "SET_SELECTED", payload: { selected: item } });
			console.log(globalState);
		});
	};

	useEffect(() => {
		setSelectedVideo();
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
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
