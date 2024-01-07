import Image from "next/image";
import React from "react";

interface IFeaturesCard {
    title: string;
    description: string;
    image: string;
}

export default function FeaturesCard({ title, description, image }: IFeaturesCard) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="h-56 flex items-stretch justify-center">
                <Image src={image} alt={title} height={250} width={250} />
            </div>
            <div className="text-center">
                <h2 className="font-bold text-3xl mb-5">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}
