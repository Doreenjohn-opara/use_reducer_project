import { MdDashboard, MdHighlight } from "react-icons/md";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { RiBankFill } from "react-icons/ri";
import { BsFillStopwatchFill } from "react-icons/bs";

interface NavItem {
    name: string;
    icon: React.ReactNode;
    path: string;
  }
  

export const navLists: NavItem[] = [
    { 
        name: 'Dashboard', 
        icon: <MdDashboard className='nav-icon font-aeonik-bold'/> , 
        path: '/' 
    },
    { 
        name: 'Light Switch Simulator', 
        icon: <MdHighlight className='nav-icon font-aeonik-bold'/>, 
        path: '/lightswitch' 
    },
    { 
        name: 'Theme Toggler', 
        icon: <FaCircleHalfStroke className='nav-icon font-aeonik-bold'/>, 
        path: '/themetogger' 
    },
    { 
        name: 'Bank Account Manager', 
        icon: <RiBankFill className='nav-icon font-aeonik-bold'/>, 
        path: '/bankaccount' 
    },
    { 
        name: 'Simple Stopwatch', 
        icon: <BsFillStopwatchFill />, 
        path: '/stopwatch' 
    },
  ];