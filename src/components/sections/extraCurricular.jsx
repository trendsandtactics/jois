import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import jr from "@/assets/images/shapes/class-j.png"
import { extraCurricularData } from '@/lib/fackdata/extraCurricularData'
import RingBell from '@/assets/icons/ring-bell'
import CapDoll from '@/assets/icons/cap-doll'
import Doll from '@/assets/icons/doll'
import SectionName from '../ui/sectionName'
import Title from '../ui/title'
import SlideUp from '@/lib/animations/slideUp'

const ExtraCurricular = () => {
    return (
        <section className="lg:pt-15 lg:pb-15 pt-10 pb-10 relative">
            <div className="container">
                <div className="flex flex-col justify-center items-center">
                    <SectionName className={"text-primary-foreground"}>Extra Curricular</SectionName>
                    <Title size={"3.5xl"} className={"mt-2.5 text-center max-w-[514px]"}>Building a strong foundation through education</Title>
                </div>
                <div className="lg:pt-15 pt-10">
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7.5">
                        {
                            extraCurricularData.map(({ desc, id, src, title, icon }) => <Card key={id} id={id} desc={desc} title={title} src={src} icon={icon} />)
                        }

                    </div>
                </div>
            </div>
            <div className="absolute left-0 top-0 z-[-1] 2xl:w-auto w-96 hidden xl:block">
                <img src={jr} alt="img" />
            </div>
        </section>
    )
}

export default ExtraCurricular


const Card = ({ title, desc, src, icon, id }) => {
    const renderIcon = (icon) => {
        switch (icon) {
            case 'ring-bell':
                return <i className=" text-[#0A6375] opacity-50"><RingBell /></i>;
            case 'cap-doll':
                return <i className=" text-primary-foreground opacity-50"><CapDoll /></i>;
            case 'doll':
                return <i className=" text-green-foreground opacity-50"><Doll /></i>;

            default:
                break;
        }
    }

    return (
        <SlideUp delay={id}>
            <div className="border border-[#F2F2F2] bg-background rounded-[10px] p-7.5 group/card layer-card">
                <div className="relative overflow-hidden">
                    <img src={src} alt="Tutoring Services" className="w-full" />
                    <div className="absolute left-0 top-full w-full h-full flex">
                        <div className={`image-layer-hover`} style={{ backgroundImage: `url(${src})` }}></div>
                        <div className={`image-layer-hover`} style={{ backgroundImage: `url(${src})` }}></div>
                        <div className={`image-layer-hover`} style={{ backgroundImage: `url(${src})` }}></div>
                        <div className={`image-layer-hover`} style={{ backgroundImage: `url(${src})` }}></div>
                    </div>
                </div>
                <div className="pt-7.5">
                    <h4><Link to="/service-details" className="lg:text-2xl text-xl font-semibold lg:leading-[140%] group-hover/card:text-destructive-foreground transition-all duration-500">{title}</Link></h4>
                    <p className="pt-2">{desc}</p>
                    <div className="lg:pt-7.5 pt-5 flex justify-between items-center">
                        <Link to="/service-details" className="flex gap-2 items-center">
                            <span className="group-hover/card:text-destructive-foreground transition-all duration-500">learn more</span>
                            <FaArrowRight className='text-destructive-foreground' />
                        </Link>
                        {renderIcon(icon)}
                    </div>
                </div>
            </div>
        </SlideUp>
    )
}