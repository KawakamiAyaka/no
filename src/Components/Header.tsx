import Image from 'next/image'
import Link from 'next/link';

export default function Header(){
    return(
        <>
            <header style={{
                width:'100%',
                height:'10vh',
                boxShadow:'0px 0px 10px -5px #777777'
            }}>
                <Image
                src="LearnestLogo.svg"
                width={270}
                height={50}
                alt="learnestのロゴ"
                />
            </header>
        </>
    )
}