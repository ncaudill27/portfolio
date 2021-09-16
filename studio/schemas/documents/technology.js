import { MdFlashOn } from "react-icons/md";

export default {
  name: "technology",
  type: "document",
  title: "Technology",
  icon: MdFlashOn,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "logo",
      type: "figure",
      title: "Logo"
    }
  ]
};
