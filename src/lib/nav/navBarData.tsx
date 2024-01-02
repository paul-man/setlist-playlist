import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
 
export const navData = [
    {
        id: 0,
        icon: <HomeIcon/>,
        text: "Home",
        link: "/"
    },
    {
        id: 1,
        icon: <TravelExploreIcon/>,
        text: "Discover",
        link: "discover"
    },
    {
        id: 2,
        icon: <BarChartIcon/>,
        text: "Statistics",
        link: "statistics"
    },
    {
        id: 3,
        icon: <AccountCircleIcon/>,
        text: "Account",
        link: "account"
    }
]
