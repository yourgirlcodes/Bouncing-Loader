class Circle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var style = {
            width: this.props.size + "px",
            height: this.props.size + "px"
        };
        return (
            <div className= {this.props.isBord ? "circ-bord" : "circ"} id= {this.props.isCenter ? "center" : "out-center" } style={style} ></div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Circle size="15" isCenter = {false} isBord = {false}/>
                <Circle size="30" isCenter = {true} isBord = {true}/>                
                <Circle size="45" isCenter = {false} isBord = {false}/>
                <Circle size="50" isCenter = {true} isBord = {false}/>
                <Circle size="15" isCenter = {false} isBord = {false}/>                
                <Circle size="60" isCenter = {true} isBord = {true}/>
                <Circle size="15" isCenter = {false} isBord = {true}/>
                <Circle size="50" isCenter = {false} isBord = {false}/>                
                <Circle size="45" isCenter = {true} isBord = {true}/>
                <Circle size="30" isCenter = {false} isBord = {true}/>
                <Circle size="15" isCenter = {true} isBord = {false}/>                
            </div>
        );
    }
}

function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}

render();