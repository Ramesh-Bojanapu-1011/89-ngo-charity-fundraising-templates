// Lightweight local auth helpers used by the demo auth page.
export type Role = "user" | "admin";

export type User = {
  email: string;
  password: string; // password may be omitted when storing current snapshot
  firstname: string;
  lastname: string;
  role?: Role;
  registerTime?: string;
  lastLoginTime?: string;
  lastLogoutTime?: string;
};

const USERS_KEY = "app_users_v1";
const CURRENT_KEY = "app_current_user_v1";

export function getUsers(): User[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("localAuth.getUsers parse error", err);
    return [];
  }
}

export function saveUsers(users: User[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch (err) {
    console.error("localAuth.saveUsers error", err);
  }
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CURRENT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.error("localAuth.getCurrentUser parse error", err);
    return null;
  }
}

export function saveCurrentUser(user: User) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CURRENT_KEY, JSON.stringify(user));
  } catch (err) {
    console.error("localAuth.saveCurrentUser error", err);
  }
}

export function handleLogout() {
  if (typeof window === "undefined") return;
  try {
    // update the user's lastLogoutTime in the saved users list (if present)
    const curRaw = localStorage.getItem(CURRENT_KEY);
    if (curRaw) {
      try {
        const cur = JSON.parse(curRaw) as User;
        if (cur && cur.email) {
          const usersRaw = localStorage.getItem(USERS_KEY);
          if (usersRaw) {
            const users = JSON.parse(usersRaw) as User[];
            const idx = users.findIndex((u) => u.email === cur.email);
            if (idx !== -1) {
              users[idx].lastLogoutTime = new Date().toISOString();
              localStorage.setItem(USERS_KEY, JSON.stringify(users));
            }
          }
        }
      } catch (err) {
        // continue to remove current snapshot even if parsing fails
        console.error("localAuth.logout parse current error", err);
      }
    }

    localStorage.removeItem(CURRENT_KEY);
  } catch (err) {
    console.error("localAuth.logout error", err);
  }
}

// Small convenience: return display name if available
export function displayNameFor(user: User | null) {
  if (!user) return null;
  const first = user.firstname?.trim();
  const last = user.lastname?.trim();
  if (first || last)
    return `${first || ""}${first && last ? " " : ""}${last || ""}`.trim();
  if (user.email) return user.email.split("@")[0];
  return null;
}
