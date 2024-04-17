import './TextArea.css'
export default function TextArea({message, onBlur}) {
    return (
        <div className="TextAreaClass">
            <label>{message}</label>
            <textarea onBlur={onBlur}></textarea>
        </div>
    );
}