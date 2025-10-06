import React from "react";
export default function Header() {
    return (
        <header className="header">
            <h1>Travel-vlog</h1>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}