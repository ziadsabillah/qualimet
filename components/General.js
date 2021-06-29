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
  font-family: 'Gotham Bold', sans-serif;
`;


export const Select = styled.select`
    width: 100%;
    display: block;
    line-height: 28px;
    height: 50px;
    font-size: 15px;
    padding: 10px 22px;
    background: none;
    color: #000;
    border: 1px solid #d7d7d7;
    transition: all 0.5s ease;
    font-family: 'Gotham Bold', sans-serif;
`;

export const TextArea = styled.textarea`
    height: 150px;
    resize: none;
    font-size: 16px;
    background: none;
    display: block;
    width: 100%;
    padding: 10px 22px;
    color: #000;
    border-radius: 2px;
    border: 1px solid #d7d7d7;
    transition: all 0.5s ease;
    overflow: hidden;
    font-family: "Poppins", sans-serif;
`;

// List Styles ul

export const Paragraph = styled.div`
    position: relative;
    color: ${props => props.light ? '#FFFFFF' : '#797979'};
    font-size: 16px;
    line-height: 1.7em;
    margin-bottom: 18px;
    font-family: 'Open Sans', sans-serif;
    /* @media screen and (max-width: 800px) {
        text-align: center;
    } */
`;

export const ListStyleOne = styled.ul`
    position: relative;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    
`;

// Submit Button 
export const SubmitButton = styled.button`
    margin-top: 10px;
    padding: 12px 45px;
    width: 100%;
    position: relative;
    line-height: 24px;
    color: #fefefe;
    font-size: 16px;
    font-weight: bold;
    background: #1B75BB;
    display: inline-block;
    border-radius: 4px;
    border: 2px solid #1B75BB;
    
    font-family: 'Gotham Bold', sans-serif;

    &:hover {
        background: transparent;
        color: #1B75BB;
        border-color: 2px solid #fff;
        cursor: pointer;
    }
`;


// Layout 
export const Row = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }

`;


export const Column3 = styled.div`

    @media (min-width: 992px) {
            flex: 33.333337%;
        }

    flex: 100%;
    padding-right: 15px;
    padding-left: 15px;
    float: left;

`;

export const Text = styled.div`
    position: relative;
    color: #797979;
    font-size: 16px;
    line-height: 1.9em;
    margin-bottom: 20px;
`;


export const Column2 = styled.div`
    @media (min-width: 992px) {
        flex: 50%;
    }
    flex: 100%;
    float: left;
`;

export const Column4 = styled.div`


    @media (min-width: 992px) {
        flex: 50%;
    }

    @media (min-width: 1024px) {
        flex: 25%;
    }

    flex: 100%;
    float: left;

`;