import CardComponent from "../cardComponent/CardComponent";
import "./resultComponent.css"


export default function ResultComponent({overlappingLetters, emitReturn}) {
    return (
        <CardComponent
            title={`There ${overlappingLetters.length > 1 ? 'are' : 'is' } ${overlappingLetters.length} overlapping character${overlappingLetters.length > 1 ?'s':'' }`}
        >
            <ul className="overlap-result__list">
                {overlappingLetters.map((letter) => {
                    return (
                        <li key={letter}>
                            {letter}
                        </li>
                    )
                } )}
            </ul>
            <button className="overlap-result__button" type="submit" onClick={emitReturn}>
                Go back
            </button>
        </CardComponent>
    )
}
