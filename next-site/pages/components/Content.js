const Content = ({ children }) => {
	return (
		<>
			<div className="container">{children}</div>
			<hr />
			<footer>&copy; 2022 9646project</footer>
		</>
	);
};

export default Content;
