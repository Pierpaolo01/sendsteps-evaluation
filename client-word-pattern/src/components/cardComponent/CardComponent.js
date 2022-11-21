import React from "react";
import './cardComponent.css'

export default function CardComponent({title, description, children}) {
    return (
        <div className="card-component">
            <header className="card-component__heading">
                <h1 className="card-component__heading-title">
                    {title}
                </h1>
                <span className="card-component__heading-description">
                    {description}
                </span>
            </header>
            <section className="card-component__content">
                {children}
            </section>
        </div>
    )
}
