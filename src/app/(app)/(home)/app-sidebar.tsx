'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { data, type NavbarItem } from '@/lib/navbar-data';
import { cn } from '@/lib/utils';

interface Props {
    items?: NavbarItem[];
}

export function AppSidebar({ items = data.navMain }: Props) {
    const pathname = usePathname();

    return (
        <Sidebar className="visible lg:hidden">
            <SidebarHeader className="text-3xl font-semibold font-[poppins] border-b">
                {data.headerMain.logoName}
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup className="p-0">
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-0">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.url}>
                                    <SidebarMenuButton
                                        asChild
                                        className={cn(
                                            'w-full hover:bg-pink-400 hover:text-black rounded-none',
                                            pathname === item.url && 'bg-black text-white'
                                        )}
                                        size="lg"
                                    >
                                        <Link href={item.url} className=" items-center gap-2">
                                            {item.icon && <item.icon className="w-4 h-4" />}
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="p-0">
                <div className="flex flex-col ">
                    <Button
                        variant="secondary"
                        className="border-y border-x-0   rounded-none bg-white hover:bg-pink-400 hover:text-white transition-colors text-lg"
                    >
                        <Link href="/sign-in">Log In</Link>
                    </Button>
                    <Button
                        variant="secondary"
                        className="border-0  rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
                    >
                        <Link href="/sign-up">Start Selling</Link>
                    </Button>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}
