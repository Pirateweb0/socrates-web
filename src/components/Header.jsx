import image from '../assets/decoracion.png'
import ig from '../assets/ig.png'
import inIcon from '../assets/in.png'
export function Header(){
    return (
        <div className="w-full bg-[#61677A] flex items-center md:fixed justify-center gap-5 p-3 flex-col md:flex-row rounded-b-3xl">
            <div className="">
                <img src={image} alt="" className='h-20'/>
            </div>
            <div className="flex gap-5 flex-col md:flex-row justify-center">
                <div className='flex justify-center items-center'>
                    <a href="" target='_blank'><img src={ig} alt="ig" className='w-10 h-10'/></a>
                </div>
                <div className='flex items-center justify-center text-center flex-col'>
                    <p className="text-white text-2xl">Sócrates de Atenas</p>
                    <p className="text-white text-xl">470 a.C. - 399 a.C</p>
                </div>
                <div className='flex justify-center items-center'>
                <a href="" target='_blank'><img src={inIcon} alt="linkedin" className='w-10 h-10'/></a>
                </div>
            </div>
            <div className="">
                <img src={image} alt="" className='h-20'/>
            </div>
        </div>
    );
}