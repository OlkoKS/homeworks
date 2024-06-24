import './App.css'
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import List from "./components/List.jsx";
import Button from "./components/Button.jsx";
import Result from "./components/Result.jsx";
import useWinner from "./hooks/useWinner.js";

function App() {
    const {results, isChecked, winner, maxResult, increaseResult, showWinner, resetResults} = useWinner();

    return (<>
        <Header/>
        <main>
            <Section>
                <List values={results} onClick={isChecked === true ? null : increaseResult}/>
                {isChecked === false ? <Button name={'Показати результат'} type={'button'} onClick={showWinner}/> :
                    <Button name={'Скинути'} type={'reset'} onClick={resetResults}/>}
                {isChecked === true ? <Result alt='smiley-winner' winner={winner} value={maxResult}/> : null}
            </Section>
        </main>
    </>)
}

export default App