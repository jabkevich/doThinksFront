import React, {Component} from 'react'
import "./styles/dailyTasks.css"

class DailyTasks extends Component {

    render() {
        return (
            <div className={"DailyTasks"}>
                <button>Запланировать задачу</button>
                <button>Завтра</button>
                <button>Сегодня</button>
            </div>
        )
    }
}



export default DailyTasks