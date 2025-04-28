
interface ContactHeaderProps {
  title: string;
  description: string;
}

const ContactHeader = ({ title, description }: ContactHeaderProps) => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-4 text-buckazoid-navy">{title}</h1>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto">{description}</p>
    </div>
  );
};

export default ContactHeader;
