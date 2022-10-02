import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 282px;
  height: auto;

  gap: 8px;
  margin-bottom: 10px;

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

export const FormRsult = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    color: #fff;
    font-size: 1.1rem;
    margin-bottom: 8px;
  }
  > div {
    width: 200px;
    height: 30px;
    padding: 0.3rem;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #23235b;
  }
`;
