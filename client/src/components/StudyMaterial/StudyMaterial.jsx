import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import MaintenancePage from '../Error/MaintenancePage';
import HeadTags from "../HeadTags/HeadTags";
import { useNavigate } from "react-router-dom";

const StudyMaterial = () => {
    const navigate = useNavigate();
    const departments = [
        {
            dept: 'Computer Science and Engineering',
            image: './docse.png',
            link: 'cse'
        },
        {
            dept: 'Artificial Intelligence',
            image: './doai.png',
            link: 'ai'
        },
        {
            dept: 'Placement Assistance',
            image: './placement.jpg',
            link: 'placement'
        },
    ];
    return (
        <div className="min-h-screen py-6 px-4">
            <HeadTags
                title="Study Materials | Nexus - NIT Surat"
                description="Browse through study materials for academic subjects, curated by Nexus Members."
                keywords={"Nexus NIT Surat, Study Material, Materials, PYQ, Previous Year Questions, Notes, SVNIT Surat, NIT Surat, CSE, AI, Presentation, PPT"}
            />
            <div className="bg-gray-900 text-white p-2 md:p-8 rounded-md shadow-md max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">Study Materials</h1>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                    {departments.map((dept) => (
                        <div key={dept.link} className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-gray-800 border border-blue-500 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-[1.01] cursor-pointer" onClick={() => {navigate(`${dept.link}`)}}>
                            <p className="align-center">{dept.dept}</p>
                            <div className="flex items-center justify-center">
                                <img src={`${dept.image}`} alt={`${dept.dept}`} className="h-40"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StudyMaterial;