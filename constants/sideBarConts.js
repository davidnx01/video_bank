import {
    AiOutlineHome,
    AiOutlinePlaySquare,
    AiOutlineCheckCircle,
    AiOutlineSound
} from "react-icons/ai"

import { 
    MdOutlineVideoLibrary, 
    MdOutlineHistory, 
    MdOutlineVideocam,
    MdOutlineWatchLater,
    MdOutlineDownload
} from "react-icons/md";

import {
    RiArrowDownSLine
} from "react-icons/ri"

export const sideBarContsMain = [
    {
        icon: <AiOutlineHome size={22}/>,
        label: "Home",
    },
    {
        icon: <AiOutlinePlaySquare size={22}/>,
        label: "Shorts"
    },
    {
        icon: <AiOutlineCheckCircle size={22}/>,
        label: "Subscriptions"
    },
    {
        icon: <AiOutlineSound size={22}/>,
        label: "Papaya Music"
    }
]

export const sideBarContsChannel = [
    {
        icon: <MdOutlineVideoLibrary size={22}/>,
        label: "Library",
    },
    {
        icon: <MdOutlineHistory size={22}/>,
        label: "History",
    },
    {
        icon: <MdOutlineVideocam size={22}/>,
        label: "Your Videos",
    },
    {
        icon: <MdOutlineWatchLater size={22}/>,
        label: "Watch Later",
    },
    {
        icon: <MdOutlineDownload size={22}/>,
        label: "Downloads",
    },
    {
        icon: <RiArrowDownSLine size={22}/>,
        label: "Show More",
    },
]

export const sideBarContsSubs = [
    {
        logo: "/images/SubOne.png",
        label: "Design Code",
    },
    {
        logo: "/images/SubTwo.png",
        label: "Figma",
    },
    {
        logo: "/images/SubThree.png",
        label: "Sketch",
    },
    {
        logo: "/images/SubFour.png",
        label: "Spline",
    },
]