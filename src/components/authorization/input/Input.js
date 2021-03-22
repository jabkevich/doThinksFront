import React, {Component, Fragment} from 'react'
import styles from "./style.scss"
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';





class Input extends Component {
    state = {
        text: '',
        text2:''
    }

    onChange = e => {
        this.props.updateData(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        const text2 = this.state.text2
        return (
            <label className={styles.input} style={{marginTop: this.props.marginTo}}>
                <input className={styles.input__field} type={this.props.type} placeholder=" " name={"text2"} value={text2} onChange={this.onChange}/>
                <span className={styles.input__label}>{this.props.text}</span>
                {
                    this.props.type === "password" ? <button className={styles.input__label2} onClick={this.handleToggleClick}>{this.state.showWarning ?<VisibilityOffIcon/>:<VisibilityIcon/> }</button>:<Fragment/>

                }



            </label>
        )
    }
}



export default Input