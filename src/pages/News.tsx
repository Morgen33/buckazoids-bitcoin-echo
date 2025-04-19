
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsList } from "@/components/news/NewsList";
import Footer from "@/components/Footer";

const NewsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
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
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
