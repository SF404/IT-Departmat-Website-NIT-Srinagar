import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Text,
  Image,
  SimpleGrid,
  Button,
  Center,
  CircularProgress,
  Heading,
} from "@chakra-ui/react";
import { BsNewspaper } from "react-icons/bs";
import axios from "axios";
import "./z_style.css";

function LatestNews({ news }) {
  return (
    <Box w={"full"}>
      <Heading
        fontSize={"1.5em"}
        my={"0.5em"}
        textAlign={"center"}
        color={"darkblue"}
      >
        LATEST NEWS
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} gap={"1em"}>
        <Box
          aspectRatio={9 / 16}
          bg={"white"}
          borderRadius={"1em"}
          position={"relative"}
        >
          {/* <iframe
            name="f6ff525d05eee4"
            width="1000px"
            height="500px"
            data-testid="fb:page Facebook Social Plugin"
            title="fb:page Facebook Social Plugin"
            frameborder="0"
            allowtransparency="true"
            allowfullscreen="true"
            scrolling="no"
            allow="encrypted-media"
            src="https://www.facebook.com/v14.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3be8c5001f4f28%26domain%3Dnitsri.ac.in%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fnitsri.ac.in%252Ff28720b7cdb3f7c%26relation%3Dparent.parent&amp;container_width=1000&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fnitsriofficial&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline%2Cevents&amp;width="
            style={{
              border: " none",
              visibility: "visible",
              width: "100%",
              height: "500px",
            }}

            class=""
          ></iframe> */}

          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnitsriofficial&tabs=timeline&width=500&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1377094472886402"
            // width="500"
            // height="1000"
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              overflow: "scroll",
            }}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </Box>
        <Box aspectRatio={9 / 16}>
          <iframe
            src="https://www.instagram.com/nitsriofficial/embed"
            width={"100%"}
            height={"100%"}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </Box>

        <Box width={"100%"} height={"100%"} aspectRatio={9 / 16}>
          <iframe
            id="twitter-widget-0"
            scrolling="no"
            frameborder="0"
            allowtransparency="true"
            allowfullscreen="true"
            class=""
            style={{
              position: "static",
              visibility: "visible",
              width: "100%",
              height: "100%",
              display: "block",
              flexGrow: 1,
            }}
            title="Twitter Timeline"
            src="https://syndication.twitter.com/srv/timeline-profile/screen-name/nitsriofficial?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideBorder=false&amp;hideFooter=false&amp;hideHeader=false&amp;hideScrollBar=false&amp;lang=en&amp;limit=1&amp;maxHeight=800&amp;origin=https%3A%2F%2Fnitsri.ac.in%2F&amp;sessionId=426d4f9861c3a596b9c8bd5311df41c828bc180e&amp;showHeader=true&amp;showReplies=false&amp;transparent=false&amp;widgetsVersion=01917f4d1d4cb%3A1696883169554"
          ></iframe>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default LatestNews;
