import './FormComponent.css'
import {useState} from "react";
import CardComponent from "../cardComponent/CardComponent";

export default function FormComponent({onFormSubmit, onSuccessResponse}) {
    const [form, setForm ] = useState({
        mainWord: '',
        overlapWord: ''
    });

    const handleFormChange = event => {
        const { name, value } = event.target;

        setForm(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        onFormSubmit(true);

        setTimeout( () => {
            onFormSubmit(false);
            onSuccessResponse()
        }, 200);

        // const response = await fetch('http://localhost:3333/word-overlap', {
        //     method: 'POST',
        //     body: JSON.stringify(form)
        // });
    }


    return (
        <CardComponent title="Word patterns" description="Detect overlapping words within words">
            <form className="word-form" onSubmit={ handleFormSubmit }>
                <div className="word-form__input-section">
                    <label htmlFor="main-word">Main word</label>
                    <input
                        id="main-word"
                        type="text"
                        name="mainWord"
                        placeholder="device"
                        value={form.mainWord}
                        onChange={handleFormChange}
                    />
                </div>

                <div className="word-form__input-section">
                    <label htmlFor="overlap-word" className="word-form__input-section">Overlap word</label>
                    <input
                        id="overlap-word"
                        type="text"
                        name="overlapWord"
                        placeholder="ice"
                        value={form.overlapWord}
                        onChange={handleFormChange}
                    />
                </div>

                <button className="word-form__submit" type="submit">
                    Submit
                </button>
            </form>
        </CardComponent>
    )
}
