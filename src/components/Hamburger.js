import './hamburger.css';
import { Routes, Route } from 'react-router-dom';

const Hamburger = () => {
    const btnHamburger = () => {
        document.getElementById('hamburger-btn').classList.toggle('hamburger-close');
    }
    return(<>
            <Routes>
          <Route path={routes.ROOT} exact element={<></>}/>
          <Route path={routes.ROOT} element={<></>}/>
        </Routes>
        <div name="toggleMenu" onClick={(e) => {toggleMenu(e); btnHamburger(); }}>
     <nav id="hamburger-btn" className="">
	<section></section>
	<section></section>	
     </nav>
 </div>
 </>
    );
};

export default Hamburger