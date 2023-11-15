import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';
import * as CgIcons from 'react-icons/cg';
import * as BsIcons from 'react-icons/bs';
import { MdHistory } from "react-icons/md";


export const SidebarData = [
  {
    title: 'Home',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Shifts',
    path: '/shift',
    icon: <BsIcons.BsCalendar3 />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <CgIcons.CgProfile />,
    cName: 'nav-text'
  },
  {
    title: 'History',
    path: '/history',
    icon: <MdHistory />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/login',
    icon: <BiIcons.BiLogOut />,
    cName: 'nav-text'
  }
];