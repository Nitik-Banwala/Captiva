
const Button = ({ text, className }) => {
    return (
        <button
            className={`cursor-pointer duration-500 transform ${className} `}
        >
            {text}
        </button>
    );
};

export default Button;