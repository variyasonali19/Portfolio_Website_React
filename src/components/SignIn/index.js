import React from "react";
// import ScrollToTop from "./ScrollToTop";
import {
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Icon,
  Form,
  Text,
  Container,
  FormWrap,
  FormContent,
} from "./SignInElements";
const SignIn = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Container>
        <FormWrap>
          <Icon to="/">SV</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />

              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />

              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
