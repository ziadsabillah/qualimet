import styled from "styled-components";
import AutoContainer from "../AutoContainer";
import { SectionHeader } from "../SectionHeader";
import { Form, FormGroup, Input, SubmitButton, TextArea } from '../General'


const ContactSection = styled.section`
    position: relative;
    padding: 90px 0px 60px;
    background-color: #f8f8f8;
`;

const Row = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const LeftColumn = styled.div`
    @media (min-width: 992px) {
        flex: 66.666667%;
    }
    flex: 100%;
    padding-right: 15px;
    padding-left: 15px;
    float: left;

`;

const RightColumn = styled.div`
    @media (min-width: 992px) {
        flex: 33.33333%;
    }
    flex: 100%;
    padding-right: 15px;
    padding-left: 15px;
`;


const Contact = () => {
    return (
        <>

            <ContactSection>
                <AutoContainer>
                    <SectionHeader>
                        <h2>Envoyer nous un message</h2>
                    </SectionHeader>
                    <Row className="clearfix">
                        <LeftColumn>
                            <Form>
                                <Row>
                                    <FormGroup>
                                        <Input
                                            type="text"
                                            name="email"
                                            placeholder="Email"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="Votre Nom" />
                                    </FormGroup>

                                </Row>
                                <Row>
                                    <FormGroup>
                                        <Input
                                            type="text"
                                            name="tel"
                                            placeholder="Telephone" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input
                                            type="text"
                                            name="subject"
                                            placeholder="Sujet" />
                                    </FormGroup>
                                </Row>
                                <FormGroup>
                                    <TextArea
                                        name="message"
                                        placeholder="Ecrire votre message..."
                                    />
                                </FormGroup>
                                <SubmitButton>
                                    Submit
                                </SubmitButton>
                            </Form>
                        </LeftColumn>
                        <RightColumn>

                        </RightColumn>
                    </Row>
                </AutoContainer>
            </ContactSection>

        </>
    )
}

export default Contact;