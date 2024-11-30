"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PocketBase from "pocketbase";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Home,
  Mail,
  Settings,
  Book,
  Bell,
  Clipboard,
  FileText,
  CheckCircle,
  Award,
  GraduationCap,
  BookOpen,
  MessagesSquareIcon,
  Calendar1,
  ChartLine,
  ChartNoAxesGantt,
} from "lucide-react";
import { Inbox, Search } from "lucide-react";
import {
  SidebarGroupLabel,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/theme-changer";

const pb = new PocketBase("http://127.0.0.1:8090");

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  /* This is a template for a courses list just to make the sidebar work. Update with backend logic */
  const courses = [
    {
      title: "Course #1",
      url: "#",
    },
    {
      title: "Course #2",
      url: "#",
    },

    {
      title: "Course #3",
      url: "#",
    },
    {
      title: "Course #4",
      url: "#",
    },
  ];
  let firstCourse = courses[0];

  if (!firstCourse) {
    firstCourse = {
      title: "You have no Courses",
      url: "#",
    };
  }

  useEffect(() => {
    // Check if the user is logged in
    const auth = pb.authStore.model;
    if (!auth) {
      router.push("/login");
    } else {
      setUser(auth);
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header. Got rid of it because of the sidebar. Feel free to revert
      <header className="w-full border-b shadow-sm">
        <div className="flex items-center justify-between px-8 py-4">
          <h1 className="text-lg font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => router.push("/")}
              className="flex items-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push("/messages")}
              className="flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Messages</span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push("/settings")}
              className="flex items-center space-x-2"
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </Button>
          </div>
        </div>
      </header>
      */}
      <SidebarProvider
        style={{
          "--sidebar-width": "15rem",
          "--sidebar-width-mobile": "10rem",
        }}
      >
        <div className="flex flex-1">
          {/* Side bar */}
          <SidebarTrigger />
          <Sidebar side="left" variant="sidebar" collapsible="icon">
            <SidebarHeader className='group-data-[collapsible=icon]:hidden'>
            <Avatar className="w-12 h-12 mb-3 mt-5 mx-auto">
              <AvatarImage
                src={user?.avatarUrl || "https://static.vecteezy.com/system/resources/thumbnails/002/165/413/small_2x/line-icon-for-student-vector.jpg"}
                alt="User Avatar"
              />
              <AvatarFallback>
                {user?.email?.[0]?.toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-center font-bold text-lg">Welcome, {user?.name || "Username"}</h2>
            </SidebarHeader>
            <SidebarContent className="ml-1">
            <ScrollArea>
            <SidebarGroup />
            <SidebarGroupLabel>EduConnect</SidebarGroupLabel>
            <a href='/dashboard'><SidebarMenuButton><ChartNoAxesGantt />Overview</SidebarMenuButton></a>
            <SidebarMenuButton><MessagesSquareIcon />Messages</SidebarMenuButton>

              <SidebarGroup />
              <SidebarGroupLabel>School</SidebarGroupLabel>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <BookOpen />
                    Courses
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[--radix-popper-anchor-width] bg-white/5 backdrop-blur-md rounded-lg border border-white/0">
                  {courses.map((course) => (
                    <DropdownMenuItem>
                      <a href={course.url}>
                        <div key={course.title} className="">
                          <GraduationCap className="inline-flex mb-1 mr-2" />
                          {course.title}
                        </div>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <SidebarMenuButton><Bell />Announcements</SidebarMenuButton>
              <SidebarMenuButton><Calendar1 />Calendar</SidebarMenuButton>
              <SidebarMenuButton><FileText />Notes</SidebarMenuButton>
              <SidebarMenuButton><ChartLine />Grades</SidebarMenuButton>
              <SidebarMenuButton><Award />Certificates</SidebarMenuButton>
              
              
              <SidebarGroup />
              <SidebarGroup />
            <SidebarGroupLabel>Account</SidebarGroupLabel>
            <a href='/dashboard'><SidebarMenuButton><Settings />Settings</SidebarMenuButton></a>
              <SidebarGroup />
              </ScrollArea>
            </SidebarContent>
            <SidebarFooter>
              <div className='inline-block'>
              <SidebarTrigger />

                </div>
            </SidebarFooter>
          </Sidebar>

          {/* OLD SIDEBAR DO NOT DELETE FOR REFERENCE
        
        <aside className="w-64 border-r">
          <div className="p-4 border-b">
            <Avatar className="w-12 h-12 mb-3 mx-auto">
              <AvatarImage
                src={user?.avatarUrl || "https://static.vecteezy.com/system/resources/thumbnails/002/165/413/small_2x/line-icon-for-student-vector.jpg"}
                alt="User Avatar"
              />
              <AvatarFallback>
                {user?.email?.[0]?.toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-center font-bold text-lg">{user?.email || "User"}</h2>
          </div>
          <nav className="p-4 space-y-4">
            <Button variant="ghost" className="w-full text-left flex items-center space-x-2">
              <Book className="w-5 h-5" />
              <span>My Courses</span>
            </Button>
            <Button variant="ghost" className="w-full text-left flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>My Messages</span>
            </Button>
            <Button variant="ghost" className="w-full text-left flex items-center space-x-2">
              <Bell className="w-5 h-5" />
              <span>My Announcements</span>
            </Button>
            <Button variant="ghost" className="w-full text-left flex items-center space-x-2">
              <Clipboard className="w-5 h-5" />
              <span>My Calendar</span>
            </Button>
            <Button variant="ghost" className="w-full text-left flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>My Notes</span>
            </Button>
            <Button variant="ghost" className="w-full text-left flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>My Grades</span>
            </Button>
            <Button variant="ghost" className="w-full text-left flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span>My Certificate</span>
            </Button>
          </nav>
        </aside> */}

          <main className="flex-1 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Courses List . This shall be updated after we are done building the backend*/}
              <Card className="col-span-1 sm:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Book className="w-5 h-5" />
                    <span>My Courses</span>
                  </CardTitle>
                  <CardDescription>Selected courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="max-h-[400px]">
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5].map((lesson) => (
                        <div
                          key={lesson}
                          className="flex justify-between items-center"
                        >
                          <div>
                            <h4 className="font-semibold">Course {lesson}</h4>
                            <p className="text-sm">
                              Instructor: Professor {lesson}
                            </p>
                          </div>
                          <Button variant="outline">Actions</Button>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clipboard className="w-5 h-5" />
                    <span>My Calendar</span>
                  </CardTitle>
                  <CardDescription>Events and deadlines</CardDescription>
                </CardHeader>
                <CardContent className="align-middle">
                  <Calendar />
                </CardContent>
              </Card>
            </div>

            <Separator className="my-8" />

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="w-5 h-5" />
                  <span>Announcements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>No recent announcements.</p>
              </CardContent>
            </Card>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
