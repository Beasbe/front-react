import './HeaderComponents/header.css'
import Themes from "./HeaderComponents/Themes";
export default function Header() {



    return (
        <div className="header-container dark:bg-neutral-700 dark:shadow-xl shadow-white ">
            <div className="header ">
                <div className="project_name dark:text-gray-300">Project name</div>
                <div className="action-wrp">
                    <div className="search__item-block " >
                        <div className="search__item-title dark:bg-neutral-700 dark:text-gray-300">Поиск проектов</div>
                        <input type="search" className="dark:bg-neutral-700 dark:text-gray-300" />
                    </div>
                    <Themes></Themes>

                </div>
            </div>
        </div>
    )
}
