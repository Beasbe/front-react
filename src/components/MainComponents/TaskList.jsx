export default function TaskList(props) {
    return (

        <div  className="task_list dark:bg-slate-800 " >
            <h2  className="task_list_header dark:text-gray-300" >{props.header}</h2>
            <div className="tasks_block">
                <div className="task_name dark:text-stone-800">{props.task_name}</div>
            </div>
        </div>

    )
}