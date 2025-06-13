import { ChevronRight, SquareTerminal } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { getSlug } from "@/lib/helpers";
import { getBoards } from "@/lib/actions/actions";

export async function NavMain() {
  const boards = await getBoards();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Navigation</SidebarGroupLabel>
      <SidebarMenu>
        
          <Collapsible  asChild className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip="Boards">
                  <SquareTerminal />
                  <span>Boards</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href={"/boards"}>
                        <span>Boards Hub</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>

                  {boards.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.id}>
                      <SidebarMenuSubButton asChild>
                        <Link href={`/boards/${getSlug(subItem.id, subItem.title)}`}>
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
     
      </SidebarMenu>
    </SidebarGroup>
  );
}
