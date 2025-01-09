import { useState } from "react";

export default function ColorGenerator() {
    const [Type_of_color, Set_Type_Of_Color] = useState("hex");
    const [Actual_Color, Set_Actual_Color] = useState("#000000");

    // Function to generate random hex color
    function generateRandomHexColor() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return `#${randomColor.padStart(6, "0")}`;
    }

    // Function to generate random RGB color
    function generateRandomRGBColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Change the color to Hex
    function Change_Hex_color() {
        const newColor = generateRandomHexColor();
        Set_Type_Of_Color("hex");
        Set_Actual_Color(newColor);
    }

    // Change the color to RGB
    function Change_RGB_color() {
        const newColor = generateRandomRGBColor();
        Set_Type_Of_Color("rgb");
        Set_Actual_Color(newColor);
    }

    // Generate a completely random color (either Hex or RGB)
    function Change_Ran_color() {
        const isHex = Math.random() < 0.5; if (isHex) { Change_Hex_color(); } else { Change_RGB_color(); }
    }

    return (
        <div>
            <div style={{ backgroundColor: Actual_Color }} className="Color_layout">
                <h2>Current Color: {Actual_Color}</h2>
                <h3>Type: {Type_of_color.toUpperCase()}</h3>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
                <button onClick={Change_Hex_color}>Create Hex Color</button>
                <button onClick={Change_RGB_color}>Create RGB Color</button>
                <button onClick={Change_Ran_color}>Create Random Color</button>
            </div>

        </div>
    );
}
