import { 
    HiOutlineHome, 
    HiOutlinePlayCircle, 
    HiOutlineWallet, 
    HiOutlineMusicalNote 
} from "react-icons/hi";

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
        icon: <HiOutlineHome />,
        label: "Home",
    },
    {
        icon: <HiOutlinePlayCircle />,
        label: "Shorts",
    },
    {
        icon: <HiOutlineWallet />,
        label: "Subscriptions",
    },
    {
        icon: <HiOutlineMusicalNote />,
        label: "Papaya Music",
    },
]

export const sideBarContsChannel = [
    {
        title: "MY CHANNEL"
    },
    {
        icon: <MdOutlineVideoLibrary />,
        label: "Library",
    },
    {
        icon: <MdOutlineHistory />,
        label: "History",
    },
    {
        icon: <MdOutlineVideocam />,
        label: "Your Videos",
    },
    {
        icon: <MdOutlineWatchLater />,
        label: "Watch Later",
    },
    {
        icon: <MdOutlineDownload />,
        label: "Downloads",
    },
    {
        icon: <RiArrowDownSLine />,
        label: "Show More",
    },
]