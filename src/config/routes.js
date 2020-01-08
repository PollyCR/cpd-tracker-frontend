import Home from "../Components/Home.js";
import Diary from "../Components/Diary.js";
import Entry from "../Components/Entry";
import LoginForm from "../Components/LoginForm.js";
import NewEntryForm from "../Components/NewEntryForm.js";

export const routes = [
  {
    title: "Home",
    path: "/",
    component: Home
  },
  {
    title: "Diary",
    path: "/diary",
    component: Diary
  },
  {
    title: "Show Entry",
    path: "/entries/:id",
    component: Entry,
    exact: true
  },
  {
    title: "New Entry",
    path: "/entries/new",
    component: NewEntryForm
  },
  {
    title: "Log in",
    path: "/login",
    component: LoginForm
  },
  {
    title: "Sign up",
    path: "/signup"
  },
  {
    title: "Log out",
    path: "/logout",
    component: props => {
      props.logout();

      return null;
    }
  }
];
