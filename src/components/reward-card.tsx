import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import type { Reward } from "@/lib/utils"
import { ArrowRight, User } from 'lucide-react'

export function RewardCard({ reward }: { reward: Reward }) {
  return (
    <Card className="overflow-hidden bg-white border-2 border-gray-300 backdrop-blur-sm transition-all hover:shadow-lg dark:bg-gray-800/80">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12 ring-2 ring-orange-500 ring-offset-2">
            <AvatarImage src={reward.from.avatar} alt={reward.from.name} />
            <AvatarFallback><User className="h-6 w-6 text-orange-500" /></AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-medium text-orange-600 dark:text-orange-400">{reward.from.name}</span>
              <ArrowRight className="mx-2 inline h-4 w-4 text-gray-400" />
              <span className="font-medium text-orange-600 dark:text-orange-400">{reward.to.name}</span>
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">{reward.timestamp}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{reward.message}</p>
            <div className="mt-4 inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800 dark:bg-orange-900 dark:text-orange-200">
              ${reward.amount}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

