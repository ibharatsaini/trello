import { Settings, User, Proportions } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { useQuery } from "@tanstack/react-query";
import { getAllBoard } from "@/lib/dbQueries";

// Menu items.
const items = [
  {
    title: "Boards",
    url: "#",
    icon: Proportions,
  },
  {
    title: "Members",
    url: "#",
    icon: User,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  // {
  //   title: "Search",
  //   url: "#",
  //   icon: Search,
  // },
  // {
  //   title: "Settings",
  //   url: "#",
  //   icon: Settings,
  // },
];

export function AppSidebar() {

  const {data}  = useQuery({
    queryFn: ()=>getAllBoard(),
    queryKey: ['allBoard']
  })

  console.log(data)
  return (
    <Sidebar className="text-[#9FADBC] w-64 box-content">
      <SidebarHeader className="w-full flex-row m-2">
        <div className="w-12 h-full justify-center rounded font-bold bg-green-200 flex items-center">
          T
        </div>
        <div className="w-full h-full flex flex-col">
          <h3 className="text-sm text-[#9FADBC]">Trello Workspace</h3>
          <h4 className="text-xs">Free</h4>
        </div>
      </SidebarHeader>
      <Separator className="h-px bg-[#dfe1e6] opacity-10" />
      <SidebarContent className="text-[#9FADBC]">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#9FADBC]">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a className="text-[#9FADBC]" href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#9FADBC]">Your boards</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              { data && data.map((item:{_id:string,title:string}) => (
                <SidebarMenuItem key={item._id}>
                  <SidebarMenuButton asChild>
                    <a className="text-[#9FADBC]" href={`/board/${item._id}`}>
                      <Proportions />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
