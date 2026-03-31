import {Link} from "react-router-dom";

import './Menu.css';
import './General.css';

const Menu = () => {
    return (
        <div className={'menu'}>
            <div className={'base-container'}>
                <ul>
                    <li>
                        <Link to='/cars'>cars</Link>
                    </li>

                    <li>
                        <Link to='/cars/create'>create</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;