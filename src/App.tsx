import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { RewardCard } from "@/components/reward-card";
import { GiveRewardModal } from "@/components/give-reward-modal";
import { getRewards, Reward, currentUser } from "@/lib/utils";
import { motion } from "framer-motion";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import "./App.css";

export default function App() {
  const [rewards, setRewards] = useState<Reward[]>([]);

  useEffect(() => {
    getRewards().then(setRewards).catch(console.error);
  }, []);

  const handleAddReward = (newReward: Reward) => {
    setRewards((prevRewards) => [newReward, ...prevRewards]);
  };

  // Filter rewards for the current user
  const myRewards = rewards.filter(reward => reward.from.id === currentUser.id);

  return (
    <div className="p-20 bg-gradient-to-br flex justify-center items-center from-orange-500 to-yellow-600">
      <div className="min-h-screen w-1/2 px-10 py-4 bg-white rounded-xl dark:from-gray-900 dark:to-gray-800">
        <Header />
        <div className="border-b bg-white/30 backdrop-blur-sm dark:bg-gray-800/30">
          <div className="container py-2">
            <TooltipProvider>
              <Tabs defaultValue="feed" className="w-full">
                <TabsList className="grid w-full max-w-[400px] grid-cols-2 gap-4 rounded-lg bg-gray-100 p-1">
                  <TabsTrigger
                    value="feed"
                    className="rounded-md px-3 py-1.5 text-sm font-medium transition-all data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm"
                  >
                    Feed
                  </TabsTrigger>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div>
                        <TabsTrigger
                          value="my-rewards"
                          className="w-full rounded-md px-3 py-1.5 text-sm font-medium transition-all data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm"
                        >
                          My Rewards
                        </TabsTrigger>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-white px-3 py-1.5 text-sm">
                      <p>Filter view to show only my rewards</p>
                    </TooltipContent>
                  </Tooltip>
                </TabsList>

                <TabsContent value="feed">
                  <div className="mt-6">
                    <main className="container py-6 rounded-xl">
                      <motion.div
                        className="max-w-2xl mx-auto space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {rewards.map((reward, index) => (
                          <motion.div
                            key={reward.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <RewardCard reward={reward} />
                          </motion.div>
                        ))}
                      </motion.div>
                    </main>
                  </div>
                </TabsContent>

                <TabsContent value="my-rewards">
                  <div className="mt-6">
                    <main className="container py-6 rounded-xl">
                      <motion.div
                        className="max-w-2xl mx-auto space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {myRewards.length > 0 ? (
                          myRewards.map((reward, index) => (
                            <motion.div
                              key={reward.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                              <RewardCard reward={reward} />
                            </motion.div>
                          ))
                        ) : (
                          <div className="text-center py-8 text-gray-500">
                            <p>You haven't given any rewards yet.</p>
                          </div>
                        )}
                      </motion.div>
                    </main>
                  </div>
                </TabsContent>
              </Tabs>
            </TooltipProvider>
          </div>
        </div>
        <GiveRewardModal onAddReward={handleAddReward} />
      </div>
    </div>
  );
}