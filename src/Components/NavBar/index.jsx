import { NavLink } from 'react-router-dom';
import { getDate } from '../../Utils/index.jsx'


function NavBar() {
    const activeStyle = 'grow shrink w-full basis-0 text-center text-[#088395] text-sm font-medium font-sans uppercase leading-normal tracking-wide'
    const desactiveStyle = 'text-center w-full text-black/45 text-sm font-semibold font-sans uppercase leading-normal tracking-wide'

    const activeStyleDiv = 'self-stretch w-full mt-2 h-[0px] border-2 border-[#088395]'

    const NavLinkWithDiv = ({ to, children }) => (
        <NavLink to={to} className={({ isActive }) => (isActive ? activeStyle : desactiveStyle)}>
          {({ isActive }) => (
            <>
              {children}
              <div className={isActive ? activeStyleDiv : 'hidden'}></div>
            </>
          )}
        </NavLink>
      );
      

    return(
        <>
            <nav className="h-[44px] w-[100vw] bg-white flex flex-row justify-start items-start ">
                <div className="w-[55vw] h-full flex flex-row justify-start items-start border border-t-0 border-l-zinc-500">
                    <div className="grow shrink basis-0 flex flex-col justify-center items-center px-2 py-[11px]">
                        <NavLinkWithDiv to='/'>
                            ALL
                        </NavLinkWithDiv>
                    </div>
                    <div className="grow shrink basis-0 flex flex-col justify-center items-center px-2 py-[11px]">
                        <NavLinkWithDiv to='/Doing'>
                            DOING
                        </NavLinkWithDiv>
                    </div>
                    <div className="grow shrink basis-0 flex flex-col justify-center items-center px-2 py-[11px]">
                        <NavLinkWithDiv to='/Ending'>
                            ENDING
                        </NavLinkWithDiv>
                    </div>
                </div>
                <div className="w-[45vW] h-full grid place-content-center">
                    <p className="text-[#666668] text-xs font-normal font-['Eloquia Text']">{getDate()}</p>
                </div>
            </nav>
        </>
    )
}

export { NavBar }