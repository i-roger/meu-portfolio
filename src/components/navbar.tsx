export default function navbar() {
    return(
        <nav className='sticky z-20 top-0 bg-zinc-800 p-5 flex justify-around'>
            <div className="max-sm:hidden">
            <svg width="60" viewBox="0 0 332 187" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M31.3636 0.818176H87.0909L115.273 116.091H117.455L183.818 0.818176H239.545L208.636 187H164.818L183.818 72.6364H182.273L118.818 185.818H90.9091L65.0909 
 72H63.5455L44.2727 187H0.454544L31.3636 0.818176Z M165.455 187L196.364 0.818176H273.273C287.212 0.818176 298.848 3.33333 308.182 8.36363C317.515 13.3333 324.152 
 20.4848 328.091 29.8182C332.03 39.0909 332.939 50.0909 330.818 62.8182C328.758 75.6667 324.152 86.6061 317 95.6364C309.909 104.606 300.758 111.455 289.545 
 116.182C278.394 120.909 265.727 123.273 251.545 123.273H202.909L208.909 87.8182H249.182C255.909 87.8182 261.727 86.9394 266.636 85.1818C271.545 83.3636 275.455 
 80.6364 278.364 77C281.333 73.303 283.303 68.5758 284.273 62.8182C285.182 57.0606 284.758 52.303 283 48.5455C281.303 44.7273 278.303 41.8788 274 40C269.758 38.0606 
            264.303 37.0909 257.636 37.0909H235.455L210.455 187H165.455ZM284.364 101.909L316.636 187H267.545L236.273 101.909H284.364Z"></path></svg>
            </div>
            <div className="flex gap-5">
            <a className='hover:scale-110 duration-500 text-zinc-50 font-semibold text-2xl' href="#sobremim">Home</a>
            <a className='hover:scale-110 duration-500 text-zinc-50 font-semibold text-2xl' href="#sobremim">Sobre</a>
            <a className='hover:scale-110 duration-500 text-zinc-50 font-semibold text-2xl' href="#habilidades">Skills</a>
            </div>
        </nav>
    )
}