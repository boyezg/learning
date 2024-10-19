interface ButtonProps {
    label: string;
    color?: string;
    nonClickable?: boolean;
    action: () => void
}

const Button = ({ label, color, nonClickable, action }: ButtonProps) => {
    return (
        <button style={{
            border: '1px solid black',
            backgroundColor: color,
            padding: '5px 20px',
            borderRadius: '5px',
            cursor: nonClickable ? 'not-allowed' : 'pointer'
        }}
            disabled={nonClickable}
            onClick={action}
        >{label}</button>
    )
}

export default Button;
