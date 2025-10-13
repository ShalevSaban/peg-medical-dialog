export const Footer = () => {
  return (
    <footer className="bg-muted/30 py-8 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="text-xl font-bold text-primary">
            PEG Medical
          </div>

          {/* Locations */}
          <div className="text-sm text-muted-foreground text-center">
            Israel • Florida • United Kingdom
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PEG Medical. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
