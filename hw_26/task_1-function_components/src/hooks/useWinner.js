import {useEffect, useState} from "react";

const initValue = Array(5).fill(0);

function useWinner() {
    const [results, setResults] = useState(initValue);
    const [isChecked, setIsChecked] = useState(false);
    const [winner, setWinner] = useState(null);
    const [maxResult, setMaxResult] = useState(null);

    useEffect(() => {
        const results = JSON.parse(localStorage.getItem('results'));
        let resultsArray = results === null ? initValue : [...results];
        setResults(resultsArray);
    }, []);

    useEffect(() => {
        localStorage.setItem('results', JSON.stringify(results));
    }, [results]);

    const increaseResult = (event) => {
        event.preventDefault();

        if (event.target.closest('button') !== null) {
            const iconIndex = event.target.id - 1;
            const newResults = results.slice();

            ++newResults[iconIndex];
            newResults.splice(iconIndex, 1, newResults[iconIndex])

            setResults(newResults);
        }
    }

    const showWinner = () => {
        setIsChecked(!isChecked);

        const sortedResults = results.slice();
        sortedResults.sort((a, b) => b - a);

        if (sortedResults[0] === sortedResults[1]) {
            setWinner('Нічия!');
        } else {
            const winnerIndex = results.findIndex((item) => {
                return item === sortedResults[0]
            });

            setWinner(winnerIndex + 1);
            setMaxResult(sortedResults[0]);
        }
    }

    const resetResults = () => {
        setIsChecked(!isChecked);
        setResults(initValue);
        setWinner(null);
        setMaxResult(null);
    }

    return {results, isChecked, winner, maxResult, increaseResult, showWinner, resetResults}
}

export default useWinner