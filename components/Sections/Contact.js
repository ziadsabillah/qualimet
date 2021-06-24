import styled from "styled-components";
import AutoContainer from "../AutoContainer";
import { SectionHeader } from "../SectionHeader";
import { Form, FormGroup, Input, Select, SubmitButton, TextArea } from '../General'


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
        flex: 50%;
    }

    @media (max-width: 500px) {
        margin-top: 1.4em;
    }
    flex: 100%;
    padding-right: 15px;
    padding-left: 15px;
    float: left;

`;

const RightColumn = styled.div`
    @media (min-width: 992px) {
        flex: 50%;
    }

    @media (max-width: 500px) {
        margin-top: 1.4em;
        padding: 10px;
    }
    flex: 100%;
    padding-right: 15px;
    padding-left: 15px;
`;

const InfoTitle = styled.h2`
    position: relative;
    color: #242424;
    font-size: 26px;
    font-weight: 600;
    padding-bottom: 12px;
    margin-bottom: 40px;

    &:hover {
        &::after {
            transform: scaleX(0);
            transform-origin: 100% 0%;
        }
    }

    &::after {
        position: absolute;
        content: '';
        left: 0px;
        bottom: 0px;
        width: 40px;
        height: 2px;
        background-color: #FC6C58;
        transform: scaleX(1);
        transform-origin: 100% 0%;
        transition: transform 250ms ease-in-out;
    }
`;

const InfoList = styled.ul`
    position: relative;

    li {
        position: relative;
        margin-bottom: 15px;
        padding-left: 40px;
        color: #242424;
        font-weight: 500;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
    }
`;

const SmallHeader = styled.h3`
    
    position: relative;
    color: #242424;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4em;
    margin-top: 50px;
`;

const Times = styled.div`
    position: relative;
    color: #797979;
    font-size: 15px;
    font-weight: 500;
    padding-left: 40px;
    margin-top: 8px;
    line-height: 2em;
    font-family: 'Poppins', sans-serif;
`;




const Contact = () => {
    return (
        <>

            <ContactSection>
                <AutoContainer>
                    <SectionHeader>
                        <h2>Formulaire de contact</h2>
                        <p>Vous souhaitez établir un devis? Remplissez le formulaire ci-dessous.</p>
                    </SectionHeader>
                    <Row className="clearfix">
                        <LeftColumn>
                            <Form>
                                <Row>
                                    <FormGroup>
                                        <Input
                                            type="text"
                                            name="societe"
                                            placeholder="Socièté" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Select placeholder="Civilité">
                                            <option>Monsieur</option>
                                            <option>Madame</option>
                                        </Select>
                                    </FormGroup>
                                </Row>
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
                                            placeholder="Nom" />
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
                                            placeholder="Fonction*" />
                                    </FormGroup>
                                </Row>

                                <FormGroup>
                                    <TextArea
                                        name="message"
                                        placeholder="Ecrire votre message..."
                                    />
                                </FormGroup>
                                <SubmitButton>
                                    Envoyer
                                </SubmitButton>
                            </Form>
                        </LeftColumn>
                        <RightColumn>
                            <InfoTitle>Qualimet - Maroc</InfoTitle>
                            <InfoList>
                                <li>
                                    Lot12 Moulin Idrissia Etg2 Bur17 Et.2. Atlas, Fès 30000, Maroc
                                </li>
                                <li>
                                    +212 05356-44048
                                </li>
                                <li>
                                    contact@atourrate.com
                                </li>
                            </InfoList>
                            <SmallHeader>Cordonnées</SmallHeader>
                            <Times>

                            </Times>
                        </RightColumn>
                    </Row>
                </AutoContainer>
            </ContactSection>

        </>
    )
}

export default Contact;