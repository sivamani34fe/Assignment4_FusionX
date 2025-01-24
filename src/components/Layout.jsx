import React from "react";
import { AppShell, Text, Anchor, NavLink } from "@mantine/core";

export default function Layout({ children }) {
    return (
        <AppShell
            padding="md"
            navbar={
                <NavLink width={{ base: 300 }} p="xs">
                    <Text component="a" href="/" weight={700}>
                        Dashboard
                    </Text>
                    <Text component="a" href="/details" weight={700}>
                        Details
                    </Text>
                    <Text component="a" href="/settings" weight={700}>
                        Settings
                    </Text>
                </NavLink>
            }
            header={

                <Text>Actor-Specific Frontend</Text>

            }
        >
            {children}
        </AppShell>
    );
}
