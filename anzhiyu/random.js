var posts=["2026/01/21/20260120-Snow/","2026/01/27/20260127-Docker/","2026/01/19/20260119-FirstBlog/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };