"use client";

import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Tasks from "../Components/Tasks/Tasks";

const Page = () => {
    const { completedTasks } = useGlobalState();

    return <Tasks title="Completed Tasks" tasks={completedTasks} />;
};

export default Page;
