import React from "react";
import './app.css';
import {siteData} from "./data";
import {Link} from "react-router-dom";

const List = () => {

    const json = JSON.stringify(siteData);
    console.log(json);

   {siteData.map((item, index) => (
        <div key={index}>
            <h1>{item.data.metadata.title}</h1>
            {item.data.features.map((c, i) => (
                <div key={i}>
                    <h3>{c.description}</h3>
                    <hr />
                </div>
            ))}
        </div>
    ))};

    console.log();


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

                                        <td><Link to="/detail/{c.id}">{c.properties.place}</Link></td>
                                        <td>{c.properties.mag}</td>
                                        <td>{c.properties.time}</td>
                                        <td>{c.id}</td>
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