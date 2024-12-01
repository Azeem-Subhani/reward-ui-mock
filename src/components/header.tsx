import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { currentUser } from "@/lib/utils"
import { Gift, Wallet, User } from 'lucide-react'

export function Header() {
  return (
    <div className="border-b bg-white/50 backdrop-blur-lg dark:bg-gray-800/50">
      <div className="container flex items-center gap-6 py-4">
        <Avatar className="h-12 w-12 ring-2 ring-orange-500 ring-offset-2">
          <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
          <AvatarFallback><User className="h-6 w-6 text-orange-500" /></AvatarFallback>
        </Avatar>
        <div className="flex gap-8">
          <Card className="border-2 border-gray-200">
            <CardContent className="flex items-center gap-3 p-4">
              <Wallet className="h-5 w-5 text-orange-500" />
              <div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">My Rewards</div>
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">$250</div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-2 border-gray-200">
            <CardContent className="flex items-center gap-3 p-4">
              <Gift className="h-5 w-5 text-orange-500" />
              <div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Give</div>
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">$100</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

