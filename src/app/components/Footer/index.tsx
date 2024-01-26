import { getCurrentFormattedDate } from '@/utils';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        {/* Add links, social media icons, or other footer content */}
        <p>&copy; {getCurrentFormattedDate("year")} The Disrupters Den. All rights reserved!</p>
      </div>
    </footer>
  );
};
