import './TitleLabel.css'
export default function TitleLabel({title, subtitle}) {
    return (
        <div className="TitleLabelClass">
            <p className='Title'>{title}</p>
            <p>{subtitle}</p>
        </div>
    );
}