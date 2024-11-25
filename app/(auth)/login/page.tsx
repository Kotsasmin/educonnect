"use client";
import { useState } from "react";
import PocketBase from "pocketbase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

const pb = new PocketBase("http://127.0.0.1:8090");

export default function LoginPage() {
  const router = useRouter();
  const [identity, setIdentity] = useState(""); // username or email
  const [password, setPassword] = useState(""); // password
  const [isTeacher, setIsTeacher] = useState(false); // toggle between student/teacher
  const [loading, setLoading] = useState(false); // loading state
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const collectionName = isTeacher ? "teachers" : "students";

      // Authenticate using PocketBase
      const authData = await pb.collection(collectionName).authWithPassword(
        identity,
        password
      );

      // If successful, redirect to dashboard
      if (authData) {
        router.push("/dashboard");
      }
    } catch (err) {
      console.error(err);
      setError("Invalid username or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8  shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <div className="mb-4">
          <Label htmlFor="identity">Email or Username</Label>
          <Input
            id="identity"
            type="text"
            placeholder="Enter your email or username"
            value={identity}
            onChange={(e) => setIdentity(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center mb-6">
          <Checkbox
            id="isTeacher"
            checked={isTeacher}
            onCheckedChange={(checked) => setIsTeacher(checked)}
          />
          <Label htmlFor="isTeacher" className="ml-2">
            Login as Teacher
          </Label>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <Button
          onClick={handleLogin}
          disabled={loading}
          className="w-full"
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </div>
    </div>
  );
}
