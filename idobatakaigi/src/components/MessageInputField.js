import React, { useState, useRef } from "react";
import { Avatar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { gravatarPath } from "../gravatar";
import MessageField from "./MessageField";
import MessageSubmitButton from "./MessageSubmitButton";

const useStyles = makeStyles({
	root: {
		gridRow: 2,
		margin: "26px",
	},
});

const MessageInputField = ({ name }) => {
	const [text, setText] = useState("");
	const classes = useStyles();
	const avatarPath = gravatarPath(name);
	const inputEl = useRef(null);

	return (
		<div className={classes.root}>
			<Grid container>
				<Grid item xs={1}>
					<Avatar src={avatarPath} />
				</Grid>
				<Grid item xs={10}>
					<MessageField
						setText={setText}
						text={text}
						name={name}
						inputEl={inputEl}
					/>
				</Grid>
				<Grid item xs={1}>
					<MessageSubmitButton
						inputEL={inputEl}
						setText={setText}
						text={text}
						name={name}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default MessageInputField;
