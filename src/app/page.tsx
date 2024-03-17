import { FC } from 'react'
import { Button } from "@/components/ui/Button"
import { db } from '@/lib/db'


export default async function Home() {
  await db.set("hello", "Db is working 100%")
  return (
    <div className="">
    <div className="mx-auto overflow-hidden">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis, aliquid voluptatem fugit assumenda expedita enim quos, consequatur doloribus aliquam accusantium necessitatibus eius? Mollitia tempore, ad nesciunt molestiae unde distinctio repellat similique quia doloribus voluptate architecto ducimus quaerat ex in pariatur sunt, eum possimus rem!
    <br></br>
    <Button variant="default" className=""> Average button </Button>
    </div>
  </div>
  )
}
