import './Nav.scss';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

export default function Nav() {
    return (
        <nav>
            <div className="container row">
                <Link to='/'>
                    <h6>
                        Random dish
                    </h6>
                </Link>

                <Link to='/favourites'>
                    <h6>
                        Favourites
                    </h6>
                </Link>

                <Button txt='Add custom dish' />
            </div>
        </nav>
    )
}