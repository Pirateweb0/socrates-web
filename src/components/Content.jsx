import socrates from '../assets/socrates.jpg';
import socrates2 from '../assets/socrates2.jpg';
export function Content(){
    return (
        <div className="w-full bg-[#272829] flex justify-center pt-10 md:pt-32 flex-col">
            <div className='flex text-white gap-10 justify-center'>
                <div className='bg-red-400 flex justify-center w-1/3'>
                    <img src={socrates} alt="" className='bg-red-400'/>
                </div>
                <div className='w-96'>
                    <h2 className='text-xl text-justify font-bold'>PRIMEROS AÑOS</h2>
                    <p className='text-xl text-justify'>Nació en Atenas, donde vivió durante los dos últimos tercios del siglo V a.C.,​ la época más espléndida en la historia de su ciudad natal, y de toda la antigua Grecia. Fue hijo de Sofronisco, de profesión cantero, motivo por el que en su juventud lo llamaban Σωκράτης Σωφρονίσκου (Sōkrátēs Sōfronískou, ‘Sócrates hijo de Sofronisco’), y de Fenáreta, comadrona, emparentados con Arístides el Justo.​</p>
                    <br />
                    <h2 className='text-xl text-justify font-bold'>EDUCACIÓN</h2>
                    <p className='text-xl text-justify'>Según Plutarco, cuando Sócrates nació, su padre recibió del Oráculo de Delfos el consejo de dejar crecer a su hijo a su aire, sin oponerse a su voluntad ni reprimirle sus impulsos.​ No obstante, ni Jenofonte ni Platón mencionan esta intervención del oráculo, lo que hace pensar que pueda ser una tradición popular muy posterior.</p>
                </div>
            </div>
            <div className='w-full flex justify-center px-[22%] py-5 flex-col'>
                <h2 className='text-xl text-justify font-bold text-white'>ASPECTO</h2>
                <p className='w-full text-xl text-justify text-white'>Era de pequeña estatura, vientre prominente, ojos saltones y nariz exageradamente respingona. Su figura era motivo de chanza. Alcibíades lo comparó con los silenos, los seguidores ebrios y lascivos de Dioniso. </p>
                <br />
                <p className='w-full text-xl text-justify text-white'>Platón consideraba digno de ser rememorado el día en que le lavó los pies y le puso sandalias, y Antifón, el sofista, decía que ningún esclavo querría ser tratado como él se trataba a sí mismo. Llevaba siempre la misma capa, y era tremendamente austero en cuanto a comida y bebida.</p>
                <br />
                <p className='w-full text-xl text-justify text-white'>Desde muy joven, llamó la atención de los que lo rodeaban por la agudeza de sus razonamientos y su facilidad de palabra, además de la fina ironía con la que salpicaba sus tertulias con los ciudadanos jóvenes aristocráticos de Atenas, a quienes les preguntaba sobre su confianza en opiniones populares, aunque muy a menudo él no les ofrecía ninguna enseñanza.</p>
            </div>
            <div className='flex justify-center'>
                <div className='w-1/2 flex items-center gap-3 bg-black px-20 py-5 bg-opacity-50 rounded-2xl'>
                    <p className='text-5xl text-white font-serif'>"</p>
                    <p className='w-full text-2xl text-center text-white'>Sócrates ayudaba al discípulo a aflorar las ideas que éste guardaba en su interior, para analizarlas y saber si eran valiosas</p>
                    <p className='text-5xl text-white font-serif'>"</p>
                </div>
            </div>
            <div className='w-full flex justify-center py-10'>
                <img src={socrates2} alt="" className=''/>
            </div>
        </div>
    );
}