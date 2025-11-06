import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ModeToggle } from "@/components/theme/ModeToggle";
import { Eye, EyeClosed, EyeOff } from "lucide-react";
// Functionality dependencies are kept identical

type Role = "user" | "admin";

type User = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  role?: Role;
  registerTime?: string;
  lastLoginTime?: string;
};

const USERS_KEY = "app_users_v1";
const CURRENT_KEY = "app_current_user_v1";

function readUsers(): User[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("readUsers error", e);
    return [];
  }
}

function writeUsers(users: User[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function setCurrent(user: User) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CURRENT_KEY, JSON.stringify(user));
}

// Custom styles for the Minimalist Geometric look (emerald accents)
const gradientAccent =
  "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 transition-colors duration-300";
const minimalistInput =
  "border border-gray-300 dark:border-slate-600 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500   duration-200 rounded-none p-3 shadow-sm bg-white dark:bg-slate-700";
const minimalistButtonBase =
  "rounded-none font-semibold uppercase tracking-wider transition-all duration-300";

// --- Component Start ---

export default function AuthPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"login" | "register" | "forgot">("login");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMessage(null);
    setError(null);
    setFirstName("");
    setLastName("");
    setPassword("");
  }, [tab]);

  function registerUser(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    if (!email || !password)
      return setError("Email and password are required.");

    const users = readUsers();
    if (users.find((u) => u.email === email)) {
      return setError(
        "A user with this email already exists. Please login or use another email.",
      );
    }

    const user: User = {
      email,
      password,
      firstname: firstName,
      lastname: lastName,
      role: "user",
      registerTime: new Date().toISOString(),
    };

    users.push(user);
    writeUsers(users);
    setMessage("Registration successful — you can now log in.");
    setTab("login");
    setPassword("");
  }

  function loginUser(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    if (!email || !password)
      return setError("Email and password are required.");

    // Admin check
    if (email === "admin@stackly.com" && password === "admin123") {
      const admin: User = {
        email,
        password: "",
        role: "admin",
        firstname: "Stackly",
        lastname: "Admin",
        lastLoginTime: new Date().toISOString(),
      };
      setCurrent(admin);
      setMessage("Welcome, admin — redirecting to dashboard...");
      setTimeout(() => router.push("/admin-dashboard"), 700);
      return;
    }

    const users = readUsers();
    const found = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (!found)
      return setError(
        "Invalid credentials — please check email/password or register first.",
      );

    found.lastLoginTime = new Date().toISOString();
    writeUsers(users);
    setCurrent(found);
    setMessage("Login successful — redirecting to your home...");
    setTimeout(() => router.push("/home1"), 700);
  }

  function startReset(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    if (!email) return setError("Please enter the email you registered with.");
    const users = readUsers();
    const found = users.find((u) => u.email === email);
    if (!found) return setError("Email not found. Please register first.");
    setMessage("Enter a new password below to reset.");
    setTab("forgot");
  }

  function completeReset(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    if (!email || !password)
      return setError("Email and new password required.");
    const users = readUsers();
    const idx = users.findIndex((u) => u.email === email);
    if (idx === -1) return setError("Email not found.");
    users[idx].password = password;
    writeUsers(users);
    setMessage("Password reset — you can now log in with the new password.");
    setTab("login");
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col justify-center items-center py-10">
      <div className="absolute top-8 right-8">
        <ModeToggle />
      </div>

      <main className="w-full max-w-md mx-auto px-6">
        <div className="text-center mb-10">
          <img
            src="https://i.postimg.cc/DwdH9gv8/logo-stackly.png"
            alt="Stackly Logo"
            width={100}
            height={100}
            className="mx-auto mb-4  "
          />

          <p className="mt-2  ">Access the platform using your credentials.</p>
        </div>

        {/* Main Card with Sharp Corners and Shadow */}
        <div
          className={`bg-white dark:bg-slate-900 shadow-2xl p-10 transition-all duration-300`}
        >
          {/* Tab Navigation with Underlines */}
          <div className="flex justify-around mb-8 border-b border-gray-200 dark:border-slate-800">
            <button
              onClick={() => setTab("login")}
              className={`flex-1 py-3 text-base font-bold transition-all duration-300 ${
                tab === "login"
                  ? "text-emerald-600 border-b-2 border-emerald-600"
                  : "text-slate-500 dark:text-slate-400 hover:text-emerald-500"
              }`}
            >
              LOG IN
            </button>
            <button
              onClick={() => setTab("register")}
              className={`flex-1 py-3 text-base font-bold transition-all duration-300 ${
                tab === "register"
                  ? "text-emerald-600 border-b-2 border-emerald-600"
                  : "text-slate-500 dark:text-slate-400 hover:text-emerald-500"
              }`}
            >
              REGISTER
            </button>
          </div>

          {/* Messages */}
          {message && (
            <div className="mb-6 rounded-sm bg-emerald-50 text-emerald-700 px-4 py-3 border-l-4 border-emerald-500 dark:bg-emerald-900/30 dark:text-emerald-300">
              {message}
            </div>
          )}
          {error && (
            <div className="mb-6 rounded-sm bg-red-50 text-red-700 px-4 py-3 border-l-4 border-red-500 dark:bg-red-900/30 dark:text-red-300">
              {error}
            </div>
          )}

          {/* Forms */}
          {tab === "register" && (
            <form onSubmit={registerUser} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  First Name
                </label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={`mt-1 block w-full ${minimalistInput}`}
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Last Name
                </label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={`mt-1 block w-full ${minimalistInput}`}
                  placeholder="Your last name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className={`mt-1 block w-full ${minimalistInput}`}
                  placeholder="user@domain.com"
                />
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  className={`mt-1 block w-full ${minimalistInput} pr-12`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-1   top-9    text-slate-500 hover:text-slate-700 dark:text-slate-400"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </button>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className={`w-full py-3 text-white ${minimalistButtonBase} ${gradientAccent}`}
                >
                  CREATE ACCOUNT
                </button>
              </div>
            </form>
          )}

          {tab === "login" && (
            <form onSubmit={loginUser} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className={`mt-1 block w-full ${minimalistInput}`}
                  placeholder="user@domain.com"
                />
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  className={`mt-1 block w-full ${minimalistInput} pr-12`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-1   top-9    text-slate-500 hover:text-slate-700 dark:text-slate-400"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </button>
              </div>
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setTab("forgot")}
                  className="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className={`w-full py-3 text-white ${minimalistButtonBase} ${gradientAccent}`}
                >
                  SIGN IN
                </button>
              </div>
            </form>
          )}

          {/* Forgot Password Flow */}
          {tab === "forgot" && (
            <div className="space-y-6">
              <form onSubmit={startReset} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Registered Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className={`mt-1 block w-full ${minimalistInput}`}
                    placeholder="user@domain.com"
                  />
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setTab("login");
                      setMessage(null);
                    }}
                    className={`flex-1 py-3 text-slate-700 dark:text-slate-300 border border-gray-300 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-800 ${minimalistButtonBase}`}
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    className={`flex-1 py-3 text-white ${minimalistButtonBase} ${gradientAccent}`}
                  >
                    FIND ACCOUNT
                  </button>
                </div>
              </form>

              {/* Reset Password Form */}
              {message?.includes("Enter a new password") && (
                <form
                  onSubmit={completeReset}
                  className="space-y-5 border-t pt-6 border-gray-200 dark:border-slate-800"
                >
                  <div className=" relative">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      New Password
                    </label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      className={`mt-1 block w-full ${minimalistInput} pr-12`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-1   top-9   text-slate-500 hover:text-slate-700 dark:text-slate-400"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <Eye /> : <EyeOff />}
                    </button>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className={`w-full py-3 text-white ${minimalistButtonBase} ${gradientAccent}`}
                    >
                      RESET PASSWORD
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
          <p className="tracking-wide">
            By proceeding, you agree to the platform's
          </p>
          <a
            href="#"
            className="text-emerald-600 dark:text-emerald-400 font-medium tracking-wide hover:underline"
          >
            TERMS
          </a>{" "}
          AND{" "}
          <a
            href="#"
            className="text-emerald-600 dark:text-emerald-400 font-medium tracking-wide hover:underline"
          >
            PRIVACY
          </a>
          .
        </div>
      </main>
    </div>
  );
}
