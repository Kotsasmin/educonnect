"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ModeToggle } from "@/components/theme-changer";
import { DialogLog } from "./_components/dialog";
import Autoplay from "embla-carousel-autoplay"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Hexagon } from 'lucide-react';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-r">
      <header className="container mx-auto py-4 ">
        <nav className="flex justify-between items-center bg-opacity-20">
          <h1 className="text-lg font-bold ml-5 cursor-default transition-all sm:text-2xl">
            EduConnect
          </h1>

          <div>
            <Button
              variant="ghost"
              onClick={() => router.push("/login")}
              className="hidden sm:inline-block mr-4"
            >
              Login
            </Button>
            <Button className="mr-4 hidden sm:inline-block">Sign Up</Button>
            <div className="hidden sm:inline-block">
              <ModeToggle />
            </div>
            <div className="inline-block sm:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger className="mr-3">☰</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Options</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => router.push("/login")}>
                    Login
                  </DropdownMenuItem>
                  <DropdownMenuItem>Sign Up</DropdownMenuItem>
                  <DropdownMenuItem className="mx-8">
                    <ModeToggle />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-0">
        <div className="dark:bg-gradient-to-b from-blue-500/10 to-transparent">
        <section className="text-center py-20">
          <h2 className="text-5xl sm:text-6xl mb-5 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text font-extrabold text-transparent text-center shadow-emerald-800">
            EduConnect

          </h2>
          
          <hr className="mx-10"></hr>

          <p className="text-xs mx-10 mb-5 mt-5 text-center">
            Bridge the gap between teachers, students, and schools
            effortlessly.
          </p>

          <Button variant='secondary' className="px-8 py-4 text-sm hover:px-9 transition-all">
          <Hexagon /> 
             Get Started
          </Button>
        </section>
        </div>
        <section className="py-20 mx-5">
          <h1 className="text-center text-xl mb-5 font-semibold  transition-all cursor-default">
            Features (Undone apo edw kai katw)
          </h1>
          <Carousel className="mx-20" plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
          <CarouselContent>
            <CarouselItem>
            <Card className="border-black border-2 dark:border-neutral-800">
              <CardHeader className="text-center">
                <h3 className="text-lg font-semibold">🔗 Messaging</h3>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm">
                  Teachers and students can communicate in real time, ensuring
                  seamless interaction.
                </p>
              </CardContent>
            </Card>
            </CarouselItem>
            <CarouselItem>
            <Card className="border-black border-2 dark:border-neutral-800">
              <CardHeader className="text-center">
                <h3 className="text-lg font-semibold">🔗 Messaging</h3>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm">
                  Teachers and students can communicate in real time, ensuring
                  seamless interaction.
                </p>
              </CardContent>
            </Card>
            </CarouselItem>
            <CarouselItem><Card className="border-black border-2 dark:border-neutral-800">
              <CardHeader className="text-center">
                <h3 className="text-lg font-semibold">📁 File Sharing</h3>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm">
                  Upload and share important class materials, assignments, and
                  announcements.
                </p>
              </CardContent>
            </Card></CarouselItem>
            <CarouselItem>
            <Card className="border-black border-2 dark:border-neutral-800">
              <CardHeader className="text-center">
                <h3 className="text-lg font-semibold">📅 Scheduling</h3>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm">
                  Keep track of assignments, exams, and events with our built-in
                  scheduling system.
                </p>
              </CardContent>
            </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

          {/* Do not Delete
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-500 rounded-lg">
            
            </div>
            <div className="p-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-cyan-500 rounded-lg">
            
            </div>
            <div className="p-0.5 rounded-lg bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-800">
            
            </div>
          </div> */}
        </section>

        <section className="py-20 text-center">
          <h3 className="text-3xl font-semibold mb-6">Join EduConnect Today</h3>
          <p className="text-sm mb-10">
            Start using EduConnect to connect with your school community.
          </p>
          <div className="flex justify-center justify-items-center space-x-4">
            <Button className="px-8 py-4 text-sm  hover:px-9 transition-all">
              Get Started
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}