import React from "react";
import "../Education/Education.scss";
import {
    InfoContainer,
    InfoWrapper,
    MainTitle, TitleWrapper
} from "../Education/EducationElements";
import InfoSection from "../Education/InfoSection";
import TitleNavbar from "../TitleNavbar";
import { manualTester, professionalExperienceData } from "./Data";



function professionalExperience() {

    return (
        <>
            <TitleNavbar title={"Professional Experience"} />
            <InfoContainer>
                <InfoWrapper>
                    <TitleWrapper>
                        <MainTitle> React Front End Developer</MainTitle>
                    </TitleWrapper>
                    <InfoSection {...professionalExperienceData} />
                    <h6 style={{ fontWeight: "bold" }}>Roles & Responsibilities: </h6>
                    <div style={{ paddingLeft: "17px" }}>
                        <ul>
                            <li>Gather and evaluate user requirements and develop UX design in Adobe XD.</li>
                            <li>Translate designs and wireframes into high-quality code.</li>
                            <li>Design web page components using HTML 5, CSS3, TypeScript, Material-UI React.js, Redux.</li>
                            <li>Develop dashboards using  React Plotly.js.</li>
                            <li>Build internationalization support for React front-end application using i18next library.</li>
                            <li>Build reusable components following standard coding practices.</li>
                            <li>Work in pair programming with experienced developers.</li>
                            <li>Review code of other team members.</li>
                            <li>Work in an Agile (Scrum) Development team to deliver and provide regular updates to the business team and project managers.</li>
                            <li>Track and manage project tasks and progress through the JIRA.</li>
                        </ul>
                    </div>
                    <h6 style={{ fontWeight: "bold" }}>Tools</h6>
                    <p> Visual Studio Code, Node.js, GIT, GitKraken, JIRA, Developer Tool,
                            </p>
                    <h6 style={{ fontWeight: "bold" }}>Technologies</h6> <p>
                        React, Redux, RESTful Web Services, Plotly, AWS, Typescript, JavaScript, JSON, CSS3, Material-UI, .
                            </p>
                    <h6 style={{ fontWeight: "bold" }}>Team Size</h6><p>3</p>
                    <TitleWrapper>
                        <MainTitle> Manual Test Engineer</MainTitle>
                    </TitleWrapper>
                    <InfoSection {...manualTester} />
                    <h6 style={{ fontWeight: "bold" }}>Roles & Responsibilities: </h6>
                    <div style={{ paddingLeft: "17px" }}>
                        <ul>
                            <li>To read all the documents and understand what needs to be tested.</li>
                            <li>Based on the information procured in the above step decide how it is to be tested.</li>
                            <li>Inform the test lead about what all resources will be required for software testing.</li>
                            <li>Develop test cases and prioritize testing activities.</li>
                            <li>Execute all the test case and report defects, define severity and priority for each defect.</li>
                            <li>Carry out regression testing every time when changes are made to the code to fix defects.</li>
                        </ul>
                    </div>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
}

export default professionalExperience;
