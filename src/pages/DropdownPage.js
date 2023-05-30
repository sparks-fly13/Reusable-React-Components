import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
    const [selected, setSelected] = useState(null);

    const handleSelect = (option) => {
        setSelected(option);  
    };

    const options = [
        {label: 'The Color Red', value: 'red'},
        {label: 'The Color Green', value: 'green'},
        {label: 'A Shade of Blue', value: 'blue'}
    ];
    return <Dropdown selected={selected} onSelect={handleSelect} options={options} />
}

export default DropdownPage;