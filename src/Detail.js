import React from 'react';
import './app.css';
import {siteData} from "./data";
import dateFormat from "dateformat";

const Detail = () => {
    return (
        <>
            {siteData.map((item, index) => {
                return (
                        <main key={index}>
                            <h2>{item.data.features[0].properties.place}</h2>
                            <div className="container">
                            <table>
                                <tbody>
                                <tr>
                                   <td>Title</td>
                                    <td>{item.data.features[0].properties.place}</td>
                                </tr>
                                <tr>
                                    <td>Magnitude</td>
                                    <td>{item.data.features[0].properties.mag}</td>
                                </tr>

                                <tr>
                                    <td>Time</td>
                                    <td>{dateFormat(item.data.features[0].properties.time, "mmmm dS, yyyy, h:MM TT")}</td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td>{item.data.features[0].properties.status}</td>
                                </tr>
                                <tr>
                                    <td>Tsunami</td>
                                    <td>{item.data.features[0].properties.tsunami}</td>
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