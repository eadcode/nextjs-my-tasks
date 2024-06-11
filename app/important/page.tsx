"use client"

import React from 'react';
import { useGlobalState } from "@/app/context/globalProvider";
import Tasks from "@/app/Components/Tasks/Tasks";

const Page = () => {
    const { importantTasks } = useGlobalState();

    return (
        <Tasks title="Important Tasks" tasks={ importantTasks } />
    );
}

export default Page;
