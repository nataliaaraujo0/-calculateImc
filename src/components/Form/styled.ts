import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 282px;
  height: auto;

  gap: 8px;

  input {
    background: #1d1b4f;
    color: #99fae7;
    border: 0;
    height: 30px;
    padding: 1rem;
    border-radius: 4px;

    &::placeholder {
      color: #fff;
    }
  }

  button {
    border: 0;
    background: #07b9df;
    color: #2f2a65;
    height: 40px;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
  }
`;
