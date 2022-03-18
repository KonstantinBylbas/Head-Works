import './Button.scss';

export default function Button({ txt, handlerClick }) {
    return (
        <button onClick={handlerClick}>
            {txt}
        </button>
    )
}