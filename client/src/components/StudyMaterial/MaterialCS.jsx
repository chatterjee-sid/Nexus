import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import MaintenancePage from '../Error/MaintenancePage';
import HeadTags from "../HeadTags/HeadTags";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import axios from "axios";

const MaterialCS = () => {
    // Function to fetch CSE subjects
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getCseSubjects = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BACKEND_BASE_URL}/subjects`,
                {
                    params: {
                        category: 'Semester Exams',
                        department: 'CSE'
                    }
                }
            );
            
            if (!response.ok) {
                throw new Error(`${response.status}`);
            }
            
            return response.data.data;
        } catch (error) {
            toast.error(`Failed to fetch CSE subjects.`);
            return [];
        }
    }

    useEffect(() => {
        const fetchCseSubjects = async () => {
            setIsLoading(true);
            const subjectsData = await getCseSubjects();
            setSubjects(subjectsData);
            setIsLoading(false);
        };
        fetchCseSubjects();
        console.log(subjects);
    }, []);

    /*
    const getSubjectDetails = (subjectId) => {
        if(!subjectId) {
            toast.warn("No subject selected.");
            return null;
        }
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BACKEND_BASE_URL}/`
            )
        }
    }
    */

    const navigate = useNavigate();
    return (
        <div className="min-h-screen py-6 px-4">
            <HeadTags
                title="CSE Study Materials | Nexus - NIT Surat"
                description="Browse through study materials for academic subjects, curated by Nexus Members."
                keywords={"Nexus NIT Surat, Study Material, Materials, PYQ, Previous Year Questions, Notes, SVNIT Surat, NIT Surat, CSE, Presentation, PPT"}
            />
            {!isLoading ? (
                <div className="bg-gray-900 text-white p-2 md:p-8 rounded-md shadow-md max-w-5xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6 text-center">CSE Study Materials</h1>
                    {subjects.size === 0 ? (
                        <p>No subjects available...</p>
                    ) : (
                        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            {subjects.map((subject) => (
                                <div key={subject._id} className="bg-gray-800 border border-blue-500 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-[1.01]" >
                                    <p>{subject.subjectName}</p>
                                </div>
                            ))}
                            <div className="bg-gray-800 border border-blue-500 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-[1.01]" onClick={() => {navigate('/study-material')}}>
                                <p>Return</p>
                            </div>
                        </div>
                    )}
                </div>
                ) : <Loader/>
            }
        </div>
    )
}

export default MaterialCS;