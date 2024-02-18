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

import { PlusIcon } from "@radix-ui/react-icons"


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
          <div className="pl-20">
            <h1 className="text-4xl tracking-tighter font-semibold">Dashboard</h1>
            <div>
              
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