import DropdownItemType from "../../types/DropdownItemType";
import storeType from "../../types/store";

const getDropdownItems = (state: storeType) => {
let content: DropdownItemType[] = [];

switch (state.section) {
    case "logo":
        content = [
            {
                name: "About This MAC",
                available: true,
                link: 'asd',
            },
            {
                name: "divider",
                available: false,
                link: 'asd'
            },
            {
                name: "System Preferences",
                available: true,
                link: 'asd'
            },
            {
                name: "App Store",
                available: true,
                link: 'asd'
            },
            {
                name: "divider",
                available: false,
                link: 'asd'
            },
            {
                name: "Hide This Window",
                available: true,
                link: 'asd'
            },
            {
                name: "Hide Others",
                available: true,
                link: 'asd'
            },
            {
                name: "Show All",
                available: true,
                link: 'asd'
            },
            {
                name: "divider",
                available: false,
                link: 'asd'
            },
            {
                name: "Recent Times",
                available: true,
                link: 'asd'
            },
            {
                name: "divider",
                available: false,
                link: 'asd'
            },
            {
                name:   "Force Quit",
                available: true,
                link: 'asd'
            },
            {
                name: "divider",
                available: false,
                link: 'asd'
            },
            {
                name: "Sleep",
                available: true,
                link: 'asd'
            },
            {
                name: "Restart This Mac",
                available: true,
                link: 'asd'
            },
            {
                name: "Shut Down",
                available: true,
                link: 'asd'
            },
            {
                name: "divider",
                available: false,
                link: 'asd'
            },
            {
                name: "Lock Screen",
                available: true,
                link: 'asd'
            },
            {
                name: "Log Out",
                available: true,
                link: 'asd'
            },

        ];
        break;
    case "finder":
        content = [
            {
            name: "About Finder",
            available: true,
            link: 'asd'
            },
            {
              name: "divider",
              available: false, 
              link: 'asd' 
            },
            {
                name: "Preferences",
                available: true,
                link: 'asd'
            },
            {
                name: "divider",
                available: false,
                link: 'asd'
            },
            {
                name: "Empty Trash",
                available: true,  
                link: 'asd'
            },
            {
                name: "divider",
                available: false,
                link: 'asd'
            },
            {
                name: "Hide Finder",
                available: true,
                link: 'asd'
            },
            {
                name: "Hide Others",
                available: true,
                link: 'asd'
            },
            {
                name: "Show All",
                available: true,
                link: 'asd'
            }
        ];
        break;
    case "file":
        content =[
            {
                name: "$WIF $3.20 - dogwifhat / SOL...",
                available: true,
                link: 'https://dexscreener.com/solana/ep2ib6dydeeqd8mfe2ezhcxx3kp3k2elkkirfpm5eymx'
            },
            {
                name: "Ansem (@blknoiz06) / X",
                available: true,
                link: 'https://twitter.com/blknoiz06'

            },
            {
                name: "$boden $0.06 - SOL...",
                available: true,
                link: 'https://dexscreener.com/solana/6uybx1x8yucfj8ystpyizbyg7uqzaq2s46zwphumkjg5'
            },
            {
                name: "How to fight with jeeters",
                available: true,
                   link: 'https://www.google.com/search?q=how+to+fight+with+jeeters&oq=how+to+fight+with+jeeters&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORigATIHCAEQIRigATIHCAIQIRigAdIBCDQ3OTlqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8'
            },
            {
                name: "PornHub - Home",
                available: true,
                   link: 'https://www.pornhub.com/'
            },
            {
                name: "XVIDEOS.COM",
                available: true,
                   link: 'https://xvideos.com/'
            },
          
        ];
        break;




                    case "help":
                        content = [
                            {
                                name: "Send Finder FeedBack",
                                available: false,
                                link: 'asd'
                            },
                            {
                                name: "divider",
                                available: false,
                                link: 'asd'
                            },
                            {
                                name: "mecos Help",
                                available: false,
                                link: 'asd'
                            },
                        ];
                        break;
}                   
return content;

};

export default getDropdownItems;