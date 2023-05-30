import { useContext } from "react";
import NavigationContext from "../context/navigation";
import classNames from "classnames";

function Link({path, children, className, activeClassName}){
    const {navigate, currentPath} = useContext(NavigationContext);

    const classes = classNames('text-blue-500', 'hover:text-blue-700', className,
        currentPath === path ? activeClassName : ''
    );

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        };
        event.preventDefault();
        navigate(path);
    };
    return (
        <a className={classes} onClick={handleClick} href={path}>{children}</a>
    )
}

export default Link;