import { sidebar } from "vuepress-theme-hope"

export default sidebar({
  "/": [
    "",
    {
      text: "JavaScript",
      icon: "laptop-code",
      prefix: "JavaScript/",
      link: "JavaScript/",
      children: "structure",
    },
    {
      text: "CSS",
      icon: "book",
      prefix: "CSS/",
      link: "CSS/",
      children: "structure",
    },
    {
      text: "框架和库",
      icon: "book",
      prefix: "框架和库/",
      link: "框架和库/",
      children: "structure",
    },
    {
      text: "工程化和部署",
      icon: "book",
      prefix: "工程化和部署/",
      link: "工程化和部署/",
      children: "structure",
    },
    // 'course',
  ],
})
