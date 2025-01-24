import React from "react";
import { TextInput, Button, Container } from "@mantine/core";

export default function Settings() {
  return (
    <Container>
      <TextInput
        label="Update Email"
        placeholder="Enter your new email"
        mt="md"
      />
      <TextInput
        label="Update Password"
        type="password"
        placeholder="Enter new password"
        mt="md"
      />
      <Button variant="filled" color="blue" fullWidth mt="lg">
        Save Changes
      </Button>
    </Container>
  );
}
