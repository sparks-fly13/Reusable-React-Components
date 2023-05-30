import Link from "./Link";

function Sidebar() {
    const links = [
        { path: "/", label: "Accordion" },
        { path: "/dropdown", label: "Dropdown" },
        { path: "/button", label: "Button" },
        { path: "/modal", label: "Modal"},
        { path: "/table", label: "Table"}
    ];

    const renderedLinks = links.map((link) => {
        return (
            <Link key={link.label} path={link.path} className='mb-5' activeClassName="ms-2 font-bold border-l-4 border-blue-500 pl-2">
                {link.label}
            </Link>
        );
    });

    return (
        <div className="flex flex-col sticky overflow-y-scroll items-start">
            {renderedLinks}
        </div>
    )
}

export default Sidebar;