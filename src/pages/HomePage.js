import React, { useReducer } from "react";
import styled from "styled-components";

const HomePage = ({ posts }) => {
	return (
		<div>
			{posts.map((post) => (
				<Text key={post.title}>
					{post.title} : {post.content}
				</Text>
			))}
			{/* map을 이용해 객체 배열의 요소를 하나씩 렌더링 */}
		</div>
	);
};

export default HomePage;

const Text = styled.p`
	border-style: solid;
	padding: 5px;
`;
