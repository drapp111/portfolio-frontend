'use client'

import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
        <h6 style={{color: 'whitesmoke',
                    textAlign: "center",
                    marginBottom: "20px" }}>
            Create with Passion - Lead with Empathy - Inspire Change
        </h6>
        <Container>
            <Row>
            <Column>
                <Heading>About Me</Heading>
                <FooterLink href="#">About</FooterLink>
                <FooterLink href="#">Resume</FooterLink>
                <FooterLink href="#">Mission</FooterLink>
            </Column>
            <Column>
                <Heading>Portfolio</Heading>
                <FooterLink href="#">Godspell</FooterLink>
                <FooterLink href="#">Come Like Shadows</FooterLink>
                <FooterLink href="#">Dance</FooterLink>
            </Column>
            <Column>
                <Heading>Get in Touch</Heading>
                <FooterLink href="#">Contact</FooterLink>
                <FooterLink href="#">Email</FooterLink>
                <FooterLink href="#">Phone</FooterLink>
            </Column>
            <Column>
                <Heading>Social Media</Heading>
                <FooterLink href="#">Instagram</FooterLink>
                <FooterLink href="#">Facebook</FooterLink>
                <FooterLink href="#">Portfolio Site</FooterLink>
            </Column>
            </Row>
        </Container>
	</Box>
);
};
export default Footer;
