import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

const App = () => {
	const [modalIsVisible, setModalIsVisible] = useState(false);

	const showModalHandler = () => {
		setModalIsVisible(true);
	};

	const hideModalHandler = () => {
		setModalIsVisible(false);
	};

	return (
		<>
			<MainHeader onCreatePost={showModalHandler} />
			<main>
				<PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
			</main>
		</>
	);
};

export default App;
