import Link from "next/link";
import { Grid, Box } from "@radix-ui/themes";

const Header: React.FC = () => {
  return (
    <Box as="div" className="bg-orange-200 text-black p-4 shadow">
      <div className="mx-auto max-w-7xl grid grid-cols-[1fr,auto]">
        <a href="/" className="font-bold text-xl">
          QLQ
        </a>
        <nav>
          <Grid className="grid-cols-[repeat(2,max-content)]">
            <Link href="/sample-page">Sample Page</Link>
          </Grid>
        </nav>
      </div>
    </Box>
  );
};

export default Header;
