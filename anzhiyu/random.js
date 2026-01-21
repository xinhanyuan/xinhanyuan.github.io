var posts=["2026/01/19/01 - 2026_01_19 - FirstBlog/","2026/01/20/02 - 2026_01_20 - Snow/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };