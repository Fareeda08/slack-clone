type Message = {
  organization: { message: string; id: number }[];
  dms: { message: string; id: number; createdAt: string }[];
};

export const conversations: Record<string, Message[]> = {
  user1: [
    {
      organization: [{ message: "", id: 0 }],
      dms: [
        {
          message:
            "Hey @Fawaz 👋 \n Hope your weekend is off to a great start. How did your week go? \n You have probably seen this on General channel or my newsletter to you. We are teaming with Halitta to host an AI Builders Workshop and honestly, it is the exactly the type of session I wish existed when I was trying to wrap my head around AI agents. Hence why I think you should attend if you are available \n Everyone's talking about AI agents right now , but this isn't another 'intro to AI' talk. It's hands on. You will actually build your first AI agent , using Microsoft Copilot Studio from the scratch in the room with people around to help when you get stuck. \n So will you please come? I promise it will be an interesting session and if it is not worth your time, I will refund your transport fare(🌚) \n It is happening on Sept. 5th here at Enyata HQ(371 Agege Motor Road, Mushin, Lagos) and i think if you have been curious about agents but haven't had a reason to actually sit down and build one, this is that reason. \n Here is the link to register https://fareeda-abdulsalam-frontend-developer.netlify.app/ \n See you there",
          id: 9,
          createdAt: "2024-03-14T08:42:17",
        },
        {
          message:
            "Hey @Fawaz 👋 \n Hope your weekend is off to a great start. How did your week go? \n You have probably seen this on General channel or my newsletter to you. We are teaming with Halitta to host an AI Builders Workshop and honestly, it is the exactly the type of session I wish existed when I was trying to wrap my head around AI agents. Hence why I think you should attend if you are available \n Everyone's talking about AI agents right now , but this isn't another 'intro to AI' talk. It's hands on. You will actually build your first AI agent , using Microsoft Copilot Studio from the scratch in the room with people around to help when you get stuck. \n So will you please come? I promise it will be an interesting session and if it is not worth your time, I will refund your transport fare(🌚) \n It is happening on Sept. 5th here at Enyata HQ(371 Agege Motor Road, Mushin, Lagos) and i think if you have been curious about agents but haven't had a reason to actually sit down and build one, this is that reason. \n Here is the link to register https://fareeda-abdulsalam-frontend-developer.netlify.app/ \n See you there",
          id: 8,
          createdAt: "2025-08-27T15:17:43",
        },

        {
          message:
            "Hey @Fawaz 👋 \n Hope your weekend is off to a great start. How did your week go? \n You have probably seen this on General channel or my newsletter to you. We are teaming with Halitta to host an AI Builders Workshop and honestly, it is the exactly the type of session I wish existed when I was trying to wrap my head around AI agents. Hence why I think you should attend if you are available \n Everyone's talking about AI agents right now , but this isn't another 'intro to AI' talk. It's hands on. You will actually build your first AI agent , using Microsoft Copilot Studio from the scratch in the room with people around to help when you get stuck. \n So will you please come? I promise it will be an interesting session and if it is not worth your time, I will refund your transport fare(🌚) \n It is happening on Sept. 5th here at Enyata HQ(371 Agege Motor Road, Mushin, Lagos) and i think if you have been curious about agents but haven't had a reason to actually sit down and build one, this is that reason. \n Here is the link to register https://fareeda-abdulsalam-frontend-developer.netlify.app/ \n See you there",
          id: 7,
          createdAt: "2026-01-06T23:56:08",
        },
      ],
    },
  ],
};
