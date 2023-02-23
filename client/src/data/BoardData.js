import WebIcon from '@mui/icons-material/Language';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import IOTIcon from '@mui/icons-material/CloudCircle';
import RobotIcon from '@mui/icons-material/SmartToy';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import AIIcon from '@mui/icons-material/PsychologyOutlined';

const BoardData = [

    {
        name: 'Web development',
        icon: WebIcon,
        color: 'lightblue',
        followed : true
    },

    {
        name: 'Mobile development',
        icon: PhoneAndroidIcon,
        color: 'lightcoral',
        followed : true
    },
    
    {
        name: 'Internet of Things',
        icon: IOTIcon,
        color: 'lightgrey',
        followed: true
    },

    {
        name: 'Electric Vehicles',
        icon: ElectricCarIcon,
        color: 'lighgreen',
        followed : true
    },

    {
        name: 'Artificial Intelligence',
        icon: AIIcon,
        color: 'lightgreen'
    },

    {
        name: 'Robotics',
        icon: RobotIcon,
        color: 'paleturquoise'
    },

    {
        name: 'Computer Vision',
        icon: RemoveRedEyeIcon,
        color: 'teal'
    },

    {
        name: 'Embedded Systems',
        icon: DeveloperBoardIcon,
        color: 'pink'
    },

];

export default BoardData;