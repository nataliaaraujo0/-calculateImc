import styled from "styled-components";

export const FormWrapper = styled.form`
display: flex;
flex-direction: column;
width: 282px;
height: auto;

gap: 8px;

input{
	background: #4B4390;
	color: #fff;
	height:30px;
	padding:1rem;
	border-radius: 4px;
	border: 0;
	
	&::placeholder {	
		color: #fff;
		}
}

button{
	border: 0;
	background: #84DF98;
	color:#2F2A65;
	height:40px;
	border-radius: 4px;
	font-weight: bold;
	cursor: pointer;

}

`