import styled from 'styled-components'


// Forms, inputs

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const FormGroup = styled.div`
    position: relative;
    margin-bottom: 30px;
    padding-right: 15px;
    padding-left: 15px;
    width: 100%;
`;


export const Input = styled.input`
  width: 100%;
  display: block;
  line-height: 28px;
  height: 50px;
  font-size: 15px;
  padding: 10px 22px;
  background: none;
  color: #000000;
  border: 1px solid #d7d7d7;
  transition: all 0.5s ease;
  font-family: 'Poppins', sans-serif;
`;

export const TextArea = styled.textarea`
    height: 240px;
    resize: none;
    font-size: 16px;
    background: none;
    display: block;
    width: 100%;
    padding: 10px 22px;
    color: #0000;
    border-radius: 2px;
    border: 1px solid #d7d7d7;
    transition: all 0.5s ease;
    overflow: hidden;
    font-family: "Poppins", sans-serif;
`;

// Submit Button 
export const SubmitButton = styled.button`
    margin-top: 10px;
    padding: 12px 45px;

    position: relative;
    line-height: 24px;
    color: #242424;
    font-size: 16px;
    font-weight: 500;
    background: #f7bd00;
    display: inline-block;
    border-radius: 50px;
    border: 2px solid #f7bd00;
    font-family: 'Poppins', sans-serif;

    &:hover {
        background: transparent;
        border-color: 2px solid #fff;
        cursor: pointer;
    }
`;