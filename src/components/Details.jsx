import React from "react";
import { Table, Text, Container } from "@mantine/core";

export default function Details() {
  const data = [
    { id: 1, name: "Thumbati", role: "PCC Admin" },
    { id: 2, name: "Director Bhartebdu", role: "Director" },
    { id: 2, name: "Sivamani", role: "Applicants" },
  ];

  const rows = data.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.role}</td>
    </tr>
  ));

  return (
    <Container>
      <Text weight={700} size="xl" mb="lg">
        Details Page
      </Text>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Container>
  );
}
