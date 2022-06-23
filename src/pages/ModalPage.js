import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const ModalPage = () => {
	const modal = useRef();
	const [open, setOpen] = useState(true);
	//모달창의 open 상태를 관리하는 useState
	const modalHandler = ({ target }) => {
		if (open && !modal.current.contains(target)) setOpen(false);
		else setOpen(true);
		//모달이 열려있고, 현재 클릭된 부분이 target을 포함하고 있지 않다면 상태를 false로 변경
		//모달이 닫혀 있거나, 현재 클릭된 부분이 target을 포함하고 있다면 상태를 true로 변경
	};

	useEffect(() => {
		window.addEventListener("click", modalHandler);
		//윈도우가 클릭되었을 때 modalHandler가 실행되도록 이벤트 추가
		return () => {
			window.removeEventListener("click", modalHandler);
			//윈도우에서 modalHandler 이벤트 삭제
		};
	});

	return (
		<div>
			{open && <Modal ref={modal}> 모달창 입니다. </Modal>}
			{/* open이 true면 styled div를 사용하여 모달창 출력 */}
		</div>
	);
};

export default ModalPage;

const Modal = styled.div`
	background-color: pink;
	width: 100px;
	height: 100px;
`;
