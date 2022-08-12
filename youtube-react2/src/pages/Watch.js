import React, { useEffect, useContext } from "react";
import Layout from "../components/Layout/Layout";
import SideList from "../components/SideList/SideList";
import VideoDetail from "../components/VideoDetail/VideoDetail";
import { useLocation } from "react-router-dom";
import { fetchSelectData, fetchRelatedData } from "../apis";
import { Store } from "../store/index";

const Watch = () => {
	const { setGlobalState } = useContext(Store);
	const location = useLocation();
	const setVideos = async () => {
		const searchParams = new URLSearchParams(location.search);
		const id = searchParams.get("v");
		if (id) {
			const [selected, related] = await Promise.all([
				fetchSelectData(id),
				fetchRelatedData(id).then((res) => {
					const dataArray = res.data.items;
					for (let i = 0; i < res.data.items.length; i++) {
						if (!dataArray[i].hasOwnProperty("snippet")) {
							dataArray.splice(i, 1);
						}
					}
					return dataArray;
				}),
			]);
			setGlobalState({
				type: "SET_SELECTED",
				payload: { selected: selected.data.items.shift() },
			});
			setGlobalState({
				type: "SET_RELATED",
				payload: { related: related },
			});
		}
	};

	useEffect(() => {
		setVideos();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.search]);

	return (
		<Layout>
			<VideoDetail />
			<SideList />
		</Layout>
	);
};

export default Watch;
