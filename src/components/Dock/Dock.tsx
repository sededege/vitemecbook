import React, { useContext } from 'react';
import { store } from '../../App';
import './Dock.scss';
import {
   
    pump,
    telegram,

    dex,
    spotify,
    vscode,
    x
} from '../../resources';



const Dock = () => {
    const [state, dispatch] = useContext(store);
    // const [ isDock, setIsDock ] = useState(false);


 
 
    const openVSCode = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({ type: 'vscode/OPEN' });

    };

    // const openFinder = (e: React.MouseEvent<HTMLDivElement>) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     const finderWindow = document.getElementById('finder-window');
    //     if(finderWindow && finderWindow.classList.contains('finder-close') ){
    //         finderWindow.classList.remove('finder-close');
    //     }
    //     console.log(finderWindow);
    // };
    const openFinder = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        dispatch({ type: 'finder/OPEN' });
    };
    // useEffect(() => {
    //     setIsDock((prev) => !prev)
    // }, [state.weatherWindow.weatherStretch]);
    return (
        <>
            <div className={`dock`}>
                <div
                    className={`dock-item ${state.dockItem === 0 ? 'hovered' : ""}
                ${state.dockItem === 1 ? 'distance-1'
                            : state.dockItem === 2 ? 'distance-2'
                                : ""
                        }`}
                    id='0'
                // onMouseEnter = {() => {}}
                // onMouseLeave = {() => {}}
/*                 onClick={openFinder}
 */            >

                        <div className='tool-tip'>Telegram</div>
                        <img
                        onClick={() => window.location.href = 'https://t.me/mecbekportal'}
                            src={telegram}
                            alt="Telegram"
                            className='dock-icon finder'
                        />
               
                    <div className='point' />

                </div>

                <div
                    className={`dock-item ${state.dockItem === 0 ? 'hovered' : ""}
                ${state.dockItem === 1 ? 'distance-1'
                            : state.dockItem === 2 ? 'distance-2'
                                : state.dockItem === 3 ? 'distance-3'
                                    : ""
                        }`}
                    id='5'
                // onMouseEnter = {() => {}}
                // onMouseLeave = {() => {}}
                onClick={() => window.location.href = 'https://twitter.com/mecbeksol'}

                >
                    <div className='tool-tip'>x</div>
                    <img
                        src={x}
                        alt="x"
                        className='dock-icon calculator'
                    />
                </div>

                <div
                    className={`dock-item ${state.dockItem === 0 ? 'hovered' : ""}
                ${state.dockItem === 1 ? 'distance-1'
                            : state.dockItem === 2 ? 'distance-2'
                                : state.dockItem === 3 ? 'distance-3'
                                    : ""
                        }`}
                    id='8'
                // onMouseEnter = {() => {}}
                // onMouseLeave = {() => {}}
                onClick={openFinder}

                >
                    <div className='tool-tip'>Spotify</div>
                    <img
                        src={spotify}
                        alt="Spotify"
                        className='dock-icon calculator'

                    />
                </div>
                <div
                    className={`dock-item ${state.dockItem === 0 ? 'hovered' : ""}
                ${state.dockItem === 1 ? 'distance-1'
                            : state.dockItem === 2 ? 'distance-2'
                                : state.dockItem === 3 ? 'distance-3'
                                    : ""
                        }`}
                    id='9'
                    // onMouseEnter = {() => {}}
                    // onMouseLeave = {() => {}}
/*                     onClick={openVSCode}
 */
/*                     onClick={() => window.location.href = 'https://twitter.com/mecbeksol'}
 */
                >
                    <div className='tool-tip'>Pump Fun</div>
                    <img
                        src={pump}
                        alt="Pump Fun"
                        className='dock-icon calculator'
                    />
                </div>
                <div
                    className={`dock-item ${state.dockItem === 0 ? 'hovered' : ""}
                ${state.dockItem === 1 ? 'distance-1'
                            : state.dockItem === 2 ? 'distance-2'
                                : state.dockItem === 3 ? 'distance-3'
                                    : ""
                        }`}
                    id='10'
                // onMouseEnter = {() => {}}
                // onMouseLeave = {() => {}}
/*                 onClick={openWeather}
 */            >
                    <div className='tool-tip'>Dex Screener</div>
                    <img
                        src={dex}
                        alt="Dexscreener"
                        className='dock-icon calculator'
                    />
                </div>
                <div
                    className={`dock-item ${state.dockItem === 0 ? 'hovered' : ""}
                ${state.dockItem === 1 ? 'distance-1'
                            : state.dockItem === 2 ? 'distance-2'
                                : state.dockItem === 3 ? 'distance-3'
                                    : ""
                        }`}
                    id='9'
                    // onMouseEnter = {() => {}}
                    // onMouseLeave = {() => {}}
                    onClick={openVSCode}
/*                     onClick={() => window.location.href = 'https://twitter.com/mecbeksol'}
 */
                >
                    <div className='tool-tip'>VS Code</div>
                    <img
                        src={vscode}
                        alt="VsCode"
                        className='dock-icon calculator'
                    />
                </div>
            </div>
        </>
    )
}

export default Dock