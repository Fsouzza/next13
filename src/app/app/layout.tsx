import { ReactNode } from "react";

interface AppLayoutProps {
    children: ReactNode
}

export const metadata = {
    title: {
        default: 'Rocketseat',
        template: '%s | Rocketseat'
    }
  }
   

export default function AppLayout({ children }: AppLayoutProps) {
    return(
        <div>
            <h1>App</h1>
            {children}
        </div>
    )
}