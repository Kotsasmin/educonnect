import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ModeToggle } from "@/components/theme-changer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r">
      <header className="container mx-auto py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">EduConnect</h1>

          <div>

            <Button variant="ghost" className="mr-4">Login</Button>
            <Button className="mr-4">Sign Up</Button>
            <ModeToggle/>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section className="text-center py-20">
          <h2 className="text-2xl font-bold">
            Seamless Communication for Schools, Teachers, and Students
          </h2>
          <p className="text-lgmax-w-2xl mx-auto mb-10">
            Stay connected, share resources, and streamline your educational processes with EduConnect. 
            Designed to bridge the gap between teachers, students, and schools effortlessly.
          </p>
          <Button className="px-8 py-4 text-lg">Get Started</Button>
        </section>

        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <h3 className="text-xl font-semibold">Messaging</h3>
              </CardHeader>
              <CardContent>
                <p className="">
                  Teachers and students can communicate in real time, ensuring seamless interaction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <h3 className="text-xl font-semibold">File Sharing</h3>
              </CardHeader>
              <CardContent>
                <p className="">
                  Upload and share important class materials, assignments, and announcements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <h3 className="text-xl font-semibold">Scheduling</h3>
              </CardHeader>
              <CardContent>
                <p className="">
                  Keep track of assignments, exams, and events with our built-in scheduling system.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20   text-center">
          <h3 className="text-3xl font-semibold mb-6">Join EduConnect Today</h3>
          <p className="text-lg mb-10">
            Start using EduConnect to connect with your school community.
          </p>
          <div className="flex justify-center justify-items-center space-x-4">
            <Button className="px-8">Get Started</Button>
          </div>
        </section>
      </main>

      <footer className="container mx-auto py-8 text-center ">
        <p>&copy; 2024 EduConnect. All rights reserved.</p>
      </footer>
    </div>
  );
}
