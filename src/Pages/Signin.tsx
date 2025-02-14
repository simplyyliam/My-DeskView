import { FormEvent, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export function SignIn () {

    const [hint, setHint] = useState<string | null>(null)

    const PasswordRef = useRef<HTMLInputElement>(null)

    const Navigate = useNavigate()

    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault() 

      const Password = 'hello world'

      const value = PasswordRef.current?.value

      if (value === Password) {
          Navigate('/Desktop')
      } else {
          setHint('Hint: The password is the first two words every developer learns.')
      }
    }
    return (
        <div className="flex justify-center items-center h-screen w-screen bg-[url('/assets/Totoro.png')] bg-center bg-cover">
        <div className="w-screen h-screen bg-[#ffffff2] backdrop-blur-[5px] flex flex-col justify-center items-center">

            {/* <div className="w-[224px] h-[64px] bg-[#ffffff25] absolute top-5 rounded-2xl">
              music player
            </div> */}
            <div className=" flex flex-col justify-center items-center gap-4">
              <div className="w-[120px] h-[120px] bg-[#ffffff15] rounded-full flex justify-center items-center ">
                <div className="w-[112px] h-[110px] bg-[url('/assets/pfp.png')] bg-center bg-cover rounded-full "></div>
              </div>

              <h1 className="text-white  text-[14px]">Welcome Simplyliam</h1>
              <form onSubmit={onSubmit} className="flex flex-col items-center">
                <input ref={PasswordRef} type="text" className="py-3 h-[38px] w-[218px] focus:outline-none rounded-[10px] px-[10px]  bg-[#ffffff20] text-white text-sm  "placeholder="Password" />
                <h1 className="absolute bottom-[17em] text-white"> {hint} </h1>
              </form>
            </div>

            <div className="absolute bottom-5 flex gap-3">
              <button className="w-10 h-10 hover:bg-[#ffffff25] transition hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 flex justify-center items-center rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
</svg>

              </button>
              <button className="w-10 h-10 hover:bg-[#ffffff25] transition hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 flex justify-center items-center rounded-xl">
              <svg width="32" height="32" viewBox="0 0 24 24" stroke="#ffffff" fill="none" stroke-linejoin="round" stroke-width="1.125" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg"><path d="M19 15V9M19 15C19 16.1046 18.1046 17 17 17L5 17C3.89543 17 3 16.1046 3 15L3 9C3 7.89543 3.89543 7 5 7L17 7C18.1046 7 19 7.89543 19 9M19 15C20.1046 15 21 14.1046 21 13V11C21 9.89543 20.1046 9 19 9"></path></svg>
              </button>

            </div>
        </div>
    </div>
    )
}