// eslint-disable-next-line react-hooks/rules-of-hooks

"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface StoryModalProps {
  isOpen: boolean
  onClose: () => void
  story: {
    title: string
    category: string
    description: string
    fullStory: string
    image: string
    achievements: string[]
  }
}

export function StoryModal({ isOpen, onClose, story }: StoryModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-black border border-yellow-400/20 max-h-[90vh] overflow-y-auto no-scrollbar sm:overflow-y-auto sm:scrollbar-thin sm:scrollbar-thumb-yellow-400/20 sm:scrollbar-track-black">
        <DialogHeader className="sticky top-0 z-50 bg-black py-2">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-white">{story.title}</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-yellow-400/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>
        <div className="grid gap-6 py-4 md:grid-cols-2">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-4">
            <div className="inline-block rounded-full px-3 py-1 text-sm bg-yellow-400/10 text-yellow-400">
              {story.category}
            </div>
            <DialogDescription className="text-gray-400 text-base">
              {story.fullStory}
            </DialogDescription>
            <div className="space-y-2">
              <h4 className="font-bold text-white">Key Achievements:</h4>
              <ul className="space-y-2">
                {story.achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-400 flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 mt-2" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

