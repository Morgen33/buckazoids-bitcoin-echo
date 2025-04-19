
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsList } from "@/components/news/NewsList";

const NewsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-buckazoids-blue">
            Buckazoids News
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Stay up to date with the latest developments, announcements, and updates from the Buckazoids ecosystem.
          </p>
        </CardContent>
      </Card>
      <NewsList />
    </div>
  );
};

export default NewsPage;
