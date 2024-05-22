export default function Header(){
    return (
        <>
            <div className="max-w-[60vw] h-6 flex justify-between items-center m-auto my-5">
                <h2 className="text-2xl font-bold">Where in the world</h2>
                <div className="flex items-center gap-5 relative right-20">
                    <i className="ri-moon-line"></i>
                    <span className="text-xl ">Dark mode</span>
                </div>
            </div>
        </>
    )
}