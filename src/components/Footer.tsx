
export const Footer = () => {
  return (
    <footer className="bg-muted/30 py-8 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-center items-center">
          {/* Copyright בלבד */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PEG Medical. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};