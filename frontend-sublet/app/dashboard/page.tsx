import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import {
  Button
} from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { PlusIcon, DotsHorizontalIcon as Dots } from "@radix-ui/react-icons"

import { BellIcon, CheckIcon } from "@radix-ui/react-icons"

import Image from "next/image"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]

const Dashboard = () => {
  return (
    <div className="">
      <Tabs defaultValue="posted" className="">
        <div className="w-screen flex justify-end p-6 gap-4">
          <TabsList>
            <TabsTrigger value="posted">Posted</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
          </TabsList>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="p-2">
                <PlusIcon className="w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" value="Pedro Duarte" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input id="username" value="@peduarte" className="col-span-3" />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <TabsContent value="posted" className="p-6">
          <div className="pl-20 space-y-10">
            <h1 className="text-4xl tracking-tighter font-semibold">Dashboard</h1>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 space-x-2 space-y-2">
              <Card className="w-[380px]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Property Title</CardTitle>
                    {/* <CardDescription>You have 3 unread messages.</CardDescription> */}
                    <Button variant="ghost" className="p-2">
                      <Dots className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center space-x-4 rounded-md">
                    <Image className="rounded-lg" src="/hamco.jpeg" alt="Hamco pic" width={400} height={400} />
                  </div>

                  <div className="mb-4 items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <span className="flex h-3 w-3 rounded-full bg-green-500" />
                          <span className="flex h-3 w-3 rounded-full bg-green-500 animate-ping absolute top-0" />
                        </div>
                        <p className="text-sm font-medium leading-none">
                          Pending
                        </p>
                      </div>
                      <Button variant="ghost">
                        <Dots />
                      </Button>
                    </div>
                    <div className="space-y-1">

                      <p className="text-sm text-muted-foreground">
                        Jun 27 - Jul 24
                      </p>
                    </div>
                  </div>

                  {/*<div className="flex items-center space-x-4 rounded-md border p-4">
                    <BellIcon />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Toggle
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Send notifications to device.
                      </p>
                    </div>
                    <Switch />
                  </div> */}

                </CardContent>
                <CardFooter>
                  <div className="flex justify-between gap-3">
                    <Button className="w-full gap-4">
                      <CheckIcon className="ml-[-4px] mr-[-10px]" />
                      Mark as Claimed
                    </Button>
                      <Button variant="secondary" className="w-full">
                      Edit
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              <Card className="w-[380px]">
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>You have 3 unread messages.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <BellIcon />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Push Notifications
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Send notifications to device.
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div>
                    {notifications.map((notification, index) => (
                      <div
                        key={index}
                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                      >
                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {notification.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {notification.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
                  </Button>
                </CardFooter>
              </Card>

              <Card className="w-[380px]">
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>You have 3 unread messages.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <BellIcon />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Push Notifications
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Send notifications to device.
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div>
                    {notifications.map((notification, index) => (
                      <div
                        key={index}
                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                      >
                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {notification.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {notification.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="drafts">
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Dashboard