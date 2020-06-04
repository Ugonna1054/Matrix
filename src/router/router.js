import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/store";
//import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/Login"
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login/Login.vue")
  },
  {
    path: "/ChangePassword",
    name: "ChangePassword",
    component: () =>
      import("../views/Security/ChangePassword/ChangePassword.vue")
  },
  {
    path: "/ResetPassword/email",
    name: "ResetPassword/email",
    component: () => import("../views/Security/ForgotPassword/email.vue")
  },
  {
    path: "/ResetPassword",
    name: "ResetPassword",
    component: () =>
      import("../views/Security/ForgotPassword/ResetPassword.vue")
  },

  //Admin Routes
  {
    path: "/admin/dashboard",
    name: "admin-dashboard",
    component: () => import("../views/Admin/Brain/Brain.vue"),
    meta: { authRequired: true, admin: true },
    children: [
      {
        path: "/",
        name: "Admin/Dashboard",
        component: () => import("../views/Admin/Dashboard/Dashboard.vue")
      },
      {
        path: "/Admin/User/Create",
        name: "Admin/User/Create",
        component: () => import("../views/Admin/User/CreateUser.vue")
      },
      {
        path: "/Admin/User/Manage",
        name: "Admin/User/Manage",
        component: () => import("../views/Admin/User/ManageUser.vue")
      },
      {
        path: "/Admin/Approvals",
        name: "Admin/Approvals",
        component: () => import("../views/Admin/Approvals/Approvals.vue")
      },
      {
        path: "/Admin/Approvals/Details",
        name: "Admin/Approvals/Details",
        component: () => import("../views/Admin/Approvals/Details.vue")
      },
      {
        path: "/Admin/Reports",
        name: "Admin/Report",
        component: () => import("../views/Admin/Report/Report.vue")
      }
    ]
  },

  //Client Routes
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Client/Brain/Brain.vue"),
    meta: { authRequired: true },
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: () => import("../views/Client/Account/Account.vue")
      },
      {
        path: "/Loan",
        name: "Loan",
        component: () => import("../views/Client/Loan/Loan.vue")
      },
      {
        path: "/Loan/Precheck",
        name: "Loan/Precheck",
        component: () => import("../views/Client/Loan/Precheck.vue")
      },
      {
        path: "/Loan/Apply",
        name: "Loan/Apply",
        component: () => import("../views/Client/Loan/Apply.vue")
      },
      {
        path: "/Investment",
        name: "Investment",
        component: () => import("../views/Client/Investment/Investment.vue")
      },
      {
        path: "/Investment/Precheck",
        name: "Investment/Precheck",
        component: () => import("../views/Client/Investment/Precheck.vue")
      },
      {
        path: "/Investment/Apply",
        name: "Investment/Apply",
        component: () => import("../views/Client/Investment/Apply.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  //loops through each route record and checks routes that contains the 'meta' tag
  if (to.matched.some(record => record.meta.authRequired)) {
    // checks if user is signed in, if not, redirect to signin page.
    if (!store.state.User.IS_AUTHENTICATED) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  //loops through each route record and checks routes that contains the 'meta' tag
  if (to.matched.some(record => record.meta.admin)) {
    // checks if user is signed in as admin , if not, redirect to signin page.
    if (!store.state.User.IS_ADMIN) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
