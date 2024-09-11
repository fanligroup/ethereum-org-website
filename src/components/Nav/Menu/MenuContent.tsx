import { motion } from "framer-motion"
import { tv } from "tailwind-variants"
import { Content } from "@radix-ui/react-navigation-menu"

import { cn } from "@/lib/utils/cn"

import { NavItem, NavSections } from "../types"

import SubMenu from "./SubMenu"
import { useNavMenu } from "./useNavMenu"

export const navMenuVariants = tv({
  slots: {
    base: "text-body",
    item: "has-[button[data-state=open]]:rounded-s-md has-[button[data-state=open]]:rounded-e-none has-[button[data-state=open]]:-me-2 has-[button[data-state=open]]:pe-2",
    link: "w-full relative py-4 hover:text-menu-active [&:hover_p]:text-menu-active focus-visible:text-menu-active [&:focus-visible_p]:text-menu-active hover:outline-0 rounded-md hover:shadow-none focus-visible:outline-0 focus-visible:rounded-md focus-visible:shadow-none",
    submenu: "grid h-full w-full grid-cols-1",
  },
  variants: {
    level: {
      1: {
        submenu: "grid-cols-3 bg-menu-1-background",
        item: "has-[button[data-state=open]]:bg-menu-1-active-background",
        link: "data-[active=true]:bg-menu-1-active-background hover:bg-menu-1-active-background focus-visible:bg-menu-1-active-background",
      },
      2: {
        submenu: "grid-cols-2 bg-menu-2-background",
        item: "has-[button[data-state=open]]:bg-menu-2-active-background",
        link: "hover:bg-menu-2-active-background focus-visible:bg-menu-2-active-background data-[active=true]:bg-menu-2-active-background",
      },
      3: {
        submenu: "grid-cols-1 bg-menu-3-background",
        item: "has-[button[data-state=open]]:bg-menu-3-active-background",
        link: "data-[active=true]:bg-menu-3-active-background hover:bg-menu-3-active-background",
      },
      4: {
        submenu: "grid-cols-1 bg-menu-4-background",
        item: "has-[button[data-state=open]]:bg-menu-4-active-background",
        link: "data-[active=true]:bg-menu-4-active-background hover:bg-menu-4-active-background",
      },
    },
  },
})

type MenuContentProps = {
  items: NavItem[]
  isOpen: boolean
  sections: NavSections
}

// Desktop Menu content
const MenuContent = ({ items, isOpen, sections }: MenuContentProps) => {
  const { activeSection, containerVariants, onClose } = useNavMenu(sections)
  const { base } = navMenuVariants()

  return (
    <Content asChild>
      <motion.div
        className={cn(
          "absolute inset-x-0 top-19 border border-body-light bg-menu-1-background shadow-md",
          base()
        )}
        variants={containerVariants}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <SubMenu
          lvl={1}
          items={items}
          activeSection={activeSection}
          onClose={onClose}
        />
      </motion.div>
    </Content>
  )
}

export default MenuContent
