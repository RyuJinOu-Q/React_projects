import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
    const [SingleSelect, SetSingleSelect] = useState(null);
    const [EnableMultiSelection, SetEnableMultiSelection] = useState(false); // Set initial state to false
    const [multiselectionarray, setmultiselectionarray] = useState([]);

    function HandleSingleSelection(GetItemId) {
        SetSingleSelect(SingleSelect === GetItemId ? null : GetItemId);
    }

    function HandleMultiSelection(GetItemId) {
        console.log(GetItemId);  // Log the ID
        let copyMultipleSelectioarraystate = [...multiselectionarray];
        const FindIndexOfCurrentId = copyMultipleSelectioarraystate.indexOf(GetItemId);
        console.log(FindIndexOfCurrentId);  // Log the index

        if (FindIndexOfCurrentId === -1) {
            // If the item is not in the array, add it
            copyMultipleSelectioarraystate.push(GetItemId);
        } else {
            // If the item is in the array, remove it
            copyMultipleSelectioarraystate.splice(FindIndexOfCurrentId, 1);
        }

        // Update the state with the modified array
        setmultiselectionarray(copyMultipleSelectioarraystate);
    }

    console.log(SingleSelect, multiselectionarray);

    return (
        <div className="Overall_layout">
            <div className="Accordion_layout">
                <button onClick={() => SetEnableMultiSelection(!EnableMultiSelection)}>
                    Enable Multi Accordion
                </button>
                {data && data.length > 0 ? (
                    data.map(dataItem => (
                        <div key={dataItem.id} className="item_layout">
                            <div
                                onClick={EnableMultiSelection ? () => HandleMultiSelection(dataItem.id) : () => HandleSingleSelection(dataItem.id)}
                                className="question_layout"
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {(SingleSelect === dataItem.id || multiselectionarray.indexOf(dataItem.id) !== -1) && (
                                <div className="answer_layout">
                                    {dataItem.answer}
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div>No data found</div>
                )}
            </div>
        </div>
    );
}














/* <div className="Overall_layout">
            <div className="Accordion_layout">
                {data && data.length > 0 ? (
                    data.map(dataItem => (
                        <div key={dataItem.id} className="item_layout">
                            <div
                                onClick={() => HandleSingleSelection(dataItem.id)}
                                className="question_layout"
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {SingleSelect === dataItem.id && (
                                <div className="answer_layout">
                                    {dataItem.answer}
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div>No data found</div>
                )}
            </div>
        </div> ----> answer tp single accordion
        
        
    <button onClick={() => SetEnableMultiSelection(!EnableMultiSelection)}>Enable Multi Accordion </button>
 it basically toggles the required output

         let copyMultipleSelectioarraystate=[...multiselectionarray] badically we are making a shallow copy 

        
        
        
        
        
        
        
        
        
        */