import React from "react";

const NotFound = () => {
    return (
        <div>
            <h1 className="display-4">
                <span className="text-danger">404</span>
                Nie znaleziono
            </h1>
            <p className="lead">Niestety, żądana podstrona nie istnieje.</p>
        </div>
    );
};

export default NotFound;
