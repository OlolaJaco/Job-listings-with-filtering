import backgroundImageDesktop from "../images/bg-header-desktop.svg"

import backgroundImageMobile from "../images/bg-header-mobile.svg"

const Header = () => {
    return (
        <header 
        className="">
            <div className=" bg-[#4f9999] py-1">
                {/* Desktop View */}
                <img src={backgroundImageDesktop} alt="" className=" hidden md:block w-full h-32" />

                {/* Mobile view */}
                <img src={backgroundImageMobile} alt="mobile background" className="block md:hidden w-full h-32" />
            </div>
        </header>
    )
}

export default Header;