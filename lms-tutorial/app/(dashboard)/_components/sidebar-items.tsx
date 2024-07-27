"use client";

import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
};

export const SidebarItem = ({
    icon,
    label,
    href,
}: SidebarItemProps) => {
    return (
        <div>
            Sidebar Item!
        </div>
    )
}