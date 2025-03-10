import { useState, ChangeEvent, JSX } from 'react';

const MathInput = (): JSX.Element => {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    const validateInput = (value: string): boolean => {
        // Allow empty input during typing
        if (value === "" || value === "-") {
            setError("");
            return true;
        }

        if (value.length > 6) {
            setError("Input must be 5 characters or less.");
            return false;
        }

        const fractionRegex = /^-?\d*\/?\d*$/; // Allow partial fraction input
        const decimalRegex = /^-?\d*\.?\d*$/; // Allow partial decimal input

        // For final validation
        const validFractionRegex = /^-?\d+\/\d+$/;
        const validDecimalRegex = /^-?\d+(\.\d{0,4})?$/;
        const validNumberRegex = /^-?\d+$/;

        // Check if it's a partial valid input
        // Check if it's a partial valid input
        if (fractionRegex.test(value) || decimalRegex.test(value)) {
            // If it's a complete input, validate it fully
            if (
                validFractionRegex.test(value) ||
                validDecimalRegex.test(value) ||
                validNumberRegex.test(value)
            ) {
                setError("");
                return true;
            }
            // Allow partial input without error
            setError("");
            return true;
        }

        setError("Invalid format. Use decimals or fractions (e.g., -3.5 or -7/2)");
        return false;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        if (validateInput(value)) {
            setInput(value);
        }
    };

    return (
        <div className="p-4 max-w-sm mx-auto">
            <label className="block mb-2 font-bold">Enter your answer:</label>
            <input
                type="text"
                value={input}
                onChange={handleChange}
                placeholder="e.g., -3.5 or -7/2"
                className="w-full p-2 border rounded"
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default MathInput;