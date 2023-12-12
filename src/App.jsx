import React, {useState} from "react";
import './App.css'

function App() {

        const [formState, setFormState] = useState({
            firstname: '',
            lastname: '',
            age: '0',
            postalcode: '0000',
            notes: ''
        });

    function handleChange(e) {
        const changedFieldName = e.target.name;

        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
        });
    }


    const [countBanana, setCountBanana] = React.useState(0);
    const [countStrawberry, setCountStrawberry] = React.useState(0);

            function handleSubmit(event)  {
                event.preventDefault();
            console.log(formState);
        }

        return (
    <>
        <h1>Fruitmand bezorgservice</h1>

        <form onSubmit={handleSubmit}>
        <section className="counters">
            🍌 Bananen
            <button type="button"
              onClick={() => countBanana > 0 && setCountBanana(countBanana - 1)}>-</button>
            {countBanana}
            <button type="button"
                    onClick={() => setCountBanana(countBanana + 1)}>+</button>
        </section>



        <section className="counters">
            🍓 Aardbeien
            <button type="button"
                    onClick={() => countStrawberry > 0 && setCountStrawberry(countStrawberry - 1)}>-</button>
            {countStrawberry}
            <button type="button"
                    onClick={() => setCountStrawberry(countStrawberry + 1)}>+</button>
        </section>

        <section className="counters">
            🍏 Appels
            <button type="button">-</button>
            0
            <button type="button">+</button>
        </section>

        <section className="counters">
            🥝  Kiwi
            <button type="button">-</button>
            0
            <button type="button">+</button>
        </section>

        <section className="reset">
            <button type="button"
            onClick={() => {setCountBanana(0); setCountStrawberry(0);}}>
            Reset
            </button>
        </section>


            <label htmlFor="form-name">
                Voornaam:</label>
                <input
                    type="text"
                    id="form-name"
                    name="firstname"
                value={formState.firstname}
                onChange={handleChange}/>
            <br/>
                <label htmlFor="form-lastName">
                    Achternaam:</label>
                    <input
                        type="text"
                        id="form-last-name"
                        name="lastname"
                        value={formState.lastname}
                        onChange={handleChange}/>
            <br/>
            <label htmlFor="Leeftijd">
                Leeftijd:</label>
                <input
                    type="number"
                    id="form-age"
                    name="age"
                    value={formState.age}
                    onChange={handleChange}/>
            <br/>
            <label htmlFor="Postcode">
                Postcode:</label>
                <input
                    type="number"
                    id="form-postal-code"
                    name="postalcode"
                    value={formState.postalcode}
                    onChange={handleChange}/>
            <br/>
            <label htmlFor="delivery-options">
                Bezorgfrequentie:</label>
                <select name="delivery-time" id="delivery-options">
                    <option value="form">Iedere week</option>
                    <option value="every-other-week">Om de week</option>
                    <option value="every-month">Iedere maand</option>
                </select>
            <br/>

            <label htmlFor="day">
            <input type="radio" name="deliveryoption" value="daytime"/>
                Overdag
            </label>
            <label htmlFor="evening">
                <input type="radio" name="deliveryoption" value="evening"/>
                Avond
            </label>
<br/>
            <label htmlFor="notes">Opmerking</label>
        <br/>
            <textarea
                name="notes"
                id="comments-field"
                rows="4" cols="40"
                value={formState.notes}
                onChange={handleChange}></textarea>
            <br/>

          <label htmlFor="">
              <input type="checkbox" name="conditions"/>
              Akkoord met de voorwaarden
          </label>
            <br/>
        <button type="submit">Verzend</button>
        </form>
    </>
  )
}

export default App
