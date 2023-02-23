import { faCircleInfo, faClipboard, faComment, faPhotoFilm, faPenRuler, faPeopleLine, faRoute } from "@fortawesome/free-solid-svg-icons"
import Chats from "../views/ProjectPanel/tabs/Chats/Chats"
import Community from "../views/ProjectPanel/tabs/Community/Community"
import MediaAndDocs from "../views/ProjectPanel/tabs/MediaAndDocs/MediaAndDocs"
import Journey from "../views/ProjectPanel/tabs/Journey/Journey"
import Overview from "../views/ProjectPanel/tabs/Overview/Overview"
import Planning from "../views/ProjectPanel/tabs/Planning/Planning"
import Submissions from "../views/ProjectPanel/tabs/Submissions/Submissions"

const sidebarData = [
    
    {
        name : "Overview",
        icon : faCircleInfo,
        Component : Overview
    },
    {
        name : "Media & Docs",
        icon : faPhotoFilm,
        Component : MediaAndDocs
    },

    {
        name : "Planning",
        icon : faPenRuler,
        Component : Planning
    },

    {
        name : "Project Journey",
        icon : faRoute,
        Component : Journey
    },

    // {
    //     name : "Chats",
    //     icon : faComment,
    //     Component : Chats
    // },
    {
        name : "Community",
        icon : faPeopleLine,
        Component : Community
    },
    
    {
        name : "Submissions",
        icon : faClipboard,
        Component : Submissions
    }

]

export default sidebarData