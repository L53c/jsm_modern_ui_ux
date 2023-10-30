import Image from 'next/image'

interface Props {
  title: string
  icon: string
  description: string
}

const FeatureItem = ({ title, icon, description }: Props) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50 ">
        <Image src={icon} alt="map" width={28} height={28} className="" />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-15 mt-5 bg-white/30 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default FeatureItem
