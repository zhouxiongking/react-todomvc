import React from "react";
import "./header.css";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ''
        };

        this.doChange = this.doChange.bind(this);
    }

    doChange(event) {
        this.setState({
            content: event.target.value
        });
    }

    enterInput(event) {
        let keyCode = event.keyCode || event.charCode;
        let value = event.target.value;
        if (keyCode === 13 && value && value.trim().length > 0) {
            props.todoList.push(this.state.content);
        }
    }

    render() {
        return (
            <header>
                <h1 className="title">todos</h1>
                <form className="form">
                    <input type="text" value={this.state.content}
                           className="input form-control"
                           onChange={this.doChange}
                           onKeyUp={this.enterInput}/>
                </form>
            </header>
        );
    }
}

export default Header;

