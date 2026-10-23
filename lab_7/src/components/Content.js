
import React, { Component } from "react";

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            element2Active: false,
            element3Active: false
        };
    }

    toggleElement2 = () => {
        this.setState((prevState) => ({
            element2Active: !prevState.element2Active
        }));
    };

    toggleElement3 = () => {
        this.setState((prevState) => ({
            element3Active: !prevState.element3Active
        }));
    };

    render() {
        const { element2Active, element3Active } = this.state;

        return (
            <section>
                <h2>Завдання 1. Робота з компонентами React</h2>

                <p>
                    Зміна кольорів елементів за допомогою
                    подій та стану компонента.
                </p>

                <h2
                    id="element2"
                    onClick={this.toggleElement2}
                    style={{
                        backgroundColor: element2Active
                            ? "#f5f511"
                            : "#118f8f",
                        color: element2Active
                            ? "#000000"
                            : "#ffffff",
                        padding: "15px",
                        cursor: "pointer"
                    }}
                >
                    Елемент №2. Натисніть для зміни кольору.
                </h2>

                <p
                    className="element3"
                    onClick={this.toggleElement3}
                    style={{
                        backgroundColor: element3Active
                            ? "#f5f511"
                            : "#118f8f",
                        color: element3Active
                            ? "#000000"
                            : "#ffffff",
                        padding: "15px",
                        cursor: "pointer"
                    }}
                >
                    Елемент №3. Натисніть для зміни кольору.
                </p>
            </section>
        );
    }
}

export default Content;
