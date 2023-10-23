import React from 'react';
import './style.css'
import { SimpleGrid } from '@chakra-ui/react';

function UpcomingEvents({ events }) {
    // Sort events by date, assuming your event object has a 'date' property.
    const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
        <div className="upcoming-events">
            <h2>Upcoming Events</h2>
            <ul>
                <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={4}>
                    {sortedEvents.map((event, index) => (

                        <li key={index}>
                            <h3>{event.title}</h3>
                            <p>Date: {event.date}</p>
                            <p>{event.description}</p>
                        </li>
                    ))}
                </SimpleGrid>
            </ul>
        </div>
    );
}

export default UpcomingEvents;
