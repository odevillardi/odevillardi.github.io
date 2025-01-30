// stackbit.config.ts
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  // ...
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["_posts"],
      models: [
        {
          name: "Page",
          // Define the model as a page model
          type: "post",
          // urlPath: "/{slug}",
          filePath: "_posts/{slug}.md",
          fields: [
            { name: "layout", type: "string", required: true },
            
          ]
        }
      ],
    })
  ]
});