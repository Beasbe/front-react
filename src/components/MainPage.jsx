import './MainComponents/mainpage.css'
import TaskList from "./MainComponents/TaskList";


export default function MainPage() {


    return (
        <div className="main-wrp dark:text-gray-300 dark:bg-neutral-800">
            <div className="DefaultInfo-wrp "  >
            <div className="DefaultInfo-block dark:bg-slate-800" >
                <div className="DateInfo" >
                <p>Date added: 22.22.22</p>
                <p>Deadline: 33.33.33</p>
                <p>wwwwww</p>
                </div>
            </div>
            <div className="DefaultInfo-block dark:bg-slate-800">
                <p>Менеджер для внутреннего пользования, предназначенный для учета статистики и трекинга задач.</p>
            </div>
            <div className="DefaultInfo-block dark:bg-slate-800">
                <div className="DateInfo">
                <p>All tasks: 22</p>
                <p>Done: 33</p>
                <p>Frozen: 2</p>
                </div>
            </div>

            </div>
            <div className="lists_wrapper">
                <TaskList header={"To do"} task_name={"Ебануть pet proj"}></TaskList>
                <TaskList header={"In progress"} task_name={"Рефакторинг"}></TaskList>
                <TaskList header={"Closed"} task_name={"сверстать хуйню"}></TaskList>
                <TaskList header={"Frozen"} task_name={"todoshnik design"}></TaskList>

            </div>
        </div>
    )
}