import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePage = ({ posts, setPosts }) => {
	const navigate = useNavigate();
	const [newTitle, setNewTitle] = useState("");
	const [newContent, setNewContent] = useState("");
	//newTitle, newContent 각각 관리하는 useState(통합 안 함)
	const onSubmit = (e) => {
		e.preventDefault();
		setPosts([...posts, { title: newTitle, content: newContent }]);
		//setPosts 함수 사용하여 기존 posts에 newTitle, newContent 추가
		navigate("/");
		//Home 페이지로 돌아가기
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					placeholder="제목"
					name="title"
					value={newTitle}
					onChange={(e) => setNewTitle(e.target.value)}
				/>
				<input
					placeholder="내용"
					name="content"
					value={newContent}
					onChange={(e) => setNewContent(e.target.value)}
				/>

				<button type="submit">제출</button>
			</form>
		</div>
	);
};

export default CreatePage;
