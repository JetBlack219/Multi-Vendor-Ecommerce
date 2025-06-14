import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="p-4">
    <div className="flex flex-col gap-y-4">
        <div>
          <Button variant = 'elevated'>
            I am a robot
          </Button>
        </div>
        <div className="">
          <Input placeholder="I am a robot"></Input>
        </div>
        <div className="">
          <Progress value={50}></Progress>
        </div>
        <div className="">
          <Textarea placeholder="I am a robot"></Textarea>
        </div>
    </div>
    </div>
  )
}