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
    <div className="sticky top-0 z-50 min-h-18">
      {/* Minimal Single Header */}
      <header className="sticky top-0 z-50 border-b bg-[var(--primary)] text-[var(--primary-foreground)]">
        <div className="container mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Left: Logo */}
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-white">
                <img
                  src="/images/logo-transparant.png"
                  alt="Logo WEGE Lapak"
                  className="size-6 object-contain"
                />
              </div>
              <div>
                <span className="hidden text-lg font-semibold text-white drop-shadow-sm sm:block">
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
                onClick={() => router.push("/cart")}
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
                  onClick={() => router.push("/products")}
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
                  onClick={() => router.push("/payments")}
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
