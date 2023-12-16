import React from "react";
import { Container, Alert } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const ContactInfo = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  return (
    <Container>
      <h1 className="mt-4 mb-4">Submitted Information</h1>
      <Alert variant="success">
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Message:</strong> {formData.message}
        </p>
      </Alert>
    </Container>
  );
};

export default ContactInfo;
