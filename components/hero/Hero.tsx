import React from "react";
import Container from "../Container";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <section>
            <Container>
                <div className="flex flex-col-reverse md:flex-row items-center py-24 gap-5">
                    <div className="flex-1">
                        <h1 className="text-4xl lg:text-7xl font-extrabold mb-5 text-center md:text-left">
                            Connect, Collaborate, Succeed: Eventful.
                        </h1>
                        <p className="text-lg font-medium mb-5 text-center md:text-left">
                            At Eventful, we believe that the best way to grow is to connect with others. <br />
                            What are you waiting for? Find your next event today!
                        </p>
                        <Button size="lg" className="w-full md:w-auto">
                            Find your event
                        </Button>
                    </div>
                    <div>
                        <Image src="/hero-image.svg" alt="hero image" width={600} height={600} draggable={false} />
                    </div>
                </div>
            </Container>
        </section>
    );
}
