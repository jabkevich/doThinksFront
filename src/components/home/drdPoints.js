import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { blue500, blue700 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {updatePoint, delPoint, addPoint, updatePointList, updateTask} from "../../redux/authAction"
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
import InputPoint from "./InputPoint";
import DelPoint from "./DelPoint";
import {FormControl, FormHelperText, InputLabel, TableFooter} from "@material-ui/core";
import Input from "./Input";

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
                <InputPoint data={data} />
            </TableRowColumn>
            <TableRowColumn>
                {data.deadline?data.deadline.split('T').join(' ').split(':00Z').join(''):"--"}
            </TableRowColumn>
            <TableRowColumn>
                <DelPoint id={data.id}/>
            </TableRowColumn>
        </TableRow>


    )
})

class DRDPoints extends Component {
    constructor(props) {
        super(props);
        this.state = {
            point: this.props.point,
        }
    }

    // Обработчик заверщения перемещения, используется helper arrayMove
    onSortEnd = ({oldIndex, newIndex}) => {
        this.props.updatePointList(oldIndex,newIndex)
        this.props.point.map((point, index) => {
            point.priority = index
            this.props.updatePoint(point)
        })
    };


    render() {
        return (
            <MuiThemeProvider muiTheme={theme}>
                <div>



                    <Table>
                        <TableBodySortable onSortEnd={this.onSortEnd} useDragHandle
                                           displayRowCheckbox={false}>
                            {this.props.point.map((point, index) => {
                                    return (
                                        <Row
                                            index={index}
                                            key={point.id}
                                            data={point}
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
        point: state.auth.point,
        user: state.auth.user,
    }
}


export default  connect(mapStateToProps, {updatePoint, delPoint, addPoint, updatePointList, updateTask})(DRDPoints)