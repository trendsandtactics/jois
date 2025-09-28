import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import SocalIcons from '@/components/ui/socalIcons';

const TopHeader = () => {
    return (
        <div
            id="top-header"
            // ✅ blue background (Tailwind's blue-600, adjust as needed)
            className="bg-blue-600 sm:block hidden"
        >
            <div className="container">
                <div className="flex lg:flex-row flex-col justify-between items-center gap-2 py-[13px]">
                    <div>
                        <ul className="flex gap-7.5">
                            {/* Phone */}
                            <li className="text-cream-foreground flex items-center gap-4">
                                <FaPhone />
                                <Link to="tel:9940455580">9940455580</Link>
                            </li>
                            {/* Email */}
                            <li className="text-cream-foreground flex items-center gap-4">
                                <FaEnvelope />
                                <Link to="mailto:contact@joischools.com">
                                    contact@joischools.com
                                </Link>
                            </li>
                            {/* Address */}
                            <li className="text-cream-foreground flex items-center gap-4">
                                <FaLocationDot />
                                <span>
                                    1/13, M R Radha St, Pudupakkam, Chengalpet-603103
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <SocalIcons className="text-xs" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
