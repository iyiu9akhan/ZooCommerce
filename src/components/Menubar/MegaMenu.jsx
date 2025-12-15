"use client"

import * as React from "react"
// ❌ REMOVED: import Link from "next/link" 
// ❌ REMOVED: // import {Link} from "../../components/ui/navigation-menu" 
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu"
import Container from "../Container/Container"
import { FaFacebookSquare } from "react-icons/fa"
import { BiLogoInstagramAlt } from "react-icons/bi"
import { IoLogoYoutube } from "react-icons/io"
import { FaSquarePhone } from "react-icons/fa6"

// Components data
const components = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

function NavigationMenuDemo() {
    return (
        <>
            <Container>
                <div className="flex justify-between">
                    <NavigationMenu>
                        <NavigationMenuList className="flex-wrap">

                            {/* Home Menu */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] p-4">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                                                    href="/"
                                                >
                                                    <div className="mb-2 text-lg font-medium sm:mt-4">
                                                        shadcn/ui
                                                    </div>
                                                    <p className="text-muted-foreground text-sm leading-tight">
                                                        Beautifully designed components built with Tailwind CSS.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem href="/docs" title="Introduction">
                                            Re-usable components built using Radix UI and Tailwind CSS.
                                        </ListItem>
                                        <ListItem href="/docs/installation" title="Installation">
                                            How to install dependencies and structure your app.
                                        </ListItem>
                                        <ListItem href="/docs/primitives/typography" title="Typography">
                                            Styles for headings, paragraphs, lists...etc
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Components Menu */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px] p-4">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Docs Link (Not a dropdown) */}
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <a href="/docs">Docs</a>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            {/* List Menu (Hidden on mobile) */}
                            <NavigationMenuItem className="hidden md:block">
                                <NavigationMenuTrigger>List</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[300px] gap-4 p-4">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="#">
                                                    <div className="font-medium">Components</div>
                                                    <div className="text-muted-foreground">
                                                        Browse all components in the library.
                                                    </div>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="#">
                                                    <div className="font-medium">Documentation</div>
                                                    <div className="text-muted-foreground">
                                                        Learn how to use the library.
                                                    </div>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="#">
                                                    <div className="font-medium">Blog</div>
                                                    <div className="text-muted-foreground">
                                                        Read our latest blog posts.
                                                    </div>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Simple Menu (Hidden on mobile) */}
                            <NavigationMenuItem className="hidden md:block">
                                <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-4 p-4">
                                        <li className="flex flex-col space-y-2">
                                            <NavigationMenuLink asChild>
                                                <a href="#">Components</a>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <a href="#">Documentation</a>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <a href="#">Blocks</a>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* With Icon Menu (Hidden on mobile) */}
                            <NavigationMenuItem className="hidden md:block">
                                <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-4 p-4">
                                        <li className="flex flex-col space-y-2">
                                            <NavigationMenuLink asChild>
                                                <a href="#" className="flex items-center gap-2 hover:bg-accent p-2 rounded-md">
                                                    <CircleHelpIcon className="w-4 h-4" />
                                                    Backlog
                                                </a>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <a href="#" className="flex items-center gap-2 hover:bg-accent p-2 rounded-md">
                                                    <CircleIcon className="w-4 h-4" />
                                                    To Do
                                                </a>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <a href="#" className="flex items-center gap-2 hover:bg-accent p-2 rounded-md">
                                                    <CircleCheckIcon className="w-4 h-4" />
                                                    Done
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className='flex gap-5'>
                        <div className='flex items-center gap-2'>
                            <FaSquarePhone className='text-[22px] text-red-btn' />
                            <p className='font-semibold font-primary text-[16px] text-black'>85494521039</p>
                        </div>
                        <div className='border-l border-gray-400'></div>
                        <div className='flex items-center text-button gap-3'>
                            <a href="#"> <FaFacebookSquare className='text-[22px] cursor-pointer text-button' /></a>
                            <a href="#"><BiLogoInstagramAlt className='text-[26px] cursor-pointer text-button' /></a>
                            <a href="#"> <IoLogoYoutube className='text-[24px] cursor-pointer text-button' /></a>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

// ListItem Component
function ListItem({
    title,
    children,
    href,
    ...props
}) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                {/* 🎯 FIX: Using <a> instead of the problematic <Link> component */}
                <a
                    href={href}
                    // This is standard shadcn/ui styling for a navigation menu link item
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
}

export default NavigationMenuDemo