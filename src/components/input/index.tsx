import React from "react";

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {

}

export const Input: React.FC<InputProps> = (props) => {
    
    return (
        <input {...props} />
    );
};
