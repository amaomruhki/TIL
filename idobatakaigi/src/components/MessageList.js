import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { messagesRef } from "../firebase";
import { useState, useEffect } from "react";

const useStyles = makeStyles({
	root: {
		gridRow: 1,
	},
});

const MessageList = () => {
	const classes = useStyles();
	const [messages, setMessages] = useState([]);
	useEffect(() => {
		messagesRef
			.orderByKey()
			.limitToLast(3)
			.on("value", (snapshot) => {
				const messages = snapshot.val();
				if (messages === null) return;
				const entries = Object.entries(messages);
				const newMessages = entries.map((entry) => {
					const [key, nameAndText] = entry;
					return { key, ...nameAndText };
				});
				setMessages(newMessages);
				console.log(messages);
			});
	}, []);
	return <div className={classes.root}>MessageList</div>;
};

export default MessageList;
