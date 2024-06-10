'use client';
import React, { createContext, useState, useContext } from 'react';
import themes from './themes';
import axios from 'axios';
import toast from 'react-hot-toast';
// import { useUser } from "@clerk/nextjs";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [selectedTheme, setSelectedTheme] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    const [tasks, setTasks] = useState([]);

    const theme = themes[selectedTheme];

    return (
        <GlobalContext.Provider value={ {
            theme,
        } }>
            <GlobalUpdateContext.Provider value={ {} }>
                { children }
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);