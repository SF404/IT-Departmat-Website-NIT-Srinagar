import React, { useEffect, useState } from "react";
import "./Home.css";
import video_from_hod from "./../../assets/videos/from-hod.mp4";
import UpcomingEvents from "./components/UpcomingEvents";
import LatestNews from "./components/LatestNews";
import AnnouncementRibbon from "./components/AnnouncementRibbon";
import Announcements from "./components/Announcements";
import Banner from "./components/Banner";
import QuickButtons from "./components/QuickButtons";
import Holidays from "./components/Holidays";
import FromHod from "./components/FromHod";
import axios from "axios";
import {
  Box,
  Center,
  Divider,
  Highlight,
  SimpleGrid,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import FeaturedVideos from "./components/FeaturedVideos";
import Highlights from "./components/Highlights";

function Home() {
  const [news, setNews] = useState(null);
  const [events, setEvents] = useState(null);
  const [holidays, setHolidays] = useState(null);
  const [loading, setLoading] = useState(false);
  const [announcements, setAnnouncement] = useState(null);

  async function fetchNews() {
    try {
      const response = await axios.get(`/api/news_data/`);
      setNews(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchEvents() {
    try {
      const response = await axios.get(`/api/events_data/`);
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchHolidays() {
    const date = new Date();
    // try {
    //   const response = await axios.get(
    //     `/api/listholidays/?activeMonth=${date.getMonth() + 1}`
    //   );
    //   setHolidays(response.data);
    // } catch (error) {
    //   console.error("Failed to fetch Holidays", error);
    // }
  }
  async function fetchAnnouncements() {
    
    try {
      const response = await axios.get(
        `api/public/announcementget`
      );
      setAnnouncement(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Failed to fetch Holidays", error);
    }
  }
  useEffect(() => {
    async function fetchData() {
      await fetchNews();
      await fetchEvents();
      await fetchHolidays();
      await fetchAnnouncements();
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <AnnouncementRibbon announcements={announcements} />
          <Banner />
          <QuickButtons />
          <Center w={"full"}>
            <VStack
              width={{ base: "100%", md: "80%" }}
              spacing={"2em"}
              px={4}
              mb={8}
            >
              <FromHod video_from_hod={video_from_hod} />
              <Divider />
              <SimpleGrid columns={[1, 1, 1, 2]} gap={4} rowGap={"2em"}>
                <Announcements announcements={announcements} />
                <UpcomingEvents events={events} />
                <Holidays holidays={holidays} />
              </SimpleGrid>
              <Divider />
              <LatestNews news={news} />
              <FeaturedVideos />
              <Divider />
              <Highlights />
            </VStack>
          </Center>
        </>
      )}
    </>
  );
}

export default Home;
