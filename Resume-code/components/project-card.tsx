"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <Link href={link}>
      <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 h-full bg-gray-800 border-gray-700">
        <div className="relative h-48 w-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 text-white">{title}</h3>
          <p className="text-gray-300 text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-300">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
