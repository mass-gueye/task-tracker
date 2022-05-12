import * as React from 'react';
import "./styles.css";

interface IHeaderProps {
    title?: string
}

const Header: React.FunctionComponent<IHeaderProps> = ({ title }) => {
    return (<>
        <span className="header">{title}</span>
    </>);
};

Header.defaultProps = {
    title: "Task Tracker"
}

export default Header;
