import { CardComponentProps } from '@/Interfaces/interface'
import { IconContext } from 'react-icons';
import Link from 'next/link'
import React from 'react'

const CardComponent: React.FC<CardComponentProps> = (props) => {

    const icons = props.icon

    return (
        <div className="card" data-color="brown">
            <div className='absolute bg-opacity-20 opacity-0 transition-opacity hover:opacity-100 top-0 z-20 bg-black h-full w-full px-4 py-4 flex flex-col justify-between card-overlay'>
                <div>
                    <h3 className='text-3xl text-center text-white'>{props.title}</h3>
                    <div className='grid grid-cols-2 justify-center items-center text-center text-white'>
                        <Link target='_blank' className='border-white link-left-border' href={props.github}>GitHub</Link>
                        <Link target='_blank' className='border-white link-right-border' href={props.vercel}>Vercel</Link>
                    </div>
                </div>
                <IconContext.Provider value={{ size: '50', color: '#FFFFFF' }}>
                    <div className='grid grid-cols-3 justify-center items-center gap-y-4'>
                        {icons.map((iconData, index) => (
                            <div key={index} className='text-center text-white'>
                                <div className='flex items-center justify-center'>
                                    {iconData.icon}
                                </div>
                                <p>{iconData.iconName}</p>
                            </div>
                        ))}
                    </div>
                </IconContext.Provider>
            </div>

            <img className="card-front-image card-image absolute" src={props.src}></img>
            <div className="card-faders">
                <img className="card-fader card-image" src={props.src} />
                <img className="card-fader card-image" src={props.src} />
                <img className="card-fader card-image" src={props.src} />
                <img className="card-fader card-image" src={props.src} />
                <img className="card-fader card-image" src={props.src} />
                <img className="card-fader card-image" src={props.src} />
                <img className="card-fader card-image" src={props.src} />
                <img className="card-fader card-image" src={props.src} />
            </div>
        </div>
    )
}

export default CardComponent