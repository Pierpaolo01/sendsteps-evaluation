import './FormComponent.css'
import CardComponent from "../cardComponent/CardComponent";
import React, { useState } from "react";

export default function FormComponent({onSuccessResponse}) {
    const [form, setForm ] = useState({
        word1: '',
        word2: ''
    });

    const [validationError, setValidationError] = useState([]);

    const handleFormChange = event => {
        const { name, value } = event.target;

        setForm(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:3333/api/word-overlap', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });

        const data = await response.json();


        if (response.status === 422) {
            setValidationError(data);
        }


        if (response.status === 200) {
            onSuccessResponse(data);
        }
    }


    return (
        <CardComponent title="Word patterns" description="Detect overlapping words within words">
            <form className="word-form" onSubmit={ handleFormSubmit }>
                <div className="word-form__input-section">
                    <label htmlFor="main-word">Main word</label>
                    <input
                        id="main-word"
                        type="text"
                        name="word1"
                        placeholder="e.g. device"
                        value={form.word1}
                        onChange={handleFormChange}
                    />
                    <span className="word-form__validation-error">
                        { validationError.map((err) => {
                            if (err.param === 'word1' ) {
                                return err.msg;
                            }
                            return '';
                        })}
                    </span>
                </div>

                <div className="word-form__input-section">
                    <label htmlFor="overlap-word" className="word-form__input-section">Overlap word</label>
                    <input
                        id="overlap-word"
                        type="text"
                        name="word2"
                        placeholder="e.g. ice"
                        value={form.word2}
                        onChange={handleFormChange}
                    />
                    <span className="word-form__validation-error">
                        { validationError.map((err) => {
                            if (err.param === 'word2' ) {
                                return err.msg;
                            }
                            return '';
                        })}
                    </span>
                </div>
                <button className="word-form__submit" type="submit">
                    Submit
                </button>
            </form>
        </CardComponent>
    )
}
