import React from 'react';
import './app.css';
import {siteData} from "./data";

export const Detail = () => {
    return (
        <>
            {siteData.map((data, key) => {
                return (
                        <main key={key}>
                            <h2>{data.data.metadata.title}</h2>
                            <div key={data.data.features.id}>
                                {data.data.features.place}
                            </div>
                        </main>

                );
            })}

        </>
    );
};

export default Detail;