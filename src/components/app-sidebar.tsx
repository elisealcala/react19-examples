import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router"

// Menu items.
const items = [
  {
    title: "index",
    url: "/",
  },
  {
    title: "async functions",
    url: "async-functions",
  },
  {
    title: "useTransition",
    url: "use-transition",
  },
  {
    title: "useActionState",
    url: "use-action-state",
  },
  {
    title: "useOptimistic",
    url: "use-optimistic",
  },
  {
    title: "ref as Prop",
    url: "ref",
  },
  {
    title: "native metadata",
    url: "native-metadata",
  },
  {
    title: "stylesheet support",
    url: "stylesheet-support",

  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>React 19 Examples</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
