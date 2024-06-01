import Image from 'next/image'
import { EllipsisVertical } from 'lucide-react'

import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { info } from '@/constants'
import { Button } from './ui/button'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'

export function MainCard() {
  const { name, portfolioTitle, skills, socialLinks } = info
  return (
    <Card className="z-10 max-w-[550px] w-full max-h-[350px] h-full border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl text-white/90">
      <CardHeader className="flex-row items-center justify-between">
        <span className="text-lg">{name}</span>

        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger>
              <EllipsisVertical />
            </TooltipTrigger>

            <TooltipContent
              side="bottom"
              className="bg-white/10 border-white/10 text-white"
            >
              <p>{portfolioTitle}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>

      <Separator className="bg-white/10 mb-5" />

      <CardContent className="grid grid-cols-2 gap-4 mx-8">
        <div className="left">
          <Image
            src="https://github.com/gafanhotoalexandre.png"
            width={256}
            height={256}
            alt="Foto de perfil"
            className="rounded-full p-1 border-2 border-white/75 border-dashed"
          />
        </div>

        <div className="right mt-5">
          <label>Skills:</label>

          <div>
            <ul className="list-[circle] ps-8 text-sm space-y-1">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="mt-2 flex gap-1">
            {socialLinks.map((social) => (
              <Link
                href={social.link}
                key={social.link}
                className="flex justify-center items-center rounded-full p-2 hover:bg-white/10 group transition-all"
                target="_blank"
              >
                <social.icon className=" group-hover:scale-110 transition" />
              </Link>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-center">
        <Button size={'lg'} variant={'outline'} className="-translate-y-1/3">
          Hire
        </Button>
      </CardFooter>
    </Card>
  )
}
