import React from "react";

interface IContainer {
    children: React.ReactNode;
    className?: string;
}

export default function Container({ children, className }: IContainer) {
    return <div className={`${className} max-w-7xl mx-auto`}>{children}</div>;
}
