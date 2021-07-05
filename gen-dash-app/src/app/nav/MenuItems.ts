import { MenuMetadata } from "./MenuMetadata";

export const MenuItems: MenuMetadata[] = [
    {
        icon: "home",
        title: "Home",
        path: "",
        selected: true,
        parent: false,
    },
    {
        icon: "account_circle",
        title: "Profile",
        path: "/insights",
        selected: false,
        parent: false,
    },
    {
        icon: "question_answer",
        title: "Message",
        path: "",
        selected: false,
        parent: false,
    },
    {
        icon: "settings",
        title: "Settings",
        path: "",
        selected: false,
        parent: false,
    },
    {
        icon: "help_outline",
        title: "Help",
        path: "",
        selected: false,
        parent: false,
    },
    {
        icon: "logout",
        title: "Sign Out",
        path: "",
        selected: false,
        parent: false,
    },
]