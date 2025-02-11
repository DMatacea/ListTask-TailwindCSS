function Header() {
    return(
        <header className="h-16 flex flex-row bg-white shadow-[inset_0px_-1px_0px_0px_rgba(229,229,234,1.00)]">
          <div className=" w-[55vw] justify-center items-center flex border border-zinc-200">
            <p className="text-[#2c2c2e] text-sm font-semibold font-sans leading-[18px]">Your list task</p>
          </div>
          <div className=" w-[45vw] justify-center items-center flex">
            <p className="text-[#2c2c2e] text-sm font-semibold font-sans leading-[18px]">Virtual Assistant</p>
          </div>
        </header>
    )
}

export { Header }