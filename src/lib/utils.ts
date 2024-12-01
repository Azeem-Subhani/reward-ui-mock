import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type Reward = {
  id: string
  from: User
  to: User
  amount: number
  message: string
  timestamp: string
}

export type User = {
  id: string
  name: string
  avatar: string
}

export const currentUser: User = {
  id: "1",
  name: "Jane Doe",
  avatar: "/placeholder.svg?height=40&width=40"
}

export async function getRewards() {
  return new Promise((resolve) => {
    resolve([
      {
        "id": "1",
        "from": {
          "id": "2",
          "name": "David Greene",
          "avatar": "/placeholder.svg?height=40&width=40"
        },
        "to": {
          "id": "3",
          "name": "John Chen",
          "avatar": "/placeholder.svg?height=40&width=40"
        },
        "amount": 50,
        "message": "Big thanks for your help in resolving the outage today!!",
        "timestamp": "2 hrs ago"
      },
      {
        "id": "2",
        "from": {
          "id": "4",
          "name": "Alex Brown",
          "avatar": "/placeholder.svg?height=40&width=40"
        },
        "to": {
          "id": "5",
          "name": "Rachel Kumar",
          "avatar": "/placeholder.svg?height=40&width=40"
        },
        "amount": 25,
        "message": "Thanks for your help in creating the product overview deck. Your help to showcase those scenarios really helped in closing the loop on the story",
        "timestamp": "Feb 1, 2024"
      },
      {
        "id": "3",
        "from": {
          "id": "6",
          "name": "Emily Watson",
          "avatar": "/placeholder.svg?height=40&width=40"
        },
        "to": {
          "id": "7",
          "name": "Michael Lee",
          "avatar": "/placeholder.svg?height=40&width=40"
        },
        "amount": 75,
        "message": "Outstanding work on the client presentation. Your insights were crucial to winning the deal!",
        "timestamp": "1 day ago"
      },
      {
        "id": "4",
        "from": {
          "id": "8",
          "name": "Sophia Rodriguez",
          "avatar": "/placeholder.svg?height=40&width=40"
        },
        "to": {
          "id": "9",
          "name": "Daniel Kim",
          "avatar": "/placeholder.svg?height=40&width=40"
        },
        "amount": 40,
        "message": "Thank you for stepping up and covering my shift last minute. You're a lifesaver!",
        "timestamp": "3 days ago"
      },
      {
        "id": "5",
        "from": {
          "id": "10",
          "name": "Olivia Taylor",
          "avatar": "/placeholder.svg?height=40&width=40"
        },
        "to": {
          "id": "1",
          "name": "Jane Doe",
          "avatar": "/placeholder.svg?height=40&width=40"
        },
        "amount": 60,
        "message": "Your mentorship has been invaluable. Thanks for always being there to guide the team!",
        "timestamp": "1 week ago"
      }
    ]);
  });
}

