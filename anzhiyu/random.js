var posts=["2026/01/19/20260119_FirstBlog/","2026/01/21/20260120_Snow/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };