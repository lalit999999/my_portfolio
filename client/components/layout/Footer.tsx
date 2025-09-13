import { Github, Linkedin } from "lucide-react";
import { LeetCodeIcon } from "@/components/icons/LeetCode";

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © 20XX Garbage Corp. All rites reversed.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LeetCode">
            <LeetCodeIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
