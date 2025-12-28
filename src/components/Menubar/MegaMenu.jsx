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
        category: "dog",
        subcategories: [
            { name: "dry food", href: "/dog/dry-food" },
            { name: "wet food", href: "/dog/wet-food" },
            { name: "treats", href: "/dog/treats" },
            { name: "toys", href: "/dog/toys" },
            { name: "beds", href: "/dog/beds" },
            { name: "collars", href: "/dog/collars" },
            { name: "harnesses", href: "/dog/harnesses" },
            { name: "health", href: "/dog/health" },
        ],
        // bg_color: "bg-categoriesBG_dog"

    },
    {
        category: "cat",
        subcategories: [
            { name: "dry food", href: "/cat/dry-food" },
            { name: "wet food", href: "/cat/wet-food" },
            { name: "litter", href: "/cat/litter" },
            { name: "toys", href: "/cat/toys" },
            { name: "beds", href: "/cat/beds" },
            { name: "treats", href: "/cat/treats" },
            { name: "harnesses", href: "/cat/harnesses" },
            { name: "collars", href: "/cat/collars" },
        ],
        // bg_color: "bg-categoriesBG_cat"
    },
    {
        category: "rabbit",
        subcategories: [
            { name: "hay & forage", href: "/rabbit/hay" },
            { name: "pellets", href: "/rabbit/pellets" },
            { name: "hutches", href: "/rabbit/hutches" },
            { name: "toys", href: "/rabbit/toys" },
            { name: "bedding", href: "/rabbit/bedding" },
            { name: "grooming", href: "/rabbit/grooming" },
            { name: "health", href: "/rabbit/health" },
            { name: "bowls", href: "/rabbit/bowls" },
        ],
        // bg_color: "bg-categoriesBG_rabbit"
    },
    {
        category: "bird",
        subcategories: [
            { name: "seeds", href: "/bird/seeds" },
            { name: "pellets", href: "/bird/pellets" },
            { name: "cages", href: "/bird/cages" },
            { name: "toys", href: "/bird/toys" },
            { name: "perches", href: "/bird/perches" },
            { name: "treats", href: "/bird/treats" },
            { name: "health", href: "/bird/health" },
            { name: "carriers", href: "/bird/carriers" },
        ],
        // bg_color: "bg-categoriesBG_bird"
    },
    {
        category: "turtle",
        subcategories: [
            { name: "food", href: "/turtle/food" },
            { name: "aquariums", href: "/turtle/aquariums" },
            { name: "lighting", href: "/turtle/lighting" },
            { name: "heating", href: "/turtle/heating" },
            { name: "filters", href: "/turtle/filters" },
            { name: "platforms", href: "/turtle/platforms" },
            { name: "water care", href: "/turtle/water-care" },
            { name: "decor", href: "/turtle/decor" },
        ],
        // bg_color: "bg-categoriesBG_turtle"
    },
    {
        category: "reptile",
        subcategories: [
            { name: "live food", href: "/reptile/live-food" },
            { name: "terrariums", href: "/reptile/terrariums" },
            { name: "bedding", href: "/reptile/bedding" },
            { name: "heating", href: "/reptile/heating" },
            { name: "lighting", href: "/reptile/lighting" },
            { name: "hides", href: "/reptile/hides" },
            { name: "decor", href: "/reptile/decor" },
            { name: "health", href: "/reptile/health" },
        ],
        // bg_color: "bg-categoriesBG_reptile"
    },
    {
        category: "small pet",
        subcategories: [
            { name: "food", href: "/small-pet/food" },
            { name: "cages", href: "/small-pet/cages" },
            { name: "bedding", href: "/small-pet/bedding" },
            { name: "wheels", href: "/small-pet/wheels" },
            { name: "toys", href: "/small-pet/toys" },
            { name: "hideouts", href: "/small-pet/hideouts" },
            { name: "grooming", href: "/small-pet/grooming" },
            { name: "health", href: "/small-pet/health" },
        ],
        // bg_color: "bg-categoriesBG_smallPet"
    },
    {
        category: "fish",
        subcategories: [
            { name: "flakes", href: "/fish/flakes" },
            { name: "pellets", href: "/fish/pellets" },
            { name: "tanks", href: "/fish/tanks" },
            { name: "filters", href: "/fish/filters" },
            { name: "pumps", href: "/fish/pumps" },
            { name: "lighting", href: "/fish/lighting" },
            { name: "decor", href: "/fish/decor" },
            { name: "conditioner", href: "/fish/conditioner" },
        ],
        // bg_color: "bg-categoriesBG_fish"
    }
];

