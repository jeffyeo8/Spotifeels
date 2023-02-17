import * as C from './styles';
import { Home, Search } from '../../svgs/index';

type Props = {
    setGenre: (e: string) => void;
    setIsSearch:(e: boolean) => void;
    setIsFull:(e: boolean) => void;
    isSearch: boolean;
    isSidebar: boolean;
    setIsSidebar: (e: boolean) => void;  
}

export const Sidebar = ({ setGenre, setIsSearch, setIsFull, isSearch, isSidebar, setIsSidebar }: Props) => {
    return (
        <C.Container isSidebar={isSidebar}>   
            <div className='inicialSearch'>
                <div 
                onClick={() => (setGenre(''), setIsSearch(false), setIsFull(false), setIsSidebar(false))} 
                className='iniSearDivs'>
                    <p><Home/></p> Home Page
                </div>

                <div 
                onClick={() => (setIsSearch(!isSearch), setIsSidebar(false))}className='iniSearDivs'>
                    <p><Search /></p> Search
                </div>
            </div>

            <div className='genres'>
                <h2>Playlists</h2>
                <div 
                onClick={() => (setGenre('Beats') ,setIsSidebar(false), 
                setIsSearch(false))}>
                    Chill
                </div>
                <div 
                onClick={() => (setGenre('Ambient') ,setIsSidebar(false), setIsSearch(false))}>
                    Sad
                </div>
                <div 
                onClick={() => (setGenre('Classic') ,setIsSidebar(false), setIsSearch(false))}>
                    Happy
                </div>
                <div 
                onClick={() => (setGenre('Eletronic') ,setIsSidebar(false), setIsSearch(false))}>
                    Hype
                </div>
            </div>
        </C.Container>
    )
} 