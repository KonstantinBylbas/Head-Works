import './Nav.scss';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import { useState } from 'react';

export default function Nav() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [navIsOpen, setNavIsOpen] = useState(false);

    const tabs = ['', 'favourites'];

    return (
        <>
            <nav>
                <svg viewBox="0 0 32 32" className='menu' onClick={() => setNavIsOpen(!navIsOpen)}><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" /></svg>

                <div className={`container row ${navIsOpen ? 'open' : ''}`}>
                    <svg viewBox="0 0 512 512" className='close' onClick={() => setNavIsOpen(false)}><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" /></svg>

                    {
                        tabs.map(tab =>
                            <Link to={`/${tab}`} onClick={() => setNavIsOpen(false)}>
                                <h6>
                                    {tab ? tab : 'Random dish'}
                                </h6>
                            </Link>
                        )
                    }

                    <Button txt='Add custom dish' handlerClick={() => { setNavIsOpen(false); setModalIsOpen(!modalIsOpen) }} />
                </div>
            </nav>

            <div className={`modal ${modalIsOpen ? 'open' : ''}`}>
                <svg viewBox="0 0 512 512" className='close' onClick={() => setModalIsOpen(false)}><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" /></svg>
                <form>
                    <h6>
                        Add custom dish
                    </h6>
                    <input type="text" placeholder='Dish title' minLength={3} required />
                    <textarea rows="5" noresize placeholder='Dish description...' minLength={5} required></textarea>
                    <Button txt='Add custom dish' />
                </form>
            </div>
        </>
    )
}