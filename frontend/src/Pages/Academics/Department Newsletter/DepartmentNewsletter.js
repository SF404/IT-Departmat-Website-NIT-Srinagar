import React from "react";
import { Grid, Center } from "@chakra-ui/react";
function DepartmentNewsletter() {
  return (
    <Center>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={8}
        height="100vh"
        p={4}
        bg="gray.100"
      >
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnitsriofficial&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1377094472886402"
          width="500"
          height="500"
          // style={"border:none;overflow:hidden"}
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.instagram.com/p/CzJN-CSSQLt/embed/"
          width="500"
          height="500"
          // style={"border:none;overflow:hidden"}
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <div>
          <a
            class="twitter-timeline"
            data-theme="light"
            href="https://twitter.com/nitsriofficial?ref_src=twsrc%5Etfw"
          >
            Tweets by nitsriofficial
          </a>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
      </Grid>
    </Center>
  );
}

export default DepartmentNewsletter;
