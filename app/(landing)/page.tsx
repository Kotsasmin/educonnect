"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ModeToggle } from "@/components/theme-changer";
import { DialogLog } from "./_components/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-r">
      <header className="container mx-auto py-4  ">
        <nav className="flex justify-between items-center">
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

      <main className="container mx-auto px-4">
        <section className="text-center py-20">
          <h2 className="text-2xl font-bold mb-5">
            <div className="bg-gradient-to-r to-danger bg-clip-text text-transparent  font-semibold">
              Seamless Communication
            </div>{" "}
            for Schools, Teachers, and Students
          </h2>
          <hr className="mx-10"></hr>

          <p className="text-xs max-w-2xl mx-10 mb-5 mt-5">
            Designed to bridge the gap between teachers, students, and schools
            effortlessly.
          </p>

          <Button className="px-8 py-4 text-sm   hover:px-9 transition-all">
            Get Started
          </Button>
        </section>

        <section className="py-20">
          <h1 className="text-center text-xl mb-5 font-semibold  transition-all cursor-default">
            Features
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

            <Card className="border-black border-2 dark:border-neutral-800">
              <CardHeader className="text-center">
                <h3 className="text-lg font-semibold">📁 File Sharing</h3>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm">
                  Upload and share important class materials, assignments, and
                  announcements.
                </p>
              </CardContent>
            </Card>

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
          </div>
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