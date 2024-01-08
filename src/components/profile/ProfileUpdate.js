import React, { useRef, useState } from "react";
import { Container, Form, Button, Fade } from "react-bootstrap";
import { useSelector } from "react-redux";

function ProfileUpdate() {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const pass = useRef(null);
  const confPass = useRef(null);
  const [invalidPass, setinvalidPass] = useState({
    invalidPass: false,
    invalidLen: false,
  });

  function updateProfileHandler(e) {
    e.preventDefault();
    if (pass.current.value !== confPass.current.value) {
      pass.current.focus();
      setinvalidPass({ invalidPass: true, invalidLen: false });
    } else if (pass.current.value.length <= 8) {
      pass.current.focus();
      setinvalidPass({ invalidPass: false, invalidLen: true });
    } else {
      setinvalidPass({ invalidPass: false, invalidLen: false });
      console.log("do update uperation on server");
    }
  }

  return (
    <Container>
      <h1 className="display-6 text-center border-bottom">Profile</h1>{" "}
      <Container className="d-flex justify-content-center">
        <Form className="w-75">
          <Form.Group>
            <Form.Control type="text" value={userInfo.name} className="mb-3" />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="email"
              value={userInfo.email}
              disabled
              className="mb-3"
            />
          </Form.Group>
          <Form.Group>
            {invalidPass.invalidPass ? (
              <p className="text-danger">Passwords do not match</p>
            ) : invalidPass.invalidLen ? (
              <p className="text-danger">
                Password must be greater than 8 characters
              </p>
            ) : (
              ""
            )}
            <Form.Control
              type="text"
              placeholder="Enter password"
              className="mb-3"
              ref={pass}
            />
          </Form.Group>
          <Form.Group>
            {invalidPass.invalidPass ? (
              <p className="text-danger">Passwords do not match</p>
            ) : invalidPass.invalidLen ? (
              <p className="text-danger">
                Password must be greater than 8 characters
              </p>
            ) : (
              ""
            )}
            <Form.Control
              type="text"
              placeholder="Confirm password"
              className="mb-3"
              ref={confPass}
            />
          </Form.Group>
          <Container className="d-flex justify-content-center">
            <Button
              variant="primary"
              type="submit"
              className="mb-3"
              onClick={updateProfileHandler}
            >
              Update
            </Button>
          </Container>
        </Form>
      </Container>
    </Container>
  );
}

export default ProfileUpdate;
