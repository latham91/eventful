import React from "react";
import Container from "../Container";
import FeaturesCard from "./FeaturesCard";

const features = [
    {
        id: 1,
        title: "Connect",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/connect.svg",
    },
    {
        id: 2,
        title: "Collaborate",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/collaborate.svg",
    },
    {
        id: 3,
        title: "Succeed",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/succeed.svg",
    },
];

export default function Features() {
    return (
        <section>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <FeaturesCard key={feature.id} {...feature} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
