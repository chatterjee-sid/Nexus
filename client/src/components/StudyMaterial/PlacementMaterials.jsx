import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import MaintenancePage from '../Error/MaintenancePage';
import HeadTags from "../HeadTags/HeadTags";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import axios from "axios";

const MaterialCS = () => {
    const subjects = [
        {
            id: 'dsa',
            subject: 'Data Structures and Algorithms',
            link: '',
        },
        {
            id: 'dbms',
            subject: 'Database Management Systems',
            link: '',
        },
        {
            id: 'oop',
            subject: 'Object Oriented Programming',
            link: '',
        },
        {
            id: 'cn',
            subject: 'Computer Networks',
            link: '',
        },
        {
            id: 'os',
            subject: 'Operating Systems',
            link: '',
        },
        {
            id: 'sd',
            subject: 'System Design',
            link: '',
        },
        {
            id: 'tips',
            subject: 'More Tips!',
            link: '',
        }
    ]
    const navigate = useNavigate();
    return (
        <div className="min-h-screen py-6 px-4">
            <HeadTags
                title="Placement Assistance Materials | Nexus - NIT Surat"
                description="Browse through study materials helping you in placement, curated by Nexus Members."
                keywords={"Nexus NIT Surat, Study Material, Materials, Internship, Placement, Fulltime, Notes, SVNIT Surat, NIT Surat, CSE, AI, Presentation, PPT"}
            />
            <div className="bg-gray-900 text-white p-2 md:p-8 rounded-md shadow-md max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">Placement Assistance Materials</h1>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    {subjects.map((sub) => (
                        <div key={sub.id} className="bg-gray-800 border border-blue-500 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-[1.01]" >
                            <p>{sub.subject}</p>
                        </div>
                    ))}
                    <div className="bg-gray-800 border border-blue-500 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-[1.01]" onClick={() => {navigate('/study-material')}}>
                        <p>Return</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MaterialCS;