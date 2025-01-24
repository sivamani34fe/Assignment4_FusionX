import React from "react";
import { Card, Text, Button, Grid } from "@mantine/core";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <Grid>
            <Grid.Col span={6}>
                <Card shadow="sm" p="lg">
                    <Text weight={500}>Welcome to the Dashboard</Text>
                    <Text size="sm" mt="sm">
                        Here you can view your key metrics and manage your actions.
                    </Text>
                    <Button variant="light" color="blue" fullWidth mt="md">
                        View More
                    </Button>
                </Card>
            </Grid.Col>
            <Grid.Col span={6}>
                <Card shadow="sm" p="lg">
                    <Text weight={500}>Quick Actions</Text>
                    <Button variant="filled" color="teal" fullWidth mt="md">
                        Action 1
                    </Button>
                    <Button variant="filled" color="orange" fullWidth mt="md">
                        Action 2
                    </Button>
                </Card>
            </Grid.Col>
            <br />
            <br />
            <Link to="/details"><Button style={{ backgroundColor: "red", color: "white", padding: "5px 10px" }}>Details</Button></Link>
            <Link to="/settings"><Button style={{ backgroundColor: "red", color: "white", padding: "5px 10px" }}>Settings</Button></Link>
        </Grid>
    );
}
