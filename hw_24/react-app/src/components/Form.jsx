function Form() {
    return (<div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">https://swapi.dev/api/</span>
            <label htmlFor="inputSearch"></label>
            <input type="text" className="form-control" id="inputSearch" aria-label="Sizing example input"
                   aria-describedby="inputGroup-sizing-default" placeholder="people/1/"/>
            <button type="submit" className="btn btn-light btn-outline-secondary">Get Info</button>
        </div>)
}

export default Form