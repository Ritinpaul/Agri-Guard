"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Coins, LineChart } from "lucide-react"

export default function AgriFinance() {
  const [activeTab, setActiveTab] = useState("lending")

  return (
    <section id="agrifinance" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AgriFinance</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Secure financial solutions designed specifically for farmers, powered by blockchain technology.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <Tabs defaultValue="lending" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="lending">Lending</TabsTrigger>
              <TabsTrigger value="staking">Staking</TabsTrigger>
            </TabsList>
            <TabsContent value="lending" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coins className="h-5 w-5 text-primary" />
                    Crop-Backed Lending
                  </CardTitle>
                  <CardDescription>Access capital based on the value of your crops</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold">How it works</h3>
                      <p className="text-sm text-muted-foreground">
                        Our smart contracts allow you to use your crop value as collateral for loans, providing you with
                        immediate liquidity.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold">Benefits</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Lower interest rates than traditional loans</li>
                        <li>• Quick approval process</li>
                        <li>• Flexible repayment terms</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                  <Button className="btn-primary">Try AgriFinance</Button>
                </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="staking" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-primary" />
                    Crop Value Staking
                  </CardTitle>
                  <CardDescription>Earn rewards by staking your crop tokens</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold">How it works</h3>
                      <p className="text-sm text-muted-foreground">
                        Stake your tokenized crop assets to earn yield while maintaining ownership of your agricultural
                        products.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold">Rewards</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Up to 8% APY on staked assets</li>
                        <li>• Monthly reward distributions</li>
                        <li>• Compound interest options</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                  <Button className="btn-primary">Try AgriFinance</Button>
                </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

        </div>
      </div>
    </section>
  )
}

