
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Buckazoids Launch Success",
    date: "2025-04-19",
    summary: "The successful launch of Buckazoids marks a new era in digital currency.",
    content: "We're excited to announce the successful launch of Buckazoids, bringing the 1989 digital currency concept into 2025..."
  },
  {
    id: 2,
    title: "Community Growth Milestone",
    date: "2025-04-18",
    summary: "Buckazoids community reaches significant milestone in adoption.",
    content: "The Buckazoids community continues to grow at an unprecedented rate..."
  },
  {
    id: 3,
    title: "New Partnership Announcement",
    date: "2025-04-17",
    summary: "Strategic partnership to enhance Buckazoids ecosystem.",
    content: "We're thrilled to announce our latest partnership that will expand the Buckazoids ecosystem..."
  }
];

export const NewsList = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {newsItems.map((item) => (
        <Card key={item.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2 text-buckazoids-orange">
              <Newspaper className="h-5 w-5" />
              <time className="text-sm">{item.date}</time>
            </div>
            <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">{item.summary}</p>
            <p className="text-sm text-gray-500">{item.content.substring(0, 100)}...</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
