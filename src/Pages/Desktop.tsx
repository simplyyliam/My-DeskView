import { Link } from "react-router-dom";


export function Desktop () {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <h1>Welcome To My Desktop</h1>
            <Link className="py-3 px-6 rounded-full hover:bg-[#01010125] transition hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 text-black font-medium absolute bottom-10" to='/' >Sig out</Link>
        </div>

    )
}