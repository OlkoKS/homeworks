import './App.css'
import React from "react";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import List from "./components/List.jsx";
import Button from "./components/Button.jsx";
import Result from "./components/Result.jsx";
import getSrc from "./helpers.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [], isChecked: false, winner: '', maxResult: null
        }
        this.increaseResult = this.increaseResult.bind(this);
        this.showWinner = this.showWinner.bind(this);
        this.resetResults = this.resetResults.bind(this);
    }

    componentDidMount() {
        const results = JSON.parse(localStorage.getItem('results'));
        let resultsArray = results === null ? [0, 0, 0, 0, 0] : [...results];
        this.setState({results: resultsArray});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.setItem('results', JSON.stringify(this.state.results));
    }

    increaseResult(event) {
        event.preventDefault();

        if (event.target.closest('button') !== null) {
            const iconIndex = event.target.id - 1;

            this.setState((prevState) => {
                ++prevState.results[iconIndex];
                prevState.results.splice(iconIndex, 1, prevState.results[iconIndex])

                return {
                    results: prevState.results
                }
            })
        }
    }

    showWinner() {
        this.setState((prevState) => {
            return {isChecked: !prevState.isChecked}
        })

        const sortedResults = [...this.state.results];
        sortedResults.sort((a, b) => b - a);

        if (sortedResults[0] === sortedResults[1]) {
            this.setState({winner: 'Нічия!'})
        } else {
            const winnerIndex = this.state.results.findIndex((item) => {
                return item === sortedResults[0]
            });
            this.setState({winner: winnerIndex + 1, maxResult: sortedResults[0]})
        }
    }

    resetResults() {
        this.setState((prevState) => {
            return {isChecked: !prevState.isChecked, results: [0, 0, 0, 0, 0], winner: '', maxResult: null}
        })
    }

    render() {
        const {results, isChecked, winner, maxResult} = this.state;
        return (<>
            <Header/>
            <main>
                <Section>
                    <List values={results} onClick={isChecked === true ? null : this.increaseResult}/>
                    {isChecked === false ?
                        <Button name={'Показати результат'} type={'button'} onClick={this.showWinner}/> :
                        <Button name={'Скинути'} type={'reset'} onClick={this.resetResults}/>}
                    {isChecked === true ? <Result alt='smiley-winner' src={getSrc(winner)} value={maxResult}/> : null}
                </Section>
            </main>
        </>)
    }
}

export default App