import React from "react";
import './app.css';
import {siteData} from "./data";
import {Link} from "react-router-dom";
import dateFormat from "dateformat";


const List = () => {

    return (
        <>
            {siteData.map((item, index) => {
                return (
                    <main key={index}>
                        <h2>{item.data.metadata.title}</h2>
                        <div className="container">
                            <table>
                                <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Magnitude</th>
                                    <th>Time</th>
                                </tr>
                                </thead>
                                {item.data.features.map((c, i) => (
                                    <tbody key={i}>
                                    <tr>
                                        <td><Link to="/detail/">{c.properties.place}</Link></td>
                                        <td className="mag">{c.properties.mag}</td>
                                        <td>{dateFormat(c.properties.time, "mmmm dS, yyyy, h:MM TT")}</td>
                                    </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>
                    </main>
                );
            })}

        </>
    );
};

export default List;