import React from 'react';
import './app.css';
import {siteData} from "./data";
import {Link} from "react-router-dom";

const List = () => {
    return (
        <>
            {siteData.map((data, key) => {
                return (
                        <main key={key}>
                            <h2>{data.data.metadata.title}</h2>
                            <div className="container">
                            <table>
                                <thead>
                                <th>Title</th>
                                <th>Magnitude</th>
                                <th>Time</th>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <Link to="/detail/{data.data.">{data.data.features.properties}</Link>
                                    </td>
                                    <td>
                                        {data.data.features.mag}
                                    </td>
                                    <td>
                                        {data.data.features.time}
                                    </td>
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

export default List;