// const hoverColor = {
//     "dog": "hover:bg-categoriesBG_dog",
//     "cat": "hover:bg-categoriesBG_cat",
//     "rabbit": "hover:bg-categoriesBG_rabbit",
//     "bird": "hover:bg-categoriesBG_bird",
//     "turtle": "hover:bg-categoriesBG_turtle",
//     "reptile": "hover:bg-categoriesBG_reptile",
//     "small pet": "hover:bg-categoriesBG_smallPet",
//     "fish": "hover:bg-categoriesBG_fish",
// }; 
const bgColor = {
    "dog": "bg-categoriesBG_dog",
    "cat": "bg-categoriesBG_cat",
    "rabbit": "bg-categoriesBG_rabbit",
    "bird": "bg-categoriesBG_bird",
    "turtle": "bg-categoriesBG_turtle",
    "reptile": "bg-categoriesBG_reptile",
    "small pet": "bg-categoriesBG_smallPet",
    "fish": "bg-categoriesBG_fish",
};
// const hoverColorMap = {
//     "dog": "hover:bg-categoriesBG_dog",
//     "cat": "hover:bg-categoriesBG_cat",
//     "rabbit": "hover:bg-categoriesBG_rabbit",
//     "bird": "hover:bg-categoriesBG_bird",
//     "turtle": "hover:bg-categoriesBG_turtle",
//     "reptile": "hover:bg-categoriesBG_reptile",
//     "small pet": "hover:bg-categoriesBG_smallPet",
//     "fish": "hover:bg-categoriesBG_fish",
// };

function NavigationMenuDemo() {
    return (
        <>
            <Container>
                <div className="hidden sm:flex justify-between">
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
                                    <ul className="grid grid-cols-4 gap-2 p-2 justify-between w-screen max-w-[1320px]">
                                        {petShopData.map((item) => {
                                            // const hoverBg = hoverColor[item.category] || "hover:bg-gray-100";
                                            const categoryBg = bgColor[item.category] || "hover:bg-gray-100";

                                            return (
                                                <li key={item.category} className="flex flex-col rounded-[5px] p-2">
                                                    <span className={`font-bold text-black text-lg font-primary uppercase pl-2 ${categoryBg} rounded-[5px]`}>
                                                        {item.category}
                                                    </span>

                                                    <div className="grid grid-cols-2 mt-3">
                                                        {item.subcategories.map((sub) => (
                                                            <NavigationMenuLink key={sub.name} asChild>
                                                                <a
                                                                    href={sub.href}
                                                                    className=" font-heading text-[16px] text-gray-800 transition-colors duration-200 block py-1"
                                                                >
                                                                    <div className={`flex gap-3 items-center px-2 py-1 rounded-md transition-all duration-200 group`}>
                                                                        <PiPawPrintFill
                                                                            className="size-4 text-gray-700 transition-colors duration-200 group-hover:text-red-btn"
                                                                        />
                                                                        <span className="capitalize font-medium  text-gray-800 group-hover:text-red-btn">
                                                                            {sub.name}
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem className={'px-4'}>
                                <NavigationMenuTrigger className="font-primary font-bold capitalize text-md cursor-pointer">blog</NavigationMenuTrigger>
                                <NavigationMenuContent >
                                    <div className="flex ">
                                        <div>
                                            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] p-4">
                                                <li className="row-span-3">
                                                    <NavigationMenuLink asChild>
                                                        <a
                                                            className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                                                            href="/"
                                                        >
                                                            <div className="capitalize mb-2 text-lg font-medium sm:mt-4">
                                                                your cat
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
                                        </div>
                                        <div>
                                            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] p-4">
                                                <li className="row-span-3">
                                                    <NavigationMenuLink asChild>
                                                        <a
                                                            className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                                                            href="/"
                                                        >
                                                            <div className="capitalize mb-2 text-lg font-medium sm:mt-4">
                                                                your cat
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
                                        </div>
                                    </div>
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