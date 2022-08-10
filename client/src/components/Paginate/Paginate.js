import styled from 'styled-components';

export const PaginateNav = styled.nav`
	display: flex;
	justify-content: center;
	margin: 30px;
`;

export const PaginateUl = styled.ul`
    display: flex;
    list-style: none;
    &:active {
        backgroundColor: "#111",
        color : rgb(16, 16, 02);
        transform: "translate(2px, 2px)",
    }
`;

export const PaginateButton = styled.button`
	font-family: 'Press Start 2P', cursive;
	font-size: 1rem;
	color: #272a2c;
	text-transform: uppercase;
	text-decoration: none;
	padding: 15px 20px;
	border: 2px solid #111;
	background: rgb(16, 16, 49);
	box-shadow: 3px 3px #111;
	cursor: pointer;
	margin-right: 20px;
	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: #272a2c;
		color: rgb(16, 26, 49);
		transform: translateY(-4px);
	}

	&:active {
		background-color: #101a31;
		color: rgb(16, 26, 49);
		transform: translate(2px, 2px);
	}

	&.active {
		background-color: #272a2c;
		color: rgb(16, 26, 49);
		transform: translate(2px, 2px);
	}
`;

export const StyledImgNotFound = styled.img`
	box-shadow: #111 6px 6px;
	border: 2px solid #111;
	width: 280px;
	height: 400px;
	margin: 20px 0px;
	object-fit: cover;
`;
