import {
  Bookmarks,
  Event,
  Group,
  PlayCircle,
  Work,
  School,
  HelpOutline,
  ViewTimeline,
  Forum,
  AdminPanelSettings,
  AccountCircle,
  ManageAccounts,
  Logout,
} from "@mui/icons-material";
// "Profile", "My Account", "Dashboard", "Logout"
export const settings = [
  {
    id: 1,
    text: "Profile",
    icon: <AccountCircle />,
    path: "/profile",
  },
  {
    id: 2,
    text: "My Account",
    icon: <ManageAccounts />,
    path: "/account",
  },
  {
    id: 3,
    text: "Dashboard",
    icon: <AdminPanelSettings />,
    path: "/dashboard",
  },
  {
    id: 4,
    text: "Logout",
    icon: <Logout />,
    path: "/logout",
  },
];

export const menuItems = [
  {
    text: "Feed",
    icon: <ViewTimeline />,
    path: "/feed",
  },
  {
    text: "Chats",
    icon: <Forum />,
    path: "/chats",
  },
  {
    text: "Videos",
    icon: <PlayCircle />,
    path: "/videos",
  },
  {
    text: "Groups",
    icon: <Group />,
    path: "/groups",
  },
  {
    text: "Bookmarks",
    icon: <Bookmarks />,
    path: "/bookmarks",
  },
  {
    text: "Questions",
    icon: <HelpOutline />,
    path: "/questions",
  },
  {
    text: "Jobs",
    icon: <Work />,
    path: "/jobs",
  },
  {
    text: "Events",
    icon: <Event />,
    path: "/events",
  },
  {
    text: "Courses",
    icon: <School />,
    path: "/courses",
  },
];
export const Users = [
  {
    id: 1,
    profilePicture: "assets/person/1.jpg",
    username: "Safak Kocaoglu",
  },
  {
    id: 2,
    profilePicture: "assets/person/2.jpeg",
    username: "Janell Shrum",
  },
  {
    id: 3,
    profilePicture: "assets/person/3.jpg",
    username: "Alex Durden",
  },
  {
    id: 4,
    profilePicture: "assets/person/4.jpg",
    username: "Dora Hawks",
  },
  {
    id: 5,
    profilePicture: "assets/person/5.jpg",
    username: "Thomas Holden",
  },
  {
    id: 6,
    profilePicture: "assets/person/6.jpg",
    username: "Shirley Beauchamp",
  },
  {
    id: 7,
    profilePicture: "assets/person/7.jpeg",
    username: "Travis Bennett",
  },
  {
    id: 8,
    profilePicture: "assets/person/8.jpg",
    username: "Kristen Thomas",
  },
  {
    id: 9,
    profilePicture: "assets/person/9.jpg",
    username: "Gary Duty",
  },
  {
    id: 10,
    profilePicture: "assets/person/10.jpg",
    username: "Safak Kocaoglu",
  },
  {
    id: 11,
    profilePicture: "assets/person/myself.jpg",
    username: "Safak Kocaoglu",
  },
];

export const Posts = [
  {
    id: 1,
    description:
      "This impressive metro station is a perfect place to be with yourself.",
    photo: "assets/post/1.jpeg",
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    description: "Love For All, Hatred For None.",
    photo: "assets/post/2.jpeg",
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    description: "Every moment is a fresh beginning.",
    photo: "assets/post/3.jpeg",
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    photo: "assets/post/4.jpeg",
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    photo: "assets/post/5.jpg",
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comment: 5,
  },
  {
    id: 6,
    photo: "assets/post/6.jpeg",
    date: "1 day ago",
    userId: 6,
    like: 44,
    comment: 6,
  },
  {
    id: 7,
    description: "Never regret anything that made you smile.",
    photo: "assets/post/7.jpeg",
    date: "2 days ago",
    userId: 7,
    like: 52,
    comment: 3,
  },
  {
    id: 8,
    photo: "assets/post/8.jpeg",
    date: "3 days ago",
    userId: 8,
    like: 15,
    comment: 1,
  },
  {
    id: 9,
    description: "Change the world by being yourself.",
    photo: "assets/post/9.jpg",
    date: "5 days ago",
    userId: 9,
    like: 11,
    comment: 2,
  },
  {
    id: 10,
    photo: "assets/post/10.jpeg",
    date: "1 week ago",
    userId: 10,
    like: 104,
    comment: 12,
  },
  {
    id: 11,
    photo: "assets/post/11.png",
    date: "29 week ago",
    userId: 11,
    like: 4,
    comment: 2,
  },
];
