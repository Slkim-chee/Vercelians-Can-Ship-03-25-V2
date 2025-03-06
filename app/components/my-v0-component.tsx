"use client"

import { useState } from "react"
import { ShoppingBasketIcon as Basketball, GlobeIcon as GolfBall, Cat } from "lucide-react"
import { Button } from "@/components/ui/button"

function MyV0Component() {
  const [activeIndex, setActiveIndex] = useState(0)

  const items = [
    {
      icon: <GolfBall className="h-16 w-16" />,
      title: "Golf",
      description: "The perfect way to enjoy the outdoors and challenge yourself",
      color: "bg-green-100 dark:bg-green-900/20",
    },
    {
      icon: <Basketball className="h-16 w-16" />,
      title: "Basketball",
      description: "Fast-paced action and team spirit on the court",
      color: "bg-orange-100 dark:bg-orange-900/20",
    },
    {
      icon: <Cat className="h-16 w-16" />,
      title: "Cats",
      description: "Playful companions with personalities of their own",
      color: "bg-blue-100 dark:bg-blue-900/20",
    },
  ]

  const nextItem = () => {
    setActiveIndex((prev) => (prev + 1) % items.length)
  }

  const prevItem = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">My Favorite Things</h2>

      <div className="relative h-64 w-full overflow-hidden rounded-lg">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={`absolute inset-0 flex flex-col items-center justify-center p-6 ${item.color} rounded-lg transition-all duration-500 ease-in-out`}
            style={{
              opacity: index === activeIndex ? 1 : 0,
              transform: `translateX(${index === activeIndex ? 0 : index > activeIndex ? 100 : -100}px) scale(${index === activeIndex ? 1 : 0.8})`,
              zIndex: index === activeIndex ? 10 : 0,
            }}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-center text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 gap-2">
        <Button variant="outline" size="icon" onClick={prevItem} aria-label="Previous item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Button>

        <div className="flex gap-1 items-center">
          {items.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className={`w-2 h-2 rounded-full p-0 ${index === activeIndex ? "bg-primary" : "bg-muted"}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button variant="outline" size="icon" onClick={nextItem} aria-label="Next item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Button>
      </div>
    </div>
  )
}

export default MyV0Component
export { MyV0Component }

