import ig from '../assets/ig.png'
import inIcon from '../assets/in.png'

export function Footer(){
    return (
        <div className="w-full bg-[#61677A] pt-5 pb-14 flex flex-col md:flex-row justify-evenly text-white rounded-t-3xl">
            <div>
                <p className="text-white font-bold text-center md:text-left">REFERENCIAS</p>
                <div className='flex gap-2 my-3 box-border justify-center md:justify-start'>
                    <a href="https://es.wikipedia.org/wiki/S%C3%B3crates#:~:text=S%C3%B3crates%20(en%20griego%20antiguo%3A%20%CE%A3%CF%89%CE%BA%CF%81%CE%AC%CF%84%CE%B7%CF%82,occidental%20como%20de%20la%20universal." target='_blank'><img src="https://es.wikipedia.org/static/favicon/wikipedia.ico" alt="" className='w-6'/></a>
                    <a href="https://es.wikipedia.org/wiki/S%C3%B3crates#:~:text=S%C3%B3crates%20(en%20griego%20antiguo%3A%20%CE%A3%CF%89%CE%BA%CF%81%CE%AC%CF%84%CE%B7%CF%82,occidental%20como%20de%20la%20universal." target='_blank'>Wikipedia</a>
                </div>
                <div className='flex gap-2 my-3 box-border justify-center md:justify-start'>
                    <a href="https://historia.nationalgeographic.com.es/a/socrates-maestro-grecia_13530" target='_blank'><img src="https://historia.nationalgeographic.com.es/favicon.ico" alt="" className='w-6 bg-white rounded p-1'/></a>
                    <a href="https://historia.nationalgeographic.com.es/a/socrates-maestro-grecia_13530" target='_blank'>NatGeo</a>
                </div>
            </div>
            <div>
                <p className="text-white font-bold text-center md:text-left">SÍGUENOS</p>
                <div className='flex gap-2 my-3 box-border justify-center md:justify-start'>
                    <a href="" target='_blank'><img src={ig} alt="" className='w-7'/></a>
                    <a href="" target='_blank'>Instagram</a>
                </div>
                <div className='flex gap-2 my-3 box-border justify-center md:justify-start'>
                    <a href="" target='_blank'><img src={inIcon} alt="" className='w-7'/></a>
                    <a href="" target='_blank'>Linkedin</a>
                </div>
            </div>
            <div>
                <p className="text-white font-bold text-center md:text-left">FAMILIA</p>
                <div className='flex gap-3 flex-col text-center md:text-left'>
                    <ul>
                        <li><a href="https://es.wikipedia.org/wiki/Lamprocles" target='_blank'>Lamprocles</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Menexenus" target='_blank'>Menexenus</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Sophroniscus" target='_blank'>Sophroniscus</a></li>
                    </ul>
                    <ul>
                        <li><a href="https://es.wikipedia.org/wiki/Sofronisco" target='_blank'>Sofronisco</a></li>
                        <li><a href="https://es.wikipedia.org/wiki/Fen%C3%A1reta" target='_blank'>Fenáreta</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}