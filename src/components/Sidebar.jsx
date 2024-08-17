import Logo from './SidebarComponents/Mainlogo.svg';
import './SidebarComponents/sidebar.css'
import BoardItem from "./SidebarComponents/BoardItem";

export default function Sidebar()  {

    return (
        <div className="sidebar dark:bg-neutral-700 ">
            <img className="logo" src={Logo} alt="Digital studio"/>
            <div className="sideNavigation ">
                <BoardItem></BoardItem>
            </div>
        </div>

    )
}