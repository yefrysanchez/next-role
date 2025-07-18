import { KanbanColumns } from "./types";

export const placeholderJobs: KanbanColumns = {
  closed: [
    {
      id: 1,
      company: "Spotify",
      title: "Frontend Engineer",
      modality: "remote",
      url: "https://spotifyjobs.com/frontend-engineer",
      salary: "$100,000 - $120,000",
      description:
        "Work on the user interface of Spotify’s web app using React.",
    },
    {
      id: 2,
      company: "Notion",
      title: "Product Engineer",
      modality: "hybrid",
      url: "https://notion.so/careers/product-engineer",
      salary: "$110,000 - $130,000",
      description:
        "Help build and scale features for millions of Notion users.",
    },
  ],
  applied: [
    {
      id: 4,
      company: "Google",
      title: "Software Engineer",
      modality: "on_site",
      url: "https://careers.google.com/jobs/software-engineer",
      salary: "$120,000 - $150,000",
      description:
        "Develop scalable web services and infrastructure for Google Search.",
    },
    {
      id: 243,
      company: "Stripe",
      title: "Full Stack Developer",
      modality: "hybrid",
      url: "https://stripe.com/jobs/full-stack-developer",
      salary: "$115,000 - $140,000",
      description: "Work on end-to-end development of payment solutions.",
    },
  ],
  interview: [
    {
      id: 53,
      company: "Meta",
      title: "React Engineer",
      modality: "remote",
      url: "https://meta.com/careers/react-engineer",
      salary: "$130,000 - $160,000",
      description: "Build React components for the Facebook web platform.",
    },
  ],
  offer: [
    {
      id: 1254,
      company: "Amazon",
      title: "Backend Engineer",
      modality: "on_site",
      url: "https://amazon.jobs/backend-engineer",
      salary: "$125,000 - $155,000",
      description:
        "Work on APIs and distributed systems for Amazon’s e-commerce backend.",
    },
  ],
};

export const data = {
  boards: [
    {
      boardTitle: "IT jobs Search",
      columns: [
        {
          columnTitle: "close",
          jobs: [
            {
              id: 1,
              company: "Spotify",
              title: "Frontend Engineer",
              modality: "Remote",
              url: "https://spotifyjobs.com/frontend-engineer",
              salary: "$100,000 - $120,000",
              description:
                "Work on the user interface of Spotify’s web app using React.",
            },
            {
              id: 2,
              company: "Notion",
              title: "Product Engineer",
              modality: "Hybrid",
              url: "https://notion.so/careers/product-engineer",
              salary: "$110,000 - $130,000",
              description:
                "Help build and scale features for millions of Notion users.",
            },
          ],
        },
        {
          columnTitle: "applied",
          jobs: [
            {
              id: 4,
              company: "Google",
              title: "Software Engineer",
              modality: "On Site",
              url: "https://careers.google.com/jobs/software-engineer",
              salary: "$120,000 - $150,000",
              description:
                "Develop scalable web services and infrastructure for Google Search.",
            },
            {
              id: 243,
              company: "Stripe",
              title: "Full Stack Developer",
              modality: "Hybrid",
              url: "https://stripe.com/jobs/full-stack-developer",
              salary: "$115,000 - $140,000",
              description:
                "Work on end-to-end development of payment solutions.",
            },
          ],
        },{
          columnTitle: "interview",
          jobs: [
            {
              id: 53,
              company: "Meta",
              title: "React Engineer",
              modality: "Remote",
              url: "https://meta.com/careers/react-engineer",
              salary: "$130,000 - $160,000",
              description:
                "Build React components for the Facebook web platform.",
            },
          ],
        },
        {
          columnTitle: "offer",
          jobs: [
            {
              id: 1254,
              company: "Amazon",
              title: "Backend Engineer",
              modality: "On Site",
              url: "https://amazon.jobs/backend-engineer",
              salary: "$125,000 - $155,000",
              description:
                "Work on APIs and distributed systems for Amazon’s e-commerce backend.",
            },
          ],
        }
      ],
    },{
      boardTitle: "Marketing jobs Search",
      columns: [
        {
          columnTitle: "close",
          jobs: [
            {
              id: 1,
              company: "HubSpot",
              title: "Content Marketer",
              modality: "Remote",
              url: "https://hubspot.com/careers/content-marketer",
              salary: "$70,000 - $90,000",
              description:
                "Create engaging content for HubSpot’s marketing campaigns.",
            },
          ],
        },
        {
          columnTitle: "applied",
          jobs: [
            {
              id: 2,
              company: "Mailchimp",
              title: "Email Marketing Specialist",
              modality: "Hybrid",
              url: "https://mailchimp.com/careers/email-marketing-specialist",
              salary: "$65,000 - $85,000",
              description:
                "Manage and optimize email marketing campaigns for Mailchimp.",
            },
          ],
        },
        {
          columnTitle: "interview",
          jobs: [],
        },
        {
          columnTitle: "offer",
          jobs: [],
        }
      ],
    }
  ],
};
