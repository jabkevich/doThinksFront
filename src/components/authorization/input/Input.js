import React, {Component, Fragment} from 'react'
import styles from "./style.scss"
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
    render() {
        const text2 = this.state.text2
        return (
            <label className={styles.input} style={{marginTop: this.props.marginTo}}>
                <input className={styles.input__field} type="text" placeholder=" " name={"text2"} value={text2} onChange={this.onChange}/>
                <span className={styles.input__label}>{this.props.text}</span>
            </label>
        )
    }
}



export default Input