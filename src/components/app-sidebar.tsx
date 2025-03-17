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
    url: "#",
  },
  {
    title: "useActionState",
    url: "#",
  },
  {
    title: "useOptimistic",
    url: "#",
  },
  {
    title: "react server components",
    url: "#",
  },
  {
    title: "use API",
    url: "#",
  },
  {
    title: "server actions",
    url: "#",
  },
  {
    title: "ref as Prop",
    url: "#",
  },
  {
    title: "native metadata",
    url: "#",
  },
  {
    title: "stylesheet support",
    url: "#",

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
