'use client';

import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { data } from '@/lib/navbar-data';
import { cn } from '@/lib/utils';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['700'],
});

interface NavbarItemProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
    const router = useRouter();
    return (
        <Button
            variant="outline"
            className={cn(
                'bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg',
                isActive && 'bg-black text-white hover:bg-black hover:text-white'
            )}
            onClick={() => router.push(href)}
        >
            {children}
        </Button>
    );
};

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="h-20 flex border-b justify-between font-medium bg-white">
            <Link href={data.headerMain.logoUrl} className="pl-6 flex items-center gap-2">
                <span className={cn('text-3xl font-semibold', poppins.className)}>
                    {data.headerMain.logoName}
                </span>
            </Link>

            <div className="items-center gap-4 hidden lg:flex">
                {data.navMain.map((item) => (
                    <NavbarItem key={item.url} href={item.url} isActive={pathname === item.url}>
                        {item.title}
                    </NavbarItem>
                ))}
            </div>

            <div className="hidden lg:flex">
                <Button
                    asChild
                    variant="secondary"
                    className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
                >
                    <Link href="/sign-in">Log In</Link>
                </Button>
                <Button
                    asChild
                    className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
                >
                    <Link href="/sign-up">Start Selling</Link>
                </Button>
            </div>

            <SidebarTrigger className="flex lg:hidden h-full w-20 border-b-0 border-t border-x rounded-none bg-black text-white hover:bg-pink-400 hover:text-black" />
        </nav>
    );
};
