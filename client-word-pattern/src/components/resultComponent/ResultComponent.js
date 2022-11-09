import CardComponent from "../cardComponent/CardComponent";
import "./resultComponent.css"


export default function ResultComponent({overlappingLetters}) {
    return (
        <CardComponent
            title={`There ${overlappingLetters.length > 1 ? 'are' : 'is' } ${overlappingLetters.length} overlapping letter${overlappingLetters.length > 1 ?'s':'' }`}
        >
            <ul className="overlap-result__list">
                {overlappingLetters.map((letter) => {
                    return (
                        <li>
                            {letter}
                        </li>
                    )
                } )}
            </ul>
        </CardComponent>
    )
}
