import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox"
import { Check } from "lucide-react";

function LabelPopover() {
    const [label, setLabel] = useState('')
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 text-[#B6C2CF] bg-[#22272B] border-0">
        <div className="flex w-full flex-row gap-2">
          {/* <div className="space-y-2"> */}
            {/* <h4 className="font-medium leading-none">Dimensions</h4> */}
            <Input name="label" className="bg-neutral-800" value={label} onChange={(e)=>setLabel(e.target.value)} />
          <Button type="submit">Add label</Button>

          {/* </div> */}
        </div>
        {/* <div className="flex flex-row items-center"> */}
          <Checkbox />
        {/* </div> */}
      </PopoverContent>
    </Popover>
  );
}


function CheckboxDemo() {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    )
  }

export default LabelPopover;
