import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import SocalIcons from '@/components/ui/socalIcons';

const TopHeader = () => {
    return (
        <div id="top-header" className="bg-destructive sm:block hidden">
            <div className="container">
                <div className="flex lg:flex-row flex-col justify-between items-center gap-2 py-[13px]">
                    <div>
                        <ul className="flex gap-7.5">
                            <li className='text-cream-foreground flex items-center gap-4'>
                                <FaPhone /> <Link to={"#"}>(629) 555-0129</Link>
                            </li>
                            <li className='text-cream-foreground flex items-center gap-4'>
                                <FaEnvelope /> <Link to={"#"}>info@example.com</Link>
                            </li>
                            <li className='text-cream-foreground flex items-center gap-4'>
                                <FaLocationDot /> <span>6391 Elgin St. Celina, 10299</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <SocalIcons className={"text-xs"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader