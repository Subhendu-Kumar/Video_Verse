"use client";

import { useState } from "react";
import HomeCards from "./HomeCards";
import { useRouter } from "next/navigation";

const MeetingTypeList = () => {
  const router = useRouter();

  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCards
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        className="bg-orange-1"
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <HomeCards
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via meeting invitation link"
        className="bg-blue-1"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />
      <HomeCards
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Check out your recordings"
        className="bg-yellow-1"
        handleClick={() => router.push("/recordings")}
      />
      <HomeCards
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting now"
        className="bg-purple-1"
        handleClick={() => setMeetingState("isScheduleMeeting")}
      />
    </section>
  );
};

export default MeetingTypeList;
