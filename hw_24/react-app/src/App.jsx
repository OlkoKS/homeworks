import './App.css'
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import List from "./components/List.jsx";


function App() {
    return (
        <>
            <Header/>
            <main>
                <section className="section">
                    <div className="container">
                        <Form/>
                        <List/>
                    </div>
                </section>
            </main>
        </>
    )
}

export default App
