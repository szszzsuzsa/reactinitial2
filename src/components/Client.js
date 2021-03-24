import React from "react";
import { useState } from "react";


const Client = () => {

    const url = 'api/pets'
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [response, setResponse] = useState(null)
    const [form, setForm] = useState(true)


    const submitForm = () => {
        setIsLoading(true)
        setForm(false)
        fetch(url, {
            method: "POST",
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json",
            },
            body: JSON.stringify(name, isVaccinated)
        })
            .then((resp) => setResponse(true))
            .catch((err) => setResponse(false))
            .finally(() => setTimeout(setIsLoading(false), 5000))
    }

    return (
        <div>
            {isLoading === false && form === true ?
                <div class="form">
                     <input value={name}
                        onChange={(e) => setEmail(e.target.value)} type="text" />
                    <button
                        onClick={submitForm}
                        disabled={!(email.includes('@') && email.includes('.'))}>Submit</button>

                    {response === false ? <p>Oops, something happened</p> : response === true ? <p>Subscribed</p> : ''}
                    </div> : <p>Loading</p>}
        </div>
    )
}

export default Client;