const FoodieLogo = () => {
    return (
        <div className="flex items-center text-4xl font-bold text-orange-500">
            <span className="mr-2 text-3xl">🍽️</span>
            <span>Foodie</span>
        </div>
    );
};
const Headers = () => {
    return (
        <div className="flex justify-between p-[30px] shadow-[rgba(0,_0,_0,_0.1)_0px_4px_6px_-1px,_rgba(0,_0,_0,_0.06)_0px_2px_4px_-1px] sticky top-0 bg-white">
            <div >
                <FoodieLogo />
            </div>
            <div className="">
                <ul className="flex gap-[20px] mx-[20px] text-2xl">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Headers