var posts=["2026/01/19/01 - 2026_01_19 - FirstBlog/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };