export default [
  {
    path: "/",
    component: () => import("@/layout/head-nav-layout/index.vue"),
    children: [
      { path: "/", title: "首页", component: () => import("@/pages/home/index.vue") },
      {
        path: "/about",
        title: "关于丰海",
        component: () => import("@/layout/sub-nav-layout/index.vue"),
        children: [
          { path: "", redirect: "about" },
          { path: "about", title: "公司简介", component: () => import("@/pages/about/about.vue") },
          { path: "culture", title: "文化理念", component: () => import("@/pages/about/culture.vue") },
          { path: "honor", title: "荣誉资质", component: () => import("@/pages/about/honor.vue") },
          { path: "history", title: "发展历程", component: () => import("@/pages/about/history.vue") },
          { path: "organizational", title: "组织架构", component: () => import("@/pages/about/organizational.vue") },
        ],
      },
      {
        path: "/news",
        title: "新闻资讯",
        component: () => import("@/layout/sub-nav-layout/index.vue"),
        children: [
          { path: "", redirect: "cpnnews" },
          { path: "cpnnews", title: "公司动态", component: () => import("@/pages/about/about.vue") },
          { path: "industry", title: "行业动态", component: () => import("@/pages/about/about.vue") },
        ],
      },
      {
        path: "/product",
        title: "产品中心",
        component: () => import("@/layout/sub-nav-layout/index.vue"),
        children: [
          { path: "", redirect: "product1" },
          { path: "product1", title: "可变信息标志", component: () => import("@/pages/about/about.vue") },
          { path: "product2", title: "LED显示标志", component: () => import("@/pages/about/about.vue") },
          { path: "product3", title: "LED城市交通屏", component: () => import("@/pages/about/about.vue") },
          { path: "product4", title: "智能收费亭", component: () => import("@/pages/about/about.vue") },
          { path: "product5", title: "LED商业屏", component: () => import("@/pages/about/about.vue") },
          { path: "product6", title: "软件与系统", component: () => import("@/pages/about/about.vue") },
        ],
      },
      {
        path: "/case",
        title: "案例展示",
        component: () => import("@/layout/sub-nav-layout/index.vue"),
        children: [
          { path: "", redirect: "caseexp1" },
          { path: "caseexp1", title: "可变信息标志", component: () => import("@/pages/about/about.vue") },
          { path: "caseexp2", title: "LED显示标志", component: () => import("@/pages/about/about.vue") },
          { path: "caseexp3", title: "LED城市交通屏", component: () => import("@/pages/about/about.vue") },
          { path: "caseexp4", title: "智能收费亭", component: () => import("@/pages/about/about.vue") },
          { path: "caseexp5", title: "LED商业屏", component: () => import("@/pages/about/about.vue") },
        ],
      },
      {
        path: "/support",
        title: "技术支持",
        component: () => import("@/layout/sub-nav-layout/index.vue"),
        children: [
          { path: "", redirect: "download" },
          { path: "download", title: "下载中心", component: () => import("@/pages/about/about.vue") },
          { path: "problem", title: "常见问题", component: () => import("@/pages/about/about.vue") },
          { path: "hotline", title: "技术热线", component: () => import("@/pages/about/about.vue") },
        ],
      },
      {
        path: "/investor",
        title: "投资者关系",
        component: () => import("@/layout/sub-nav-layout/index.vue"),
        children: [
          { path: "", redirect: "announcement" },
          { path: "announcement", title: "公司公告", component: () => import("@/pages/about/about.vue") },
          { path: "governance", title: "公司治理", component: () => import("@/pages/about/about.vue") },
        ],
      },
      {
        path: "/recruitment",
        title: "人才招聘",
        component: () => import("@/layout/sub-nav-layout/index.vue"),
        children: [
          { path: "", redirect: "concept" },
          { path: "concept", title: "人才理念", component: () => import("@/pages/about/about.vue") },
          { path: "scRecruitment", title: "校园招聘", component: () => import("@/pages/about/about.vue") },
          { path: "sorecruitment", title: "社会招聘", component: () => import("@/pages/about/about.vue") },
        ],
      },
      {
        path: "/contact",
        title: "联系我们",
        component: () => import("@/layout/sub-nav-layout/index.vue"),
        children: [
          { path: "", redirect: "contact" },
          { path: "contact", title: "联系我们", component: () => import("@/pages/about/about.vue") },
          { path: "feedback", title: "留言反馈", component: () => import("@/pages/about/about.vue") },
        ],
      },
    ],
  },
];
