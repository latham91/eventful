import React from "react";
import Container from "./Container";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Navbar() {
    return (
        <header>
            <Container>
                <nav className="flex items-center justify-between py-5">
                    <div className="text-3xl font-semibold">eventful.</div>
                    <ul className="flex items-center gap-3">
                        <li>
                            <Input type="search" placeholder="Search..." className="w-64 backdrop-blur-sm" />
                        </li>
                        <li>
                            <Button>Login</Button>
                        </li>
                        <li>|</li>
                        <li>
                            <ThemeToggle />
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
}
