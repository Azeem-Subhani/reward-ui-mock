import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from 'lucide-react'
import { Reward, User, currentUser } from "@/lib/utils"

type GiveRewardModalProps = {
  onAddReward: (reward: Reward) => void
}

export function GiveRewardModal({ onAddReward }: GiveRewardModalProps) {
  const [recipient, setRecipient] = useState("")
  const [amount, setAmount] = useState("")
  const [message, setMessage] = useState("")
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newReward: Reward = {
      id: Date.now().toString(),
      from: currentUser,
      to: {
        id: Date.now().toString(),
        name: recipient,
        avatar: "/placeholder.svg?height=40&width=40"
      },
      amount: parseInt(amount),
      message,
      timestamp: "Just now"
    }
    onAddReward(newReward)
    setOpen(false)
    setRecipient("")
    setAmount("")
    setMessage("")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" className="fixed bottom-6 right-6 h-9 w-9 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
          <Plus className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white rounded-xl">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-orange-600 dark:text-orange-400">Give a Reward</DialogTitle>
            <DialogDescription className="text-gray-500 dark:text-gray-400">
              Recognize a colleague for their great work by sending them a reward.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="recipient" className="text-gray-700 dark:text-gray-300">Recipient</Label>
              <Input
                id="recipient"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="Search for a colleague..."
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="amount" className="text-gray-700 dark:text-gray-300">Amount</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a message..."
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-orange-500 text-white transition-all hover:bg-orange-700 rounded-xl">
              Send Reward
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

