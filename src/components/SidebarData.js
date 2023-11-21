import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';
import * as CgIcons from 'react-icons/cg';
import * as BsIcons from 'react-icons/bs';
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { LuStamp } from "react-icons/lu";
import { MdHistory } from "react-icons/md";


export const SidebarData_admin = [
  {
    title: 'Home',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Shift Management',
    path: '/manageShift',
    icon: <BsIcons.BsCalendar3 />,
    cName: 'nav-text'
  },
  {
    title: 'Admin Profile',
    path: '/profile',
    icon: <CgIcons.CgProfile />,
    cName: 'nav-text'
  },
  {
    title: 'Approve Shifts',
    path: '/approveShifts',
    icon: <LuStamp />,
    cName: 'nav-text'
  },
  {
    title: 'Approve Volunteers',
    path: '/approveUsers',
    icon: <MdFormatListBulletedAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Staff List',
    path: '/staffList',
    icon: <FaPeopleGroup />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/login',
    icon: <BiIcons.BiLogOut />,
    cName: 'nav-text'
  },
];

export const SidebarData_volunteer = [
  {
    title: 'Home',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Shifts',
    path: '/manageShift',
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
  },
];
