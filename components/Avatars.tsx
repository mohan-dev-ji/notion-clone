"use client";

import { useOthers, useSelf } from "@liveblocks/react/suspense";
import { User } from "@liveblocks/client";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

interface CustomUser extends User {
  info: {
    avatar?: string;
    name?: string;
  };
}

function Avatars() {
  const others = useOthers();
  const self = useSelf();
  // const others = useOthers<CustomUser>();
  // const self = useSelf<CustomUser>();
  const all = [self, ...others];

  console.log('Self:', self);
  console.log('Others:', others);
  

  return (
    <div className="flex gap-2 items-center">
        <p className="font-light text-sm">User's currently editing this page.</p>

        <div className="flex -space-x-5">
            {all.map((other) => (
                <TooltipProvider key={other?.id + 1}>
                <Tooltip>
                  <TooltipTrigger>
                    <Avatar className="border-2 hover:z-50">
                    <AvatarImage src={(other as any).info?.avatar} />
                    <AvatarFallback>{(other as any).info?.name}</AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to library</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              

            ))}
        </div>
    </div>
  );
}
export default Avatars