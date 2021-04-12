import React from 'react';
import './app.css';
import {siteData} from "./data";

const Detail = () => {
    return (
        <>
            {siteData.map((data, key) => {
                return (
                        <main key={key}>
                            <h2>{data.data.features.place}</h2>
                            <div className="container">
                            <table>
                                <tbody>
                                <tr>
                                   <td>Title</td>
                                    <td>{data.data.features.place}</td>
                                </tr>
                                <tr>
                                    <td>Magnitude</td>
                                    <td>{data.data.features.mag}</td>
                                </tr>

                                <tr>
                                    <td>Time</td>
                                    <td>{data.data.features.time}</td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td>{data.data.features.status}</td>
                                </tr>
                                <tr>
                                    <td>Tsunami</td>
                                    <td>{data.data.features.tsunami}</td>
                                </tr>
                                </tbody>
                            </table>
                                </div>
                        </main>

                );
            })}

        </>
    );
};

export default Detail;