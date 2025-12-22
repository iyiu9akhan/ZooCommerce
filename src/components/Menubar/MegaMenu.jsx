"use client"

import * as React from "react"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import { PiPawPrintFill } from "react-icons/pi";

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

const petShopData = [
    {
        category: "cat",
        subcategories: [
            { name: "dry food", href: "/" },
            { name: "wet food", href: "/" },
            { name: "health", href: "/" },
            { name: "beds", href: "/" },
            { name: "treats", href: "/" },
            { name: "toys", href: "/" },
            { name: "harnesses", href: "/" },
            { name: "collars", href: "/" },
        ]
    },
    {
        category: "turtle",
        subcategories: [
            { name: "Cat Litter", href: "/cat/litter" },
            { name: "Scratching", href: "/cat/trees" },
            { name: "Wet Food", href: "/cat/food" },
            { name: "Interactive", href: "/cat/toys" },
        ]
    },
    {
        category: "rabbit",
        subcategories: [
            { name: "Cages & Stands", href: "/bird/cages" },
            { name: "Seed Mixes", href: "/bird/food" },
            { name: "Bird Toys", href: "/bird/toys" },
            { name: "Health & Care", href: "/bird/health" },
        ]
    },
    {
        category: "fish",
        subcategories: [
            { name: "Hamster", href: "/small/cages" },
            { name: "Rabbit Hay", href: "/small/food" },
            { name: "Grooming Kits", href: "/small/grooming" },
            { name: "Exercise Wheels", href: "/small/toys" },
        ]
    },
    {
        category: "bird",
        subcategories: [
            { name: "Rabbit Hay", href: "/small/food" },
            { name: "Grooming Kits", href: "/small/grooming" },
            { name: "Exercise Wheels", href: "/small/toys" },
            { name: "Hamster", href: "/small/cages" },
        ]
    },
    {
        category: "reptile",
        subcategories: [
            { name: "Hamster", href: "/small/cages" },
            { name: "Grooming Kits", href: "/small/grooming" },
            { name: "Rabbit Hay", href: "/small/food" },
            { name: "Exercise Wheels", href: "/small/toys" },
        ]
    },
    {
        category: "dog",
        subcategories: [
            { name: "Exercise Wheels", href: "/small/toys" },
            { name: "Hamster", href: "/small/cages" },
            { name: "Rabbit Hay", href: "/small/food" },
            { name: "Grooming Kits", href: "/small/grooming" },
        ]
    },
    {
        category: "samll pet",
        subcategories: [
            { name: "Rabbit Hay", href: "/small/food" },
            { name: "Hamster", href: "/small/cages" },
            { name: "Grooming Kits", href: "/small/grooming" },
            { name: "Exercise Wheels", href: "/small/toys" },
        ]
    }
];

function NavigationMenuDemo() {
    return (
        <>
            <Container>
                <div className="flex justify-between">
                    <NavigationMenu >
                        <NavigationMenuList className="flex-wrap gap-5">

                            <NavigationMenuItem className={'px-4'}>
                                <a className="font-primary font-bold capitalize text-md cursor-pointer hover:text-red-btn duration-200 ease-in-out">home</a>
                                {/* <NavigationMenuContent>
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
                                </NavigationMenuContent> */}
                            </NavigationMenuItem>

                            <NavigationMenuItem className={'px-4 '}>
                                <NavigationMenuTrigger className="font-primary font-bold capitalize text-md cursor-pointer ">shop</NavigationMenuTrigger>
                                <NavigationMenuContent className={"w-full"}>
                                    <ul className="grid grid-cols-4 gap-5 p-5 justify-between w-screen max-w-[1320px]">
                                        {petShopData.map((item) => (
                                            <li key={item.category} className="flex flex-col">
                                                <span className="font-bold text-red-btn text-sm uppercase mb-2">{item.category}</span>
                                                {item.subcategories.map((sub) => (
                                                    <NavigationMenuLink key={sub.name} asChild>
                                                        <a
                                                            href={sub.href}
                                                            className="group font-heading text-[16px] text-gray-800 hover:text-red-btn transition-colors duration-200 block py-1"
                                                        >
                                                            <div className="flex gap-3 items-center">
                                                                <PiPawPrintFill
                                                                    className="size-4 text-gray-500 transition-colors duration-200 group-hover:text-red-btn"
                                                                />
                                                                <span className="capitalize font-medium">{sub.name}</span>
                                                            </div>
                                                        </a>
                                                    </NavigationMenuLink>
                                                ))}
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem className={'px-4'}>
                                <NavigationMenuTrigger className="font-primary font-bold capitalize text-md cursor-pointer">blog</NavigationMenuTrigger>
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

                            <NavigationMenuItem className={'px-4'}>
                                <a className="font-primary font-bold capitalize text-md cursor-pointer hover:text-red-btn duration-200 ease-in-out">about</a>
                                {/* <NavigationMenuContent>
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
                                </NavigationMenuContent> */}
                            </NavigationMenuItem>

                            <NavigationMenuItem className={'px-4'}>
                                <a className="font-primary font-bold capitalize text-md cursor-pointer hover:text-red-btn duration-200 ease-in-out">contact</a>
                                {/* <NavigationMenuContent className="bg-red-500">
                                    <ul className="grid w-[200px] gap-4 p-4 ">
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
                                </NavigationMenuContent> */}
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