import React, {Component, Fragment} from 'react'
import styles from "./style.scss"
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';


class Input extends Component {


    onChange = e => {
        this.props.updateData(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            showWarning: true,
            text:'',
            text2: '',
            type:this.props.type
        };


    }



    handleClick = () => this.setState(({type}) => ({
        type: type === 'text' ? 'password' : 'text',
        showWarning: !this.state.showWarning,
    }))

    render() {
        const text2 = this.state.text2

        return (
            <label className={styles.input} style={{marginTop: this.props.marginTo}}>
                <input id={this.props.type} className={styles.input__field + " " + this.props.type} type={this.state.type} placeholder=" " name={"text2"} value={text2} onChange={this.onChange}/>
                <span className={styles.input__label} >{this.props.text}</span>
                {
                    this.props.type === "password" ? <button type="button" className={styles.input__label2} onClick={this.handleClick}>{this.state.showWarning ?<VisibilityOffIcon style={{ fontSize: 40 }}/>:<VisibilityIcon style={{ fontSize: 40 }}/>}</button>:<Fragment/>
                }

            </label>
        )
    }
}



export default Input