import React from "react";
import Form, { Container } from "react-bootstrap";

function ProfileUpdate() {
  return (
    <Container>
      <h1 className="display-6 text-center border-bottom">Profile</h1>{" "}
      <Form>
        <Form.Group>
          <Form.Label>Enter your full name:</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your your email address"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your age:</Form.Label>
          <Form.Control type="number" placeholder="Enter your age" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Click here to submit form
        </Button>
      </Form>
    </Container>
  );
}

export default ProfileUpdate;
