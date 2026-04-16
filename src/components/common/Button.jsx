
const Button = ({ text, className }) => {
    return (
        <button
            className={`cursor-pointer duration-300 transform ${className} `}
        >
            {text}
        </button>
    );
};

export default Button;