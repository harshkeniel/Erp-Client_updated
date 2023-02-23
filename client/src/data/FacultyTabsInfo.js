import { Home as HomeIcon, Assignment as ProjectIcon, People as CommunityIcon, Chat as ChatIcon, School } from '@mui/icons-material'

const tabsInfo = [
    {
      name : "Home",
      icon : HomeIcon,
      link : "/faculty"
    },
    {
      name : "Mentored Projects",
      icon : ProjectIcon,
      link : "/faculty/projects"
    },
    {
      name : "Community",
      icon : CommunityIcon,
      link : "/faculty/community"
    },
    // {
    //   name : "Chats",
    //   icon : ChatIcon,
    //   link : "/faculty/chats"
    // },
    {
      name : "Classroom",
      icon : School,
      link : "/faculty/classroom"
    }
]

export default tabsInfo