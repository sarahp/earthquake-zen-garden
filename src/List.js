import React from 'react';
import './app.css';
import {siteData} from "./data";
import {Route} from "react-router-dom";

const List = () => {
    return (
        <>
            <p>hi</p>
            {siteData.map((data, key) => {
                return (
                        <main key={key}>
                            <div>hi</div>
                            <h2>{data.data.metadata.title}</h2>
                                {data.data.features.place}
                        </main>
                );
            })}

        </>
    );
};

export default List;