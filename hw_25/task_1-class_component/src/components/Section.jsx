import React, {Component} from "react";

class Section extends Component {
    render() {
        return (<section className="section">
            <div className="container">
                {this.props.children}
            </div>
        </section>)
    }
}

export default Section