import { useState, useEffect, useRef } from "react";
import {GoChevronDown} from 'react-icons/go';
import Panel from "./Panel";

function Dropdown({options, selected, onSelect}) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if(!ref.current) return;
            if (!ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        onSelect(option);
        setIsOpen(false);
    }

    const renderedOptions = options.map((option) => {
        return (
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => {handleOptionClick(option)}} key={option.value}>
                {option.label}
            </div>
        );
    });
    return (
        <div ref={ref} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>{selected ? selected.label : 'Select...'} <GoChevronDown className="text-lg"/></Panel>
            {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
    );
}

export default Dropdown;