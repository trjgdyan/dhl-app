export default function Footer() {
  return (
    <footer className="bg-white text-blue-900 py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} DHL. All rights reserved.
        </p>
        <p className="text-xs text-blue-200 mt-1">
          Created with passion in Indonesia.
        </p>
      </div>
    </footer>
  );
}