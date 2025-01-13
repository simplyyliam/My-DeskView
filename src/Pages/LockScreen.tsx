

import { useEffect, useState } from "react";
import { Link,} from "react-router-dom";


export function LockScreen () {
    
    const [time, setTime] = useState(new Date())

    

    useEffect(() => {
        const IntervalID = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(IntervalID)
        }
    }, ([])) 


    function GetTime () {
        const hours = time.getHours()
        const minutes =  time.getMinutes()

        return `${FixTime(hours)}:${FixTime(minutes)}`
    }

    function FixTime (number: number) {
            if (number < 10) {
                return '0' + number
            } else {
                return number
            }
    }



    function GetDate () {
        
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const day = days[new Date().getDay()];

        const date = time.getDate()
        
        return `${day}, ${date}`
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-[url('/assets/Totoro.png')] bg-center bg-cover">
            <div className="w-screen h-screen bg-[#ffffff2] backdrop-blur-[5px] flex flex-col justify-center items-center">
                <span className="text-[120px] text-[#ffffff80] font-medium "> {GetTime()} </span>
                <h1 className="text-[#ffffff] font-medium text-[23px] absolute bottom-[14em]"> {GetDate()}</h1>
                <Link className="py-3 px-6 rounded-full hover:bg-[#ffffff25] transition hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 text-white font-medium absolute bottom-10" to='/Signin' >Sigin</Link>
            </div>
        </div>
    )
}