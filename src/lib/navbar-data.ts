import { Award, Blocks, DollarSign, Home, MailCheck } from "lucide-react";

export interface NavbarItem {
    url: string;
    title: string;
    icon?: React.ElementType;
    subItems?: NavbarItem[];
}
export interface HeaderMain {
    logoName: string;
    logoImg: string;
    logoUrl: string;
}

export interface data {
    headerMain: HeaderMain;
    navMain: NavbarItem[];
}


export const data: data = {
    headerMain: {
        logoName: "FunRoad",
        logoImg: "/logo.png",
        logoUrl: "/", 
    },
    navMain: [
        {
            url: "/",
            title: "Home",
            icon: Home,
        },
        {
            url: "/about",
            title: "About",
            icon: Award,
        },
        {
            url: "/features",
            title: "Features",
            icon: Blocks,
        },
        {
            url: "/pricing",
            title: "Pricing",
            icon: DollarSign,
        },
        {
            url: "/contact",
            title: "Contact",
            icon: MailCheck,
        },
    ],
};
