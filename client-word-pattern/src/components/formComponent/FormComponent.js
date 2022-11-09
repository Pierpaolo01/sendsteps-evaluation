import './FormComponent.css'

export default function FormComponent() {
    const handleFormSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <form className="word-form" onSubmit={handleFormSubmit}>
            <div className="word-form__input-section">
                <label htmlFor="main-word">Main word</label>
                <input
                    id="main-word"
                    type="text"
                    className="word-form__input"
                />
            </div>

            <div className="word-form__input-section">
                <label htmlFor="overlap-word" className="word-form__input-section">Overlap word</label>
                <input
                    id="overlap-word"
                    type="text"
                />
            </div>

            <button className="word-form__submit" type="submit">
                Submit
            </button>
        </form>
    )
}
