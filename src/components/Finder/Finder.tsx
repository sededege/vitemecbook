import { useContext, useEffect, useState } from 'react';
import { store } from '../../App';
import './Finder.scss';
import Draggable from 'react-draggable';

import WindowNav from '../WindowNav/WindowNav';
import WindowBody from '../WindowBody/WindowBody';


const Finder = () => {
    const [ state, _dispatch ] = useContext(store);
    const [ isClose, setIsClose ] = useState(true);
    
    const finderHandle = "finder-handle";

    useEffect(() => {
        setIsClose((prev) => !prev);
    },[state.finderCloseOpen])

    return (
        <Draggable handle={`#${finderHandle}`}>
            <div
                className={`finder-handle 
                    ${isClose ? 'finder-close' : ''}           
                `}
                id='finder-window'
                // onClick={() => {}}
            >
                
                <WindowNav
                    handleName={finderHandle} 
                    name='Spotify' 
                    isClose={isClose} 
                    setIsClose={setIsClose}
                />
                <WindowBody/>
            </div>
        </Draggable>
    )
}

export default Finder