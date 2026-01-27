var posts=["2026/01/21/20260120_Snow/","2026/01/21/20260120-Snow/","2026/01/19/20260119-FirstBlog/","2026/01/27/20260127-Docker/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };