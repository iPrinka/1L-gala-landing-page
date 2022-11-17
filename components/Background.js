import Image from 'next/image'

const Background = (props) => (
  <div>
    <div className="fixed h-screen w-screen overflow-hidden -z-10">
      <Image
        alt="One League"
        src={props.img}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  </div>
)

export default Background