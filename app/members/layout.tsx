import { AppContent } from "../components/AppContent";
import { ComponentWithChildren } from "../components/types";
import NextAuthSessionProvider from "../providers/sessionProvider";

export default function MemberLayout({ children }: ComponentWithChildren) {
    return (
        <div className="flex flex-col min-h-screen">
            <NextAuthSessionProvider>
                <AppContent>{children}</AppContent>
            </NextAuthSessionProvider>
        </div>
    );
}
