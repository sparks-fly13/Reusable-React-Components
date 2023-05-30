//import Table from '../components/Table';
import SortableTable from '../components/SortableTable';

function TablePage() {
    const data = [
        {name: 'Ferrari', color: 'bg-red-500', score: 100},
        {name: 'Lamborghini', color: 'bg-yellow-500', score: 90},
        {name: 'Porsche', color: 'bg-blue-500', score: 80},
        {name: 'Aston Martin', color: 'bg-green-500', score: 70}
    ];

    const config = [
        {
            label: 'Car',
            content: (car) => car.name,
            sortValue: (car) => car.name
        },
        {
            label: 'Color',
            content: (car) => <div className={`w-6 h-6 rounded-full w-2/5 ${car.color}`}></div>
        },
        {
            label: 'Score',
            content: (car) => car.score,
            sortValue: (car) => car.score
        }
    ];

    return (
        <div>
            <SortableTable data={data} config={config} />
        </div>
    );
}

export default TablePage;