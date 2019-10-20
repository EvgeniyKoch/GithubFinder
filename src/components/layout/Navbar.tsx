import React from 'react';

interface INavbarProps {
    title: string;
    icon: string;
}

const Navbar: React.StatelessComponent<INavbarProps> = ({ title, icon }) => (
    <nav className="navbar bg-primary">
        <h1>
            <i className={icon} />
            {title}
        </h1>
    </nav>
);

Navbar.defaultProps = {
    title: ' Github Finder',
    icon: 'fab fa-github',
};

export default Navbar;