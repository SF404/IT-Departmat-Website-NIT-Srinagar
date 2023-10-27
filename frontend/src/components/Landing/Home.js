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
import { Box, Center, SimpleGrid, Spinner } from "@chakra-ui/react";

function Home() {
  const [news, setNews] = useState(null);
  const [events, setEvents] = useState(null);
  const [holidays, setHolidays] = useState(null);
  const [loading, setLoading] = useState(false);

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
    try {
      const response = await axios.get(
        `/api/listholidays/?activeMonth=${date.getMonth() + 1}`
      );
      setHolidays(response.data);
    } catch (error) {
      console.error("Failed to fetch Holidays", error);
    }
  }
  useEffect(() => {
    async function fetchData() {
      await fetchNews();
      await fetchEvents();
      await fetchHolidays();
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
          <AnnouncementRibbon />
          <Banner />
          <QuickButtons />
          <FromHod video_from_hod={video_from_hod} />
          <Center>
            <Box width={{ base: "100%", md: "80%" }}>
              <Announcements />
              <SimpleGrid columns={[1, 2, 3]}>
                <LatestNews news={news} />
                {/* <UpcomingEvents events={events} holidays={holidays} /> */}
                <Box gridColumn={"span 2"}></Box>
              </SimpleGrid>
            </Box>
          </Center>
        </>
      )}
    </>
  );
}

export default Home;
