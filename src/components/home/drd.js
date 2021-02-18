import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { blue500, blue700 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {updateTask, delTask, addTask, updateTaskList} from "../../redux/authAction"
import Del from "./Del";
import NearMeIcon from '@material-ui/icons/NearMe';
import {
    Table,
    TableRow,
    TableHeader,
    TableHeaderColumn,
    TableRowColumn,
    TableBody,
} from 'material-ui/Table';

const theme = getMuiTheme({
    palette: {
        primary1Color: blue500,
        primary2Color: blue700,
    },
})

import { SortableContainer, SortableHandle, SortableElement, arrayMove } from 'react-sortable-hoc'
import {connect} from "react-redux";
import Input from "./Input";
import ShowTask from "./ShowTask";

// Компонент который используется активации drag-n-drop при клике внутри компонента
const DragHandle = SortableHandle(({ style }) => (
    <span style={{ ...style, ...{ cursor: 'move'} }} > <NearMeIcon/> </span>
    )
)


// Универсальный компонент для превращения TableBody в sortable контейнер
const TableBodySortable = SortableContainer(({ children, displayRowCheckbox }) => (
    <TableBody displayRowCheckbox={displayRowCheckbox}>
        {children}
    </TableBody>
))

// Строка необходима для того чтобы наш кастомный боди воспринимался как TableBody и в этом случае ошибки не будет
TableBodySortable.muiName = 'TableBody'

// Компонент строки таблицы с оберткой в sortable элемент
const Row = SortableElement(({ data, ...other }) => {
    return (
            <TableRow >
                <TableRowColumn style={{ width: '50px',  textAlign: "center", paddingLeft: 0,
                    paddingRight: 0  }}>
                    <DragHandle />
                </TableRowColumn>
                <TableRowColumn>
                    <Input data={data}/>
                </TableRowColumn>
                <TableRowColumn>
                    {data.other}
                </TableRowColumn>
                <TableRowColumn>
                    {data.deadline?data.deadline.split('T').join(' ').split(':00Z').join(''):"--"}
                </TableRowColumn>
                <TableRowColumn>
                    <ShowTask data={data}/>
                </TableRowColumn>
                <TableRowColumn>
                    <Del id={data.id}/>
                </TableRowColumn>
            </TableRow>


    )
})

class DRD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: this.props.groupTasks,
        }
    }

    // Обработчик заверщения перемещения, используется helper arrayMove
    onSortEnd = ({oldIndex, newIndex}) => {
        this.props.updateTaskList(oldIndex,newIndex)
        this.props.groupTasks.map((task, index) => {
            task.priority = index
            this.props.updateTask(task, task.id)
        })
    };


    render() {
        return (
            <MuiThemeProvider muiTheme={theme}>
                <div>
                    <Table>
                        <TableBodySortable onSortEnd={this.onSortEnd} useDragHandle
                                           displayRowCheckbox={false}>
                            {this.props.groupTasks.map((task, index) => {
                                    return (
                                        <Row
                                            index={index}
                                            key={task.id}
                                            data={task}
                                        />
                                    )

                                }
                            )}
                        </TableBodySortable>
                    </Table>
                </div>
            </MuiThemeProvider>

        )
    }
}
const mapStateToProps = state => {
    return {
        groupTasks: state.auth.groupTasks,
        user: state.auth.user,
    }
}


export default  connect(mapStateToProps, {updateTask,delTask, addTask, updateTaskList})(DRD)