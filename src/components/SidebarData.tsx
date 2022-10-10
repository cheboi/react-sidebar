import React from "react";
import * as Faicons from 'react-icons/fa';

export const SidebarData =[
    {
        title: 'Home',
        path: '/',
        icon: <Faicons.FaHome />
    },
    {
        title: 'Team',
        path: '/team',
        icon: <Faicons.FaUser />
    },
    {
        title: 'Tasks',
        path: '/tasks',
        icon: <Faicons.FaTasks />
    },
    {
        title: 'Chats',
        path: '/chats',
        icon: <Faicons.FaRocketchat />
    },
    {
        title: 'Analytics',
        path: '/analytics',
        icon: <Faicons.FaChartBar />
    }
]