import Table from './Table';
import { useState } from 'react';
import {GoArrowSmallUp, GoArrowSmallDown} from 'react-icons/go';

function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const {config, data} = props;

    const handleClick = (label) => {
        if(sortBy && label!== sortBy){
            setSortOrder('asc');
            setSortBy(label);
            return;
        }

        if(sortOrder === null){
            setSortOrder('asc');
            setSortBy(label);
        }
        else if(sortOrder === 'asc'){
            setSortOrder('desc');
            setSortBy(label);
        }
        else if(sortOrder === 'desc'){
            setSortOrder(null);
            setSortBy(null);
        }
    }

    const updatedConfig = config.map((header) => {
        if(!header.sortValue){
            return header;
        }
        return {
            ...header,
            header: () => <th className='cursor-pointer hover:bg-gray-100 rounded-2xl' onClick={() => handleClick(header.label)}>
            <div className='flex items-center'>
                {getIcons(header.label, sortOrder, sortBy)}
                {header.label}
            </div>
            </th>
        }
    });

    let sortedData = data;
    if(sortOrder && sortBy){
        const {sortValue} = config.find((header) => header.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const aValue = sortValue(a);
            const bValue = sortValue(b);
            const revOrder = sortOrder === 'asc' ? 1 : -1;

            if(typeof aValue === 'string'){
                return aValue.localeCompare(bValue) * revOrder;
            }
            else {
                return (aValue - bValue) * revOrder;
            }
        });
    }

    return (
        <Table {...props} data={sortedData} config={updatedConfig}/>
    );
}

function getIcons(label, sortOrder, sortBy){
    if(label !== sortBy){
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>
    }
    if(sortOrder === 'asc'){
        return <div><GoArrowSmallUp /></div>;
    }
    else if(sortOrder === 'desc'){
        return <div><GoArrowSmallDown /></div>;
    }
    return <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
    </div>
}

export default SortableTable;