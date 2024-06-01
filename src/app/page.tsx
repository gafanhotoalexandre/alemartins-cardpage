import Image from 'next/image'

import { MainCard } from '@/components/Card'

export default function Home() {
  return (
    <main>
      <MainCard />
      <Image
        src={
          // 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg'

          // 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg'

          'https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg'
        }
        fill
        alt="Kotlin"
        className="z-0 blur-md"
      />
    </main>
  )
}
