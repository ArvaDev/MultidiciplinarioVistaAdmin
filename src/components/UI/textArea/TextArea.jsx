import './TextArea.css'
export default function TextArea({message, onBlur, placeholder}) {
    return (
        <div className="TextAreaClass">
            <label>{message}</label>
            <textarea onBlur ={onBlur} placeholder={placeholder} onChange={onBlur} value={message}></textarea>
        </div>
    );
}