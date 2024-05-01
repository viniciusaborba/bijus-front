import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
      {children}
    </div>
  );
}
