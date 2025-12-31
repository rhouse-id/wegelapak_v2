"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
// import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from '@/components/ui/breadcrumb'
import {
  Bell,
  CreditCard,
  LogIn,
  LogOut,
  Menu,
  Search,
  ShoppingCartIcon,
  User,
  X,
} from "lucide-react";
// import HeroSection2 from './hero-section-2'
// import StorefrontHero1 from './storefront-hero-1'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useRouter } from "next/navigation";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 min-h-18 bg-background to-amber-50/50 from-amber-300 shadow-sm backdrop-blur-sm">
      {/* Minimal Single Header */}
      <header className="sticky top-0 z-50 border-b bg-card/95">
        <div className="container mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Left: Logo */}
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-amber-600 dark:bg-muted">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="size-6 text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26 24.75C26.4142 24.75 26.75 24.4142 26.75 24C26.75 23.5858 26.4142 23.25 26 23.25V24.75ZM26 23.25H11V24.75H26V23.25ZM8.75 21V15H7.25V21H8.75ZM11 23.25C9.75736 23.25 8.75 22.2426 8.75 21H7.25C7.25 23.0711 8.92893 24.75 11 24.75V23.25Z"
                    fill="currentColor"
                  />
                  <path
                    d="M1.5 3.25C1.08579 3.25 0.75 3.58579 0.75 4C0.75 4.41421 1.08579 4.75 1.5 4.75V3.25ZM1.5 4.75H6V3.25H1.5V4.75ZM7.25 6V21H8.75V6H7.25ZM6 4.75C6.69036 4.75 7.25 5.30964 7.25 6H8.75C8.75 4.48122 7.51878 3.25 6 3.25V4.75Z"
                    fill="currentColor"
                  />
                  <path
                    d="M22 21.75C22.4142 21.75 22.75 21.4142 22.75 21C22.75 20.5858 22.4142 20.25 22 20.25V21.75ZM22 20.25H11V21.75H22V20.25ZM8.75 18V12H7.25V18H8.75ZM11 20.25C9.75736 20.25 8.75 19.2426 8.75 18H7.25C7.25 20.0711 8.92893 21.75 11 21.75V20.25Z"
                    fill="currentColor"
                  />
                  <path
                    d="M27.2057 19.754C27.0654 20.1438 26.6357 20.346 26.246 20.2057C25.8562 20.0654 25.654 19.6357 25.7943 19.246L27.2057 19.754ZM30.0361 9.67744L29.3305 9.4234L29.3305 9.4234L30.0361 9.67744ZM25.7943 19.246L29.3305 9.4234L30.7418 9.93148L27.2057 19.754L25.7943 19.246ZM28.1543 7.75L8 7.75V6.25L28.1543 6.25V7.75ZM29.3305 9.4234C29.6237 8.60882 29.0201 7.75 28.1543 7.75V6.25C30.059 6.25 31.3869 8.13941 30.7418 9.93148L29.3305 9.4234Z"
                    fill="currentColor"
                  />
                  <path
                    d="M13.5 21.75C13.0858 21.75 12.75 21.4142 12.75 21C12.75 20.5858 13.0858 20.25 13.5 20.25V21.75ZM26.7111 19.009L27.4174 19.2613L27.4174 19.2613L26.7111 19.009ZM13.5 20.25H23.8858V21.75H13.5V20.25ZM26.0048 18.7568L27.7937 13.7477L29.2063 14.2523L27.4174 19.2613L26.0048 18.7568ZM23.8858 20.25C24.8367 20.25 25.6849 19.6522 26.0048 18.7568L27.4174 19.2613C26.8843 20.7537 25.4706 21.75 23.8858 21.75V20.25Z"
                    fill="currentColor"
                  />
                  <path
                    d="M21.1694 10.5806L14.5651 17.1849"
                    stroke="currentColor"
                  />
                  <path
                    d="M22.1694 14.5806L18.5632 18.1868"
                    stroke="currentColor"
                  />
                  <circle cx="13.1" cy="26.1" r="1.7" stroke="currentColor" />
                  <circle cx="22.1" cy="26.1" r="1.7" stroke="currentColor" />
                </svg>
              </div>
              <div>
                <span className="hidden text-lg font-semibold text-amber-600 sm:block">
                  WEGE Lapak
                </span>
              </div>
            </div>

            {/* Center: Main Navigation */}
            <nav className="hidden items-center gap-2 lg:flex">
              <Button
                variant="default"
                className="h-9 cursor-pointer text-sm font-medium"
                onClick={() => router.push("/")}
              >
                Home
              </Button>
              <Button
                variant="ghost"
                className="h-9 cursor-pointer text-sm font-medium"
                onClick={() => router.push("/products")}
              >
                Products
              </Button>
              <Button
                variant="ghost"
                className="h-9 cursor-pointer text-sm font-medium"
                onClick={() => router.push("/orders")}
              >
                Orders
              </Button>
              <Button
                variant="ghost"
                className="h-9 cursor-pointer text-sm font-medium"
                onClick={() => router.push("/payments")}
              >
                Payments
              </Button>
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Desktop Search */}
              <div className="relative hidden lg:block">
                <Search className="absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="w-64 border-0 bg-muted ps-9 focus-visible:ring-1"
                />
              </div>
              {/* Mobile Search Icon */}
              <div className="lg:hidden">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Open search"
                    >
                      <Search className="size-5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[360px]">
                    <div className="relative">
                      <Search className="absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        autoFocus
                        placeholder="Search..."
                        className="w-full border-0 bg-muted/50 ps-9 focus-visible:ring-1"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="relative cursor-pointer"
              >
                <Bell className="size-4" />
                <div className="absolute -end-1 -top-1 size-2 rounded-full bg-primary" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="relative cursor-pointer"
              >
                <ShoppingCartIcon className="size-4" />
                <div className="absolute -end-1 -top-1 size-2 rounded-full bg-primary" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex cursor-pointer items-center gap-1 rounded-lg bg-muted/50 px-3 py-2">
                    <Avatar>
                      <AvatarImage src="https://notion-avatars.netlify.app/api/avatar?preset=male-1" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">AntoHud</span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <a href="#" className="flex items-center gap-2">
                      <User className="size-4" /> Profile
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#" className="flex items-center gap-2">
                      <CreditCard className="size-4" /> Payments
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <a href="#" className="flex items-center gap-2">
                      <LogIn className="size-4" /> Login
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#" className="flex items-center gap-2">
                      <LogOut className="size-4" /> Logout
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu */}
              <Button
                variant="ghost"
                size="sm"
                className="cursor-pointer md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="size-4" />
                ) : (
                  <Menu className="size-4" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t bg-card md:hidden">
            <div className="container mx-auto px-6 py-6">
              <nav className="space-y-3">
                <Button
                  variant="secondary"
                  className="w-full cursor-pointer justify-start"
                  onClick={() => router.push("/")}
                >
                  Home
                </Button>
                <Button
                  variant="ghost"
                  className="w-full cursor-pointer justify-start"
                >
                  Products
                </Button>
                <Button
                  variant="ghost"
                  className="w-full cursor-pointer justify-start"
                  onClick={() => router.push("/orders")}
                >
                  Orders
                </Button>
                <Button
                  variant="ghost"
                  className="w-full cursor-pointer justify-start"
                >
                  Payments
                </Button>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      {/* <main className='container mx-auto px-6 py-8'> */}
      {/* Page Header with Breadcrumbs */}
      {/* <div className='mb-8 space-y-4'>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href='#' className='flex items-center gap-2'>
                  <Home className='size-4' />
                  Store
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className='size-4' />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Product Catalog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className='flex items-start justify-between'>
            <div className='space-y-1'>
              <h1 className='text-4xl font-bold tracking-tight text-balance'>Product Catalog</h1>
              <p className='text-muted-foreground text-lg'>Manage your product inventory and storefront.</p>
            </div>
            <Button className='cursor-pointer gap-2'>
              <Package className='size-4' />
              Add Product
            </Button>
          </div>
        </div> */}

      {/* Content Areas */}
      {/* <div className='grid gap-6 lg:grid-cols-3'>
          <Card className='lg:col-span-2'>
            <CardContent>
              <div className='bg-muted border-muted-foreground/25 flex h-64 items-center justify-center rounded-lg border-2 border-dashed'>
                <div className='text-center'>
                  <div className='text-muted-foreground mb-2 text-lg'>Replace this div with your content</div>
                  <p className='text-muted-foreground text-sm'>Product catalog, featured items, or sales dashboard</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className='bg-muted border-muted-foreground/25 flex h-64 items-center justify-center rounded-lg border-2 border-dashed'>
                <div className='text-center'>
                  <div className='text-muted-foreground mb-2 text-lg'>Replace this div with your content</div>
                  <p className='text-muted-foreground text-sm'>Shopping cart, user account, or quick actions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}
      {/* <StorefrontHero1 /> */}

      {/* <div className='mt-4 grid gap-6 md:grid-cols-3'> */}
      {/* <Card> */}
      {/* <CardContent> */}
      {/* <img
                    src='images/ads/iklan_GF-Header-1440x770_Dislat-Oktober.jpg'
                    alt='placeholder image'
                    className='rounded-md dark:brightness-[0.95] dark:invert' />

                 <img
                    src='images/ads/iklan_GF-Header-1440x770_Dislat-Oktober.jpg'
                    alt='placeholder image'
                    className='rounded-md dark:brightness-[0.95] dark:invert' />

                 <img
                    src='images/ads/iklan_GF-Header-1440x770_Dislat-Oktober.jpg'
                    alt='placeholder image'
                    className='rounded-md dark:brightness-[0.95] dark:invert' /> */}
      {/* </CardContent> */}
      {/* </Card> */}
      {/* <div className='bg-muted border-muted-foreground/25 flex h-48 items-center justify-center rounded-lg border-2 border-dashed'>
                <div className='text-center'>
                  <div className='text-muted-foreground mb-2 text-lg'>Replace this div with your advertise</div>
                  <p className='text-muted-foreground text-sm'>Categories or promotional banner</p>
                </div>
              </div>
            </CardContent>
          </Card> */}

      {/* <Card className='mt-2 grid gap-4 md:grid-cols-2'>
            <Image
                src='/images/ads/iklan_samsung-480x600.png'
                alt='placeholder image'
                width={240}
                height={200}
                className='w-full rounded-md dark:brightness-[0.95] dark:invert'
            />
            <Image
                src='/images/ads/iklan_bca_diskon-juli-2020-3.png'
                alt='placeholder image'
                width={240}
                height={100}
                className='rounded-md dark:brightness-[0.95] dark:invert'
            /> */}
      {/* <CardContent>
              <div className='bg-muted border-muted-foreground/25 flex h-48 items-center justify-center rounded-lg border-2 border-dashed'>
                <div className='text-center'>
                  <div className='text-muted-foreground mb-2 text-lg'>Replace this div with testimonials</div>
                  <p className='text-muted-foreground text-sm'>Customer reviews or testimonials</p>
                </div>
              </div>
            </CardContent> */}
      {/* </Card> */}
      {/* </div> */}
      {/* </main> */}
    </div>
  );
};

export default Header;
