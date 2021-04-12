import React from 'react';
import './app.css';
import {siteData} from "./data";

const Profile = () => {
    return (
        <>
            {siteData.map((data, key) => {
                return (
                    <main key={key}>
                        <h2>Profile</h2>
                        <div className="container-profile">
                            <div className="avatar-image">
                                <img src={data.profile.avatarImage} alt="Small version of your avatar"/>
                            </div>
                            <table className="profile-info">
                                <tr>
                                    <td><h4>First name</h4></td>
                                    <td><p>{data.profile.firstName}</p></td>
                                </tr>
                                <tr>
                                    <td><h4>Last name</h4></td>
                                    <td><p>{data.profile.lastName}</p></td>
                                </tr>
                                <tr>
                                    <td><h4>Phone</h4></td>
                                    <td><p>{data.profile.phone}</p></td>
                                </tr>
                                <tr>
                                    <td><h4>Email</h4></td>
                                    <td><p>{data.profile.email}</p></td>
                                </tr>
                                <tr>
                                    <td className="bio-label"><h4>Bio</h4></td>
                                    <td><p>{data.profile.bio}</p></td>
                                </tr>
                            </table>
                        </div>
                    </main>
                );
            })}

        </>
    );
};

export default Profile;