import React from 'react';
import './Dashboard.css';
import Collapsible from 'react-collapsible';
import HomeIcon from '@mui/icons-material/Home';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GridViewIcon from '@mui/icons-material/GridView';
import AddIcon from '@mui/icons-material/Add';
import LaunchIcon from '@mui/icons-material/Launch';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import TaskIcon from '@mui/icons-material/Task';
import ListIcon from '@mui/icons-material/List';

import {
  AttachMoney,
  BarChart,
  Language,
  NotificationsNone,
  PermIdentity,
  Settings,
  Storefront
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const styles = {
  backgroundColor: 'white',
  width: '100%',
  height: '85vh'
};

const ProjectDashboard = () => {
  return (
    <div style={styles}>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">
              {' '}
              <HomeIcon /> Dashboard
            </span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <AccountCircleIcon className="topAvatar" />
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon" />
              <Collapsible trigger="Users">
                <div>
                  <PersonIcon />
                  <Link className="link"> Add new User</Link>
                </div>
                <div>
                  <PeopleIcon />
                  <Link className="link"> All Users</Link>
                </div>
              </Collapsible>
            </li>
            <li className="sidebarListItem">
              <ListIcon className="sidebarIcon" />
              <Collapsible trigger="Projects">
                <div>
                  <LaunchIcon />
                  <Link className="link"> Add new Project</Link>
                </div>
                <div>
                  <GridViewIcon />
                  <Link className="link"> See all Projects</Link>
                </div>
              </Collapsible>
            </li>
            <li className="sidebarListItem">
              <TaskIcon className="sidebarIcon" />
              <Collapsible trigger="Tasks">
                <div>
                  <AddTaskIcon />
                  <Link className="link"> Add a new Task</Link>
                </div>
                <div>
                  <GridViewIcon />
                  <Link className="link"> View all tasks</Link>
                </div>
              </Collapsible>
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;
